import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-approximation-card',
  templateUrl: './approximation-card.component.html',
  styleUrls: ['./approximation-card.component.scss']
})
export class ApproximationCardComponent {
  @Input()  title: string = '';
  @Input()  imageUrl: string = '';
  @Input()  content: string = '';
  @Input()  id: number = 0;
}