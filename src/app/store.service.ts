import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(collectionName: string) {
    return this.firestore.collection(collectionName);
  }
  
  getPedidos(){
    let pedidos: Observable<any[]>;
    pedidos = this.getCollection('pedidos').snapshotChanges().pipe(
      map(pedidos=>{
        return pedidos.map(
          pedido=>{
            const pedidoData = pedido.payload.doc.data() as any;
            pedidoData.id = pedido.payload.doc.id;
            return pedidoData;
          }
        )
      })
    );    
    return pedidos;
  }
}
