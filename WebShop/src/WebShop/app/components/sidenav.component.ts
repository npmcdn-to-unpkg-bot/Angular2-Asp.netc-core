﻿import {Component} from '@angular/core';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';

import {ROUTER_DIRECTIVES} from '@angular/router'



@Component({
    selector: 'side-nav',
    templateUrl: './partials/sidenav.html',
    directives: [
        MD_SIDENAV_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_PROGRESS_BAR_DIRECTIVES,
        MD_ICON_DIRECTIVES,
        MD_TABS_DIRECTIVES,
        ROUTER_DIRECTIVES
    ],
    providers: [[MdUniqueSelectionDispatcher]],
    styleUrls:['./css/sidenav.css']
})
export class SidenavComponent {
    constructor() {}
}