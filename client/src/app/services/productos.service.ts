import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URI ='http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.API_URI+'/productos');
  }
  getProducto(id : number){
    return this.http.get(this.API_URI+'/productos/'+id);
  }
  deleteProducto(id : number){
    return this.http.delete(this.API_URI+'/productos/'+id);
  }
  saveProducto(producto: Producto){
    return this.http.post(this.API_URI+'/productos',producto);
  }
  updateProducto(id : number,updateproducto:Producto){
    return this.http.put(this.API_URI+'/productos/'+id,updateproducto);
  }

}
