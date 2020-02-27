import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Saving } from 'src/app/models/saving';
import { Checking } from 'src/app/models/checking';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  private user = new User();
  private amount: number = 0;
  private money: Array<number>;
  private updateAmount: number;
  private option: string;
  private success: string;
  private invalid: string;

  constructor(private service: UserService, private session: AppComponent) { }

  ngOnInit() {
    this.user = this.session.user;
    this.money = this.service.getWidthdrawAmounts()
  }

  withdraw(): void{
    console.log(this.option);
    console.dir(this.user);
    if(this.option == 'checking'){
      this.updateAmount = this.user.checking.amount - this.amount;
      this.user.checking.amount = this.updateAmount;
      this.service.updateUser(this.user).subscribe(data=>this.user=data);
      this.success='Successfully Widthdrawn $'+this.amount+' from Checking Account';
      this.invalid ="";
    }
    if(this.option == 'saving'){
      this.updateAmount = this.user.saving.amount - this.amount;
      this.user.saving.amount = this.updateAmount;
      this.service.updateUser(this.user).subscribe(data=>this.user=data);
      this.success='Successfully Widthdrawn $'+this.amount+' from Saving Account';
      this.invalid ="";
    }
    if(!this.option) {
      this.invalid='Error with Widthdraw';
      this.success ="";
    };
  }

  select(option: any){
    this.option = option.target.value;
  }

  selectAmount(value: any){
    this.amount = value.target.value;
    console.log(this.amount);
  }

  reset(){
    this.amount=0;
  }

}
