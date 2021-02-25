import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { from, Observable, of } from 'rxjs';
import { tap, map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn:boolean = null;
  isAuthenticated$ = from(this.auth.isAuthenticated$).pipe(tap(res => this.loggedIn = res));
  constructor(public auth: AuthService) {
    this.localAuthSetup();
    this.getTokenSilently$().subscribe();
  }

  private localAuthSetup() {
		const checkAuth$ = this.isAuthenticated$.pipe(
			concatMap((loggedIn: boolean) => {
				if (loggedIn) {
					return this.getUser$();
				}
				return of(loggedIn);
			})
		);
		checkAuth$.subscribe();
	}

  getUser$(): Observable<any> {
		return this.auth.user$.pipe(
			tap(user => console.log(user))
		);
	}

  getTokenSilently$(): Observable<any> {
    return this.auth.getAccessTokenSilently().pipe(tap(res => console.log(res)));
  }

	login() {
    this.auth.loginWithRedirect();
	}

  logout() {
    this.auth.logout({ returnTo: 'http://localhost:4200/' })
  }
}
