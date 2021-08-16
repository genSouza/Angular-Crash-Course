import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  color: string = '';

  @Input()
  text: string = '';

  @Output()
  bntClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.bntClick.emit();
  }
}
