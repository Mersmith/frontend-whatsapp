import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPaginaComponent } from './pages/inicio-pagina/inicio-pagina.component';
import { CabeceraIzquierdaComponenteComponent } from './components/cabecera-izquierda-componente/cabecera-izquierda-componente.component';
import { CabeceraDerechaComponenteComponent } from './components/cabecera-derecha-componente/cabecera-derecha-componente.component';
import { BuscarIzquierdaComponenteComponent } from './components/buscar-izquierda-componente/buscar-izquierda-componente.component';
import { ListaChatIzquierdaComponenteComponent } from './components/lista-chat-izquierda-componente/lista-chat-izquierda-componente.component';
import { InicioDerechaComponenteComponent } from './components/inicio-derecha-componente/inicio-derecha-componente.component';
import { CajaMensajesDerechaComponenteComponent } from './components/caja-mensajes-derecha-componente/caja-mensajes-derecha-componente.component';
import { MensajeDerechaComponenteComponent } from './components/mensaje-derecha-componente/mensaje-derecha-componente.component';
import { ChatInputDerechaComponenteComponent } from './components/chat-input-derecha-componente/chat-input-derecha-componente.component';
import { FiltroSidebarComponent } from './sidebars/filtro-sidebar/filtro-sidebar.component';
import { PlantillasMensajesSidebarComponent } from './sidebars/plantillas-mensajes-sidebar/plantillas-mensajes-sidebar.component';
import { NuevoChatSidebarComponent } from './sidebars/nuevo-chat-sidebar/nuevo-chat-sidebar.component';
import { PerfilSidebarComponent } from './sidebars/perfil-sidebar/perfil-sidebar.component';
import { BuscarSidebarComponent } from './sidebars/buscar-sidebar/buscar-sidebar.component';
import { WhatsappIzquierdaSidebarComponent } from './sidebars/whatsapp-izquierda-sidebar/whatsapp-izquierda-sidebar.component';
import { WhatsappDerechaSidebarComponent } from './sidebars/whatsapp-derecha-sidebar/whatsapp-derecha-sidebar.component';
import { MotivoPausarChatModalComponent } from './modal/motivo-pausar-chat-modal/motivo-pausar-chat-modal.component';
import { VisualizadorMultimediaModalComponent } from './modal/visualizador-multimedia-modal/visualizador-multimedia-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioPaginaComponent,
    CabeceraIzquierdaComponenteComponent,
    CabeceraDerechaComponenteComponent,
    BuscarIzquierdaComponenteComponent,
    ListaChatIzquierdaComponenteComponent,
    InicioDerechaComponenteComponent,
    CajaMensajesDerechaComponenteComponent,
    MensajeDerechaComponenteComponent,
    ChatInputDerechaComponenteComponent,
    FiltroSidebarComponent,
    PlantillasMensajesSidebarComponent,
    NuevoChatSidebarComponent,
    PerfilSidebarComponent,
    BuscarSidebarComponent,
    WhatsappIzquierdaSidebarComponent,
    WhatsappDerechaSidebarComponent,
    MotivoPausarChatModalComponent,
    VisualizadorMultimediaModalComponent
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
