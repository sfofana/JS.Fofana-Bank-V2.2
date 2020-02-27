import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  private message: any;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(catchError((error: HttpErrorResponse)=>{
      if (error instanceof HttpErrorResponse){
        if(req.url == 'https://localhost:8080/user'){
          this.message='Internal Error... contact me at: sufyanfofana@yahoo.com to run an instance of the EC2';
        }
        console.log(this.message);
        return throwError('Internal Error');
      } else {
        return throwError('Client Error');
      }
    })
    );
    
  }
}
