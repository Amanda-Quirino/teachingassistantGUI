import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: "", loginGitHub: ""};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  loginGitHub: string;

  constructor(inputname:string, inputcpf:string, inputemail:string, inputGitHub:string) {
    this.nome = inputname;
    this.cpf = inputcpf;
    this.email = inputemail;
    this.loginGitHub = inputGitHub;
  }
}
