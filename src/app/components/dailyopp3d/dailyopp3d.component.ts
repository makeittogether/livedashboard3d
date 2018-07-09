import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-dailyopp3d',
  templateUrl: './dailyopp3d.component.html',
  styleUrls: ['./dailyopp3d.component.css']
})
export class Dailyopp3dComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {

  public options: any;
  private chart2: AmChart;
  interval:any;
  // private timer: any;

  constructor(private AmCharts: AmChartsService) {
    // console.log('i am called constructor - olspiechart3d');
    // this.update();
  }

  
  ngDoCheck(){
   
  }
  
  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
  //   console.log('i am called  -ngoninit  olspiechart3d');
   this.updateDaily(40, 60);
   this.interval = setInterval(() => { 
    this.refreshChart(); 
}, 5000);
  }

  

   getRandomInt(max:number) {
    return Math.floor(Math.random() * Math.floor(max) * 100);
  }
  refreshChart(){
   this.LoadNewData(this.getRandomInt(1), this.getRandomInt(2));
  }
  updateDaily(ols:number, cc:number){

    console.log("ols: " + ols + "cc: " + cc );
    var chart = this.AmCharts.makeChart( "dailypiechartdiv", {
      "type": "pie",
      "theme": "none",
      "dataProvider": [ {
        "country": "OLS",
        "value": ols
      }, {
        "country": "Call Center",
        "value": cc
      }],
      "valueField": "value",
      "titleField": "country",
      "outlineAlpha": 0.4,
      "depth3D": 15,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "angle": 30,
      "export": {
        "enabled": true
      }
    } );

    this.chart2 = chart;
    console.log('i am called update - olspiechart3d');
  }

  LoadNewData(ols:number, cc:number)
{
  //This function attempts to use a string of objects to pass to the dataprovider setting
  
  
  var NewChartData = [ {
    "country": "OLS",
    "value": ols
  }, {
    "country": "Call Center",
    "value": cc
  }]
      
  //  NewChartData.push(JSON.parse(D));
  
  
   this.chart2.dataProvider = NewChartData;
  this.chart2.validateData();
}

  ngOnDestroy() {
    console.log('i am called on - olspiechart3d');
    // clearInterval(this.timer);

    // Cleanup chartdiv2
    // if (this.chart2) {
    //   this.AmCharts.destroyChart(this.chart2);
    // }
  }


}
