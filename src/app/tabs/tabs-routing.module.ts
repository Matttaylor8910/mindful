import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// hacky way to pick a default route
const loggedIn = localStorage.getItem('APP.LOGGED_IN') === 'true';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'moments',
        loadChildren: () => import('../pages/moments/moments.module').then(m => m.MomentsPageModule)
      },
      {
        path: 'people',
        loadChildren: () => import('../pages/people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/moments',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: loggedIn ? '/tabs/moments' : '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
