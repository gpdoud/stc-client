import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ministry } from './ministry.class';

@Injectable({
  providedIn: 'root'
})
export class MinistriesService {

  baseUrl: string = "http://localhost:5000/api/ministries";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Ministry[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Ministry[]>;
  }
}
