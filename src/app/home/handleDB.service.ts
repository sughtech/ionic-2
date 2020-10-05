import { Injectable } from "@angular/core";
import { Contact } from "./contact";

@Injectable({
  providedIn: "root",
})
export class HandleDBService {
  endpoint = "https://ng-ls-promises.firebaseio.com/contacts.json";

  constructor() {}

  apiReq(config?: RequestInit) {
    return fetch(this.endpoint, config);
  }

  addContact(contact: Contact) {
    const config: RequestInit = {
      method: "POST",
      body: JSON.stringify(contact),
    };
    return this.apiReq(config).then(res => res.json());
  }

  test() {
    // this.addContact({
    //   name: "Job",
    //   address: "555",
    //   phone: "0808080",
    //   avatarUrl: "https://google.com",
    // }).then(console.log.bind(console));
    this.fetchContacts().then(value => {
        console.log(value);
    });
  }

  fetchContacts(): Promise<Contact[]> {
    const config = {};
    return this.apiReq(config).then((res) => {
    return res.json();
    }).then(value => {
        return Object.values(value);
    });
  }
}
