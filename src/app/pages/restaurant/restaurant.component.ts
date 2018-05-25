import { Component, OnInit } from '@angular/core';
import { CurdService } from '../../services/curd.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { from } from 'rxjs/observable/from';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [CurdService, ToastrService]
})

export class RestaurantComponent implements OnInit {
  public detail: Array<any>;
  constructor(private crudSrc: CurdService, private toastr: ToastrService, private router: Router) {
    this.getDetails();
  }

  ngOnInit() {
  }

  getDetails() {
    this.crudSrc.get('users/owner/list').subscribe((res: any) => {
      console.log(res);
      this.detail = res;
    })
  }
  updateRestaurantStatus(event, restaurant) {
    restaurant.flag = 0;
    restaurant.status = event;
    this.crudSrc.put('users', restaurant._id, restaurant).subscribe((res) => {
      this.toastr.success('Restaurant Status Updated Successfully', 'Success');
      this.getDetails()
    }), error => this.toastr.error(error.error.message, 'Error', { timeOut: 3000 });
  }
  viewRestaurant(id: any) {
    this.router.navigate(['rest_view/' + id])
  }
}
