import { Component, OnInit } from '@angular/core';
import { ApproximationService } from 'src/app/services/approximation.service';
import { Approximation } from '../models/approximation.model';

@Component({
  selector: 'app-approximations-list',
  templateUrl: './approximations-list.component.html',
  styleUrls: ['./approximations-list.component.scss']
})
export class ApproximationsListComponent implements OnInit {

  approximations: Approximation[] = [];

  constructor(private approximationService: ApproximationService) { }

  ngOnInit(): void {
    this.approximationService.getApproximations().subscribe(approximations => this.approximations = approximations);
  }

}
