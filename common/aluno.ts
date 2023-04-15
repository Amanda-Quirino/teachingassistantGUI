export class Aluno {
  nome!: string;
  cpf!: string;
  email!: string;
  metas!: Record<string,string>;
  metasAuto!: Record<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = {};
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
    this.copyMetasAutoFrom(from.metasAuto);
  }

  copyMetasFrom(from: Record<string, string>): void {
    this.metas = {};
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }

  copyMetasAutoFrom(from: Record<string, string>): void {
    this.metasAuto = {};
    for (let key in from) {
      this.metasAuto[key] = from[key];
    }
  }
}
