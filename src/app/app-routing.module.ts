import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {path: 'library', component: LibraryComponent},
  {path: 'albums', component: AlbumListComponent},
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: '**', redirectTo: '/albums', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
