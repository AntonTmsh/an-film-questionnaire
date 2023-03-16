import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmQuestionnaireComponent } from './film-questionnaire.component';

describe('FilmQuestionnaireComponent', () => {
  let component: FilmQuestionnaireComponent;
  let fixture: ComponentFixture<FilmQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
