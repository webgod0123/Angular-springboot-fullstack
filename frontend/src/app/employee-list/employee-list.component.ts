import { EmployeeDetailsComponent } from "./../employee-details/employee-details.component";
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {
  filterBy,
  FilterDescriptor,
  CompositeFilterDescriptor,
} from "@progress/kendo-data-query";

// import { employees } from "./employees";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  // employees: Observable<Employee[]>;
  searchText: any;
  public filter: CompositeFilterDescriptor;
  // public gridData: Observable<Employee[]>;
  public gridData: any[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    // this.employeeService.getEmployeesList().subscribe(
    //   (data) => {
    //     this.gridData = data;
    //   },
    //   (error) => console.log(error)
    // );
    this.gridData = [
      { id: 1, name: "aaa", salary: 100, dept_id: 12, experience: 10 },
      { id: 1, name: "bbb", salary: 100, dept_id: 12, experience: 10 },
      { id: 1, name: "ccc", salary: 100, dept_id: 12, experience: 10 },
      { id: 1, name: "ddd", salary: 100, dept_id: 12, experience: 10 },
      { id: 1, name: "eee", salary: 100, dept_id: 12, experience: 10 },
    ];
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  employeeDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(["update", id]);
  }

  filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    // this.gridData = filterBy(this.gridData, filter);
    //this.gridData = filterBy(employees,filter);
  }

  flatten = (filter) => {
    const filters = filter.filters;
    if (filters) {
      return filters.reduce(
        (acc, curr) => acc.concat(curr.filters ? this.flatten(curr) : [curr]),
        []
      );
    }
    return [];
  };
}
