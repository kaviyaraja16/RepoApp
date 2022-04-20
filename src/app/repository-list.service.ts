import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const endpoint = 'https://kaviyaraja16.github.io/Server/db.json';

@Injectable({
  providedIn: 'root'
})
export class RepositoryListService {

  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
}
