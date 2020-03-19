import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  private user: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe(data=>this.user=data[0]);
  }

}
