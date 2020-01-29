import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { SearchFilterPipe} from '../../Pipes/search-filter.pipe';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  count = new Subject();
  employees: any[];
  headers = ["Code","Name","Gender","Salary","Date of Birth"];
  SearchItemCount: any;


//pagination declarations 
  pageOptions = [10, 25, 50, 100, 200, 500];
  pageSizeSelected: any = this.pageOptions[0];
  pageSize: number;
  totalItems: any;
  arraySizeOneForms: any;
  page = 1;
  currentPageResults: number;
  startItem: any;

  minPageItemCount: number;
  previousPage: number;
  pageItemCount: number;
  constructor() {}


  ngOnInit(){
    this.getEmployees();
    this.count.subscribe(c => console.log('Counting', c));
    this.setDefaultPageSize();
    this.setDefaultPageCounts();
  }

  setDefaultPageSize(){
    this.pageSize = 10;
    this.currentPageResults = this.arraySizeOneForms / this. pageSize
  }
   setDefaultPageCounts()
 {
   if (this.page !== this.previousPage) {
     this.previousPage = this.page;
   }
   this.minPageItemCount = 1;
   this.pageItemCount = this.page * this.pageSize;
 }
 
  onPageSize(event){
     this.pageSize = this.pageSizeSelected;
     this.startItem = (this.page-1) * this.pageSize;
     if (this.page !== this.previousPage) {
      this.previousPage = this.page;
     }
     this.pageItemCount = this.page * this.pageSize; 
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
    }
    //this.minPageItemCount += this.pageSize;
    this.pageItemCount = this.page * this.pageSize;

    if (this.pageItemCount > this.arraySizeOneForms)
    {

    }
    console.log("Page Item Count = " + this.pageItemCount);
  }

  
  getEmployees()
  { 
    this.employees = [
      { code: 'emp01', name: 'Steve', gender: 'Male', salary: 100000, dob: '1/1/1992'},
      { code: 'emp02', name: 'Justice', gender: 'Male', salary: 850000, dob: '3/3/1985'},
      { code: 'emp03', name: 'Sandesh', gender: 'Male', salary: 90000, dob: '4/4/1991'},
      { code: 'emp04', name: 'Sarah', gender: 'Female', salary: 80000, dob: '5/5/1995'},
      { code: 'emp05', name: 'Kelsey', gender: 'Female', salary: 60000, dob: '6/1/1975'},
      { code: 'emp06', name: 'John', gender: 'Male', salary: 62500, dob: '10/1/1995'},
      { code: 'emp07', name: 'Carol', gender: 'Female', salary: 95000, dob: '12/22/1982'},
      { code: 'emp08', name: 'Jared', gender: 'Male', salary: 79000, dob: '8/23/1990'},
      { code: 'emp09', name: 'Katie', gender: 'Female', salary: 64000, dob: '4/23/1993'},
      { code: 'emp10', name: 'Robert', gender: 'Male', salary: 78000, dob: '3/22/1981'},
      { code: 'emp11', name: 'David', gender: 'Male', salary: 97000, dob: '2/13/1989'}
    ]
     this.arraySizeOneForms = this.employees.length;
  }
}