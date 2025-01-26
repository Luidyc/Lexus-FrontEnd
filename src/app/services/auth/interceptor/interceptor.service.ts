import { HttpHeaders, HttpInterceptorFn } from "@angular/common/http";



export const AuthInterception: HttpInterceptorFn = (req, next) => {

    const token = localStorage.getItem('auth-token');
    if(token) {
      console.log(token)
      const cloneRequest = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`,
        },
      });
      return next(cloneRequest);
    }
    return next(req);
  }

