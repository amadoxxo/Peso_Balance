import { Component, ViewChild} from '@angular/core';
import { StorageService, Item } from '../../services/storage.service';
import { Platform, ToastController, IonList} from '@ionic/angular';


@Component({
  selector: 'app-config-pallets',
  templateUrl: './config-pallets.component.html',
  styleUrls: ['./config-pallets.component.scss'],
})
export class ConfigPalletsComponent {

  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toastControler: ToastController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Dato agregado');
      this.loadItems();
    });
  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  updateItem(item: Item) {
    item.title = `ACTUALIZADO: ${item.title}`;
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showToast('Dato actualizado');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Dato eliminado');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  async showToast(msg) {
    const toast = await this.toastControler.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

}
