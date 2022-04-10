import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselCarsComponent } from './carousel-cars/carousel-cars.component';

@NgModule({
  declarations: [CarouselComponent, HomeComponent, CarouselCarsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
