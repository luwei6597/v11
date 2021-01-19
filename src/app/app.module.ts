import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as overlappedcolumn2d from 'fusioncharts/fusioncharts.overlappedcolumn2d';
import * as overlappedbar2d from 'fusioncharts/fusioncharts.overlappedbar2d';
import * as gantt from 'fusioncharts/fusioncharts.gantt';
import * as powercharts from 'fusioncharts/fusioncharts.powercharts';
import * as Zoomline from 'fusioncharts/fusioncharts.zoomline';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as FusionExport from 'fusioncharts/fusioncharts.excelexport';
FusionChartsModule.fcRoot(
  FusionCharts, charts, overlappedcolumn2d, overlappedbar2d, gantt, powercharts, Zoomline, FusionTheme, FusionExport);
FusionCharts.options['license'] = {
  key: 'iyE4qlbA7A3C4G3C1H1F1C4D2A3B1B3axxH2B7B2xD2C2E1mlF-7C11C2C7egvD4F3H3eD-16C-13F4E2D3F1G1I4B2C8E3E2B2rttB1B11GD1xkB4e1A19A32aarC6D3G4H2D1H1B3A10C1E6B1C5A4H2h==',
  creditLabel: false
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
