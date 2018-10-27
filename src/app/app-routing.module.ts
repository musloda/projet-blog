import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'default', component: IndexComposantsComponent },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
