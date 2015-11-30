/// <reference path="../typings/tsd.d.ts" />

import { AppRouter } from 'aurelia-router';

export class App {
	message: string;

	constructor(router: any) {
		this.message = "Aurelia + TypeScript + ASP.NET 5 in beatiful unison!";
	}
}  