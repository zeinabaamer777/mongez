import { orderItems } from './order-items.model';

export class OrderHistoryModel {
  id: number;
  review_from_customer: number;
  created_at: Date;
  delivery_status: string;
  customer_id: number;
  subtotal: null;
  total_price: number;
  estimation_fees: number;
  final_price: number;
  created_since: string;
  queued_since: string;
  worker: null;
  items: orderItems;
  promocode: null;

}
