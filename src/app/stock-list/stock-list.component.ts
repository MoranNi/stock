import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../service/stock-data.service';
import { stocksName, mapNameStockToSymbol } from '../module/type';

const KEY_DATA: string = "Time Series (Daily)";
const OPEN_PRICES_STOCK: string = "1. open";


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stockNameData: string[] = [];
  stockXvalue = [];
  stockYvalue = [];
  presentStock: boolean = false;
  selectedStockName: string = "";
  stocksNameAndSymbol: stocksName[] = mapNameStockToSymbol;

  dataStockSelected = {
    dates: this.stockXvalue,
    prices: this.stockYvalue
  }
  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    let defaultValueStock = this.stocksNameAndSymbol[0]; //default values for first pesent 
    this.onSelected(defaultValueStock.symbol, defaultValueStock.nameStock); 
  }

  onSelected(symbol:string, nameStock: string) {
    this.selectedStockName = nameStock;
    this.stockDataService.getStockData(symbol).subscribe(data => {
      if(data!==null && data!== undefined){
      this.setStockDatesAndPrices(data);
      }
    });
  }

  setStockDatesAndPrices(data) {
    this.stockXvalue = Object.keys(data[KEY_DATA]);//get the keys
    this.stockYvalue = [];
    for (let index = 0; index < this.stockXvalue.length; index++) {
      this.stockYvalue.push(data[KEY_DATA][this.stockXvalue[index]][OPEN_PRICES_STOCK]);
    }
    this.dataStockSelected = { dates: this.stockXvalue, prices: this.stockYvalue };
  }
}
