import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { PessoaDto } from './models/car';

import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  progress = 80;

 
  // FORM CONTROLS
  model = new FormControl('', Validators.required);
  color = new FormControl('');
  price = new FormControl('');

// FORM GROUP
  formTest = new FormGroup({
    model: this.model,
    color: this.color,
    price: this.price,
  
  });

  car = new PessoaDto();
  cars: PessoaDto[];

  constructor(private carService: CarService) {}
 
  
  ngOnInit() {
    this.getCars();
  }

  // defini se um carro será criado ou atualizado
  // saveCar(form: NgForm) {
  
  //     this.carService.updateCar(this.car).subscribe(() => {
    
  //   })
  // }

  // Chama o serviço para obtém todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: PessoaDto[]) => {
      this.cars = cars;
    });
  }

  // deleta um carro
  // deleteCar(car: Pessoa) {
  //   this.carService.deleteCar(car).subscribe(() => {
  //     this.getCars();
  //   });
  // }

  // copia o carro para ser editado.
  editCar(car: PessoaDto) {
    this.car = { ...car };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as PessoaDto;
  }

}
