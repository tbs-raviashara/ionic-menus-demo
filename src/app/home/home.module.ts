import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tab1',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
            }
          ]
      },
      {
        path: 'tab2',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
            }
          ]
      },
      {
        path: 'tab3',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
            }
          ]
      },
      {
        path: 'tab4',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
            }
          ]
      },
      {
        path: '',
        redirectTo: 'home/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
