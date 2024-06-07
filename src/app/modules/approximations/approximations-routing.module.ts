import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproximationsListComponent } from './approximations-list/approximations-list.component';
import { ApproximationsPostComponent } from './approximations-post/approximations-post.component';
const routes: Routes = [
  { path: '', component: ApproximationsListComponent},
  { path: 'post/:id', component: ApproximationsPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproximationsRoutingModule { } 