export interface Pessoa{
    id_pessoa:number;
    nu_cpf:string;
    nu_cnpj:string;
    tipo_pessoa:string;
    nome:string;
    endereco:string;
    cidade:string;
    uf:string;
    imagem:Blob;
    telefone:string;
}