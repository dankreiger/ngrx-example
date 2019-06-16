import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiPath } from '../typings/api.typings';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: ApiPath, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
}
