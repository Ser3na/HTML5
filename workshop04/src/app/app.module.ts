import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { PeopleListComponent } from './components/people-list.component';
import { MaterialModule } from './material.module';
import { AppRoutesModule } from './app-routes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/details.component';

@NgModule({
  declarations: [
    AppComponent,PeopleListComponent, DetailsComponent
  ],
  imports: [
    BrowserModule, MaterialModule, AppRoutesModule, BrowserAnimationsModule
  ],
  providers: [ StarWarsService, StarWarsDatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
