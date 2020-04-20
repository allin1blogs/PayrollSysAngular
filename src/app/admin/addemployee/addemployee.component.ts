import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addEmployee: FormGroup;
  submitted = false;

  constructor(
  private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  this.addEmployee = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

    // convenience getter for easy access to form fields
  get f() { return this.addEmployee.controls; }

  onSubmit() {
    this.submitted = true;
    }
}
