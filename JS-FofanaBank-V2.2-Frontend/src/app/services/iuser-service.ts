import { User } from "../models/user";
import { Observable } from "rxjs";

export interface IUserService {
    testConnection(): any; 
    authentication(user: User): Observable<User>;
    getAllUsers(): Observable<User[]>;
    updateUser(user: User): Observable<User>;
    getWidthdrawAmounts(): void;
}
