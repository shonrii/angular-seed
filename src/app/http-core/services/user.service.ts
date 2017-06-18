import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiUtils } from '../../utils/api.utils';
import { User } from '../../app-core/models';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  findUser(id: number): Observable<User> {
    return this.http.get(`${this.usersUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  create(user: User): Observable<User> {
    const options = ApiUtils.generateOptions('POST');
    return this.http.post(this.usersUrl, JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(user: User): Observable<User> {
    const options = ApiUtils.generateOptions('PUT');
    return this.http.put(`${this.usersUrl}/${user.id}`, JSON.stringify(user), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(id: number) {
    /**
     * note: you can delete the current user
     * backend should implement a guard
     */
    return this.http.delete(`${this.usersUrl}/${id}`)
      .map(res => Observable.of({}))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status === 204) { // No content
      return {};
    } else {
      try {
        const body = res.json();
        if (body.data) {
          return body.data;
        }
        return body || {};
      } catch (e) {
        return res.text();
      }
    }
  }

  private handleError(error: Response | any) {
    // TODO: remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
