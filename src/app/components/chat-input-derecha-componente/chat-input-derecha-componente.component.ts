import { Component, HostListener, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';
import { MensajeRapidoSeleccionadoService } from 'src/app/services/mensaje-rapido-seleccionado-service/mensaje-rapido-seleccionado.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emoticon } from 'src/app/models/emoticon-item.model';

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
    private http: HttpClient
  ) {
    this.mensajeRapidoSeleccionadoSubscription = this.mensajeRapidoSeleccionadoService.mensajeRapidoSeleccionado$.subscribe(
      mensaje => {
        this.inputValueMensaje = mensaje;
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
  }

  toggleEstadoOpcionesEmoticones(event: Event) {
    event.stopPropagation();
    this.estadoOpcionesEmoticones = !this.estadoOpcionesEmoticones;
  }

  insertarEmoticon(emoticon: string) {
    this.inputValueMensaje += emoticon;
    this.inputChatRef.nativeElement.focus();
    //seleccionar el input
  }

  enviarMensaje() {
    if (this.inputValueMensaje && this.inputValueMensaje.trim() !== '') {
      console.log('Mensaje enviado:', this.inputValueMensaje);
      this.inputValueMensaje = '';
    }
  }

  @HostListener('document:click', ['$event'])
  cerrarOpciones(event: Event) {
    if (!this.contenedorOpcionesHerramientasRef.nativeElement.contains(event.target)) {
      this.estadoOpcionesHerramientas = false;
    }

    if (!this.contenedorOpcionesEmoticonesRef.nativeElement.contains(event.target)) {
      this.estadoOpcionesEmoticones = false;
    }
  }

  getInputBottomAltoComputadora(): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--input-bottom-alto-computadora');
  }

}
