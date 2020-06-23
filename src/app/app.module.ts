import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StockDataService } from './service/stock-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { PresentStockComponent } from './present-stock/present-stock.component';
import { ChartsModule } from 'ng2-charts';
import { StockListComponent } from './stock-list/stock-list.component';



@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    PresentStockComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    ChartsModule
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
