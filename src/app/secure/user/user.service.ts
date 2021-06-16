import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { environment } from './../../../environments/environment';


@Injectable()
export class UserService {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers , token ) {
        console.log(token , localStorage.getItem(token))
        headers.append('Authorization', token.replace(/\"/g, ""));
    }

    getUsers(page, limit, store, email, shopUrl , token) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers , token);
        return this.http.get(environment.apiUrl + 'admin/user?page=' + page + '&limit=' + limit + '&store=' + store + '&email=' + email + '&shopUrl=' + shopUrl, { headers: headers }).pipe(map((response: any) => response.json()));
    }

    getAccessToken(shopUrl ,token) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers , token);
        return this.http.get(environment.apiUrl + 'admin/access_token?shopUrl='+shopUrl, { headers: headers }).pipe(map((response: any) => response.json()));
    }
}


