import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Todo } from './models/todo';

//const apiUrl = "https://ceep.herokuapp.com/cartoes/salvar?usuario=pedro@email.com.br";

const urlPost = "https://ceep.herokuapp.com/cartoes/salvar";
const urlGet = "https://ceep.herokuapp.com/cartoes/carregar/?usuario=pedro@email.com.br";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //public usuario: "pedro@email.com.br";
  // public cartoes: [
  //   { conteudo: "Teste", cor: "rgb(118, 239, 64)" }
  // ]

  constructor(private http: HttpClient) { }

  // criar(valores: any) {
  //   return this.http.post(this.valoresUrl, this.cartoes)
  // }

  listar() {
    //return this.http.get<Array<any>>(urlGet);
    return this.http.get(urlGet);
  }

  getCurrency() {
    return this.http.get(urlGet)
  }

}
