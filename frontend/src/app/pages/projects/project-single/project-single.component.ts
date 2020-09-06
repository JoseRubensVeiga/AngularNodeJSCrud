import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification';
import { Project } from 'src/app/shared/models/Project.model';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss'],
})
export class ProjectSingleComponent implements OnInit {
  @Input() project: Project;

  constructor(private notification: NotificationService) {}

  ngOnInit(): void {}

  deleteProject(): void {
    this.notification.modal();
  }
}
