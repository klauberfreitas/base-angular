import { Enderecos } from '../content/endereco/endereco.dto';
import { TipoPessoa } from './tipo_pessoa.class';

export class Pessoa {
  codigo_pessoa : String;
  codigo_cliente : string;
  cpf_cnpj: String;
  nome_pessoa : String;
  codigo_sexo : Number;
  menor_emancipado : Boolean;
  data_referencia_menda_mensal : Date;
  tipo_pessoa: TipoPessoa;
  autorizacao_bacen: boolean;



    pessoa_endereco: any;
    enderecos: Enderecos;

   




}
