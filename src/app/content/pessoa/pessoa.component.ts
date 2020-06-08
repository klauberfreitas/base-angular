import { Component, OnInit, AfterViewInit, } from "@angular/core";
import { CarService } from "../../services/car.service";
import { PessoaDto } from "../../models/car";
import { Route, ActivatedRoute } from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa.class';

import { NgForm, FormControl, Validators, FormGroup } from "@angular/forms";
//import { PessoaDto } from '../pessoa_dto';

import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: "app-pessoa",
  templateUrl: "pessoa.component.html",
})
export class PessoaComponent implements OnInit, AfterViewInit {

  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];



  // FORM CONTROLS
  codigo_pessoa = new FormControl({ value: "", disabled: true });
  cpf_cnpj = new FormControl("", Validators.required);
  nome_pessoa = new FormControl("", Validators.required);
  codigo_sexo = new FormControl("");
  autorizacao_bacen = new FormControl("")
  codigo = new FormControl("");
  data_referencia_menda_mensal = new FormControl("");

  // FORM GROUP
  formTest = new FormGroup({
    codigo_pessoa: this.codigo_pessoa,
    cpf_cnpj: this.cpf_cnpj,
    nome_pessoa: this.nome_pessoa,
    codigo_sexo: this.codigo_sexo,
    codigo: this.codigo,
    autorizacao_bacen: this.autorizacao_bacen,
    data_referencia_menda_mensal: this.data_referencia_menda_mensal,
  });

  pessoa = new Pessoa;
  cars: Pessoa[];
  pessoaAtualizada;

  isLoading: boolean;

  constructor(private carService: CarService, public route: ActivatedRoute, private cdRef: ChangeDetectorRef, private toastr: ToastrService, public toastNotificacao: NotificationsService) {


    //  this.route.queryParams.subscribe(params => {
    //   let codigo_pessoa = params['codigo_pessoa'];
    //   if (usuarioid) {

    this.carService.getCarById('2').subscribe((pessoaResponse) => {
      this.isLoading = false;
      this.pessoaAtualizada = pessoaResponse;
      let pessoa = pessoaResponse["pessoa"];

      // this.codigo_pessoa = codigo_pessoa;

      this.codigo_pessoa.setValue(pessoa.codigo_pessoa);
      // this.model.setValue(pessoa.model);
      // this.color.setValue(pessoa.color);
      // this.price.setValue(pessoa.price);
      this.codigo.setValue(pessoa.tipo_pessoa.codigo)
      this.cpf_cnpj.setValue(pessoa.cpf_cnpj);
      this.nome_pessoa.setValue(pessoa.nome_pessoa);
      this.codigo_sexo.setValue(pessoa.codigo_sexo);
      this.autorizacao_bacen.setValue(pessoa.autorizacao_bacen);
      this.data_referencia_menda_mensal.setValue(pessoa.data_referencia_menda_mensal);

    });
    //   });
  }

  showToaster() {
    
    this.toastNotificacao.notificacaoSucesso('Texto de Suporte', 'Título');
    this.toastNotificacao.notificacaoErro('Texto de Suporte', 'Título');
    this.toastNotificacao.notificacaoAviso('Texto de Suporte', 'Título');
    this.toastNotificacao.notificacaoInfo('Texto de Suporte', 'Título');


  }

  ngOnInit() {
    // this.getCars();
  }

  ngAfterViewInit() {
    this.isLoading = true;
    this.cdRef.detectChanges();

  }

  updateCar() {
    this.isLoading = true;
    //this.modalService.confirm(this.usuarioid ? 'Deseja realmente alterar o usario ?' : 'Deseja realmente salvar novo usuario ?', 'Confirmar').then(yes => {
    //  if (yes) {
    Object.keys(this.formTest.controls).forEach((control) => {
      this.formTest.controls[control].markAsDirty();
    });
    if (!this.formTest.valid) {

      this.toastr.warning("Verifique os obrigatórios.")
      console.log("Verifique os campos obrigatórios.");
      return;
    }

    this.pessoaAtualizada.pessoa.tipo_pessoa.codigo = this.codigo.value;
    this.pessoaAtualizada.pessoa.cpf_cnpj = this.cpf_cnpj.value;
    this.pessoaAtualizada.pessoa.nome_pessoa = this.nome_pessoa.value;
    this.pessoaAtualizada.pessoa.codigo_sexo = this.codigo_sexo.value;
    this.pessoaAtualizada.pessoa.autorizacao_bacen = this.autorizacao_bacen.value;
    this.pessoaAtualizada.pessoa.data_referencia_menda_mensal = this.data_referencia_menda_mensal.value;

    this.carService
      .updateCar(this.pessoaAtualizada)
      .subscribe(() => {
        this.isLoading = false;
        // Ação automática
        // this.location.back();
      });
    this.toastr.success("Salvo com sucesso.")

  }

  saveCar(form: NgForm) {
    this.carService.updateCar(this.pessoa).subscribe(() => { });
  }

  // getCars() {
  //   this.carService.getCars().subscribe((cars: Pessoa[]) => {
  //     this.cars = cars;
  //   });
  // }

  //  deleteCar(pessoa: Pessoa) {
  //   this.carService.deleteCar(pessoa).subscribe(() => {
  //     this.getCars();
  //   });
  // }

  // editCar(pessoa: Pessoa) {
  //   this.pessoa = { ...pessoa };
  // }


  // cleanForm(form: NgForm) {
  //   this.getCars();
  //   form.resetForm();
  //   this.pessoa = {} as Pessoa;
  // }
}
