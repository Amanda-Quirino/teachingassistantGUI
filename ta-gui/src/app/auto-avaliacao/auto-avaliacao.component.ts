import { Component } from '@angular/core';

import { Aluno } from '../../../../common/aluno';
import { AlunoService } from 'src/app/aluno.service';

@Component({
  selector: 'app-auto-avaliacao',
  templateUrl: './auto-avaliacao.component.html',
  styleUrls: ['./auto-avaliacao.component.css']
})
export class AutoAvaliacaoComponent {
  constructor(private alunoService: AlunoService) {}

    alunos!: Aluno[];

    atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno).subscribe(
         (a) => { if (a == null) alert("Unexpected fatal error trying to update student information! Please contact the systems administratos."); },
         (msg) => { alert(msg.message); }
      );
    }

    ngOnInit(): void {
      this.alunoService.getAlunos()
      .subscribe(
         (as) =>  { this.alunos = as; },
         (msg) => { alert(msg.message); }
      );
    }
}
