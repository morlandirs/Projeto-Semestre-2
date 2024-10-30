import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {TaskViewComponent} from "./components/task-view/task-view.component";

const routes: Routes = [
  {path: "", redirectTo: "home-page", pathMatch: "full"},
  {path: "home-page", component: HomePageComponent},
  {path: "task-view", component: TaskViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
