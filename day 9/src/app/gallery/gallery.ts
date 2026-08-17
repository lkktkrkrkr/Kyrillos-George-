import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html'
})
export class Gallery {
  p = [
    { t: 'Nike Landing Page', d: 'Premium e-commerce landing page with bold typography.', img: '1.png' },
    { t: 'NEWW(AI)VE', d: 'High-tech digital couture landing page with glassmorphism.', img: '2.png' },
    { t: 'Chevrolet Camaro', d: 'Automotive landing page with dynamic split-screen design.', img: '3.png' }
  ];
}
