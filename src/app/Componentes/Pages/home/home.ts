import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  irALogin(){
    window.location.href = 'http://localhost:3000';
  }

}
