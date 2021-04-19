import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Plugins} from '@capacitor/core';
const { Storage } = Plugins;
import firebase  from 'firebase/app';

const CART_STORAGE_KEY = "MY_CART";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  cart = new BehaviorSubject({});
  cartKey = null;
  breakfastMenuCollection: AngularFirestoreCollection;
  dessertMenuCollection: AngularFirestoreCollection;
  saladMenuCollection: AngularFirestoreCollection;

  constructor( private afs: AngularFirestore) {
    this.breakfastMenuCollection = this.afs.collection('/menus/saladMenu/breakfastMenu');
    this.dessertMenuCollection = this.afs.collection('/menus/saladMenu/dessertMenu');
    this.saladMenuCollection = this.afs.collection('/menus/saladMenu/saladMeals');
    this.loadCart();
  }

  getBreakfastMenus(){
    return this.breakfastMenuCollection.valueChanges();
  }

  getDessertMenus(){
    return this.dessertMenuCollection.valueChanges();
  }

  getsaladMenus(){
    return this.saladMenuCollection.valueChanges();
  }

  async loadCart(){

    const result = await Storage.get({ key: CART_STORAGE_KEY});
    if (result.value){
      //already have a cart
    } else{
      const fbDocument = await this.afs.collection('carts').add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log("new cart: ", fbDocument);
      console.log("helloo")
      this.cartKey = fbDocument.id;
      await Storage.set({key: CART_STORAGE_KEY, value: this.cartKey});
    }

  }
  

}
