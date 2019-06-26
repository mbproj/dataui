import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: 'upload', component: UploadComponent    },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    GridComponent, UploadComponent
  ];
}