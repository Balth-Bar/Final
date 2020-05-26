import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { PacientListComponent } from './componets/pacient-list/pacient-list.component';

import { PacientesService} from './services/pacientes.service';
import { HttpClientModule } from '@angular/common/http';
import { PacientComponent } from './componets/pacient/pacient.component';
import { IndexComponent } from './componets/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PacientListComponent,
    PacientComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
