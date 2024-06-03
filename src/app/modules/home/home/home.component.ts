import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imageUrls: string[] = [
    // 'assets/pictures/draw_1.jpg',
    'assets/pictures/pan_1.jpg',
    'assets/pictures/sea_1.jpg',
    'assets/pictures/chaplin_1.jpg'
  ];
}
