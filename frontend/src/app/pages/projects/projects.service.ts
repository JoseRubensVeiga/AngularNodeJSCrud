import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ProjectRS, Project } from 'src/app/shared/models/Project.model';
import { BASE_URL } from 'src/environments/environment';
import { DefaultRS } from 'src/app/shared/models/DefaultRS.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<ProjectRS> {
    return this.http.get<ProjectRS>(`${BASE_URL}projects`);
  }

  createProject(project: Project): Observable<DefaultRS> {
    return this.http.post<DefaultRS>(`${BASE_URL}projects`, project);
  }
}
