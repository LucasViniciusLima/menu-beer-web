import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu-beer';
  itensCarrinho: Array<any> = [];

  constructor(private store: StoreService) {
    this.getPedidos();
  }

  ngOnInit() {
  }

  getPedidos() {
    this.store.getPedidos().subscribe(lista => this.itensCarrinho = lista);
  }

}
