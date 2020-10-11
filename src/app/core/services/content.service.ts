import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SermonRequest } from '../models/sermon-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private apiUrl(action: string): string {
    return environment.apiBaseUrl + action;
  }

  saveSermon(data: SermonRequest): Observable<any> {
    return this.http.post(this.apiUrl('/Sermon'), data, {
    }).pipe(retry(3));
  }

  getSermon(): Observable<any> {
    return this.http.get(this.apiUrl('/Sermon')).pipe(retry(3));
  }
}
