import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { PessoaDto } from "../models/car";
import { Pessoa } from '../models/pessoa.class';
import { Enderecos } from "src/app/content/endereco/endereco.dto";
import { PessoaFisica } from '../models/pessoa-fisica.class.';


@Injectable({
  providedIn: "root",
})
export class CarService {
  url = "http://localhost:3000"; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  // Obtem todos os carros
  getCars(): Observable<PessoaDto[]> {
    return this.httpClient.get<PessoaDto[]>(this.url + '/pessoa');
  }

  //   getCarById(codigo_pessoa): Observable<Car>  {
  //     return this.httpClient.get<Car>(this.url + '/', { params: codigo_pessoa});
  // }

  getEndereco(): Observable<PessoaDto> {
    return this.httpClient.get<PessoaDto>(this.url + '/pessoa_fisica')
  }

  getCarById(codigo_pessoa): Observable<PessoaDto> {
    let params = new HttpParams().set("codigo_pessoa", codigo_pessoa);
    return this.httpClient.get<PessoaDto>(this.url + '/pessoa', { params });
  }



  // Obtem um carro pelo id
  // getCarById(codigo_pessoa: number): Observable<Car> {
  //   console.log(codigo_pessoa)
  //   return this.httpClient.get<Car>(this.url + '/' + codigo_pessoa)

  // }
  //   saveCar(pessoa) {
  //     return this.httpClient.put(this.url, JSON.stringify(pessoa), this.httpOptions)

  // }

  updateCar(pessoa: Pessoa): Observable<PessoaDto> {
    console.log(pessoa)
    return this.httpClient.put<PessoaDto>(this.url + "/pessoa", JSON.stringify(pessoa), this.httpOptions);
  }

  updateEndereco(endereco: Enderecos): Observable<any> {
    return this.httpClient.put<any>(this.url + "/pessoa/enderecos/pessoa_endereco", JSON.stringify(endereco), this.httpOptions);
  }

  
  // MÉTODO ÚNICO GERAL
  // savePessoa(pessoa: PessoaDto) {
  //   return this.http.post<any>(this.baseApiUrl + "/Cadastro/api/Pessoa/", pessoa)
  // }

  // updatePessoa(pessoa: PessoaDto) {
  //   return this.http.put<any>(this.baseApiUrl + "/Cadastro/api/Pessoa/", pessoa)
  // }

  // Método para alterar um endereco de pessoa
     //Para alterar um endereco e importante o campo codigo_pessoa e numero_sequencia_endereco estarem preenchidos
  // updateEnderecoPessoa(pessoaEndereco: PessoaEndereco) {
  //   let pessoaDto = new PessoaDto; Cria objeto base
  //    pessoaDto.enderecos.pessoa_endereco.push(pessoaEndereco);
  //   return this.http.put<any>(this.baseApiUrl + "/Cadastro/api/Pessoa/", pessoaDto)
  // }

  //Método para criar um endereco de pessoa
      //Para criar um endereco e importante o campo codigo_pessoa preenchido e numero_sequencia_endereco null
  // saveEnderecoPessoa(pessoaEndereco: PessoaEndereco) {
  //   let pessoaDto = new PessoaDto; Cria objeto base

  //   pessoaDto.enderecos.pessoa_endereco.push(pessoaEndereco);
  //   return this.http.post<any>(this.baseApiUrl + "/Cadastro/api/Pessoa/", pessoaDto)
  // }


  //OK - 204 > 400 sobrescrição
  ///pessoa/endereco/pessoa_endereco


  // deleta um carro
  // deleteCar(car: PessoaDto) {
  //   return this.httpClient.delete<PessoaDto>(this.url + "/" + car.codigo_pessoa, this.httpOptions
  //   );
  // }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
