import { Component } from '@angular/core';
import { Image } from '../../components/image/image';
import { CtaLink } from '../../components/cta-link/cta-link';

@Component({
  selector: 'app-about',
  imports: [Image,CtaLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
