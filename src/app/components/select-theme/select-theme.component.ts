import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Themes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.css']
})
export class SelectThemeComponent implements OnInit {

  themes: Themes[];

  @Output() themeSelectChange = new EventEmitter();

  ngOnInit() {
    this.themes = [
      { value: 'allCategories-0', viewValue: 'Все категории' },
      { value: 'dataBase-1', viewValue: 'Базы данных' },
      { value: 'webProgramming-2', viewValue: 'Веб-программирование' },
      { value: 'programmingLang-3', viewValue: 'Языки программирования' },
      { value: 'mobileDev-4', viewValue: 'Мобильная разработка' },
      { value: 'other-5', viewValue: 'Другое' }
    ];
  }

  onChange(e: string) {
    this.themeSelectChange.emit(e);
  }
}
