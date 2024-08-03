package main

import (
	"embed"

	"github.com/uynilo9/logger.go"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	app := NewApp()

	err := wails.Run(
		&options.App{
			Title: "Note-pie",
			Width:  1280,
			Height: 720,
			Frameless: true,

			Windows: &windows.Options{
				WindowIsTranslucent: true,
				WebviewIsTransparent: true,
			},
			Mac: &mac.Options{
				WindowIsTranslucent: true,
				WebviewIsTransparent: true,
			},

			Bind: []interface{}{
				app,
			},
			AssetServer: &assetserver.Options{
				Assets: assets,
			},

			OnStartup: app.startup,
		},
	)

	if err != nil {
		logger.Errorln(err.Error())
	}
}
