import * as unocss from 'unocss';

export default unocss.defineConfig({
	presets: [
		unocss.presetUno(),
		unocss.presetIcons(),
		unocss.presetWebFonts({
			provider: 'google',
			fonts: {
				quicksand: 'Quicksand:400,500,600',
			},
		}),
		unocss.presetTypography()
	],
	shortcuts: {
		'navbar-icon-parameters': 'i-humbleicons:bars',
		'navbar-icon-leave-for-home': 'i-humbleicons:arrow-go-back',
		'navbar-icon-minimise': 'i-humbleicons:minus',
		'navbar-icon-maximise': 'i-humbleicons:square',
		'navbar-icon-unmaximise': 'i-humbleicons:duplicate',
		'navbar-icon-quit': 'i-humbleicons:times',
		'footer-icon-open-sidebar': 'i-tabler:layout-sidebar-left-expand',
		'footer-icon-close-sidebar': 'i-tabler:layout-sidebar-left-collapse',
		'sidebar-icon-new-note': 'i-tabler:note',
		'sidebar-icon-duplicate-note': 'i-humbleicons:documents',
		'sidebar-icon-delete-note': 'i-tabler:trash',
		'list-icon-arrow-up': 'i-tabler:arrow-narrow-up',
		'list-icon-note-pinned': 'i-tabler:pin-filled',
		'list-icon-note-not-pinned': 'i-tabler:pin',
	},
});
