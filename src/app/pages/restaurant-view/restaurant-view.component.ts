import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CurdService } from '../../services/curd.service'
@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css'],
  providers: [CurdService]
})
export class RestaurantViewComponent implements OnInit {

  public info: Array<any>;

  constructor(private router: ActivatedRoute, private crudSrc: CurdService) {
    router.params.map(params => params.id).subscribe((res: any) => {
      this.info = res;
      if (res !== null && res !== undefined) {
        this.getRestaurantInfo(res);
      }
    })
  }
  getRestaurantInfo(id) {
    this.crudSrc.getOne('users', id).subscribe((data: any) => {
      console.log(data);
      this.info = data;
    })

  }
  ngOnInit() {
  }

}
