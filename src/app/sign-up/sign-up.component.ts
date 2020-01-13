import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  /*title = 'FormValidation';  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 isValidFormSubmitted = false;  
 user = new User();  
   
   
 onFormSubmit(form: NgForm) {  
   this.isValidFormSubmitted = false;  
   if (form.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;  
   form.resetForm();  
  }  */




  constructor(private router: Router) { 

  }

  ngOnInit() {
    
  }

  changeSignup = function(){
    this.router.navigateByUrl("signup2");
  }


}
