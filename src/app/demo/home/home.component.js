"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            template: "\n    <h2>This is a demo application for the TreeGrid control for Angular 2.</h2>\n\n    Here is the description of what each demo does:\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <td>Demo\n                            </td>\n                            <td>Description\n                            </td>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo1\">Simple Table Data</a>\n                            </td>\n                            <td>\n                                Introduce the simplest way to instantiate the TreeGrid control that make uses of statically defined data. \n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo2\">Loading with Ajax</a>\n                            </td>\n                            <td>\n                                Load the grid data from Ajax call to an external web service.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo3\">Lazy Loading with Ajax</a>\n                            </td>\n                            <td>\n                                Child rows are not retrieved initially. They are retrieved and inserted into the grid When you click the \"chevron\" to expand the row.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo4\">Formatting with Pipes</a>\n                            </td>\n                            <td>\n                                You can format or alter the content of the cell by providing one or more Pipes. If more than one is provided, they will be chained.\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo5\">Custom Column Rendering</a>\n                            </td>\n                            <td>\n                                You can also control completely how the grid cell is rendered by providing a rendering function. \n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <a routerLink=\"/demo6\">Modal Dialog Editor</a>\n                            </td>\n                            <td>\n                                Data in the grid can be updated through a custom modal dialog editor (Modal dialog component is not part of this library. But the demo  provided a sample )\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n      \n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map