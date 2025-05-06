import { Routes } from '@angular/router';

import { ItemsComponent } from './items/items.component';
import { SkillsComponent } from './skills/skills.component';
import { ActivitiesComponent } from './activities/activities.component';

export const routes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: '', redirectTo: '/items', pathMatch: 'full' },
];
