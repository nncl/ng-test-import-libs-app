import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { CoreService, Users } from 'customer-libs/dist/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page {
  $users: Observable<Users>;

  constructor(private core: CoreService) {
    this.$users = core.get();
  }

}
