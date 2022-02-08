import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService, Users } from 'customer-libs/dist/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: [ 'tab2.page.scss' ]
})
export class Tab2Page {
  $users: Observable<Users>;

  constructor(private core: CoreService) {
    this.$users = core.get();
  }

}
