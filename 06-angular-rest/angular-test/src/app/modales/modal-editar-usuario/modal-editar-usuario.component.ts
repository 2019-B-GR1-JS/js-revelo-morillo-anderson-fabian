import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent implements OnInit {

  nombre="";
  apellido=""
  correo="";
  password="";

  constructor(
    public dialogRef: MatDialogRef<ModalEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any | boolean,

  ) { }

  ngOnInit() {
    if(!this.data){
      console.log('Estamos creando');

    }else{
      console.log('estamos editando');
      console.log('datos en el modal', this.data);
      this.nombre = this.data.usuario.nombre;
      this.apellido = this.data.usuario.apellido;
      this.correo = this.data.usuario.correo;
      this.password = this.data.usuario.password;
    }
    
  }
  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password,


    })

  }

}
