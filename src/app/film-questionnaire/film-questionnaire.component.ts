import { Component, type OnInit, type OnDestroy} from '@angular/core';
import { type Question } from '../models/question.model';
import { type Subscription } from 'rxjs';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-film-questionnaire',
  templateUrl: './film-questionnaire.component.html',
  styleUrls: ['./film-questionnaire.component.css']
})
export class FilmQuestionnaireComponent {
  questions: Array<Question> = [];
  public questionNumber: Number = 0;

  private sub!: Subscription;

  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.sub = this.communicatorService.channel$.subscribe(
      question => {
        console.log('add question via CommunicatorService', question);

        let index = this.questions.findIndex(x => x.userName === question.userName);
        if (index != -1){
          this.questions[index] = question;
        }
        else{
          this.questionNumber = this.questions.push(question);
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // onAddQuestion(question: Question): void {
  //   console.log('onAddQuestion method', question);

  //   let index = this.questions.findIndex(x => x.userName === question.userName);
  //   if (index != -1){
  //     this.questions[index] = question;
  //   }
  //   else{
  //     this.questionNumber = this.questions.push(question);
  //   }
    
  // }

  onClearQuestions(): void {
    this.questions = [];
    this.questionNumber = 0;
    console.log('questions length', this.questions.length);
  }
}
