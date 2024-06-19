import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public selectedFieldSize = new BehaviorSubject<number>(8);

  selectedFieldSize$ = this.selectedFieldSize.asObservable();

  constructor() {}
}
