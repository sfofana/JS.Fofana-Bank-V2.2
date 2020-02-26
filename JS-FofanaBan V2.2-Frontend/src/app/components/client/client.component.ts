import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  private user = new User();
  private view;

  constructor(private session: AppComponent, private router: Router) { }

  ngOnInit() {
    this.authentication();
  }

  toggle(tab:string){
    this.view = tab;
    console.log(tab);
  }

  authentication(){
    if(!this.session.canLogout){
      this.router.navigate(['']);
    }
    if(this.session.canLogout){
      this.user = this.session.user;
    }
  }
}
