import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

import { DataService } from './data.service'

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
 selector: 'app-root',
   //templateUrl: './app.component.html',
//    template: `
//    <h1 [ngStyle]="titleStyles">Hey guys</h1>
//    <p>{{myObject.gender}}</p>
//    <ul>
//     <li *ngFor="let arr of myArr">{{arr}}</li>
//    </ul>
//    <ul>
//     <li *ngIf="myArr; then tmpl1 else tmpl2"></li>
//    </ul>

//    <ng-template #tmpl1>I'm here</ng-template>
//    <ng-template #tmpl2>I'm not here</ng-template>

//    <img src="{{angularLogo}}">
//    <img [src]="angularLogo">
//    <img bind-src = "angularLogo">

//    <button [disabled]="buttonStatus == 'enabled'">My Button</button>
//    <br/>
//    <button (click)="myEvent($event)">My Button</button>
//    `,
//  styles: [`
//     h1 {
//       text-decoration:underline
//     }
//     .red-title {
//       color:red;
//     }
//     .large-title {
//       font-size:4em;
//     }
//  `]
template: `
<p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>
`,
styles: [`
  p {
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  `],
animations: [
  trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
  ]),
]

})
export class AppComponent {

  state: string = 'small'

  animateMe() {
    this.state = (this.state == 'small' ? 'large' : 'small');  
  }

  constructor(private dataService:DataService) {}

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

  title = 'app works!';
  myObject = {
    gender: 'male',
    age: 33, 
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours', 'theres'];

  angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';

  buttonStatus = 'enabled';

  titleClass = 'red';
  titleStyle = 'red';

  titleClasses = {
    'red-title' : true,
    'large-title' : true
  };

  titleStyles = {
    'color' : 'red', 
    'font-size' : '4em'
  }

  myEvent(event) {
    console.log(event);
  }
}
