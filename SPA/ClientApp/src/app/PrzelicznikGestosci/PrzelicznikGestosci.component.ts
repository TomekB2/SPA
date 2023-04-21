import { Component } from '@angular/core';

@Component({
  selector: 'app-PrzelicznikGestosci',
  templateUrl: './PrzelicznikGestosci.component.html'
})
export class PrzelicznikGestosciComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
