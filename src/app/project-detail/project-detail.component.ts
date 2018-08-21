import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectModel;
  param;

  private edit: boolean = false;

  constructor(private router: Router, private user: UserService, private route: ActivatedRoute) { 

    this.route.params.subscribe( params => {
      this.param = params 
    });

  }

  async ngOnInit() {
    try {
      const details = await this.getProjectDetails()
      if(details != undefined || details != null){
        this.projectModel = details
      }
    } catch (error) {
      return error
    }
  }

  getProjectDetails(){
    this.user.projectDetails(this.param.id)
      .subscribe(res => {
        console.log("===========>", res)
        this.projectModel = res[0]
      }, 
      (error) => {
        console.error(error)
      }
    )
  }

  toggleEdit(){
    this.edit = true
  }

  onFormSubmit(){
    this.edit = false
    this.user.editProject(this.param.id, this.projectModel)
      .subscribe(res => {
        this.router.navigate([`/project_details/${this.param.id}`])
      },
    (error) => {
      console.error(error)
    })
  }

  cancelUpdate(){
    this.edit = false;
  }

  goBack(){
    this.router.navigate(["/projects"])
  }

}
