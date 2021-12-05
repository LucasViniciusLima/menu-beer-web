import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  pedido: any;
  
  nomeCliente: string;
  telefone: string;
  itensPedido: any;
  endereco: any;
  totalReceber: number = 0;

  constructor(private router: Router) { 
    if(this.router.getCurrentNavigation().extras.state == null) this.router.navigate(['/']);
    this.pedido = this.router.getCurrentNavigation()?.extras?.state?.pedido;
    this.nomeCliente = this.pedido?.dadosCliente?.name;
    this.telefone = this.pedido?.dadosCliente?.telefone;
    this.itensPedido = this.pedido?.itensCarrinho;
    this.endereco = this.pedido?.dadosCliente?.endereco;
    //this.totalReceber = ++this.pedido?.total;
  }

  ngOnInit(): void {
  }

  getTotal(): number{
    let total: number = 0;
    this.itensPedido.forEach(element => {
      total += element.price * element.quantidade;
    });
    return total;
  }

}
