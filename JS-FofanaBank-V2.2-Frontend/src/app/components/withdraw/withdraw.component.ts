import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Account } from 'src/app/models/account';
import { SubjectService } from 'src/app/services/subject.service';

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
  private option: number;
  private success: string;
  private invalid: string;

  constructor(
    private service: UserService, 
    private session: AppComponent,
    private memory: SubjectService
    ) { }

  ngOnInit() {
    this.user = this.session.user;
    this.money = this.service.getWidthdrawAmounts()
  }

  withdraw(): void{
    if(this.option){
      this.user.accounts.filter(data=>{
        if(data.id == this.option){
          this.updateAmount = data.amount - this.amount;
          data.amount = this.updateAmount;
        }
    });
    this.service.updateUser(this.user).subscribe(data=>this.user=data);
    this.memory.changedInfo(this.user);
    this.success='Successfully Widthdrawn $'+this.amount+' from Checking Account';
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
