import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  selector: 'app-approximation-card',
  templateUrl: './approximation-card.component.html',
  styleUrls: ['./approximation-card.component.scss']
})
export class ApproximationCardComponent {
  @Input()  title: string = '';
  @Input()  imageUrl: string = '';
  @Input()  abstract: string = '';
  @Input()  id: number = 0;
}