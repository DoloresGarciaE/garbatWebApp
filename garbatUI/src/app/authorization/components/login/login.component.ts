import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginI } from 'src/app/shared/interfaces/userLoginI';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private authSvc: AuthorizationService) { }

  ngOnInit(): void {
    this.initForm();
  }


  public initForm(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    this.authSvc.login(this.formGroup.value).subscribe((userLogin: UserLoginI) => {
      if (userLogin) {
        localStorage.setItem('authUser', JSON.stringify(userLogin));
      }
    },
      (error: Error) => {
        console.log(error);
      })
  }

}
