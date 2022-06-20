import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName: string = "";
  isEmpty: boolean=true; 

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName(){
    this.userName = "";
  }
}
