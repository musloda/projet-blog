import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { GalerieComponent } from './galerie/galerie.component';
import { CvComponent } from './cv/cv.component';

const routes: Routes = [
  { path: '', component: IndexComposantsComponent },
  { path: 'projets', component: GalerieComponent },
  { path: 'cv', component: CvComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
