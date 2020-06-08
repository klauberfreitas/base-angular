import { Component, OnInit, ɵConsole } from "@angular/core";
import { CarService } from "../../services/car.service";
import { Pessoa } from "../../models/pessoa.class";
import { Route, ActivatedRoute } from "@angular/router";
import { NgForm, FormControl, Validators, FormGroup } from "@angular/forms";
import { Enderecos } from './endereco.dto';

@Component({
  selector: "app-endereco",
  templateUrl: "endereco.component.html",
})
export class EnderecoComponent implements OnInit {
  
  // FORM CONTROLS
  codigo_pessoa = new FormControl({ value: "", disabled: true });
 
  numero_sequencia_endereco = new FormControl("");


  // FORM GROUP
  formTest = new FormGroup({
    codigo_pessoa: this.codigo_pessoa,
    numero_sequencia_endereco: this.numero_sequencia_endereco,

  });

  enderecos = new Enderecos;
  pessoaAtualizada;

  constructor(private carService: CarService, public route: ActivatedRoute, ) {

    this.carService.getCarById('1').subscribe((pessoaResponse) => {
      this.pessoaAtualizada = pessoaResponse;
      let enderecos = pessoaResponse.enderecos;
      this.codigo_pessoa.setValue(enderecos.pessoa_endereco[0].codigo_pessoa);
      this.numero_sequencia_endereco.setValue(enderecos.pessoa_endereco[0].numero_sequencia_endereco)
      console.log(this.pessoaAtualizada, "%%%%%%%")
    });
  }

  ngOnInit() {
    // this.carService.getCars().subscribe((pessoaDto) => {
    //   this.enderecos = pessoaDto.enderecos.pessoa_endereco;
    //   console.log(this.enderecos, "********")
    // });
  }
   
  

  updateCar() {
    Object.keys(this.formTest.controls).forEach((control) => {
      this.formTest.controls[control].markAsDirty();
    });
    if (!this.formTest.valid) {
      console.log("Verifique os campos obrigatórios.");
      return;
    }
    this.pessoaAtualizada.enderecos.pessoa_endereco[0].numero_sequencia_endereco = this.numero_sequencia_endereco.value;

    this.carService.updateEndereco(this.pessoaAtualizada.enderecos.pessoa_endereco[0]).subscribe(() => {
        // Ação automática
        // this.location.back();
      });
  }


}
