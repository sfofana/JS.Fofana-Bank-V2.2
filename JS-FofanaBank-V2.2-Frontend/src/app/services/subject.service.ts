import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';
import { ISubjectService } from './isubject-service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements ISubjectService {

  constructor() { }
 
  behavior = new BehaviorSubject<User>(null);

  sessionSet = new BehaviorSubject<User>(null);
  
  unsubscribe = new Subject();

  public session = this.sessionSet.asObservable();

  public refresh = this.behavior.asObservable();

  public sessionInfo(user: User){
    this.sessionSet.next(user);
  }

  public changedInfo(user: User){
    this.behavior.next(user);
  }
  

}
