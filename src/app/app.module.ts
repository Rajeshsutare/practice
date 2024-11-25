import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './imdb_project/components/dashboard/dashboard.component';
import { SearchMoviePipe } from './imdb_project/pipe/search-movie.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { PostsComponent } from './api_call/components/posts/posts.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { UserFormComponent } from './crud_by_json_server/componets/user-form/user-form.component';
import { UserListComponent } from './crud_by_json_server/componets/user-list/user-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { DependentDropdownComponent } from './components/dependent-dropdown/dependent-dropdown.component'
import { UsersComponent } from './crud_by_json_server/componets/users/users.component';
import { ProgressBarComponent } from './progressBar/progress-bar/progress-bar.component';
import { FilterOnBtnClickComponent } from './components/filter-on-btn-click/filter-on-btn-click.component';
import { SendEmailComponent } from './forms/send-email/send-email.component';
import { ThankYouComponent } from './forms/thank-you/thank-you.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchMoviePipe,
    ReactiveFormsComponent,
    PostsComponent,
    NavbarComponent,
    UserFormComponent,
    ModalComponent,
    DependentDropdownComponent,
    ProgressBarComponent,
    FilterOnBtnClickComponent,
    SendEmailComponent,
    ThankYouComponent,
    // UserListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
