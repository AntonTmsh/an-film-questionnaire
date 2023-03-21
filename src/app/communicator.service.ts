import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from './models/question.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private channel = new Subject<Question>();
  public channel$ = this.channel.asObservable();

  publishData(data: Question): void {
    this.channel.next(data);
  }
}
