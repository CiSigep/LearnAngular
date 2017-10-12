import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Warrior } from './warrior';
import { Observable } from 'rxjs'

@Injectable()
export class WarriorService {
  private warURL = "http://localhost:7001/JBack/api/warrior"

  constructor(private http: Http) {}

  getWarriors (): Observable<Warrior[]> {
    return this.http.get(this.warURL).map(this.extractData).catch(this.handleError);
  }
  
  private extractData (res: Response){
    let body = res.json();
    return body || { };
  }
    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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
