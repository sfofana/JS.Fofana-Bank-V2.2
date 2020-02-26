import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  private user = new User();
  private amount: number = 0;
  private updateAmount: number;
  private lostAmount: number;
  private optionFrom: string;
  private optionTo: string;
  private success: string;
  private invalid: string;

  constructor(private service: UserService, private session: AppComponent) { }

  ngOnInit() {
    this.user = this.session.user;
  }

  transfer(): void{
    console.dir(this.user);
    if(this.optionFrom == 'checking'){
      this.lostAmount = this.user.accounts.checking - this.amount;
      this.updateAmount = this.user.accounts.saving + this.amount;
      this.user.accounts.checking = this.lostAmount;
      this.user.accounts.saving = this.updateAmount;
      this.service.updateUser(this.user._id,this.user).subscribe(data=>this.user=data);
      this.success='Successfully Transfer $'+this.amount+' from Checking Account';
      this.invalid ="";
    }
    if(this.optionFrom == 'saving'){
      this.lostAmount = this.user.accounts.saving - this.amount;
      this.updateAmount = this.user.accounts.checking + this.amount;
      this.user.accounts.saving = this.lostAmount;
      this.user.accounts.checking = this.updateAmount;
      this.service.updateUser(this.user._id,this.user).subscribe(data=>this.user=data);
      this.success='Successfully Transfer $'+this.amount+' from Saving Account';
      this.invalid ="";
    }
    if(!(this.optionFrom || this.optionTo)) {
      this.invalid='Error with Transfer';
      this.success ="";
    }
    if(this.optionFrom == this.optionTo) {
      this.invalid='To make a deposit see our Deposit Section';
      this.success ="";
    };
  }

  selectFrom(option: any){
    this.optionFrom = option.target.value;
    console.log(this.optionFrom);
  }

  selectTo(option: any){
    this.optionTo = option.target.value;
    console.log(this.optionTo);
  }

  reset(){
    this.amount=0;
  }
}
