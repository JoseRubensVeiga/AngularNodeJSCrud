import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Project } from 'src/app/shared/models/Project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private projectsService: ProjectsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((response) => {
      this.projects = response.projects;
    });
  }

  onDeleted(project: Project): void {
    const projectIndex = this.projects.findIndex((p) => p === project);

    this.projects.splice(projectIndex, 1);
    this.cd.detectChanges();
  }
}
