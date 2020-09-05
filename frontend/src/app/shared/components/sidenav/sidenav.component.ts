import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuItem } from '../../models/MenuItem.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;

  items: MenuItem[] = [
    {
      label: 'dashboard',
      icon: 'home',
      url: 'dashboard',
    },
    {
      label: 'projetos',
      icon: 'assignment',
      url: 'projects',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
