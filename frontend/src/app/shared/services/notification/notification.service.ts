import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  modal(): void {
    alert('a');
  }
}
