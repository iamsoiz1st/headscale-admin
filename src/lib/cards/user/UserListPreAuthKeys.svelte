<script lang="ts">
import CardListEntry from '../CardListEntry.svelte';
import UserListPreAuthKey from '$lib/cards/user/UserListPreAuthKey.svelte';
import type { PreAuthKey, User } from '$lib/common/types';
import CardSeparator from '../CardSeparator.svelte';
import { App } from '$lib/States.svelte';

	type UserListPreAuthKeysProps = {
		user: User,
		title?: string,
	}
	let {
		user = $bindable(),
		title = 'PreAuth Keys:',
	}: UserListPreAuthKeysProps = $props();

	let hideInvalid = $state(true);
	const preAuthKeys = $derived(
		App.preAuthKeys.value.filter((p) => {
			return (p.user.id === user.id) 
				&& (!hideInvalid || (hideInvalid && !isExpiredOrUsed(p)));
		})
	);

	function isExpiredOrUsed(p: PreAuthKey): boolean {
		return new Date() > new Date(p.expiration) || (p.used && !p.reusable);
	};
</script>

<CardListEntry {title} top>
	<div class="grid grid-cols-12">
		<div class="flex col-span-12 justify-end items-center">
			<input class="checkbox mx-0 pr-1" type="checkbox" bind:checked={hideInvalid} />
			<p class="ml-1 md:ml-2 text-xs">Hide Invalid</p>
		</div>
	</div>
	{#snippet childBottom()}
		<div class="grid grid-cols-12 col-span-12 pt-4">
			{#each preAuthKeys as preAuthKey}
				<CardSeparator />
				<UserListPreAuthKey {preAuthKey} />
			{/each}
		</div>
	{/snippet}
</CardListEntry>
