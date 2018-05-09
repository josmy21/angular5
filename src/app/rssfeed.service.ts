import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RssfeedService {

  constructor(private http: Http) { }
  getRss()  {

return this.http.get(' https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2Fgadgets360-latest')
    .map(res => res.json())
      }

}
