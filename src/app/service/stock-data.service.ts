import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_KEY: string = "JYAKIOG8YF1HW0II";

@Injectable({
  providedIn: 'root'
})

export class StockDataService {

  constructor(private http: HttpClient) { }

  getStockData(symbol: string) {
    let api_call = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + symbol + '&outputsize=compact&apikey=' + API_KEY;
    return this.http.get(api_call);
  }



}
