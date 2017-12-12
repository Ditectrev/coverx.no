import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { ImageService } from "../shared/image.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  title = 'Galleri';
  description = 'Under finner du kanskje et galleri av vårt arbeid';
  visibleImages: any[] = [];
  @Input() filterBy?: string = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }
}
