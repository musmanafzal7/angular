import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  authToken: any;


  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    //TODO: open Loader here.
    
   

  this.authToken = localStorage.getItem("token");
debugger
if(this.authToken){
       req = req.clone({
          setHeaders: {
            Authorization: 'Bearer ' + this.authToken,
         
          }
        });
}
    


    

    return next.handle(req).pipe(
      //if API fails then again call API 2 time more
      retry(2),
      tap(
        // Succeeds when there is a response; ignore other events
        event => {
          if (event instanceof HttpResponse) {
            if (event.status === 200) {
console.log("success")
            }
          }
        }
      ),
      catchError((err: any) => {
         return throwError(err);  
      })
    );
  }
}
