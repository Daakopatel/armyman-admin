import { Component, OnInit } from '@angular/core';
import { DeletedUserService } from './deleted-user.service';

@Component({
  selector: 'app-deleted-user',
  templateUrl: './deleted-user.component.html',
  styleUrls: ['./deleted-user.component.scss']
})
export class DeletedUserComponent implements OnInit {

  public users: any = [];
  public page = {
    count: 0,
    limit: 0,
    offset: 0,
    pageSize: 0
  }
  public loading = false;


  constructor(private deletedUserService: DeletedUserService) {
    this.page.offset = 0;
    this.page.limit = localStorage.getItem('pageLimit') ? parseInt(localStorage.getItem('pageLimit')) : 10;
  }

  ngOnInit() {
    this.getUsers(this.page);
  }

  getUsers(page) {
    this.loading = true;
    this.deletedUserService.getUsers(page.offset + 1, page.limit).subscribe((res) => {
      this.users = res.data.deletedUser;
      console.log(this.users)
      this.page = page;
      this.page.count = res.data.count;
      this.loading = false;
      this.users.sort((a, b) => {
        return <any>new Date(b.created) - <any>new Date(a.created);
      });
      
      
    
    }, err => {
      this.loading = false;
    });
  }


  pageLimit() {
    this.page.offset = 0;
    localStorage.setItem('pageLimit', this.page.limit.toString());
    this.getUsers(this.page);
  }
}
