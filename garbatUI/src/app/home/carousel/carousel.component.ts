import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    debugger;
  }

  ngOnInit(): void {
  }



}
