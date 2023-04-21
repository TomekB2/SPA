import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { KalkulatorNagazowaniaComponent } from './KalkulatorNagazowania/KalkulatorNagazowania.component';
import { kalkulatorAlkoholuComponent } from './kalkulatorAlkoholu/kalkulatorAlkoholu.component';
import { PrzelicznikGestosciComponent } from './PrzelicznikGestosci/PrzelicznikGestosci.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    KalkulatorNagazowaniaComponent,
    kalkulatorAlkoholuComponent,
    PrzelicznikGestosciComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'KalkulatorNagazowania', component: KalkulatorNagazowaniaComponent },
      { path: 'kalkulatorAlkoholu', component: kalkulatorAlkoholuComponent },
      { path: 'PrzelicznikGestosci', component: PrzelicznikGestosciComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
