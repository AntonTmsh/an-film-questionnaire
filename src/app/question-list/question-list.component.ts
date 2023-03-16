import { Component,Input } from '@angular/core';
import { type Question } from '../models/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  
  @Input()
  questions!: Array<Question>;
}
