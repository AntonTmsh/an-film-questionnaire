import { Component } from '@angular/core';
import { type Question } from '../models/question.model';

@Component({
  selector: 'app-film-questionnaire',
  templateUrl: './film-questionnaire.component.html',
  styleUrls: ['./film-questionnaire.component.css']
})
export class FilmQuestionnaireComponent {
  questions: Array<Question> = [];
  public questionNumber: Number = 0;

  onAddQuestion(question: Question): void {
    console.log('onAddTask method', question);

    let index = this.questions.findIndex(x => x.userName === question.userName);
    if (index != -1){
      this.questions[index] = question;
    }
    else{
      this.questionNumber = this.questions.push(question);
    }
    
  }

  onClearQuestions(): void {
    this.questions = [];
    this.questionNumber = 0;
    console.log('questions length', this.questions.length);
  }
}
