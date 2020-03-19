import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  public behavior = new BehaviorSubject<User>(null);

  public sessionSet = new BehaviorSubject<User>(null);

  public unsubscribe = new Subject();

  public session = this.sessionSet.asObservable();

  public refresh = this.behavior.asObservable();

  public sessionInfo(user: User){
    this.sessionSet.next(user);
  }

  public changedInfo(user: User){
    this.behavior.next(user);
  }

}
