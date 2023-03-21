import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  titleValue : string = "";
  questionTitle!: string;

  constructor(private Activatedroute: ActivatedRoute) {}

  ngOnInit() {

    this.titleValue = this.Activatedroute.snapshot.queryParamMap.get('title') || "";
    console.log(`title : ${(this.titleValue)}`)
  }

  onSetValues(
    questionField: HTMLInputElement
  ): void {
      this.questionTitle = questionField.value;
  }
}
