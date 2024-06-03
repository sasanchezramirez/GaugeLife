import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/shared/core/header/header.component';
import { ImageContainerComponent } from 'src/app/shared/utils/image-container/image-container.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    HomeRoutingModule,
    ImageContainerComponent
  ]
})
export class HomeModule { }
