import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../services/productos.service'
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  constructor(private productoService :ProductosService) { }

  productos :any =[];

  ngOnInit() {
    this.productoService.getProductos().
    subscribe(
      res =>{
        this.productos =res;
      },
      err =>console.error(err)
    );
  }





}
