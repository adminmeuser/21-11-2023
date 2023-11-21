import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { WilscardComponent } from './wilscard/wilscard.component';
import { ProfileComponent } from './profile/profile.component';
// import { StudentComponent } from './layout/student/student.component';
const routes: Routes = [
  { path: '* *', component: WilscardComponent},
  
{ path:'home',
component:HomeComponent},
{
  path:'about',
  component:AboutComponent
},
{
  path:'products', loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule)

  
},
// {
//   path: 'student/:studentname', component:StudentComponent
// },
{
  path:'contact',
  component:ContactComponent
},

{
  path:'profile',
  component:ProfileComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
