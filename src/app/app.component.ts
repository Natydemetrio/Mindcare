import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [Router],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mindcare';

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

}
