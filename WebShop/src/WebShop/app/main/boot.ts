/// <reference path="../../typings/globals/core-js/index.d.ts" />
/// <reference path="../../typings/globals/hammerjs/index.d.ts" />


import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import {Route_Providers} from '../config/route.config';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';


bootstrap(AppComponent, [HTTP_PROVIDERS,disableDeprecatedForms(), provideForms(), Route_Providers]);
