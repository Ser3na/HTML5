import { PeopleListComponent } from './components/people-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const ROUTES: Routes = [
    { path: '',component: PeopleListComponent },
    { path: 'people', component: PeopleListComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutesModule{}