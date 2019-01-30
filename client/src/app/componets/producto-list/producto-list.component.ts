import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../services/productos.service';
import {ProductoFormComponent} from '../producto-form/producto-form.component';
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  constructor(private productoService :ProductosService) { }

  productos :any =[];

  ngOnInit() {
    this.listProductos();
  }

    listProductos(){
        this.productoService.getProductos().
        subscribe(
          res =>{
            this.productos =res;
          },
          err =>console.error(err)
        );
    }

    deleteProducto(id : number){
      
      this.productoService.deleteProducto(id).
      subscribe(
        res =>{
          console.log(res)
          this.listProductos();
        },
        err =>console.error(err)
      );
    }

    updateProducto(updateproducto :any ){
     // this.productoaux.producto =updateproducto;
      console.log(updateproducto );
    }


}
