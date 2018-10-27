import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalerieComponent } from './galerie/galerie.component';
import { FooterComponent } from './footer/footer.component';
import { PageProjetComponent } from './page-projet/page-projet.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    GalerieComponent,
    FooterComponent,
    PageProjetComponent,
    ContactComponent,
    IndexComposantsComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
