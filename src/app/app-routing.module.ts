import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'Home',component: HomeComponent},
    {path:'About',component:AboutComponent},
    {path:'Education',component:EducationComponent},
    {path:'Projects',component:ProjectsComponent} //, canActivate:[CourseGuardService]},
   // {path:'Projects', children:[{path:"Courses/:id",component:CourseComponent}],},
    //{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
