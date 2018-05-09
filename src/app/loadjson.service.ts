import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoadjsonService {


  constructor(private http: Http) { }

  getJson()  {

return this.http.get('./assets/data/data.json')
    .map(res => res.json())
      }


}
