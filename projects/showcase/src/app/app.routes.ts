import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GetStartedComponent } from './pages/get-started/get-started';
import { ComponentsPageComponent } from './pages/components-page/components-page';
import { AuroraPageComponent } from './pages/components/aurora-page/aurora-page';
import { ButtonsPageComponent } from './pages/components/buttons-page/buttons-page';
import { BadgePageComponent } from './pages/components/badge-page/badge-page';
import { InputPageComponent } from './pages/components/input-page/input-page';
import { TablePageComponent } from './pages/components/table-page/table-page';
import { ModalPageComponent } from './pages/components/modal-page/modal-page';
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
            { path: 'badges', component: BadgePageComponent },
            { path: 'inputs', component: InputPageComponent },
            { path: 'tables', component: TablePageComponent },
            { path: 'modals', component: ModalPageComponent },
            { path: 'aurora', component: AuroraPageComponent },
            { path: 'spotlight-card', component: SpotlightCardPageComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];
