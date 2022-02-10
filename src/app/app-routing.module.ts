import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';

const routes: Routes = [
  {path: 'albums', component: AlbumListComponent},
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: '**', redirectTo: '/albums', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
