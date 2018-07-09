import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule } from '@angular/material';
import { AmChartsModule } from '@amcharts/amcharts3-angular';


import { AppComponent } from './app.component';
import { Totaloppallchannel3dComponent } from './components/totaloppallchannel3d/totaloppallchannel3d.component';
import { GridlayoutComponent } from './components/gridlayout/gridlayout.component';
import { OlsPicharts3dComponent } from './components/ols-picharts3d/ols-picharts3d.component';
import { Ccpiechart3dComponent } from './components/ccpiechart3d/ccpiechart3d.component';
import { Dailyopp3dComponent } from './components/dailyopp3d/dailyopp3d.component';

// import { OlsPiechartComponent } from './components/ols-piechart/ols-piechart.component';
// import { OppVerBarOverallComponent } from './components/opp-ver-bar-overall/opp-ver-bar-overall.component';

@NgModule({
  declarations: [
    AppComponent,
    Totaloppallchannel3dComponent,
    GridlayoutComponent,
    OlsPicharts3dComponent,
    
    Ccpiechart3dComponent,
    
    Dailyopp3dComponent,
    
   
    // OlsPiechartComponent,
    // OppVerBarOverallComponent
    
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatCardModule,
    AmChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
