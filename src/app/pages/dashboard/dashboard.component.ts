import { Component, OnInit } from '@angular/core';
import { CurdService } from '../../services/curd.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CurdService]
})
export class DashboardComponent implements OnInit {
  private countData: any = {
    restaurantOrderCount: null,
    categoryCount: null,
    productCount: null,
    userCount: null
  }
  private LocationData: any = {
    locationName: '',
  }
  private data: any;
  constructor(private crudService: CurdService) { }

  ngOnInit() {
    this.getData();
    this.getUserData();
  }
  getData() {
    this.crudService.get('users/countdata/total/data').subscribe((res: any) => {
      console.log(res);
      this.countData = res;
    })
  }
  getUserData() {
    this.crudService.get('users/me').subscribe((res: any) => {
      console.log(res);
    })
  }
}
