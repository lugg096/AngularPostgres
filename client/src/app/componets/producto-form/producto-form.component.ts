import { Component, OnInit,Input} from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {Router, ActivatedRoute} from '@angular/router'


import {ProductosService} from '../../services/productos.service'
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  update :Boolean ;
  @Input () updateproducto :Producto;
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
  constructor( private productosService:ProductosService,private router:Router,private activeRoute :ActivatedRoute) { }
  saveNewProducto(){
    const idaux= this.producto._id;
    delete this.producto.creado_en;
    delete this.producto._id;

    if(this.update){
      this.productosService.updateProducto(idaux,this.producto)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/productos'])
        },
        err =>console.error(err)
      )
    }

else{
    this.productosService.saveProducto(this.producto)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/productos'])
      },
      err =>console.error(err)
    )
    }
  }
 

  ngOnInit() {
      const params =this.activeRoute.snapshot.params;
      if(params.id){
          this.update = true;
          this.productosService.getProducto(params.id)
          .subscribe(
            res =>{this.producto =res[0];
            },
            err =>console.error(err)
          )
      }
  }

}
