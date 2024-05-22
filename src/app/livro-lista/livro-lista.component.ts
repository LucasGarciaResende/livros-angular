import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  private servEditora: ControleEditoraService;
  private servLivro: ControleLivrosService;
  
  constructor() { 
    this.servEditora = new ControleEditoraService();
    this.servLivro = new ControleLivrosService();
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivro.obterLivros();
  }

  public excluir = (codigo: number) => {
    this.servLivro.excluir(codigo);
    this.livros = this.servLivro.obterLivros();
  }

  public obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
