import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  filtersLoaded: Promise<boolean>;

  userModel;

  constructor(private router: Router, private user: UserService) { }

  async ngOnInit() {
      try {
        const profile = await this.getProfile()
          this.userModel = profile
      } catch (error) {
        return error
      }
  }

  getProfile(){
    this.user.employeeProfile()
        .subscribe(res => {
          this.userModel = res
          console.log("==================>",res)
          this.filtersLoaded = Promise.resolve(true);
        }, (error) => {
          if(error instanceof HttpErrorResponse){
            if(error.status === 401){
              this.router.navigate(['/employeeLogin'])
            }
          }
        })
  }
}
