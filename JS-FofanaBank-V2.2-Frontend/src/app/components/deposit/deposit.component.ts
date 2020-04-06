import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { SubjectService } from 'src/app/services/subject.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit, OnDestroy {

  private user: User;
  private amount: number = 0;
  private updateAmount: number;
  private option: number;
  private success: string;
  private invalid: string;

  constructor(
    private service: UserService, 
    private memory: SubjectService
    ) { }

  ngOnInit() {
    this.memory.refresh
    .pipe(takeUntil(this.memory.unsubscribe))
    .subscribe(data=>this.user=data);
  }

  deposit(): void{    
    if(this.option){
      this.user.accounts.filter(data=>{
        if(data.id == this.option){
          this.updateAmount = data.amount + this.amount;
          data.amount = this.updateAmount;
        }
        console.dir(this.user);
      });
      this.service.updateUser(this.user)
      .pipe(takeUntil(this.memory.unsubscribe))
      .subscribe(data=>this.user=data);
      this.memory.changedInfo(this.user);
      this.success='Successfully Deposited $'+this.amount+' to Checking Account';
      this.invalid ="";
    }
    if(!this.option) {
      this.invalid='Error with Deposit';
      this.success ="";
    }
  }

  select(option: any){
    this.option = option.target.value;
    console.log(this.option);
  }

  reset(){
    this.amount=0;
  }

  ngOnDestroy(): void {
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
