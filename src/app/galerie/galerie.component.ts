import { Component, OnInit } from '@angular/core';
import { Projet } from '../common/projet';
import { ProjetService } from '../common/projet.service';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  tabProj: Projet[];

  constructor(private serviceProjet: ProjetService) { }

  ngOnInit() {
    this.tabProj = this.serviceProjet.get();
  }

}
