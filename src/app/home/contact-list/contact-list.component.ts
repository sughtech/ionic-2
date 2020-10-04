import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { HandleDBService } from '../handleDB.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  doRefresh(event){
    this.fetchContacts().then(value => {
      event.target.complete();
    });
  }

  constructor(private handleDBService: HandleDBService) {}

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(){
    return this.handleDBService.fetchContacts().then(contacts => {
      return this.contacts = contacts;
    });
  }

  // refreshList(){
  //   this.contacts = undefined;
  //   this.fetchContacts();
  // }

}
