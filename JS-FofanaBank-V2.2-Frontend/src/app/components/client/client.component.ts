import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  private user: User;
  private view;

  constructor(
    private session: AppComponent, 
    private router: Router,
    private memory: SubjectService
    ) { }

  ngOnInit() {
    this.authentication();
  }

  toggle(tab:string){
    this.view = tab;
    console.log(tab);
  }

  authentication(){
    //this.memory.session.subscribe(data=>this.user=data);
    if(!this.session.canLogout){
      this.router.navigate(['']);
    }
    if(this.session.canLogout){
      this.memory.refresh
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data=>this.user=data);
    }
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
