import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProizvodListComponent } from './components/proizvod-list/proizvod-list.component';
import { DetaljiComponent } from './components/detalji/detalji.component';


const routes: Routes = [
  { path: 'proizvod/:id', component: DetaljiComponent },
  { path: '', component: ProizvodListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
