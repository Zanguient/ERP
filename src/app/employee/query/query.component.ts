import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { UserService } from '../../user.service';
import { Query } from '../../query';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queryModel;
  param;
  updateModel = new Query;
  employeeModel;
  userModel;

  filtersLoaded: Promise<boolean>;
  employeeLoaded: Promise<boolean>;
  profileLoaded: Promise<boolean>;

  constructor(private router: Router, private user: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.param = params
    });
  }
  
  async ngOnInit() {
    try {
      const details = await this.getTasks()
      const employees = await this.getEmployees()
      const profile = await this.getProfile()
      this.queryModel = details
      this.employeeModel = employees
      this.userModel = profile
    } catch (error) {
      return error
    }
  }

  getTasks(){
    this.user.queries()
      .subscribe(res => {
        this.queryModel = res
        console.log(res)
        this.filtersLoaded = Promise.resolve(true);
      }, (error) => {
        console.error(error)
      })
  }

  getEmployees(){
    this.user.employee()
      .subscribe(res => {
        console.log("======>", res)
        this.employeeModel = res
        this.employeeLoaded = Promise.resolve(true)
      }, (error) => {
        console.error(error)
      })
  }

  getProfile(){
    this.user.employeeProfile()
        .subscribe(res => {
          this.userModel = res
          console.log("==================>",res)
          this.profileLoaded = Promise.resolve(true);
        }, (error) => {
          console.error(error)
        })
  }

  goBack(){
    this.router.navigate([`/employeeProfile`])
  }

  onUpdateFormSubmit(){
    this.user.addQuery(this.updateModel)
      .subscribe(res => {
        window.location.reload()
      }, (error) => {
        console.error(error)
      })
  }

  closeTicket(id){
    console.log(id);
    this.user.toggleQueryStatus(id)
      .subscribe(res => {
        window.location.reload()
      }, (error) => {
        console.error(error)
      })
  }


}
