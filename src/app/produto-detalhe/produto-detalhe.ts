import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})

export class ProdutoDetalhe {
  @Input() nomeProduto = signal('');
  @Input() precoProduto = signal(0);
  @Input() urlImg = signal('');

  @Input() nome_p = signal<string>('');
  @Input() preco_p = signal<number>(0);
  @Input() urlImg_p = signal<string>('');

  @Output() clicado = new EventEmitter<void>();

  
}
