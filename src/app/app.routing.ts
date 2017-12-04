import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AccessGuard } from './shared/security';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DummyTableComponent } from './dashboard/dummy-table/dummy-table.component';
import { UsersComponent } from './dashboard/users/users.component';
import { OwnersComponent } from './dashboard/owners/owners.component';
import { RentersComponent } from './dashboard/renters/renters.component';
import { ProvidersComponent } from './dashboard/providers/providers.component';
import { BuildingsComponent } from './dashboard/buildings/buildings.component';
import { BuildingDetailComponent } from './dashboard/buildings/building-detail.component';
import { LoginComponent } from './dashboard/login/login.component';

const appRoutes : Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: HomeComponent, canActivate: [ AuthGuard, AccessGuard ] },
            { path: 'usuarios', component: UsersComponent, canActivate: [ AuthGuard, AccessGuard ] },
            { path: 'propietarios', component: OwnersComponent, canActivate: [ AuthGuard, AccessGuard ] },
            {
                path: 'inmuebles',
                children: [
                    { path: '', component: BuildingsComponent, canActivate: [ AuthGuard, AccessGuard ] },
                    { path: ':id', component: BuildingDetailComponent, canActivate: [ AuthGuard, AccessGuard ] },
                ],
                canActivate: [ AuthGuard, AccessGuard ]
            },
            { path: 'arrendatarios', component: RentersComponent, canActivate: [ AuthGuard ] },
            { path: 'proveedores', component: ProvidersComponent, canActivate: [ AuthGuard, AccessGuard ] },
        ],
        canActivate: [ AuthGuard, AccessGuard ]
    },
    { path: '**', component: DashboardComponent, canActivate: [ AuthGuard ] }
];

export const appRoutingProviders: Array<any> = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
