import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.authenticationService.isAuthenticatedAsync()
      .pipe(tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state, route)));

  }

  private handleAuthorization(isAuthenticated: boolean, state: RouterStateSnapshot, route: ActivatedRouteSnapshot):boolean {
    if (!isAuthenticated) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    else {
        if (route.data["roles"]) {
            for (var roleItem of route.data["roles"]) {
                if (this.authenticationService.hasRole(roleItem)) {
                    return true;
                }
            }
            //role not authorised so redirect to home page
            alert('No esta autorizado a esta opción!');
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

}
  
}
