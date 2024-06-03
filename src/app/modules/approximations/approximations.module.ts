import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApproximationsListComponent } from './approximations-list/approximations-list.component';
import { ApproximationsPostComponent } from './approximations-post/approximations-post.component';
import { ApproximationsRoutingModule } from './approximations-routing.module';


@NgModule({
  declarations: [
    ApproximationsListComponent,
    ApproximationsPostComponent
  ],
  imports: [
    CommonModule,
    ApproximationsRoutingModule
  ]
})
export class ApproximationsModule { }
