import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cta-link',
  imports: [NgClass, RouterLink],
  templateUrl: './cta-link.html',
  styleUrl: './cta-link.css',
})
export class CtaLink {
  // Ange höjd, bredd, bakgrundsfärg och färg i parent
  @Input() text:string = "";
  @Input() route:string = "";
  @Input() variant:string = "";
}
