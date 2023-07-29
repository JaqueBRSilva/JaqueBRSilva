import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseURL: string = 'https://api.github.com/'
  private repos_URL: string = this.baseURL + 'users/JaqueBRSilva/repos'

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any> {
    return this.http.get(this.repos_URL)
  }
  
}
