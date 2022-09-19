import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BangloreFaculaityComponent } from './banglore-faculaity/banglore-faculaity.component';
import { MysoreFaculaityComponent } from './mysore-faculaity/mysore-faculaity.component';
import { FaculaityComponent } from './faculaity/faculaity.component';


const routes: Routes = [
 {path:'Banglore', component:BangloreFaculaityComponent},
 {path:'mysore', component: MysoreFaculaityComponent},
 {path:'allFacuality', component:FaculaityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
