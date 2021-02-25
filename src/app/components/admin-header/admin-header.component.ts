import { Component, OnInit, Input } from '@angular/core';

import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  switchValue: boolean = false;
  sidebarToggle: boolean;
  loading: boolean;
  accountStatus: string = "Sandbox";
  @Input() title: string;
  constructor(public authService:AuthenticationService) {
    
  }

  ngOnInit(): void {
    this.sidebarToggle = false;
    if(window.innerWidth < 768) {
      this.sidebarToggle = true;
      this.toggleSidebar();
    }
  }

  clickSwitch(): void {
    if (!this.loading) {
      this.loading = true;
      setTimeout(() => {
        this.switchValue = !this.switchValue;
        this.loading = false;
        this.switchValue ? this.accountStatus = "Live" : this.accountStatus = "Sandbox";
      }, 500);
    }
  }

  toggleSidebar(type?:string): void {
    if (this.sidebarToggle == false) {
      document.getElementById("admin-side-bar").style.left = "0%";
      document.getElementById("h1").style.width = "70%";
      document.getElementById("h2").style.width = "90%";
      this.sidebarToggle = true;
    }
    else {
      document.getElementById("admin-side-bar").style.left = "-100%";
      document.getElementById("h1").style.width = "100%";
      document.getElementById("h2").style.width = "80%";
      this.sidebarToggle = false;
    }

  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
