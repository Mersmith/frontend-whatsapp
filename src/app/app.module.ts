import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPaginaComponent } from './pages/inicio-pagina/inicio-pagina.component';
import { WhatsappDerechaComponenteComponent } from './components/whatsapp-derecha-componente/whatsapp-derecha-componente.component';
import { WhatsappIzquierdaComponenteComponent } from './components/whatsapp-izquierda-componente/whatsapp-izquierda-componente.component';
import { CabeceraIzquierdaComponenteComponent } from './components/cabecera-izquierda-componente/cabecera-izquierda-componente.component';
import { CabeceraDerechaComponenteComponent } from './components/cabecera-derecha-componente/cabecera-derecha-componente.component';
import { BuscarDerechaComponenteComponent } from './components/buscar-derecha-componente/buscar-derecha-componente.component';
import { BuscarIzquierdaComponenteComponent } from './components/buscar-izquierda-componente/buscar-izquierda-componente.component';
import { ListaChatIzquierdaComponenteComponent } from './components/lista-chat-izquierda-componente/lista-chat-izquierda-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioPaginaComponent,
    WhatsappDerechaComponenteComponent,
    WhatsappIzquierdaComponenteComponent,
    CabeceraIzquierdaComponenteComponent,
    CabeceraDerechaComponenteComponent,
    BuscarDerechaComponenteComponent,
    BuscarIzquierdaComponenteComponent,
    ListaChatIzquierdaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
