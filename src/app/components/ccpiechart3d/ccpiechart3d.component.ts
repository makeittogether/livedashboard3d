import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-ccpiechart3d',
  templateUrl: './ccpiechart3d.component.html',
  styleUrls: ['./ccpiechart3d.component.css']
})
export class Ccpiechart3dComponent implements OnInit {

  public options: any;
  private chart2: AmChart;
  // private timer: any;

  constructor(private AmCharts: AmChartsService) {
    // console.log('i am called constructor - olspiechart3d');
    // this.update();
  }
  ngDoCheck(){
    console.log('i am called ngdocheck - olspiechart3d');
    // this.update();
  }
  
  ngAfterViewInit(): void {
    // console.log('i am called ngafterviewinit - olspiechart3d');
    // this.update();
  }

  ngOnInit() {
  //   console.log('i am called  -ngoninit  olspiechart3d');
   this.update();
  }

  update(){
    console.log("chart dv: "+ document.getElementById('ccpiechartdiv') );
    var chart = this.AmCharts.makeChart("ccpiechartdiv", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#FF6600"
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius":1,
            "valueField": "visits"
        }],
        "depth3D": 42,
      "angle": 52,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha":0,
            "gridAlpha":0
    
        },
        "export": {
          "enabled": true
         }
    
    }, 0);
    console.log('i am called update - olspiechart3d');
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
