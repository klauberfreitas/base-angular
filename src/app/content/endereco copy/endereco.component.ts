// import { Component, OnInit } from "@angular/core";
// import { CarService } from "../../services/car.service";
// import { Pessoa } from "../car";
// import { Route, ActivatedRoute } from "@angular/router";
// import { NgForm, FormControl, Validators, FormGroup } from "@angular/forms";

// @Component({
//   selector: "app-endereco",
//   templateUrl: "endereco.component.html",
// })
// export class EnderecoComponent implements OnInit {
  

//   codigo_pessoa = new FormControl({ value: "", disabled: true });
 
//   codigo = new FormControl("");



//   formTest = new FormGroup({
//     codigo_pessoa: this.codigo_pessoa,
//     codigo: this.codigo,

//   });

//   pessoa_fisica = new Pessoa;
//   cars: Pessoa[];
//   pessoaAtualizada;

//   constructor(private carService: CarService, public route: ActivatedRoute, ) {

//     this.carService.getCarById('2').subscribe((pessoaResponse) => {
//       this.pessoaAtualizada = pessoaResponse;
//       let pessoa_fisica = pessoaResponse["pessoa_fisica"];
//       this.codigo_pessoa.setValue(pessoa_fisica.codigo_pessoa);
//       this.codigo.setValue(pessoa_fisica.codigo_conjuge)
//     });
//   }

//   ngOnInit() {
  
//   }

//   updateCar() {
//     Object.keys(this.formTest.controls).forEach((control) => {
//       this.formTest.controls[control].markAsDirty();
//     });
//     if (!this.formTest.valid) {
//       console.log("Verifique os campos obrigatórios.");
//       return;
//     }
//     this.pessoaAtualizada.pessoa_fisica.codigo_conjuge = this.codigo.value;

//     this.carService
//       .updateCar(this.pessoaAtualizada)
//       .subscribe(() => {
       
//       });
//   }


// }
