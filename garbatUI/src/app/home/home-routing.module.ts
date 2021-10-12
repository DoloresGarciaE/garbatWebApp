import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselCarsComponent} from './carousel-cars/carousel-cars.component';

const routes: Routes = [
{
  path: '', component: CarouselCarsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
