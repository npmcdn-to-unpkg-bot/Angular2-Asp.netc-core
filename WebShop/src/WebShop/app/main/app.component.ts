import { Component } from '@angular/core';
import {MdInput, MD_INPUT_DIRECTIVES} from '@angular2-material/input'
import {SidenavComponent} from '../components/sidenav.component';


@Component({
  selector: 'my-app',
  template: `
<side-nav></side-nav>

`,
  directives: [MdInput, MD_INPUT_DIRECTIVES, SidenavComponent]
})
export class AppComponent {
        productName:string;
        constructor(
        ) {
           
        }
}