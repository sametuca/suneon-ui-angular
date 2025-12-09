import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GetStartedComponent } from './pages/get-started/get-started';
import { ComponentsPageComponent } from './pages/components-page/components-page';
import { AuroraPageComponent } from './pages/components/aurora-page/aurora-page';
import { ButtonsPageComponent } from './pages/components/buttons-page/buttons-page';
import { SpotlightCardPageComponent } from './pages/components/spotlight-card-page/spotlight-card-page';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get-started', component: GetStartedComponent },
    {
        path: 'components',
        component: ComponentsPageComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsPageComponent },
            { path: 'aurora', component: AuroraPageComponent },
            { path: 'spotlight-card', component: SpotlightCardPageComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];
