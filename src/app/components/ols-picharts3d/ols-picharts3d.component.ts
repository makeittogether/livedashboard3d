import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit, Input } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-ols-picharts3d',
  templateUrl: './ols-picharts3d.component.html',
  styleUrls: ['./ols-picharts3d.component.css']
})
export class OlsPicharts3dComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit {

  public options: any;
  private chart2: AmChart;
  // private timer: any;
  @Input() public olsInProgress:number;
  @Input() public olsNew:number;
  @Input() public olsOpp:number;
  interval:any;
  constructor(private AmCharts: AmChartsService) {
   
  }
  ngDoCheck(){
    
  }
  
  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
  
    this.update();
    this.interval = setInterval(() => { 
     this.refreshChart(); 
 }, 5000);
  }

  refreshChart(){
    this.LoadNewData(this.olsNew, this.olsInProgress);
   }

  update(){
    
    var chart = this.AmCharts.makeChart("olspiechartdiv", {
        "theme": "none",
        "type": "pie",
        "startDuration": 2,
        "dataProvider": [{
            "country": "New",
            "visits": this.olsNew,
            "color": "#bf602a"
        }, {
            "country": "In-Progress",
            "visits": this.olsInProgress,
            "color": "#bf602a"
        }],
       
        "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  
  "labelRadius": 5,
  "innerRadius": "30%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
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
      "country": "New",
      "visits": ols,
      "color": "#bf602a"
  }, {
      "country": "In-Progress",
      "visits": cc,
      "color": "#bf602a"
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
