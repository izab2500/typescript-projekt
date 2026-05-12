import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Course } from './pages/course/course';
import { StudyPlan } from './pages/study-plan/study-plan';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: "",
        component: Home,
        title: "Öppna akademin | Hem"
    },
    {
        path: "kurser",
        component: Course,
        title: "Öppna akademin | Kurser"

    },
    {
        path: "ramschema",
        component: StudyPlan,
        title: "Öppna akademin | ramschema"
    },
    {
        path: "om",
        component: About,
        title: "Öppna akademin | Om"

    },
    {
        path: "kontakt",
        component: Contact,
        title: "Öppna akademin | Kontakt"

    },

    {
        path: '404',
        component: NotFound,
        title: "Öppna akademin | 404"
    },
    {
        path: '**',
        redirectTo: '404'
    }

];
