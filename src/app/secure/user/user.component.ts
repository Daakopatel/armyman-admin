import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users: any = [];
  public page = {
    count: 0,
    limit: 0,
    offset: 0,
    pageSize: 0
  }
  dakaas : any
  public loading = false;
  public searchStore: string = '';
  public searchEmail: string = '';
  public searchShopUrl: string = '';
  constructor(private userService: UserService) {
    this.page.offset = 0;
    this.page.limit = localStorage.getItem('pageLimit') ? parseInt(localStorage.getItem('pageLimit')) : 10;
  }

  ngOnInit() {
    this.dakaas = localStorage.getItem('selected') ? localStorage.getItem('selected') : 'protector'
    this.getUsers(this.page);
  }

  getUsers(page) {
    this.loading = true;
    this.userService.getUsers(page.offset + 1, page.limit, this.searchStore, this.searchEmail, this.searchShopUrl , this.dakaas+'-token').subscribe((res) => {
      this.users = res.data.user;
      this.page = page;
      this.page.count = res.data.count;
      this.loading = false;

      this.users.forEach(user => {
        var today = new Date(new Date().toJSON().slice(0, 10));
        let diffTime = Math.abs(today.getTime() - new Date(user.trial_start).getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        user.trial_days = user.trial_days - diffDays > 0 ? user.trial_days - diffDays : 0;
      });
    }, err => {
      this.loading = false;
    });
  }

  getAccess(row) {
    console.log(localStorage.getItem('token'))
    this.userService.getAccessToken(row.shopUrl , this.dakaas+'-token').subscribe((res) => {
      let url = environment.appUrl + 'auth?token=' + res.data.token;
      window.open(url, '_blank');
    }, err => {
    });
  }


  pageLimit() {
    this.page.offset = 0;
    localStorage.setItem('pageLimit', this.page.limit.toString());
    this.getUsers(this.page);
  }

  appChange($event) {
    if ($event.target.value == 'protector') {
      localStorage.setItem('api', 'https://protector-api.dakasapps.com/')
      localStorage.setItem('selected', 'protector')
      localStorage.setItem('app', 'https://protector.dakasapps.com/')
    } else if ($event.target.value == 'product-slide') {
      localStorage.setItem('selected', 'product-slide')

      localStorage.setItem('api', 'https://product-slide-api.dakasapps.com/')
      localStorage.setItem('app', 'https://product-slide.dakasapps.com/')
    } else if ($event.target.value == 'effect') {
      localStorage.setItem('selected', 'effect')

      localStorage.setItem('api', 'https://effect-api.dakasapps.com/')
      localStorage.setItem('app', 'https://effect-app.dakasapps.com/')
    } else if ($event.target.value == 'helpy') {
      localStorage.setItem('selected', 'helpy')

      localStorage.setItem('api', 'https://helpy-api.dakasapps.com/')
      localStorage.setItem('app', 'https://helpy-app.dakasapps.com/')
    } else if ($event.target.value == 'social') {
      localStorage.setItem('selected', 'social')

      localStorage.setItem('api', 'https://spcial-api.dakasapps.com/')
      localStorage.setItem('app', 'https://social-app.dakasapps.com/')
    }

    window.location.reload()
  }
}
