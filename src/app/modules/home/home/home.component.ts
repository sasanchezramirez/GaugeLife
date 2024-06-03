import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageUrls: string[] = [
    'assets/pictures/pan1.jpg',
    'assets/pictures/pan2.jpg',
    'assets/pictures/pan3.jpg'
  ];
}
