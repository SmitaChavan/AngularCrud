import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AccessDetailsService 
{
    constructor(private http: HttpClient)
    {}

    getAccessList()
    {
        let headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');

        return this.http.get('http://localhost:49311/api/Demo',{headers});
    }
}