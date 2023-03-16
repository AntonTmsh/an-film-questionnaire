import { Component } from '@angular/core';
import { type Question } from '../models/question.model';

@Component({
  selector: 'app-film-questionnaire',
  templateUrl: './film-questionnaire.component.html',
  styleUrls: ['./film-questionnaire.component.css']
})
export class FilmQuestionnaireComponent {
  questions: Array<Question> = [];

  onAddQuestion(question: Question): void {
    console.log('onAddTask method', question);
    this.questions.push(question);
  }
}
