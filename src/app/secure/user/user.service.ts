import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { environment } from './../../../environments/environment';


@Injectable()
export class UserService {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', localStorage.getItem('token').replace(/\"/g, ""));
    }

    getUsers(page, limit, store, email, shopUrl) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(environment.apiUrl + 'admin/user?page=' + page + '&limit=' + limit + '&store=' + store + '&email=' + email + '&shopUrl=' + shopUrl, { headers: headers }).pipe(map((response: any) => response.json()));
    }

    getAccessToken(shopUrl) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(environment.apiUrl + 'admin/access_token?shopUrl='+shopUrl, { headers: headers }).pipe(map((response: any) => response.json()));
    }
}