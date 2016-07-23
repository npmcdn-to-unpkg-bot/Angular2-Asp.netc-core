/// <reference path="../../typings/globals/core-js/index.d.ts" />
/// <reference path="../../typings/globals/hammerjs/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var route_config_1 = require('../config/route.config');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), route_config_1.Route_Providers]);
//# sourceMappingURL=boot.js.map