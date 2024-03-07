import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventarioCertificadoComponent } from './inventarioCertificado/inventarioCertificado.component';
import { InventarioExpedienteComponent } from './inventarioExpediente/inventarioExpediente.component';
import { InventarioLibroDeActaComponent } from './inventarioLibroDeActa/inventarioLibroDeActa.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,    
    InventarioCertificadoComponent,
    InventarioExpedienteComponent,
    InventarioLibroDeActaComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,    
    InventarioCertificadoComponent,
    InventarioExpedienteComponent,
    InventarioLibroDeActaComponent
  ]
})
export class ComponentsModule { }
