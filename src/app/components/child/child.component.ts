import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  template: `
  <button (click)="exampleMethodChild()">Example Output</button>`
})
export class ChildComponent implements OnInit {
  @Output() exampleOutput = new EventEmitter<string>();

  exampleChild: string = "Hello Angular 8";
  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild);
  }


constructor() { }
ngOnInit(){}

}