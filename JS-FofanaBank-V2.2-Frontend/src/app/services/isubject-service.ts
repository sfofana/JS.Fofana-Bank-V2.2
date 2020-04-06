import { BehaviorSubject, Subject, Observable } from "rxjs";
import { User } from "../models/user";

export interface ISubjectService {
    behavior: BehaviorSubject<User>;
    sessionSet: BehaviorSubject<User>;
    unsubscribe: Subject<any>;
    session: Observable<any>;
    refresh: Observable<any>;
    sessionInfo(user: User): void;
    changedInfo(user: User): void;
}
