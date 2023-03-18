import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: ""};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;

  constructor(inputname:string, inputcpf:string, inputemail:string) {
    this.nome = inputname;
    this.cpf = inputcpf;
    this.email = inputemail;
  }
}
