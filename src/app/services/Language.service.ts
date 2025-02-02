import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}