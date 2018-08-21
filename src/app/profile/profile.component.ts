import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
    this.user.profile()
        .subscribe(res => {
          this.userModel = res
          console.log("==================>",res)
        }, (error) => {
          if(error instanceof HttpErrorResponse){
            if(error.status === 401){
              this.router.navigate(['/login'])
            }
          }
        })
  }


}
