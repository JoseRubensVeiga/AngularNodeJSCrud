import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
