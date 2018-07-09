import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-totaloppallchannel3d',
  templateUrl: './totaloppallchannel3d.component.html',
  styleUrls: ['./totaloppallchannel3d.component.css']
})
export class Totaloppallchannel3dComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit  {

  public options: any;
  private chart2: AmChart;
  //  public totalOpp:number;
 @Input('olsOpp') public olsOpp:number;
 @Input('ccOpp') public  ccOpp:number;

 @Input('totalOpp') public  totalOpp: number;
 interval:any;
  

  constructor(private AmCharts: AmChartsService) {
    
  }

  ngOnChanges(changes:any){
   
     }

  ngDoCheck(){
   
  }
  
  ngAfterViewInit(): void {
 
  }

  ngOnInit() {
    //   console.log('i am called  -ngoninit  olspiechart3d');
     this.update();
     this.interval = setInterval(() => { 
      this.refreshChart(); 
  }, 5000);
    }

    getRandomInt(max:number) {
      return Math.floor(Math.random() * Math.floor(max) * 100);
    }

    refreshChart(){
      this.LoadNewData(this.olsOpp, this.ccOpp);
     }

  update(){
    
    var chart = this.AmCharts.makeChart("totalchartdiv", {
        "theme": "light",
        "type": "serial",
        "startDuration": 1,
        "dataProvider": [{
            "country": "CEC - Online",
            "visits": this.olsOpp,
            "color": "#FF0F00"
        }, {
            "country": "Call center",
            "visits": this.ccOpp,
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

    this.chart2 = chart;
  }
  
  LoadNewData(ols:number, cc:number)
  {
    //This function attempts to use a string of objects to pass to the dataprovider setting
    
    
    var NewChartData = [{
      "country": "CEC - Online",
      "visits": ols,
      "color": "#FF0F00"
  }, {
      "country": "Call Center",
      "visits": cc,
      "color": "#FF6600"
  }]
        
    //  NewChartData.push(JSON.parse(D));
    
    
     this.chart2.dataProvider = NewChartData;
    this.chart2.validateData();
  }

  ngOnDestroy() {
    // console.log('i am called ngOnDestroy - Totaloppallchannel3dComponent');
    // clearInterval(this.timer);

    // Cleanup chartdiv2
    // if (this.chart2) {
    //   this.AmCharts.destroyChart(this.chart2);
    // }
  }

}
