import { Component } from '@angular/core';
import { LanguageService } from '../../services/Language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  constructor(private languageService: LanguageService) {}

}
