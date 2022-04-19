import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:3000/repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoryListService {

  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
}
