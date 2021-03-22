import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffRequestModel } from './create-staff/staff-request-model';
import { StaffResponseModel } from './view-staff/staff-response-model';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {

  constructor(private http: HttpClient) { }

  getAllStaffs(page: number): Observable<Array<StaffResponseModel>> {
    return this.http.get<Array<StaffResponseModel>>(`http://localhost:8080/super-admin/staffs?page=${page}&&limit=5`);
  }

  createStaff(postStaffModel: StaffRequestModel): Observable<any>{
    return this.http.post('http://localhost:8080/super-admin/staffs', postStaffModel);
  }
  
  deleteStaff(id: number): Observable<any> {
    return this.http.delete('http://localhost:8080/super-admin/staffs/' + id);
  }
  
}
