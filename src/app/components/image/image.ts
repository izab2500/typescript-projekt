import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  imports: [NgOptimizedImage],
  templateUrl: './image.html',
  styleUrl: './image.css',
})
export class Image {
  @Input() src = '';
  @Input() alt = '';
  @Input() height?: number;
  @Input() width?: number;
  @Input() priority = false;

}
