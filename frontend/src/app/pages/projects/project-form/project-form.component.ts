import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Project } from '../../../shared/models/Project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.buildForm();
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
    this.projectsService.createProject(this.getFormattedProject()).subscribe(
      () => {
        alert('Projeto criado com sucesso!');
      },
      (ex: HttpErrorResponse) => {
        console.log(ex);
      }
    );
  }

  private getFormattedProject(): Project {
    const initialDate = this.formGroup.get('initialDate').value;
    const finalDate = this.formGroup.get('finalDate').value;

    const initialDateString = initialDate ? initialDate.toISOString() : '';
    const finalDateString = finalDate ? finalDate.toISOString() : '';

    return {
      title: this.formGroup.get('title').value || '',
      text: this.formGroup.get('text').value || '',
      budget: this.formGroup.get('budget').value || 0,
      initialDate: initialDateString,
      finalDate: finalDateString,
    };
  }
}
