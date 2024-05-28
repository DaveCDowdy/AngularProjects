import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartApiUrl = environment.apiUrl +'/cart';
  private checkoutApiUrl = environment.apiUrl+'/checkout';

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cartApiUrl, product);
  }

  getCartItems(): Observable<Product[]>{
    return this.http.get<Product[]>(this.cartApiUrl);
  }

  clearCart(): Observable<void>{
    return this.http.delete<void>(this.cartApiUrl);
  }

  checkout(products: Product[]) : Observable<void>{
    return this.http.post<void>(this.checkoutApiUrl,products);
  }

}
