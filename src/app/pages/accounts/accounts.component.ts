import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  tab:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeTabs(number) {
    this.tab = number;
  }

}
