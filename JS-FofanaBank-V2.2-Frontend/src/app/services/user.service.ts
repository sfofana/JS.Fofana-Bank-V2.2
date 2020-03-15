import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private connection = environment.connection;
  private url = environment.url;
  private money: Array<number> = [10, 20, 50, 100];

  constructor(private http:HttpClient) { }

  testConnection(): any {
    return this.http.get(this.connection);
  }

  authentication(user: User): Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  updateUser(user:User): Observable<User> {
    return this.http.put<User>(this.url, user);
  }

  getWidthdrawAmounts(){
    return this.money;
  }
}