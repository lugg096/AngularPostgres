import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

import {ProductosService} from '../../services/productos.service'
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto :Producto={
    _id :0,
    nombre:'',
    descripcion:'',
    proveedor :'',
    precio :0,
    unidades :0,
    imagen:'',
    creado_en: new Date(),
    estado :0
  };
  constructor( private productosService:ProductosService) { }
  saveNewProducto(){
    delete this.producto.creado_en;
    delete this.producto._id;

    this.productosService.saveProducto(this.producto)
    .subscribe(
      res=>{
        console.log(res);
      },
      err =>console.error(err)
    )

  }

  ngOnInit() {
  }

}
