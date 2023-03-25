import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }

    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

   remover(aluno: Aluno): Aluno {
    var existe: number = this.alunos.findIndex(((alunoc) => alunoc == aluno));
    var result: Aluno = aluno;
    if (existe != -1) this.alunos.splice(existe, 1);
    else result = null;
    return result;
   }

   getAluno(cpf:string): Aluno {
    return this.alunos.find((aluno) => aluno.cpf = cpf);
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}