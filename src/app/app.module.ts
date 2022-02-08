import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from 'customer-libs/dist/core';

/**
 * TODO
 *  Error: NG0203: inject() must be called from an injection context
 *  Check https://stackoverflow.com/a/70578245/4495348
 */

@NgModule({
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [ BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

    CoreModule.forRoot({ uriApi: 'https://randomuser.me/api/?gender=female' })
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
