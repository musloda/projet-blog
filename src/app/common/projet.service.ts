import { Injectable } from '@angular/core';
import { Projet } from './projet';
import projets from './tableau-projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

// declaration tableau projet
  tabProj: Projet[];

  constructor() {
// verifier si tableau n existe pas dans le Local storage
    if (!localStorage.projets) {
// initialiser local storage
      this.tabProj = projets.map((x) => {
        const projet = new Projet();
        projet.id = x.id;
        projet.nom = x.projet_name;
        projet.annee = x.annee;
        projet.ecole = x.ecole;
        projet.languages = x.languages;
        projet.image = x.image;
        projet.lien = x.lien_github;

        return projet;
      });
      this.saveToLocalStorage(this.tabProj);
    } else {
// si tableau existe recuperer donnee en conversion objet javascript (json)
        const data = JSON.parse(localStorage.projets);
// convertir data a Projet model
        this.tabProj = data;
    }
  }
saveToLocalStorage(projet) {
// convertir l objet en string
  const data = JSON.stringify(projet);
// enregistrer string dans le local storage
  localStorage.setItem('projets', data);
  }
// retourne le tableau projets
  get(): Projet[] {
    return this.tabProj;
  }
}
