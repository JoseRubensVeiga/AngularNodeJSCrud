import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Project } from '../../../shared/models/Project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, switchMap, pluck } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  formGroup: FormGroup;
  today = new Date();

  get isEdition(): boolean {
    const id = this.formGroup.get('id').value;

    return !!id;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.setProject();
    this.buildForm();
  }

  setProject(): void {
    this.activatedRoute.params
      .pipe(
        filter(({ id }) => id),
        switchMap(({ id }) => this.projectsService.findProject(id))
      )
      .subscribe((project) => {
        this.formGroup.patchValue(project);
      });
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      text: ['', Validators.required],
      budget: ['', Validators.required],
      initialDate: ['', Validators.required],
      finalDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.isEdition) {
      this.editProject();
    } else {
      this.createProject();
    }
  }

  editProject(): void {
    this.projectsService.editProject(this.getFormattedProject()).subscribe(
      () => {
        this.notification.success('Projeto alterado com sucesso!');
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (ex: HttpErrorResponse) => {
        this.notification.error(ex.error.message);
      }
    );
  }

  createProject(): void {
    this.projectsService.createProject(this.getFormattedProject()).subscribe(
      () => {
        this.notification.success('Projeto criado com sucesso!');
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
      },
      (ex: HttpErrorResponse) => {
        this.notification.error(ex.error.message);
      }
    );
  }

  private formatProjectDate(date: any): string {
    if (!date) {
      return '';
    }

    if (date instanceof Date) {
      return date.toISOString();
    }

    return date;
  }

  private getFormattedProject(): Project {
    const initialDate = this.formGroup.get('initialDate').value;
    const finalDate = this.formGroup.get('finalDate').value;

    const initialDateString = this.formatProjectDate(initialDate);
    const finalDateString = this.formatProjectDate(finalDate);

    const project: Project = {
      title: this.formGroup.get('title').value || '',
      text: this.formGroup.get('text').value || '',
      budget: this.formGroup.get('budget').value || 0,
      initialDate: initialDateString,
      finalDate: finalDateString,
    };

    if (this.isEdition) {
      project.id = this.formGroup.get('id').value;
    }

    return project;
  }
}
