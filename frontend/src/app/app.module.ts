import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { GridModule, ExcelModule } from "@progress/kendo-angular-grid";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { InputsModule } from "@progress/kendo-angular-inputs";

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    InputsModule,
    ExcelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
