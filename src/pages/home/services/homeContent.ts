import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class HomeContentServices {

    baseUrl: string;
    constructor(private http: Http){
        this.baseUrl = 'https://www.reddit.com/r';
    }

    getPost(category, limit){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
            .map(res => res.json());
    }

}