import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, ObservableInput } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * ----------
   * ADMIN URLs
   * ----------
   */
  private _profileUrl = "/admin/profile";
  private _employeeUrl = "/admin/employees";
  private _employeeDetailUrl = "/admin/employee";
  private _addEmployeeUrl = "/admin/add_employee";
  private _deleteEmployeeUrl = "/admin/delete_employee";
  private _deleteEmployees = "/admin/delete_employees";
  private _editEmployeeUrl = "/admin/edit_employee";
  private _projectsUrl = "/admin/projects";
  private _projectDetails = "/admin/project_details";
  private _editProject = "/admin/edit_project";
  private _adddProject = "/admin/create_project";
  private _projectDelete = "/admin/project_delete";
  private _projectsDelete = "/admin/projects_delete";
  private _tasks = "/admin/tasks";
  private tasksDetailsUrl = "/admin/tasks_details";
  private _createTasks = "/admin/create_tasks";
  private _projectTasksDetails = "/admin/project_tasks_details";
  private _editTaskUrl = "/admin/edit_task";
  private _editProjectTaskUrl = "/admin/edit_project_task";
  private _deleteTask = "/admin/delete_task";
  private _deleteTasks = "/admin/delete_tasks";
  private _updateProjectTask = "/admin/update_project_task";
  private _getAllQueries = "/admin/queries";
  private _viewAttendanceUrl = "/admin/attendance";
  private _viewAllAttendanceUrl = "/admin/allAttendance";
  private _toggleAttendanceUrl = "/admin/toggle_attendance";
  private _replyToQuery = "/admin/reply_to_query";
  private _createProjectTask = "/admin/create_project_task";
  private _addAbsenties = "/admin/add_absenties";
  /**
   * -------------
   * EMPLOYEE URLs
   * -------------
   */

  private _employeeProfileUrl = "/employee/employee_profile";
  private _myProjectsUrl = "/employee/my_projects";
  private _myProjectDetailsUrl = "/employee/project_details";
  private _myTasksUrl = "/employee/my_tasks";
  private _myProjectTaskUrl = "/employee/my_project_task";
  private _myTaskDetailsUrl = "/employee/my_task_details";
  private _addQueryUrl = "/employee/query";
  private _queriesUrl = "/employee/query";
  private _queryDetailsUrl = "/employee/query_details";
  private _dailyDiaryUrl = "/employee/daily_diary";
  private _addDailyDiary = "/employee/daily_diary";
  private _dailyDiaryDetailsUrl = "/employee/daily_diary_details";
  private _addEveningUpdate = "/employee/addEveningUpdate";
  private _dailyUpdateUrl = "/employee/daily_tasks";
  private _toggleQueryStatusUrl = "/employee/toggleQueryStatus";
  private _toggleTaskStatusUrl = "/employee/toggleTaskSatus";
  private _createTask = "/employee/create_tasks";
  private _invidualTaskUrl = "/employee/others";
  private _myAttendanceUrl = "/employee/my_attendance";

  constructor(private http: HttpClient) { }

  /**
   * -------------
   * ADMIN SECTION
   * -------------
   */
  profile(): Observable<any> {
    return this.http.get<any>(this._profileUrl)
  }

  employee(): Observable<any> {
    return this.http.get<any>(this._employeeUrl)
  }

  employeeDetails(id): Observable<any> {
    let url = this._employeeDetailUrl + "/" + id
    return this.http.get<any>(url)
  }

  addEmployee(data): Observable<any> {
    return this.http.post<any>(this._addEmployeeUrl, data)
  }

  deleteEmployee(id): Observable<any> {
    let url = this._deleteEmployeeUrl + "/" + id
    return this.http.post<any>(url, id)
  }

  deleteEmployees(data): Observable<any>{
    return this.http.post<any>(this._deleteEmployees, data)
  }

  editEmployee(id, data): Observable<any> {
    let url = this._editEmployeeUrl + "/" + id
    return this.http.post<any>(url, data)
  }

  projects() {
    return this.http.get<any>(this._projectsUrl)
  }

  projectDetails(id) {
    let url = this._projectDetails + "/" + id
    return this.http.get<any>(url)
  }

  editProject(id, data, employees) {
    let url = this._editProject + "/" + id
    let obj = {
      data,
      employees
    }
    return this.http.post<any>(url, obj)
  }

  addProject(project, employee) {
    let obj = {
      project,
      employee
    }
    return this.http.post<any>(this._adddProject, obj)
  }

  deleteProject(id): Observable<any> {
    let url = this._projectDelete + "/" + id
    return this.http.post<any>(url, id)
  }

  deleteprojects(data): Observable<any>{
    return this.http.post<any>(this._projectsDelete, data)
  }

  tasks(): Observable<any> {
    return this.http.get<any>(this._tasks)
  }

  tasksDetails(id): Observable<any> {
    let url = this.tasksDetailsUrl + "/" + id;
    return this.http.get<any>(url)
  }

  createTasks(tasks, projects, employees): Observable<any> {
    let obj = {
      tasks,
      projects,
      employees
    }
    return this.http.post<any>(this._createTasks, obj)
  }

  projectTasksDetails(id): Observable<any> {
    let url = this._projectTasksDetails + "/" + id;
    return this.http.get(url)
  }

  editTask(id, data): Observable<any> {
    let url = this._editTaskUrl + "/" + id;
    return this.http.post(url, data)
  }

  editProjectTask(id, data): Observable<any> {
    let url = this._editProjectTaskUrl + "/" + id;
    return this.http.post(url, data)
  }

  deleteTask(id): Observable<any> {
    let url = this._deleteTask + "/" + id
    return this.http.post(url, id)
  }

  deleteTasks(data): Observable<any>{
    return this.http.post<any>(this._deleteTasks, data)
  }

  updateProjectTasks(id, data): Observable<any> {
    let url = this._updateProjectTask;
    let obj = {
      id, data
    }
    return this.http.post(url, obj)
  }

  getAllQueries(): Observable<any> {
    return this.http.get(this._getAllQueries)
  }

  getAttendance(date): Observable<any>{
    let url = this._viewAttendanceUrl + "/" + date
    return this.http.get(url)
  }

  getAllAttendance(date): Observable<any>{
    let url = this._viewAllAttendanceUrl + "/" + date
    return this.http.get(url)
  }

  toggleAttendance(id, data): Observable<any>{
    let url = this._toggleAttendanceUrl + "/" + id
    return this.http.post(url, data)
  }

  replyToQuery(id, data): Observable<any>{
    let url = this._replyToQuery + "/" + id;
    return this.http.post(url, data)
  }

  createProjectTask(id, data, employees): Observable<any>{
    let obj = {
      id, data, employees
    }
    return this.http.post(this._createProjectTask, obj)
  }

  addAbsenties(id, date): Observable<any>{
    return this.http.post(this._addAbsenties, {id, date})
  }

  /**
   * ---------------- 
   * EMPLOYEE SECTION
   * ----------------
   */

  employeeProfile(): Observable<any> {
    return this.http.get<any>(this._employeeProfileUrl)
  }

  myProjects(): Observable<any> {
    return this.http.get<any>(this._myProjectsUrl)
  }

  myProjectDetails(id): Observable<any> {
    let url = this._myProjectDetailsUrl + "/" + id
    return this.http.get<any>(url)
  }

  myTasks(): Observable<any> {
    return this.http.get<any>(this._myTasksUrl)
  }

  myTaskDetails(id): Observable<any> {
    let url = this._myTaskDetailsUrl + "/" + id;
    return this.http.get<any>(url)
  }

  myProjectTaskDetails(id): Observable<any> {
    let url = this._myProjectTaskUrl + "/" + id
    return this.http.get<any>(url)
  }

  myDailyTasks(id): Observable<any> {
    let url = this._dailyUpdateUrl + "/" + id
    return this.http.get<any>(url)
  }

  addDailyTask(id, data): Observable<any> {
    let url = this._dailyUpdateUrl + "/" + id
    return this.http.post<any>(url, data)
  }

  addQuery(data): Observable<any> {
    return this.http.post<any>(this._addQueryUrl, data)
  }

  queries(): Observable<any> {
    return this.http.get<any>(this._queriesUrl)
  }

  queryDetails(id): Observable<any> {
    return this.http.get<any>(this._queryDetailsUrl)
  }

  dailyDiary(): Observable<any> {
    return this.http.get<any>(this._dailyDiaryUrl)
  }

  addDailyDiary(data): Observable<any> {
    return this.http.post<any>(this._addDailyDiary, data)
  }

  dailyDiaryDetails(): Observable<any> {
    return this.http.get<any>(this._dailyDiaryDetailsUrl)
  }

  addEveningUpdate(id, data, in_time): Observable<any>{
    let url = this._addEveningUpdate + "/" + id;
    return this.http.post<any>(url, {data, in_time});
  }

  toggleQueryStatus(id): Observable<any>{
    let url = this._toggleQueryStatusUrl + "/" + id;
    return this.http.post(url, id)
  }

  toggleTaskStatus(data): Observable<any>{
    return this.http.post(this._toggleTaskStatusUrl, data)
  }

  createTask(tasks, projects, employees): Observable<any> {
    let obj = {
      tasks,
      projects,
      employees
    }
    return this.http.post<any>(this._createTask, obj)
  }

  invidualTaskUrl(): Observable<any>{
    return this.http.get(this._invidualTaskUrl)
  }

  myAttendance(): Observable<any>{
    return this.http.get(this._myAttendanceUrl)
  }


}
