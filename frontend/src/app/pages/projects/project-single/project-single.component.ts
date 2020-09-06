import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification';
import { Project } from 'src/app/shared/models/Project.model';
import { ProjectsService } from '../projects.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss'],
})
export class ProjectSingleComponent implements OnInit {
  @Input() project: Project;
  @Output() deleted = new EventEmitter();

  constructor(
    private notification: NotificationService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {}

  deleteProject(): void {
    this.projectsService.deleteProject(this.project.id).subscribe(
      () => {
        this.notification.success('Projeto excluído com sucesso!');
        this.deleted.emit(this.project);
      },
      (ex: HttpErrorResponse) => {
        this.notification.error(ex.error.message);
      }
    );
  }
}
