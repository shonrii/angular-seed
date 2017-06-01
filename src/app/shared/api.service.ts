import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  protected extractData(res: Response) {
    if (res.status === 204) { // No content
      return {};
    } else {
      try {
        const body = res.json();
        return body || {};
      } catch (e) {
        return res.text();
      }
    }
  }
}
