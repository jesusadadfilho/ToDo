export class Tarefa{
    descricao : String;
    responsavel : String;
    porcentagem : number;

    constructor(desc? : String, resp? : String){
        this.descricao = desc;
        this.responsavel = resp;
        this.porcentagem = 0;
    }

    
}