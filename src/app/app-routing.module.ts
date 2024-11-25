import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './imdb_project/components/dashboard/dashboard.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { PostsComponent } from './api_call/components/posts/posts.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './progressBar/progress-bar/progress-bar.component';
import { FilterOnBtnClickComponent } from './components/filter-on-btn-click/filter-on-btn-click.component';
import { SendEmailComponent } from './forms/send-email/send-email.component';
import { ThankYouComponent } from './forms/thank-you/thank-you.component';


const routes: Routes = [

  {path:"", pathMatch:"full", component:DashboardComponent},
  {path:"imdb", component:DashboardComponent},
  {path:"reactiveForm", component:ReactiveFormsComponent},
  {path:"apiCall", component:PostsComponent},
  {path:"modal", component:ModalComponent},
  {path:"filterOnBtnClick", component:FilterOnBtnClickComponent},
  {path:"sendEmail", component:SendEmailComponent},
  {path:"thankYou", component:ThankYouComponent},
  {path:"crud",
    loadChildren : () => import ('./crud_by_json_server/componets/user-module.module').then(m=>m.UserModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
