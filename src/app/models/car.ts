import { Enderecos } from '../content/endereco/endereco.dto';
import { Pessoa } from './pessoa.class';

export class PessoaDto {
    pessoa: Pessoa
    // codigo_pessoa : String;
    // codigo_cliente : string;

    // cpf_cnpj: String;
    // nome_pessoa : String;
    // codigo_sexo : Number;
    // menor_emancipado : Boolean;
    // data_referencia_menda_mensal : Date;
    // tipo_pessoa: String;
    // pessoa_endereco: any;
    enderecos: Enderecos;



}
