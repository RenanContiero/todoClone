import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  valorAtual:any

  status:boolean;
  title = 'Ajustar Tarefas';
  show: boolean = true;

  // decorator que espera os dados do array
  @Input() todos: Array<any>

  constructor() { }

  ngOnInit(): void {
  }

  removerItem(item) {
    let index: number = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    if (this.todos.length == 0) {
      this.show = false;
    }
  }

  editarItem(item) {
    let index: number = this.todos.indexOf(item);
     let newValor = window.prompt("Digite o novo valor:");
     this.valorAtual = newValor;
     console.log(newValor)

    // if (this.todos.length == 0) {
      // this.show = false;
    // }
  }

  // markAsDone() {
  //   let lista = this.todos
  //   console.log("asa")
  //   for (let item=0; item < lista.length; item++) {
  //     lista[item].status =! lista[item].status
  //   }
  // }

  markAsDone(todo){
    todo.status = true;
  }
 
  markAsUndone(todo){
    todo.status = false;
  }
}
