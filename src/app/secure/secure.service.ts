import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class SecureService {


    constructor(private http: Http) { }

}