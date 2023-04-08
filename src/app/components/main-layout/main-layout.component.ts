import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragEnter,
  CdkDropList,
  DragRef,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent {
  allUsers: Users[] = [];
  isLoadingData = true;
  searchText = '';
  doneList!: string | CdkDropList<any>;

  userStatus: any[] = [];
  potential: Users[] = [];
  focus: Users[] = [];
  gettingReady: Users[] = [];
  offerSent: Users[] = [];
  contactMade: any[] = [];

  fields: any = {
    first_name: '',
    last_name: '',
    email: '',
  };

  filter = {};
  _dragRef: DragRef<CdkDrag> | undefined;

  constructor(private _apiService: ApiService) {}
  public CdkDragDrop(item: CdkDragEnter): void {
    console.log(item.container.data); // returns { x: 0, y: 0 }
  }
  ngOnInit() {
    this._apiService.getAll().subscribe((response: any) => {
      this.allUsers = response.deals;

      this.isLoadingData = false;
      let currentStatus = this.allUsers.map((a) => a.status);
      this.userStatus = [...new Set(currentStatus)];
      console.log(this.userStatus);
      let focusValue = this.allUsers.filter((a) => a.status == 'Focus');
      this.focus = focusValue;

      let gettingReadyValue = this.allUsers.filter(
        (a) => a.status == 'Getting Ready'
      );
      this.gettingReady = gettingReadyValue;

      let potentialValue = this.allUsers.filter(
        (a) => a.status == 'Potential Value'
      );
      this.potential = potentialValue;

      let offerSentValue = this.allUsers.filter(
        (a) => a.status == 'Offer Sent'
      );
      this.offerSent = offerSentValue;

      let contactMadeValue=this.allUsers.filter(
        (a) => a.status == 'Contact Made'
      );
      this.contactMade=contactMadeValue
    });
  }
  drop(event: CdkDragDrop<Users[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let x = event.container.data.map((x) => x.status);
    }

    //    let x=event.container.data.map(x=>x)
    // x=this.focus
    // console.log(this.focus)
    // console.log(x)
  }

  updateFilters() {
    Object.keys(this.fields).forEach((key) =>
      this.fields[key] === '' ? delete this.fields[key] : key
    );
    this.filter = Object.assign({}, this.fields);
  }

  updateStatusFocus(user: Users) {
    user.status = 'Focus';
    let indexToUpdate = this.focus.findIndex((item) => item.id === user.id);
    this.focus[indexToUpdate] = user;
    this.focus = Object.assign([], this.focus);
  }
  updateStatusGettingReady(user: Users) {
    user.status = 'Getting Ready';
    let indexToUpdate = this.focus.findIndex((item) => item.id === user.id);
    this.focus[indexToUpdate] = user;

    this.focus = Object.assign([], this.focus);
  }

  test() {
    // console.log(event.target.textContent);
    // let x=event.target.textContent
    // x='Focus'
    console.log('x');
  }
}
