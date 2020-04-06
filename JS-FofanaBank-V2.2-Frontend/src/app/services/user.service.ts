import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { SubjectService } from './subject.service';
import { IUserService } from './iuser-service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  private connection = environment.connection;
  private url = environment.url;
  private money: Array<number> = [10, 20, 50, 100, 200, 500, 1000];

  constructor(private http: HttpClient) { }
  
  public testConnection(): any {
    return this.http.get(this.connection);
  }

  public authentication(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, user);
  }

  public getWidthdrawAmounts(){
    return this.money;
  }
}
