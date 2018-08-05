import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { calcPossibleSecurityContexts } from '../../../node_modules/@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-power-meter',
  //templateUrl: './power-meter.component.html',

  template:`
  <h2 class="alert alert-primary">Power Boost Calculator</h2>
  <div>No of units: <input type="number" class="form-control" [(ngModel)]="noOfUnits"></div>
  <p>
    units : {{noOfUnits}}
  </p>
  
  <button class="btn btn-info" (click)="calCost()">Click me!</button>
   <h3 class="alert alert-warning">{{cost}}</h3> 


  `,
  styleUrls: ['./power-meter.component.scss']
})
export class PowerMeterComponent{

  noOfUnits ;
  factor ;

  cost = this.noOfUnits*12;

  calc(noOfUnits){
    return noOfUnits * 20; 
  
  }

  calCost(){
    if(this.noOfUnits < 30){
     return this.cost = 10;
    }
    if(this.noOfUnits < 50){
      return this.cost = 20;
    }
  }  


  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
