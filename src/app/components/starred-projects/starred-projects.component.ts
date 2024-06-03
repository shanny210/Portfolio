import { Component } from '@angular/core';

@Component({
  selector: 'app-starred-projects',
  standalone: true,
  imports: [],
  templateUrl: './starred-projects.component.html',
  styleUrl: './starred-projects.component.scss'
})
export class StarredProjectsComponent {
  todoCardFlipped = false;
  musicApiCardFlipped = false;
  flickPickerFlipped = false;
  dicerOrDieFlipped = false;

  onFlipCard(projectName: string) {
  switch(projectName) {
    case 'todolist':
      this.todoCardFlipped = !this.todoCardFlipped;
      break;
    case 'musicapi':
      this.musicApiCardFlipped = !this.musicApiCardFlipped;
      break;
    case 'flickpicker':
      this.flickPickerFlipped = !this.flickPickerFlipped;
      break;
    case 'diceordie':
      this.dicerOrDieFlipped = !this.dicerOrDieFlipped;
      break;
  }
  }
}
