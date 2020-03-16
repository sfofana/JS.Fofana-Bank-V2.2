import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  public behavior = new BehaviorSubject<User>(null);
  public unsubscribe = new Subject();
  public refresh = this.behavior.asObservable();

  public changedInfo(user: User){
    this.behavior.next(user);
  }

}
