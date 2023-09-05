import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { InicioDerechaComponenteComponent } from './components/inicio-derecha-componente/inicio-derecha-componente.component';
import { CajaMensajesDerechaComponenteComponent } from './components/caja-mensajes-derecha-componente/caja-mensajes-derecha-componente.component';
import { MensajeDerechaComponenteComponent } from './components/mensaje-derecha-componente/mensaje-derecha-componente.component';
import { ChatInputDerechaComponenteComponent } from './components/chat-input-derecha-componente/chat-input-derecha-componente.component';
import { PerfilIzquierdaComponenteComponent } from './components/perfil-izquierda-componente/perfil-izquierda-componente.component';
import { NuevoChatIzquierdaComponenteComponent } from './components/nuevo-chat-izquierda-componente/nuevo-chat-izquierda-componente.component';
import { FiltroSidebarComponent } from './sidebars/filtro-sidebar/filtro-sidebar.component';
import { PlantillasMensajesSidebarComponent } from './sidebars/plantillas-mensajes-sidebar/plantillas-mensajes-sidebar.component';
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
    ListaChatIzquierdaComponenteComponent,
    InicioDerechaComponenteComponent,
    CajaMensajesDerechaComponenteComponent,
    MensajeDerechaComponenteComponent,
    ChatInputDerechaComponenteComponent,
    PerfilIzquierdaComponenteComponent,
    NuevoChatIzquierdaComponenteComponent,
    FiltroSidebarComponent,
    PlantillasMensajesSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
