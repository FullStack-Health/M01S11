import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaProdutos = [
    {
      imagem: 'assets/images/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/images/abacate.jpg',
      descricao: 'Abacate'
    },
    {
      imagem: 'assets/images/maca.jpg',
      descricao: 'Maça'
    },
    {
      imagem: 'assets/images/mamao.jpg',
      descricao: 'Mamão'
    },
    {
      imagem: 'assets/images/pera.jpg',
      descricao: 'Pera'
    },
    {
      imagem: 'assets/images/uva.jpg',
      descricao: 'Uva'
    }
  ];
  textoPesquisa: string | undefined;
  listaProdutosFiltro = this.listaProdutos;

  pesquisar() {
    if(!this.textoPesquisa) {
      this.listaProdutosFiltro = this.listaProdutos;
    } else {
      this.listaProdutosFiltro = this.listaProdutos.filter(item => item.descricao === this.textoPesquisa);
    }
  }
}
