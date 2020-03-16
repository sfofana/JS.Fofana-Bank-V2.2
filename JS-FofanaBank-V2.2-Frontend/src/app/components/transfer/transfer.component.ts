import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { Account } from 'src/app/models/account';
import { SubjectService } from 'src/app/services/subject.service';

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
  private optionFrom: number;
  private optionTo: number;
  private success: string;
  private invalid: string;

  constructor(
    private service: UserService, 
    private session: AppComponent,
    private memory: SubjectService
    ) { }

  ngOnInit() {
    this.user = this.session.user;
  }

  transfer(): void{
    console.dir(this.user);
    if(this.optionFrom && this.optionTo){
      this.user.accounts.filter(data=>{
        if(data.id == this.optionFrom){
          this.updateAmount = data.amount + this.amount;
          data.amount = this.updateAmount;
        }
        if(data.id == this.optionTo){
          this.lostAmount = data.amount - this.amount;
          data.amount = this.lostAmount;
        }
      });
      this.service.updateUser(this.user).subscribe(data=>this.user=data);
      this.memory.changedInfo(this.user);
      this.success='Successfully Deposited $'+this.amount+' to account ending with '+this.optionTo;
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
