import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from '../models/todo';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  guardaData: any

  valores: any;
  todos: Todo[] = []
  nomeTarefa: string;
  controle: number = 0

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.valores = {}
    // this.service.create().subscribe(
    //   success => console.log("Dei Post")
    // )

    // this.service.listar().subscribe((data) => {
    //   this.valores = Object.create(data).cartoes;
    //   console.log(this.valores);
    // });


    this.service.getCurrency().subscribe(
      (resposta) => {
        this.guardaData = new Object(resposta)
        console.log(this.guardaData)

      }
    )
  }




  //   ngOnInit() {
  //     this.myservice.getData('USD').subscribe((data) => {
  //       this.persondata =  Object.create(data).rates;
  //        console.log(this.persondata);
  //        this.dolar = this.persondata.BRL.toFixed(2);
  //     })
  //  };

  // criar() {
  //   this.service.criar(this.valores).subscribe(resposta => {
  //     this.valores.push(resposta);
  //   });
  // }




  guardaTarefa(event) {
    this.nomeTarefa = event.target.value;
    event.target.value = ""
  }

  //adiciona o item como o primeiro do array
  adicionarItem(event) {
    if (this.nomeTarefa == undefined || this.nomeTarefa == "") {
      alert("Digite uma tarefa")
    } else {
      let nome = this.nomeTarefa;
      let status = false;
      let id: number = +1
      this.todos.push(new Todo(id, nome, status));
    }
  }


}
