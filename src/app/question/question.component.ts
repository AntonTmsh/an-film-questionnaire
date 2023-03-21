import { Component,Input } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  private _question!: Question;

  @Input()
  public questionNumber : Number = 0;

  @Input()
  get question(): Question {
    return this._question;
  };

  set question(value: Question) {
    // intercept input property changes w/ setter
    console.log('intercept input property changes w/ setter');
    this._question = value;
  }

  onClick() : void {
    console.log("onClick question");
  }
}
