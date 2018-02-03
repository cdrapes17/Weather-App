import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'Weather App';

  constructor(public toastr: ToastsManager,public vcr: ViewContainerRef ){
    this.toastr.setRootViewContainerRef(vcr);
  }
}
