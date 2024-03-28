import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], //Importação do Modulo de Reative Forms
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoUsuario: new FormControl('', [Validators.minLength(5), Validators.maxLength(10), Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
    confirmarSenha: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  cadastrar() {
    if (this.form.value.senha === this.form.value.confirmarSenha) {
      const usuario = {
        codigoUsuario: this.form.value.codigoUsuario,
        senha: this.form.value.senha
      }
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
  }
}
