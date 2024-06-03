import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApproximationService } from 'src/app/services/approximation.service';
import { Approximation } from '../models/approximation.model';

@Component({
  selector: 'app-approximations-post',
  templateUrl: './approximations-post.component.html',
  styleUrls: ['./approximations-post.component.scss']
})
export class ApproximationsPostComponent implements OnInit {

  approximation: Approximation|undefined;

  constructor(private route: ActivatedRoute, private approximationService: ApproximationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Asegúrate de convertir el id a número
      this.approximationService.getApproximationById(id).subscribe(approximation => this.approximation = approximation);
    });
  }

}
