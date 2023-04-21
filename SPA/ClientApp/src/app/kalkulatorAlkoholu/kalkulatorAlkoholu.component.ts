import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kalkulatorAlkoholu',
  templateUrl: './kalkulatorAlkoholu.component.html'
})
export class kalkulatorAlkoholuComponent {
  public EkstPocz = 0;
  public EkstKon = 0;
  public Alko = 0;
  public img = "https://browin.pl/static/images/1600/multimierz-pom-stez-cukru-i-pot-alkoholu-405551_.jpg";

  public LiczAlk() {
    this.Alko = (this.EkstPocz - this.EkstKon) / 1.938;
  }
}

