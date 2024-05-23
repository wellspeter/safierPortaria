export interface Acesso{
    id?: number;
    nome: string;
    cpf: string;
    telefone: number;
    datainicial:Date;
    datafim?:Date;
    horasinicio?:number;
    horafim?:number;
    repetir?:string;
    alerta?:string;
    imagem?:Blob;
    endereco:number;
}
