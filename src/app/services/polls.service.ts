import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }
  getPolls(): Observable<object> {
    return this.http.get('http://localhost:8000/api/polls');
  }
  activate(id) {
    return this.http.get('http://localhost:8000/api/poll/' + id + '/activate');
  }
  getPoll(id): Observable<any> {
    return this.http.get('http://localhost:8000/api/poll/' + id);
  }
  getPollByUser(id) {
    return this.http.get('http://localhost:8000/api/poll/user/' + id);
  }
  vote(id) {
    return this.http.get('http://localhost:8000/api/vote/' + id);
  }
  savePoll(body) {
    return this.http.post('http://localhost:8000/api/poll/ans', body);
  }
}
