import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-present-stock',
  templateUrl: './present-stock.component.html',
  styleUrls: ['./present-stock.component.css']
})
export class PresentStockComponent implements OnInit, OnChanges {
  @Input() dataStockSelected = {};
  @Input() selectedStockName: string = "";
  colorsChart = [];
  chartData = [];
  chartLabels = [];

  chartOptions = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataStockSelected);
    this.chartsData(this.dataStockSelected["dates"],this.dataStockSelected["prices"]);
  }

  ngOnChanges() {
    this.chartsData(this.dataStockSelected["dates"],this.dataStockSelected["prices"]);
  }

  chartsData(dates, prices) {
    let label: string = 'Daily time series stock for ' + this.selectedStockName;
   
    this.chartData = [
      { data: prices, label: label },
    ];
    this.chartLabels = dates;

    this.colorsChart = [
      {
        backgroundColor: '#B9E8E0',
        borderColor: '#6FC8CE',
        pointBackgroundColor: '#6FC8CE',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      },

    ];
  }

}
