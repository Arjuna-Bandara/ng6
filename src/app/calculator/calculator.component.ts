import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calculator$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
  calculator$: Object;
    this.data.getCalculator().subscribe(
      data => this.calculator$ = data 
    );


  }

}
