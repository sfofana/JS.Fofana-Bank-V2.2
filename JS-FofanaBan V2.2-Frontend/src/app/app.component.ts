import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { HttpInterceptorService } from './services/http-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "JS.Fofana Bank";
  validatingForm: FormGroup;
  public validateUser = new User();
  public user = new User();
  private email = "";
  private password = "";
  private success ="";
  private invalid ="";
  private sessionSet = 'set';
  public canLogout = false;
  private connection ="";

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
    // this.service.getAllUsers().subscribe(data=>{
    //   this.user=data[0];
    //   localStorage[data[0].email]= this.sessionSet;
    //   console.dir(data[0]);
    // }, error => this.connection=error);
    this.service.testConnection().subscribe(data=>this.connection="", error => this.connection=error);
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  login(){
    this.validateUser.email = this.email;
    this.validateUser.password = this.password;
    this.service.authentication(this.validateUser).subscribe(data=>{
      this.user=data;
      this.cancel();
      this.success = 'Sucessful login';
      this.router.navigate(['client']);
      this.canLogout=true;  
      this.connection="";
    });
    // if(this.email == this.user.email && this.password == this.user.password){
    //   this.cancel();
    //   this.success = 'Sucessful login';
    //   this.router.navigate(['client']);
    //   this.canLogout=true;  
    //   this.connection="";
    // }
    // else{
    //   this.cancel();
    //   this.invalid = 'Invalid email or password';
    // }
  }

  cancel(){
    this.email="";
    this.password="";
    this.success="";
    this.invalid="";
  }

  logout(){
    this.router.navigate(['']);
    localStorage.clear();
    this.canLogout=false;
  }
}

