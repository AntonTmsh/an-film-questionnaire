import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../models/question.model';
import { FilmDataService } from '../film-data.service'
import { FilmModel } from '../models/film.model';
import { Subscription } from 'rxjs';
import { CommunicatorService } from '../communicator.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit, OnDestroy{

  //filmTitles: Array<string> = ['Film1','Film2','Film3','Film4'];

  //@Output() addQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() clearQuestions: EventEmitter<any> = new EventEmitter<any>();

  private quesNumber : number = 0;
  private sub: Subscription | undefined;
  filmTitles :Array<FilmModel> | undefined;
  question: Question = new Question();

  constructor(
    private filmDataService : FilmDataService,
    private communicatorService : CommunicatorService
  ) { }

  ngOnInit() {
    this.sub = this.filmDataService.getFilms()
      .subscribe(films => this.filmTitles = films);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  // onSubmit(questionForm: NgForm): void {
  //   console.log('you submitted value:', questionForm);
  //   console.log(`Saved: ${JSON.stringify(questionForm.value)}`);

  //     const question = new Question(
  //     this.question.userName,
  //     this.question.filmTitle,
  //     this.question.likeFilm,
  //     this.quesNumber++,
  //   );

  //   this.addQuestion.emit(question);
  // }

  onSubmit(questionForm: NgForm): void {
    console.log('you submitted value:', questionForm);
    console.log(`Saved: ${JSON.stringify(questionForm.value)}`);

      const question = new Question(
      this.question.userName,
      this.question.filmTitle,
      this.question.likeFilm,
      this.quesNumber++,
    );
    this.communicatorService.publishData(question);
  }

  onClear() : void {
    console.log('Clear all questions')
    this.quesNumber = 0;
    this.clearQuestions.emit();
  }
}
