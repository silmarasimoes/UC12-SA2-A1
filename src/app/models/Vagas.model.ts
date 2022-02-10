export class Vaga {
    id: any = 0;
    nome: string = "";
    foto: string = "";
    descricao: string = "";
    salario: number = 0;
    expira: string = "";

    constructor(id:any,nome:string,foto: string,descricao: string,salario: number, expira: string){
        this.id = id;
        this.nome= nome;
        this.foto = foto;
        this.descricao = descricao;
        this.salario = salario;
        this.expira = expira;
    }
}