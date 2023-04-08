import { Component } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
allUsers:Users[]=[]
constructor(    private _apiService: ApiService){}
ngOnInit() {
  this._apiService.getAll().subscribe((response: any) => {
    console.log(response, 'ngoninit');
    this.allUsers = response;
    console.log(this.allUsers)
  });

}
}
