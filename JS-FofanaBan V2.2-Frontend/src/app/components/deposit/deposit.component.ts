import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Accounts } from 'src/app/models/accounts';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  private user = new User();
  private amount: number = 0;
  private updateAmount: number;
  private option: string;
  private success: string;
  private invalid: string;

  constructor(private service: UserService, private session: AppComponent) { }

  ngOnInit() {
    this.user = this.session.user;
  }

  deposit(): void{
    console.log(this.option);
    console.dir(this.user);
    if(this.option == 'checking'){
      this.updateAmount = this.user.accounts.checking + this.amount;
      this.user.accounts.checking = this.updateAmount;
      this.service.updateUser(this.user._id,this.user).subscribe(data=>this.user=data);
      this.success='Successfully Deposited $'+this.amount+' to Checking Account';
      this.invalid ="";
    }
    if(this.option == 'saving'){
      this.updateAmount = this.user.accounts.saving + this.amount;
      this.user.accounts.saving = this.updateAmount;
      this.service.updateUser(this.user._id,this.user).subscribe(data=>this.user=data);
      this.success='Successfully Deposited $'+this.amount+' to Saving Account';
      this.invalid ="";
    }
    if(!this.option) {
      this.invalid='Error with Deposit';
      this.success ="";
    };
  }

  select(option: any){
    this.option = option.target.value;
    console.log(this.option);
  }

  reset(){
    this.amount=0;
  }

}
