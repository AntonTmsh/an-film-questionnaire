import { Injectable } from '@angular/core';
import { FilmModel } from './models/film.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class FilmDataService {

  private tasksUrl = 'http://localhost:3000/films';

  constructor(private http: HttpClient) {}

  //getFilms(): Promise<FilmModel[]> {
  //  const request$ = this.http.get(this.tasksUrl);
  //  return firstValueFrom(request$)
  //    .then(response => response as FilmModel[])
  //    .catch(this.handleError);
  //}
  getFilms() {
    return this.http.get<FilmModel[]>(this.tasksUrl);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
