import { Injectable } from '@angular/core';

import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  success(text: string): Observable<boolean> {
    return from(
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text,
      })
    ).pipe(pluck('isConfirmed'));
  }

  error(text: string): Observable<boolean> {
    return from(
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text,
      })
    ).pipe(pluck('isConfirmed'));
  }

  warning(text: string): Observable<boolean> {
    return from(
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text,
      })
    ).pipe(pluck('isConfirmed'));
  }
}
