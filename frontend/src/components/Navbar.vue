<script lang="ts" setup>
	import {
		Quit,
		WindowMinimise,
		WindowToggleMaximise
	} from '@wailsjs/runtime';

	import * as store from '@store/stores';
	const pageStore = store.usePageStore();
	const navbarStore = store.useNavbarStore();
	const sidebarStore = store.useSidebarStore();

	const checkIfChangeWindowMaximised = () => {
		if (
			screen.availWidth == window.outerWidth &&
			screen.availHeight == window.outerHeight
		)
			navbarStore.isWindowMaximised = true;
		else navbarStore.isWindowMaximised = false;
	};
	window.ondrag = checkIfChangeWindowMaximised;
	window.onresize = checkIfChangeWindowMaximised;
	window.onauxclick = checkIfChangeWindowMaximised;
</script>
<template>
	<div
		class="absolute w-screen h-8 flex justify-between"
		style="--wails-draggable: drag"
		@dblclick="WindowToggleMaximise()"
	>
		<div
			class="
				flex
				*:my-auto [&>a]:mx-2 [&>a]:text-5 *:text-gray-500 [&>a]:transition-colors [&>a]:duration-250 [&>a]:ease-in-out [&>a]:cursor-pointer [&>a:hover]:text-light-500
			"
			style="--wails-draggable: no-drag"
		>
			<RouterLink
				v-if="pageStore.shownPage !== 'parameters'"
				to="/parameters"
				title="Parameters"
				class="navbar-icon-parameters"
				@click="pageStore.goToPage('parameters')"
			/>
			<RouterLink
				v-else
				to="/"
				title="Back"
				class="navbar-icon-leave-for-home"
				@click="pageStore.goToPage('note-pie')"
			/>
			<div
				class="
					flex gap-2 transition-opacity delay-10 duration-300 ease-in-out
					*:text-4 *:font-bold *:cursor-default *:select-none
				"
				:class="sidebarStore.isSidebarClosed ? 'opacity-0 duration-75 pointer-events-none' : 'opacity-100 delay-200 duration-200'"
			>
				<p>|</p>
				<p>{{ pageStore.shownPageTitle }}</p>
			</div>
		</div>
		<div
			class="
				flex
				*:my-auto *:px-5 *:text-5 *:text-gray-500 *:transition-colors *:duration-250 *:ease-in-out *:cursor-pointer [&>*:hover]:text-light-500
			"
			style="--wails-draggable: no-drag"
		>
			<div
				title="Minimise"
				class="navbar-icon-minimise !text-5.5"
				@click="WindowMinimise()"
			></div>
			<div
				v-if="navbarStore.isWindowMaximised"
				title="Unmaximise"
				class="navbar-icon-unmaximise"
				@click="WindowToggleMaximise()"
			></div>
			<div
				v-else
				title="Maximise"
				class="navbar-icon-maximise !text-4.5"
				@click="WindowToggleMaximise()"
			></div>
			<div
				title="Quit"
				class="navbar-icon-quit hover:text-red-500"
				@click="Quit()"
			></div>
		</div>
	</div>
</template>
