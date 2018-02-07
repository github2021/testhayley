import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import * as _find from 'lodash/find';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  url = "https://jsonplaceholder.typicode.com/posts"
  modalDisplay = false

  constructor(private http: Http) {}

  //observables
  getPosts$() { return this.http.get(this.url) }

  confirmModal() { this.modalDisplay = true }
  closeModal() { this.modalDisplay = false }

  getPostsButton() {
    this.getPosts$().subscribe(x => {

      const data = x.json()
      const hayley = _find(data, { id: 7 })

      console.log(hayley);
      console.log("");
      console.log(data)

    })
  }

  ngOnInit() {}

}
