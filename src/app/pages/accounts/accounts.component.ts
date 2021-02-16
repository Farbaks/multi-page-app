import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  tab:number = 0;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  changeTabs(number) {
    this.tab = number;
  }

}
