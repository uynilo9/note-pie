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

	import * as vrouter from 'vue-router';
	const router = vrouter.useRouter();

	const goToPage = (targetPage: Page) => {
		router.push(`/${targetPage}`);
		pageStore.goToPage(targetPage);
	};

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
		class="absolute w-screen h-8 flex"
		style="--wails-draggable: drag"
		@dblclick="WindowToggleMaximise()"
	>
		<div
			class="
				flex justify-start transition-[w] duration-400 ease-in-out
			"
			:class="sidebarStore.isSidebarClosed ? 'w-9' : 'w-70'"
		>
			<div
				class="my-auto mx-2 text-5 text-gray-500 transition-colors duration-250 ease-in-out cursor-pointer [&>*:hover]:text-light-500"
			>
				<div
					v-if="pageStore.shownPage !== 'parameters'"
					title="Parameters"
					class="navbar-icon-parameters"
					style="--wails-draggable: no-drag;"
					@click="goToPage('parameters')"
				>
				</div>
				<div
					v-else
					title="Back"
					class="navbar-icon-leave-for-home"
					style="--wails-draggable: no-drag;"
					@click="goToPage('note-pie')"
				>
				</div>
			</div>
		</div>
		<div
			class="
				flex flex-1 justify-end bg-dark-700/50 border-l-solid border-l-gray-500/5
				*:my-auto *:px-5 *:text-5 *:text-gray-500 *:transition-colors *:duration-250 *:ease-in-out *:cursor-pointer [&>*:hover]:text-light-500
			"
		>
			<div
				title="Minimise"
				class="navbar-icon-minimise !text-5.5"
				style="--wails-draggable: no-drag"
				@click="WindowMinimise()"
			></div>
			<div
				v-if="navbarStore.isWindowMaximised"
				title="Unmaximise"
				class="navbar-icon-unmaximise"
				style="--wails-draggable: no-drag"
				@click="WindowToggleMaximise()"
			></div>
			<div
				v-else
				title="Maximise"
				class="navbar-icon-maximise !text-4.5"
				style="--wails-draggable: no-drag"
				@click="WindowToggleMaximise()"
			></div>
			<div
				title="Quit"
				class="navbar-icon-quit hover:text-red-500"
				style="--wails-draggable: no-drag"
				@click="Quit()"
			></div>
		</div>
	</div>
</template>
