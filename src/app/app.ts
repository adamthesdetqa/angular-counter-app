import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  count = signal(0);

  increment() {
    this.count.update((c) => ++c);
  }
  decrement() {
    this.count.update((c) => --c);
  }

  getCounterStatus(): string {
    if (this.count() > 0) {
      return 'positive';
    } else if (this.count() < 0) {
      return 'negative';
    } else {
      return 'zero';
    }
  }
}
// use ngSwitch to show if positive or negatove
