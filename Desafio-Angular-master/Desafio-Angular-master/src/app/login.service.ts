import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const body = { nome: username, senha: password };

    return this.http.post(this.apiUrl, body).pipe(
      map((res: any) => ({
        success: true,
        user: res
      })),
      catchError(() => of({ success: false }))
    );
  }
}
