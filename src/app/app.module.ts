import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

const apiKey = 'AIzaSyDKuOFIBvtbja-IPXGGpQvLakD-rJhnFWw';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: apiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
