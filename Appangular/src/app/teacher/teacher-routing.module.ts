import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherAdminComponent } from './teacher-admin/teacher-admin.component';

const routes: Routes = [{path:'Tlogin', component:TeacherLoginComponent},
                        {path:'Tadmin', component:TeacherAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
