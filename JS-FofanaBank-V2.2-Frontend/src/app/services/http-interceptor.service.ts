import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private message="";

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(catchError((error: HttpErrorResponse)=>{
      if (error instanceof HttpErrorResponse){
        if(req.url == environment.connection){
          this.message='Internal Error... contact Sufyan at: sufyanfofana@yahoo.com to run an instance of the server';
          return throwError(this.message);
        }
        return throwError('Internal Error');
      } else {
        return throwError('Server Error');
      }
    })
    );
    
  }
}
