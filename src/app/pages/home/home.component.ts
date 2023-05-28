import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngAfterViewInit() {
    //We loading the player script on after view is loaded
    const myScriptElement = document.createElement("script");
    myScriptElement.src = "assets/scripts/main.min.js";
    document.body.appendChild(myScriptElement);
  }
}
