import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html'
})
export class About {
  h = [
    { t: 'Mobile Development', d: 'Flutter' },
    { t: 'Full-Stack', d: 'Web & APIs' },
    { t: 'UI/UX', d: 'Design' },
    { t: 'Teaching', d: 'Mentoring' }
  ];
}
