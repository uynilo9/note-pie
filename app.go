package main

import (
	"context"
	"os"
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

func (app *App) GetPwd() string {
	pwd, _ := os.Getwd()
	return pwd
}
