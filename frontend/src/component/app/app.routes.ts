import { Routes } from '@angular/router';
import { Contact } from '../contact/contact';
import { Home } from '../home/home';
import { Profil } from '../profil/profil';
import { Projects } from '../projects/projects';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page',
    },
    {
        path: 'profil',
        component: Profil,
        title: 'Profil page',
    },
    {
        path:'projects',
        component: Projects,
        title: 'Projects',
    },
    {
        path:'contact',
        component: Contact,
        title: 'Contact'
    },
];
