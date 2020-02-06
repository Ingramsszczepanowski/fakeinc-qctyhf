import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/home/home.component';
import { QuickstartComponent } from './components/quickstart/quickstart.component';

const routes: Routes = [
  { path :  'Parent',component: ParentComponent},
  { path :  'Child',component: ChildComponent},
  { path :  'App',component: AppComponent},
  { path :  'Home',component: HomeComponent},
  { path :  'QuickStart',component: QuickstartComponent},
  { path :  '**', redirectTo: 'Parent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [AppComponent, ParentComponent,ChildComponent,QuickstartComponent, HomeComponent]