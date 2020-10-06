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

  showToast() {
    console.log('Added Successfully!');
    this.toastController.create({
      message: 'Contact Added Successfully!',
      duration: 2000
    }).then(toast => toast.present());
  }
}
