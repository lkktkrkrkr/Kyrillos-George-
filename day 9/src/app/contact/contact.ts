import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html'
})
export class Contact {
  m = 'Send';
  u = { n: '', e: '', t: '' };

  f() {
    this.m = 'Sent!';
  }
}
