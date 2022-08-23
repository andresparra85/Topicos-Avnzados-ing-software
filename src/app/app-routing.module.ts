import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { PublicComponent } from './components/public/public.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'publico',component:PublicComponent},
  {path:'privado',component:PrivateComponent ,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
