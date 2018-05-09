import { Component, OnInit } from '@angular/core';
import { LoadjsonService } from '../loadjson.service';
import { RssfeedService } from '../rssfeed.service'
import {Observable} from 'rxjs/Observable';

import * as _ from 'underscore';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoadjsonService,RssfeedService,PagerService]
})
export class HomeComponent implements OnInit {
 json=[];
 rss=[];
 val:any;
 value:any;

private allItems: any[];
pager: any = {};
pagedItems: any[];

  constructor(private jsonservice: LoadjsonService,private rss_service:RssfeedService,private pagerService: PagerService ) { }

  ngOnInit() {

    this.jsonservice.getJson().subscribe(data => {
    
    this.allItems = ['HELLO','XCX','FDFD','HELLO','XCX','FDFD','HELLO','XCX','FDFD','HELLO','XCX','FDFD','HELLO','XCX','FDFD','HELLO','XCX','FDFD','HELLO'];

   

  for (let key in data) 
  {
       this.value = data[key];
       for(let ke in this.value)
     {
        this. val = this.value[ke];
        this.json.push(this.val);
        this.allItems.push(this.val.name);
        
        this.setPage(1);
       

    }
}
        





  });

  this.rss_service.getRss().subscribe(data => {
  for (let key in data) 
  {
     this.rss = data[key];
       console.log(this.rss);
       
       }
  
});




  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.json.slice(this.pager.startIndex, this.pager.endIndex+1);
    }
    



}
