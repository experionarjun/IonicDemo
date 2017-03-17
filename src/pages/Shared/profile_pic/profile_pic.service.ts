import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

// Used to subscribe for profile pic event change
// Observable is created and is subscribed in the profile_pic components
//This service is added as provider in app.module

@Injectable()
export class profilePicService {

  constructor(){}

  private changeDP = new Subject<string>();

  changeDP$ = this.changeDP.asObservable();

  updateProfPic(data: string) {
    this.changeDP.next(data);
  }
}
