<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { ACLBuilder } from '$lib/common/acl.svelte';
	import { toastSuccess, toastError } from '$lib/common/funcs';
	import { debug } from '$lib/common/debug';
	import CardListContainer from '$lib/cards/CardListContainer.svelte';
	import Delete from '$lib/parts/Delete.svelte';
	import ListEntry from './ListEntry.svelte';
	import EntityListSelector from './EntityListSelector.svelte';

	import RawMdiRoute from '~icons/mdi/routes';
	import RawMdiAccount from '~icons/mdi/account';
	import RawMdiGroups from '~icons/mdi/account-group';
	import RawMdiTag from '~icons/mdi/tag';

	const ToastStore = getToastStore();

	type AutoApproverListCardProps = {
		acl: ACLBuilder,
		route: string,
		loading?: boolean,
	}

	let {
		acl = $bindable(),
		route,
		loading = $bindable(false),
	}: AutoApproverListCardProps = $props()

	let open = $state(false)

	const approverTabs = [
		{ name: "user", title: "User", logo: RawMdiAccount },
		{ name: "group", title: "Group", logo: RawMdiGroups },
		{ name: "tag", title: "Tag", logo: RawMdiTag },
	]

	function deleteRoute() {
		loading = true
		try {
			acl.deleteAutoApproverRoute(route)
			toastSuccess(`Route '${route}' removed`, ToastStore)
		} catch(e) {
			if (e instanceof Error) toastError('', ToastStore, e)
			debug(e)
		} finally {
			loading = false
		}
	}
</script>

<ListEntry id={route} name={route} logo={RawMdiRoute} bind:open>
	{#snippet children()}
	<CardListContainer>
		<h3 class="font-mono mb-2 flex flex-row items-center">
			<span>Approvers:</span>
		</h3>
		<EntityListSelector
			{acl}
			tabs={approverTabs}
			items={acl.autoApprovers.routes[route]}
			{loading}
			placeholder="Approver..."
		/>
		<div class="pt-4">
			<Delete func={deleteRoute} disabled={loading} />
		</div>
	</CardListContainer>
	{/snippet}
</ListEntry>
