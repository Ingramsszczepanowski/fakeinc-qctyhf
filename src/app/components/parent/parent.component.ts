import { Component, OnInit } from '@angular/core';
import { SearchFilterPipe} from '../../Pipes/search-filter.pipe';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employees: any[];
  headers = ["Code","Name","Gender","Salary","Date of Birth"];
  SearchItemCount: any;
  constructor() {}

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees()
  { 
    this.employees = [
      { code: 'emp01', name: 'Steve', gender: 'Male', salary: 100000, dob: '1/1/1992'},
      { code: 'emp02', name: 'Justice', gender: 'Male', salary: 850000, dob: '3/3/1985'},
      { code: 'emp03', name: 'Sandesh', gender: 'Male', salary: 90000, dob: '4/4/1991'},
      { code: 'emp04', name: 'Sarah', gender: 'Female', salary: 80000, dob: '5/5/1995'}
    ]
  }


  // Need to get count of items returned by search filter anywhere inside this component
  getFilterItemCount()
  {
    
  }
}