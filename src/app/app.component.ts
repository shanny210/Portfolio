import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { StarredProjectsComponent } from './components/starred-projects/starred-projects.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationBarComponent, WelcomePageComponent, TechStackComponent, StarredProjectsComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit(): void {
  }
}
