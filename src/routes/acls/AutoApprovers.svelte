<script lang="ts">
	import { Accordion, getToastStore } from '@skeletonlabs/skeleton';
	import { ACLBuilder, saveConfig } from '$lib/common/acl.svelte';
	import { toastError, toastSuccess } from '$lib/common/funcs';
	import { debug } from '$lib/common/debug';
	import CardListPage from '$lib/cards/CardListPage.svelte';
	import CardListContainer from '$lib/cards/CardListContainer.svelte';
	import EntityListSelector from '$lib/cards/acl/EntityListSelector.svelte';
	import AutoApproverListCard from '$lib/cards/acl/AutoApproverListCard.svelte';

	import RawMdiSave from '~icons/mdi/content-save-outline';
	import RawMdiAccount from '~icons/mdi/account';
	import RawMdiGroups from '~icons/mdi/account-group';
	import RawMdiTag from '~icons/mdi/tag';

	const ToastStore = getToastStore();

	let { acl = $bindable(), loading = $bindable(false) }: { acl: ACLBuilder, loading?: boolean } = $props();

	const approverTabs = [
		{ name: "user", title: "User", logo: RawMdiAccount },
		{ name: "group", title: "Group", logo: RawMdiGroups },
		{ name: "tag", title: "Tag", logo: RawMdiTag },
	]

	let newRoute = $state('')

	const routeEntries = $derived(acl.getAutoApproverRouteEntries())

	function createRoute() {
		loading = true
		try {
			if (newRoute.trim().length === 0) {
				throw new Error("Route CIDR cannot be empty")
			}
			acl.createAutoApproverRoute(newRoute.trim())
			toastSuccess(`Route '${newRoute.trim()}' added`, ToastStore)
			newRoute = ''
		} catch(e) {
			if (e instanceof Error) toastError('', ToastStore, e)
			debug(e)
		} finally {
			loading = false
		}
	}
</script>

<CardListPage>
	<div class="mb-4">
		<div class="flex flex-row space-x-2">
			<button disabled={loading} class="btn-icon rounded-md variant-filled-success disabled:opacity-50 w-8 text-xl" onclick={() => {
				saveConfig(acl, ToastStore, { setLoadingTrue: () => { loading = true }, setLoadingFalse: () => { loading = false } })
			}}>
				<RawMdiSave />
			</button>
		</div>
	</div>

	<div class="backdrop-brightness-100 bg-white/25 dark:bg-white/5 rounded-md p-4 mb-6">
		<CardListContainer>
			<h3 class="font-mono mb-2 flex flex-row items-center">
				<span>Exit Node Approvers:</span>
			</h3>
			<EntityListSelector
				{acl}
				tabs={approverTabs}
				items={acl.autoApprovers.exitNode}
				{loading}
				placeholder="Approver..."
			/>
		</CardListContainer>
	</div>

	<div class="mb-4">
		<h3 class="font-mono mb-2">Routes:</h3>
		<div class="flex flex-row space-x-2">
			<input
				autocomplete="off"
				class="input rounded-md"
				placeholder="Route CIDR (e.g. 10.0.0.0/8)..."
				bind:value={newRoute}
				onkeydown={(e) => { if (e.key === 'Enter') createRoute() }}
			/>
			<button
				class="btn btn-sm rounded-md variant-filled-success"
				disabled={loading}
				onclick={createRoute}
			>
				Add Route
			</button>
		</div>
	</div>

	<Accordion autocollapse={false}>
	{#each routeEntries as [route]}
		<AutoApproverListCard {acl} {route} bind:loading />
	{/each}
	</Accordion>
</CardListPage>
