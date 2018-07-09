import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-gridlayout',
  templateUrl: './gridlayout.component.html',
  styleUrls: ['./gridlayout.component.css']
})
export class GridlayoutComponent implements OnInit {

   ngOnInit(){
    setInterval(()=> {
      this.randomize(); },4000); 
      
   }
   
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'}
  ];

  olsOpp = 200;
   olsInProgress = 100;
   olsNew = 200;

   ccOpp = 100;
   ccInProgress = 50;
   ccNew = 50;

   totalOpp = 300 ;

   dailyTotal;
   dailyInProgress;
   dailyNew;
   dailyClosed;
   

   public randomize():void {
    // Only Change 3 values
    this.olsOpp = Math.round(Math.random() * 100);
    this.olsInProgress = Math.round(Math.random() * (this.olsOpp - 1) + 1);
    this.olsNew = (this.olsOpp - this.olsInProgress);

    this.ccOpp = Math.round(Math.random() * 100);
    this.ccInProgress = Math.round(Math.random() * (this.ccOpp - 1) + 1);
    this.ccNew = (this.ccOpp - this.ccInProgress);

    this.totalOpp = this.olsOpp + this.ccOpp ;

    this.dailyTotal =  Math.round(Math.random() * (this.totalOpp - 1) + 1) + 1;
    this.dailyNew = Math.round(this.dailyTotal/2 ) + 1;
    this.dailyInProgress = Math.round((this.dailyTotal - this.dailyNew)/2) + 1;
    this.dailyClosed = this.dailyTotal - (this.dailyNew + this.dailyInProgress) + 1;

    console.log(this.ccOpp + " "  +  " "   + this.olsOpp + " " + this.totalOpp);
   
  }
}




