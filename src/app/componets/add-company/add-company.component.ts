import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CompanyInterface } from '../../models/companyInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: CompanyInterface = {
    name: '',
    location: '',
    email: '',
    tel: '',
    extension: '',
    responsable: ''
  };


  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  onSaveCompany(myForm: NgForm){
    this.companyService.addCompany(this.company);
  }

}
