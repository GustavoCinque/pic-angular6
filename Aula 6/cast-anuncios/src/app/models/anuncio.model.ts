export class Anuncio {
    constructor(
        public id: number, 
        public tipo: number,
        public nome:string,
        public descricao: string,
        public valor: string,
        public contato: string){}
}