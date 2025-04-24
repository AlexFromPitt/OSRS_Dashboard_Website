import { Price } from './price.model';
import { Trend } from './trend.model';

export interface ItemPriceData {
  id: number;
  name: string;
  currentPrice: Price;
  todayPrice: Price;
  day30: Trend;
  day90: Trend;
  day180: Trend;
}