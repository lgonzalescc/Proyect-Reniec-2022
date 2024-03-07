import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ComponentPortal } from 'ngx-toastr';
import { InventarioExpedienteComponent } from 'src/app/components/inventarioExpediente/inventarioExpediente.component';
import { InventarioCertificadoComponent } from 'src/app/components/inventarioCertificado/inventarioCertificado.component';
import { InventarioLibroDeActaComponent } from 'src/app/components/inventarioLibroDeActa/inventarioLibroDeActa.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'inventarioLibroActa', component: InventarioLibroDeActaComponent },
    { path: 'inventarioExpediente', component: InventarioExpedienteComponent },
    { path: 'inventarioCertificado', component: InventarioCertificadoComponent },    
    
];
