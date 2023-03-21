import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmQuestionnaireComponent } from './film-questionnaire/film-questionnaire.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: FilmQuestionnaireComponent
  },
  {
    path: 'details',
    component: QuestionDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
