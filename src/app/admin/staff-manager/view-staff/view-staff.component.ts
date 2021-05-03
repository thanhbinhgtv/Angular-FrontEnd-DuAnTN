import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StaffsService } from '../staffs.service';
import { StaffResponseModel } from './staff-response-model';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
  staffs: Array<StaffResponseModel> = [];
  page = 0;
  block: string = '';
  search: string = '';
  blockForm = new FormControl('');
  searchForm = new FormControl('');
  // staffsFilter: Array<StaffResponseModel> = [];
  // deleteSuccess : boolean;
  // value = '';
  // arrayPage = new Array();
  // numberPage: number;

  constructor(private staffService: StaffsService, private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    this.getAllStaff();
  }

  getAllStaff(){
    this.staffService.getAllStaffs(this.block, this.search).subscribe(data =>{
      this.staffs = data;

      // this.staffsFilter = this.staffs.filter(staff => staff.name.toLowerCase().includes(this.value) 
      // || staff.email.toLowerCase().includes(this.value));

      // this.numberPage = data[0]?.pages;
      // this.arrayPage = Array(this.numberPage).fill(0).map((x,i)=>i);
    });
  }

  Search(){
    this.block = this.blockForm.value;
    this.search = this.searchForm.value;
    this.getAllStaff();
  }

  // getAllActiveOrBlockStaff(deleted: boolean){
  //     this.status = deleted ? 2 : 1;
  //     const filterData = this.staffs.filter(staff => staff.deleted === deleted && (staff.name.toLowerCase().includes(this.value) 
  //                       || staff.email.toLowerCase().includes(this.value)));
  //     this.staffsFilter = filterData;
  // }

  // Đã comment (Back and Front)
  // deleteStaff(id: number){
  //   this.staffService.deleteStaff(id).subscribe(() =>{
  //     this.toastr.success('Xóa thành công')
  //     this.deleteSuccess = true;
  //     if(this.deleteSuccess){
  //       this.getAllStaff(this.block);
  //     }
  //   }, () => {
  //     this.toastr.error('Xóa thất bại! Vui lòng kiểm tra lại');
  // });
  // }

  // onPage(page: number){
  //    this.page = page;
  //    this.getAllStaff(this.block);
  // }

  // onChange(event: any){
  //   console.log(event);
  //   this.value = event.target.value.toLowerCase();
    
  //   this.staffsFilter = this.status === 0 ? this.staffs.filter(staff => staff.name.toLowerCase().includes(this.value) 
  //               || staff.email.toLowerCase().includes(this.value)) 
  //               : this.staffs.filter(staff => (staff.name.toLowerCase().includes(this.value) 
  //               || staff.email.toLowerCase().includes(this.value)) && this.status === 1 ? !staff.deleted : staff.deleted);
  // }

}