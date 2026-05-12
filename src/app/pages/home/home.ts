import { Component } from '@angular/core';
import { Image } from '../../components/image/image';
import { CtaLink } from '../../components/cta-link/cta-link';

@Component({
  selector: 'app-home',
  imports: [Image, CtaLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
