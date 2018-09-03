import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';

import { MatCardModule, MatToolbarModule, MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpModule,MatCardModule,MatToolbarModule,FormsModule,
    NgxPaginationModule,
    MatInputModule,MatButtonModule,MatIconModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
