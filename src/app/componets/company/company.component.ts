import { Component, OnInit } from '@angular/core';
import { CompanyInterface } from '../../models/companyInterface';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companys: CompanyInterface[];
  editState: boolean = false;
  companyToEdit: CompanyInterface;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanys().subscribe(companys => {
      //console.log(companys);
      this.companys = companys;
    });
  }
  editCompany(event, company: CompanyInterface){
    this.editState = true;
    this.companyToEdit = company;
  }
  onUpdateCompany(company: CompanyInterface){
    this.companyService.updateCompany(company);
    this.clearState();
  }
  deleteCompany(event, company:CompanyInterface){
    this.companyService.deleteCompany(company);
    this.clearState();
  }


  clearState(){
    this.editState = false;
    this.companyToEdit = null;
  }

}
