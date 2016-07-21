/// <reference path="../../typings/globals/core-js/index.d.ts" />


import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {Route_Providers} from '../config/route.config'

bootstrap(AppComponent,[ disableDeprecatedForms(), provideForms(), Route_Providers]);
