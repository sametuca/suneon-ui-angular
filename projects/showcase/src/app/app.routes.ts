import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GetStartedComponent } from './pages/get-started/get-started';
import { ComponentsPageComponent } from './pages/components-page/components-page';
import { AuroraPageComponent } from './pages/components/aurora-page/aurora-page';
import { MagneticButtonPageComponent } from './pages/components/magnetic-button-page/magnetic-button-page';
import { ShimmerButtonPageComponent } from './pages/components/shimmer-button-page/shimmer-button-page';
import { SpotlightCardPageComponent } from './pages/components/spotlight-card-page/spotlight-card-page';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get-started', component: GetStartedComponent },
    {
        path: 'components',
        component: ComponentsPageComponent,
        children: [
            { path: '', redirectTo: 'aurora', pathMatch: 'full' },
            { path: 'aurora', component: AuroraPageComponent },
            { path: 'magnetic-button', component: MagneticButtonPageComponent },
            { path: 'shimmer-button', component: ShimmerButtonPageComponent },
            { path: 'spotlight-card', component: SpotlightCardPageComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];
