import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomechildComponent } from './homechild/homechild.component';
import { ContactchildComponent } from './contactchild/contactchild.component';


export const routes: Routes = [
    //  {path:'home', component: HomeComponent},
    // {path:'about', component: AboutComponent},
    // {path:'contact', component: ContactComponent ,
    //     children:[{path: 'childcontact', component: ContactchildComponent},
    //         {path: 'childhome', component: HomechildComponent}
    //     ]
    // }


    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'teacher', loadChildren:()=>import('./teacher/teacher-routing.module').then(t=>t.TeacherRoutingModule)}


];
