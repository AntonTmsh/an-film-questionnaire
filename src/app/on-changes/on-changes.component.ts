import { Component, Input, type OnInit, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input()
  questionField!: string;

  isChanged: boolean = false;

  constructor() {
    console.log('On Constructor');
  }

  ngOnInit(): void {
    console.log('On Init Hook');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Hook');

    for (const propName in changes) {
      if (changes.hasOwnProperty (propName)) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        console.log(`Is First Change: ${chng.isFirstChange()}`);

        if (!chng.isFirstChange())
        {
          this.isChanged = true;
        }
      }
    }
  }
}
