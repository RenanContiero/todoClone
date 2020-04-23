import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  // @Input() valorAtualizado:any; 
  nomeTarefa:string;

  controle:number = 0
  constructor() { }

  ngOnInit(): void { 

  }

  todos: Todo[] = []

  guardaTarefa(event){
    this.nomeTarefa = event.target.value
  }

  //adiciona o item como o primeiro do array
  adicionarItem(event){
   if (this.nomeTarefa == undefined || this.nomeTarefa == ""){
     alert("Digite uma tarefa")
   }else{
     let nome = this.nomeTarefa;

     let status = false;
     this.todos.push(new Todo(nome, status));
     
   }
  } 
  // atualizarItem(){
  //   this.todos.get(nome) = valorAtual;
  //   this.nomeTarefa = valorAtual;
  //   console.log(this.nomeTarefa);
  // }
}
