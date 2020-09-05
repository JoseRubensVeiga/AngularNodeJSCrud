import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  onToggleMenu = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
