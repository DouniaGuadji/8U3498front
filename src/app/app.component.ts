import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables pour les champs du formulaire
  username: string = '';
  email: string = '';
  password: string = '';

  // Méthode pour mettre à jour les variables
  onInputChange(field: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (field === 'username') {
      this.username = target.value;
    } else if (field === 'email') {
      this.email = target.value;
    } else if (field === 'password') {
      this.password = target.value;
    }
  }

  // Méthode pour gérer la soumission
  onSubmit(event: Event) {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log('Nom d’utilisateur:', this.username);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);

    alert('Inscription réussie !');
  }
}
