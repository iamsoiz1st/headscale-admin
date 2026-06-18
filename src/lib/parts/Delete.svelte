<script lang="ts">
	import { slide } from 'svelte/transition';

	import RawMdiDelete from '~icons/mdi/delete';
	import RawMdiCheckCircleOutline from '~icons/mdi/check-circle-outline';
	import RawMdiCloseCircleOutline from '~icons/mdi/close-circle-outline';
	import type { Component } from 'svelte';

	type DeleteProps = {
		func: () => void,
		show?: boolean,
		disabled?: boolean,
		logo?: Component,
	}

	let {
		func,
		show = false,
		disabled = false,
		logo: Logo = RawMdiDelete,
	}: DeleteProps = $props()
</script>

<div class="flex flex-row items-center justify-end py-0 my-0 pl-0 ml-4">
	{#if show}
		<span transition:slide={{ delay: 50, axis: 'x' }} class="text-right flex space-x-2 items-center">
			<button
				{disabled}
				onclick={async () => {
					try {
						disabled = true;
						if (func.constructor.name === 'AsyncFunction') {
							await func();
						} else {
							func();
						}
					} finally {
						disabled = false;
						show = false;
					}
				}}
			>
				<RawMdiCheckCircleOutline />
			</button>
			<button
				{disabled}
				onclick={() => {
					show = false;
				}}
			>
				<RawMdiCloseCircleOutline />
			</button>
		</span>
	{/if}
	<span class="text-error-600 items-center dark:text-error-400 ml-2">
		<button
			{disabled} onclick={() => (show = !show)}
			class="inline-flex items-center justify-center mx-0 my-0 py-0 px-0"
		>
			<Logo />
		</button>
	</span>
</div>
