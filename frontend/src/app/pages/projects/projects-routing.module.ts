import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectFormComponent } from './project-form';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'new', component: ProjectFormComponent },
  { path: ':id', component: ProjectFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
