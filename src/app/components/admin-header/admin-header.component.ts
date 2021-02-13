import { Component, OnInit ,Input} from '@angular/core';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  switchValue: boolean = false;
  loading: boolean = false;
  accountStatus: string = "Sandbox";
  @Input() title:string;
  constructor() {
  }

  ngOnInit(): void {
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

}
