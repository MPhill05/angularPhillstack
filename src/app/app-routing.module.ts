import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrantComponent } from './grant/grant.component';
import { MarkComponent } from './mark/mark.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'grant', component: GrantComponent },
    { path: 'mark', component: MarkComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'Contact', component: ContactComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}