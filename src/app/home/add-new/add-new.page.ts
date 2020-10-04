import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { HandleDBService } from '../handleDB.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage {
  contact: Contact = {
    name: "",
    phone: "",
    address: ""
  };
  
  constructor(private handleDBService: HandleDBService, private toastController: ToastController) {}

  addContact() {
    this.handleDBService.addContact(this.contact).then(value => {
      this.showToast();
    });
  }

  async showToast() {
    console.log('Added Successfully!');
    const toast = await this.toastController.create({
      message: 'Contact Added Successfully!',
      duration: 2000
    });
    toast.present();
  }
}
