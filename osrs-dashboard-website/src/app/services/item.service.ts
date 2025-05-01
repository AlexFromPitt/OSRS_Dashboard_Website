import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemInfoData } from '../models/item-info-data.model';
import { ItemPriceData } from '../models/item-price-data.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private loadItemIdsUrl = 'http://localhost:8080/item/getItemIds';
  private getItemInfoDataUrl = 'http://localhost:8080/item/getItemInfoData';
  private getItemPriceDataUrl = 'http://localhost:8080/item/getItemPriceData';

  constructor(private http: HttpClient) { }

  loadItemIds(): Observable<string> {
    return this.http.get(`${this.loadItemIdsUrl}/load`, { responseType: 'text' });
  }

  getItemInfoData(itemName: string): Observable<ItemInfoData[]> {
    return this.http.get<ItemInfoData[]>(`${this.getItemInfoDataUrl}/${itemName}`)
  }

  getItemPriceData(itemName: string): Observable<ItemPriceData[]> {
    return this.http.get<ItemPriceData[]>(`${this.getItemPriceDataUrl}/${itemName}`)
  }
}