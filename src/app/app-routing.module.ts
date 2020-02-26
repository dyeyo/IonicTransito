import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditPenaltyComponent } from './components/edit-penalty/edit-penalty.component';
import { FormPersonsComponent } from './components/form-persons/form-persons.component';
import { FormEditPersonsComponent } from './components/form-edit-persons/form-edit-persons.component';
import { FormPenaltyComponent } from './components/form-penalty/form-penalty.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {  path:'new_penalty',component:FormPenaltyComponent},
  {  path:'new_person',component:FormPersonsComponent},
  {  path:'editar_multa/:id',component:EditPenaltyComponent},
  {  path:'editar_person/:id',component:FormEditPersonsComponent},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
