import { Component } from '@angular/core';

@Component({
  selector: 'app-KalkulatorNagazowania',
  templateUrl: './KalkulatorNagazowania.component.html'
})
export class KalkulatorNagazowaniaComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
