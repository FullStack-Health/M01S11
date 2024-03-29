import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidatorService } from '../shared/services/custom-validator.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatIconModule, ToastModule], //Importação do Modulo de Reative Forms
  providers: [CustomValidatorService, MessageService],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required, this.customValidatorService.validaNomeCompleto()]),
    codigoUsuario: new FormControl('', [Validators.minLength(5), Validators.maxLength(10), Validators.required]),
    senha: new FormControl('', [Validators.minLength(4), Validators.required]),
    confirmarSenha: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  constructor(
    private customValidatorService: CustomValidatorService,
    private messageService: MessageService) {}

  cadastrar() {
    if (this.form.valid) {
      const usuario = {
        codigoUsuario: this.form.value.codigoUsuario,
        senha: this.form.value.senha
      }
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Usuário logado' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Falha', detail: 'Formulário inválido. Verifique o preenchimento para continuar' });
    }
  }
}
