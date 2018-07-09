import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ols-piechart',
  templateUrl: './ols-piechart.component.html',
  styleUrls: ['./ols-piechart.component.css']
})
export class OlsPiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Pie
  public pieChartLabels:string[] = ['New', 'In-Progress'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
