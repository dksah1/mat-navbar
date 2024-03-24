import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'newcontact',component:NewcontactComponent},
];
