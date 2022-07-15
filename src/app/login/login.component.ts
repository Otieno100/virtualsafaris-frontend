import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  form!: FormGroup;
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }


    ngOnInit(): void {
      this.form = this.formBuilder.group({
        email: '',
        password: ''
      });
    }

    submit(): void {
      this.http.post('https://virtualsafaris-backend.herokuapp.com/api/tourist/login/', this.form.getRawValue(), {
        withCredentials: true
      }).subscribe(() => this.router.navigate(['/']));
    }

}
