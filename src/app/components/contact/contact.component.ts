import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title:string;

  constructor() {
    this.title="Contacto";
   }

  ngOnInit(): void {
  }

}
