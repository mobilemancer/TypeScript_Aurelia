/// <reference path="../typings/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App(router) {
            this.message = "Aurelia + TypeScript + ASP.NET 5 in beatiful unison!";
        }
        return App;
    })();
    exports.App = App;
});
