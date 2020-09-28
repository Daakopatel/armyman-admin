import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { SidebarsService } from './sidebar.service'
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public ismenuOpen: boolean = false;
  public isPopupOpen: boolean = false;
  public storeName: String;
  public appName: String = environment.appName;

  constructor(private sidebarsService: SidebarsService, private eRef: ElementRef) { }

  public state = false;

  toggle() {
    this.state = !this.state;
  }

  ngOnInit() {
    this.getUser()
  }
  menuOpen() {
    this.ismenuOpen = !this.ismenuOpen;
  }
  openPopup(status) {
    this.isPopupOpen = status;
  }

  changeMenu(state) {
    this.isPopupOpen = state;
  }

  getUser() {
    this.sidebarsService.getUser().subscribe((res) => {
      // console.log(res)
      // this.storeName = res.data.name;
    }, err => {
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('shopUrl');
  }
}
