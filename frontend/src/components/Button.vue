<script lang="ts" setup>
	const props = defineProps<{ icon: string }>();
</script>
<template>
	<div
		class="
			text-4.5 text-gray-400/75
			transition-colors duration-250 ease-in-out cursor-pointer
			hover:text-light-500
		"
	>
		<div :class="props.icon"></div>
	</div>
</template>
