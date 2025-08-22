import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { UserformComponent } from './components/userform/userform.component';

const routes: Routes = [
  {path:'users', component:TableComponent},
  {path:'userform', component:UserformComponent},
  {path:'', redirectTo:'users', pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
