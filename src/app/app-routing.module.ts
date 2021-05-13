import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CanAccessGuard} from './can-access.guard'


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};



const routes: Routes = [
  // {path:"inicio", component: IndexComponent, canActivate: [CanAccessGuard]},
  // {path:"home", component:HomeComponent , canActivate: [CanAccessGuard]},
  {path:"inicio", component: IndexComponent},
  {path:"home", component:HomeComponent},
  {path: "", redirectTo: "/inicio", pathMatch: 'full' },
  { path: "**", redirectTo:  "/inicio" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
