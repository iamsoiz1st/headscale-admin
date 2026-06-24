<script lang="ts">
	import { Autocomplete, TabGroup, getToastStore } from '@skeletonlabs/skeleton';
	import type { ACLBuilder } from '$lib/common/acl.svelte';
	import { toastError, toOptions } from '$lib/common/funcs';
	import { debug } from '$lib/common/debug';
	import { App } from '$lib/States.svelte';
	import Tabbed from '$lib/parts/Tabbed.svelte';
	import Delete from '$lib/parts/Delete.svelte';
	import type { Component } from 'svelte';

	type TabDef = { name: string, title: string, logo: Component }

	type EntityListSelectorProps = {
		acl: ACLBuilder,
		tabs: TabDef[],
		items: string[],
		loading?: boolean,
		placeholder?: string,
	}

	let {
		acl,
		tabs,
		items = $bindable(),
		loading = false,
		placeholder = "Object...",
	}: EntityListSelectorProps = $props()

	const ToastStore = getToastStore()

	let filter = $state('')
	let tabSet = $state(0)
	let newValue = $state('')

	$effect(() => {
		if (tabSet !== undefined) {
			filter = ''
		}
	})

	const userNames = $derived((App.usersAcl ?? []).map((u: { name: string }) => u.name).toSorted())
	const userNamesOptions = $derived(toOptions(userNames))
	const tagNames = $derived(acl.getTagNames(true))
	const tagNamesOptions = $derived(toOptions(tagNames))
	const groupNames = $derived(acl.getGroupNames(true))
	const groupNamesOptions = $derived(toOptions(groupNames))
	const hostNames = $derived(acl.getHostNames())
	const hostNamesOptions = $derived(toOptions(hostNames))

	const currentTabName = $derived(tabs[tabSet]?.name ?? '')
	const isCustom = $derived(currentTabName === 'custom')

	const options = $derived(
		currentTabName === 'user' ? userNamesOptions :
		currentTabName === 'host' ? hostNamesOptions :
		currentTabName === 'group' ? groupNamesOptions :
		currentTabName === 'tag' ? tagNamesOptions :
		undefined
	)
</script>

<div>
	<TabGroup
		justify="justify-left"
		active="variant-filled-tertiary"
		hover="hover:variant-soft-tertiary"
		flex="flex-1 lg:flex-none"
		rounded="rounded-md"
		border=""
		class="bg-surface-100-800-token w-full px-2 py-2"
	>
		<Tabbed {tabs} bind:tabSet />
	</TabGroup>
</div>
<div class="mb-6">
	{#if options != undefined}
	<input
		autocomplete="off"
		class="input rounded-md mt-2"
		placeholder="Filter..."
		bind:value={filter}
	/>
	<div class="card w-full h-32 p-4 mt-2 overflow-y-auto" tabindex="-1">
		<Autocomplete
			class="rounded-md"
			options={options.filter(o => o.label.toLowerCase().includes(filter.toLowerCase()) || o.value.toLowerCase().includes(filter.toLowerCase()))}
			on:selection={(evt) => {
				newValue = evt.detail.label
			}}
		/>
	</div>
	{/if}
	<div class="flex flex-row space-x-2">
		<input
			autocomplete="off"
			class="input rounded-md mt-2"
			{placeholder}
			bind:value={newValue}
			disabled={!isCustom} />
		<button
			class="btn btn-sm rounded-md mt-2 variant-soft-tertiary"
			onclick={() => {
				try {
					if (newValue.length === 0) {
						throw new Error("Invalid value provided")
					}
					items.push(newValue)
					newValue = ""
				} catch(e) {
					if (e instanceof Error) {
						toastError('', ToastStore, e)
					}
					debug(e)
				}
			}}
		>
			Add
		</button>
	</div>
</div>
{#each items as item, i}
<div
	class="card py-3 px-4 grid grid-cols-12 backdrop-brightness-100 bg-white/25 dark:bg-white/5 rounded-md"
>
	<div class="col-span-10 text-wrap hyphens-auto flex flex-row">
		<span class="font-extralight rounded-md">{item}</span>
	</div>
	<div class="col-span-2 text-right">
		<Delete func={() => { items.splice(i, 1) }} disabled={loading} />
	</div>
</div>
{/each}
