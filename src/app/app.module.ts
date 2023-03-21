import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { FilmQuestionnaireComponent } from './film-questionnaire/film-questionnaire.component';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    FilmQuestionnaireComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    OnChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
