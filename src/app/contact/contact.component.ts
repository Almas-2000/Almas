import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    name: '',
    email:  '',
    subject: '',
    message: ''
};

onSubmit(user: any) {
    console.log(user);
}


}
