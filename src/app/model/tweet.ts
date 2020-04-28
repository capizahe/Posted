import { User } from './user';

export class Tweet {
    autor: User;
    descripcion: string;
    fecha: Date;
    correo: string;

    constructor(autor?:User, descripcion?:string){
        this.autor=autor;
        this.descripcion=descripcion;
        this.fecha= new Date();
    }
}
