import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  
  // constructor(private AmCharts: AmChartsService) {}

  
  // ngOnInit() {
  //   var chart = this.AmCharts.makeChart("chartdiv", {
  //     "theme": "light",
  //     "type": "serial",
  //     "startDuration": 2,
  //     "dataProvider": [{
  //         "country": "USA",
  //         "visits": 4025,
  //         "color": "#FF0F00"
  //     }, {
  //         "country": "China",
  //         "visits": 1882,
  //         "color": "#FF6600"
  //     }],
  //     "graphs": [{
  //         "balloonText": "[[category]]: <b>[[value]]</b>",
  //         "colorField": "color",
  //         "fillAlphas": 0.85,
  //         "lineAlpha": 0.1,
  //         "type": "column",
  //         "topRadius":1,
  //         "valueField": "visits"
  //     }],
  //     "depth3D": 42,
  //   "angle": 52,
  //     "chartCursor": {
  //         "categoryBalloonEnabled": false,
  //         "cursorAlpha": 0,
  //         "zoomable": false
  //     },
  //     "categoryField": "country",
  //     "categoryAxis": {
  //         "gridPosition": "start",
  //         "axisAlpha":0,
  //         "gridAlpha":0
  
  //     },
  //     "export": {
  //       "enabled": true
  //      }
  
  // }, 0);
  // }

  // ngOnDestroy() {
  //   // clearInterval(this.timer);

  //   // Cleanup chartdiv2
  //   // if (this.chart2) {
  //   //   this.AmCharts.destroyChart(this.chart2);
  //   // }
  // }

}
