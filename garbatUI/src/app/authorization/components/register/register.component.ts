import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/shared/interfaces/user-i';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authSvc: AuthorizationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required)
    })
  }

  public onSubmit(): void {
    this.authSvc.register(this.formGroup.value).subscribe((registerData: UserI) => {
      console.log("OK", registerData);
    },
      (error: Error) => {
        console.log(error);
      })

  }

}
