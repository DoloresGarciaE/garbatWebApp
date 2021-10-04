import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
