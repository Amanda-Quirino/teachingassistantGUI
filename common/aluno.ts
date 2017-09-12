export class Aluno {
  nome!: string;
  cpf!: string;
  email!: string;
  metas!: Object;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = new Object();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.copyMetasFrom(from.metas);
  }

  copyMetasFrom(from: Object): void {
    this.metas = new Object;
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}