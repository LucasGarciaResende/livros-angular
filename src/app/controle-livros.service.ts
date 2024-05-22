import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java', autores: ['Bert Bates', 'Kathy Sierra', 'Cay Horstman']},
    {codigo: 2, codEditora: 2, titulo: 'Java: Como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', autores: ['Paul Deitel', 'Harvey Deitel']},
    {codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Core Java® for the Impatient is a complete but concise guide to Java SE 8. Written by Cay Horstmann—the author of Java SE 8 for the Really Impatient and Core Java™', autores: ['Cay Horstmann']}
];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro) {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number) {
    this.livros.splice(this.livros.findIndex(livro => livro.codigo === codigo), 1);

  }

  constructor() { }
}
