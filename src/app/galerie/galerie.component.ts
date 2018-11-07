import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Projet } from '../common/projet';
import { ProjetService } from '../common/projet.service';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  tabProj: Projet[];

  constructor(private serviceProjet: ProjetService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tabProj = this.serviceProjet.get();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
