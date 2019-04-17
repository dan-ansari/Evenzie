import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[NgbCarouselConfig]
})

export class GalleryComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/1300/800?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) { 
    config.interval = 8000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
