import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username = "";
  isEmpty = true;
  constructor() { }

  ngOnInit(): void {
  }

  onInputValue(event: Event) {
    if ((<HTMLInputElement>event.target).value != '') {
      this.isEmpty = false;
    }
    else {
      this.isEmpty = true;
    }
  }

  onClick() {
    this.username = "";
    this.isEmpty = true;
  }

}
