package main

import (
	"context"
)

type App struct {
	context context.Context
}

func NewApp() *App {
	return &App{}
}

func (app *App) startup(context context.Context) {
	app.context = context
}
