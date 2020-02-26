import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPenaltyComponent } from './components/edit-penalty/edit-penalty.component';
import { FormPersonsComponent } from './components/form-persons/form-persons.component';
import { FormEditPersonsComponent } from './components/form-edit-persons/form-edit-persons.component';
import { FormPenaltyComponent } from './components/form-penalty/form-penalty.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPenaltyComponent,
    EditPenaltyComponent,
    FormPersonsComponent,
    FormEditPersonsComponent,
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
