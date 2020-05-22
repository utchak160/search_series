import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = null;
  res = undefined;


  onSubmit() {
    if (this.title % 2 === 0) {
      this.res = (this.title * this.title) - 1;
    } else {
      this.res = (this.title * this.title) + 1;
    }
  }
}
