import { Component, HostListener, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { MensajeRapidoSeleccionadoService } from 'src/app/services/mensaje-rapido-seleccionado-service/mensaje-rapido-seleccionado.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emoticon } from 'src/app/models/emoticon-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado-service/contacto-seleccionado.service';
import { SesionService } from 'src/app/services/sesion/sesion.service';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'app-chat-input-derecha-componente',
  templateUrl: './chat-input-derecha-componente.component.html',
  styleUrls: ['./chat-input-derecha-componente.component.css']
})
export class ChatInputDerechaComponenteComponent implements OnInit, OnDestroy {

  public iconoEmoticon = this.iconoService.IconoEmoticon();
  public iconoSuma = this.iconoService.IconoSuma();
  public iconoMicrofono = this.iconoService.IconoMicrofono();
  public iconoImagenes = this.iconoService.IconoImagenes();
  public iconoCamara = this.iconoService.IconoCamara();
  public iconoDocumento = this.iconoService.IconoDocumento();
  public iconoEncuesta = this.iconoService.IconoEncuesta();
  public iconoSticker = this.iconoService.IconoSticker();
  public iconoTienda = this.iconoService.IconoTienda();
  public iconoRespuestaRapida = this.iconoService.IconoRespuestaRapida();
  public iconoContacto = this.iconoService.IconoContacto();

  inputValueMensaje: string = "";
  private mensajeRapidoSeleccionadoSubscription: Subscription | undefined;

  estadoOpcionesHerramientas: Boolean = false;
  estadoOpcionesEmoticones: Boolean = false;

  @ViewChild('contenedorOpcionesHerramientas', { static: true })
  contenedorOpcionesHerramientasRef!: ElementRef;

  @ViewChild('contenedorOpcionesEmoticones', { static: true })
  contenedorOpcionesEmoticonesRef!: ElementRef;

  @ViewChild('inputChat', { static: true })
  inputChatRef!: ElementRef;

  emoticonesData: { [key: string]: Emoticon[] } = {};
  subscription: Subscription = Subscription.EMPTY;

  constructor(
    private iconoService: IconoService,
    private mensajeRapidoSeleccionadoService: MensajeRapidoSeleccionadoService,
    private contactoSeleccionadoService: ContactoSeleccionadoService,
    private http: HttpClient,
    private sesionService: SesionService,
    private chatService: ChatService
  ) {
    this.mensajeRapidoSeleccionadoSubscription = this.mensajeRapidoSeleccionadoService.mensajeRapidoSeleccionado$.subscribe(
      mensaje => {
        this.inputValueMensaje += mensaje;
        this.inputChatRef.nativeElement.focus();
        this.moverCursorAlFinal();
      }
    );
  }

  ngOnInit() {
    this.subscription = this.http.get<{ [key: string]: Emoticon[] }>('assets/emoticons/emoticones.json').subscribe(data => {
      this.emoticonesData = data;
    });
  }

  ngOnDestroy(): void {
    this.mensajeRapidoSeleccionadoSubscription?.unsubscribe();
    this.subscription.unsubscribe();
  }

  toggleEstadoOpcionesHerramientas() {
    this.estadoOpcionesHerramientas = !this.estadoOpcionesHerramientas;
    this.estadoOpcionesEmoticones = false;
  }

  toggleEstadoOpcionesEmoticones(event: Event) {
    event.stopPropagation();
    this.estadoOpcionesEmoticones = !this.estadoOpcionesEmoticones;
    this.estadoOpcionesHerramientas = false;
    setTimeout(() => {
      this.contenedorOpcionesEmoticonesRef.nativeElement.style.display = this.estadoOpcionesEmoticones ? 'block' : 'none';
    }, 100);

    setTimeout(() => {
      this.contenedorOpcionesEmoticonesRef.nativeElement.style.transform = this.estadoOpcionesEmoticones ? 'translateY(-100%)' : 'translateY(100%)';
    }, 100);
  }

  insertarEmoticon(emoticon: string) {
    this.inputValueMensaje += emoticon;
    this.inputChatRef.nativeElement.focus();
    this.moverCursorAlFinal();
  }

  resetInputChat() {
    this.inputValueMensaje = '';
    this.inputChatRef.nativeElement.focus();
  }

  onInput(event: any) {
    this.inputValueMensaje = event.target.textContent || '';
  }

  detectarShiftEnter(event: KeyboardEvent) {
    if (event.shiftKey && event.key === 'Enter') {
      this.moverCursorAlFinal();
    }
  }

  moverCursorAlFinal() {
    setTimeout(() => {
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(this.inputChatRef.nativeElement);
      range.collapse(false);

      if (sel !== null) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }, 0);
  }

  enviarMensaje() {
    const numero_destinatario = this.contactoSeleccionadoService.getContactoSeleccionado()?.number;
    const usuario_sesion = this.sesionService.getUserData();

    if (this.inputValueMensaje && this.inputValueMensaje.trim() !== '' && usuario_sesion && numero_destinatario) {

      const formatNombresSesion = this.formatearMayuculaMiniscula(usuario_sesion.nombres);

      const enviarChat: any = {
        content: {
          body: `*${formatNombresSesion}:* ${this.inputValueMensaje}`
        },
        timestamp: Math.floor(new Date().getTime() / 1000).toString(),
        type: 'text',
        envio: 1,
        excel_id: null,
        context: null,
        id_type_message: 4,
        id_template: null,
        number: numero_destinatario,
        read: null,
        sent: 1,
        wamid: Math.floor(new Date().getTime() / 1000).toString(),
      }

      this.formatearContactoListaPrimero(numero_destinatario);

      console.log(enviarChat);

      this.resetInputChat();
    }
  }

  formatearContactoListaPrimero(numero_destinatario: string) {
    const contactoItems = this.chatService.getMisSalas();

    const selectedItem = contactoItems.find((item) => item.number === numero_destinatario);

    if (selectedItem) {
      selectedItem.notification = 0;

      const index = contactoItems.indexOf(selectedItem);
      if (index !== -1) {
        contactoItems.splice(index, 1);
      }

      contactoItems.unshift(selectedItem);
    }
  }

  formatearMayuculaMiniscula(nombre: string): string {
    return nombre
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  @HostListener('document:click', ['$event'])
  cerrarOpciones(event: Event) {
    if (!this.contenedorOpcionesHerramientasRef.nativeElement.contains(event.target)) {
      this.estadoOpcionesHerramientas = false;
    }

    if (!this.contenedorOpcionesEmoticonesRef.nativeElement.contains(event.target)) {
      this.estadoOpcionesEmoticones = false;
      this.contenedorOpcionesEmoticonesRef.nativeElement.style.display = 'none';
      this.contenedorOpcionesEmoticonesRef.nativeElement.style.transform = 'translateY(100%)';
    }
  }

  getInputBottomAltoComputadora(): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--input-bottom-alto-computadora');
  }

}
