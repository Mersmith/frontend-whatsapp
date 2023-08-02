import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { IconoService } from 'src/app/services/icono-service/icono.service';

@Component({
  selector: 'app-chat-input-derecha-componente',
  templateUrl: './chat-input-derecha-componente.component.html',
  styleUrls: ['./chat-input-derecha-componente.component.css']
})
export class ChatInputDerechaComponenteComponent {

  public iconoEmoticon = this.iconoService.IconoEmoticon();
  public iconoSuma = this.iconoService.IconoSuma();
  public iconoMicrofono = this.iconoService.IconoMicrofono();


  estadoOpcionesHerramientas: Boolean = false;
  estadoOpcionesEmoticones: Boolean = false;

  @ViewChild('contenedorOpcionesHerramientas', { static: true })
  contenedorOpcionesHerramientasRef!: ElementRef;

  @ViewChild('contenedorOpcionesEmoticones', { static: true })
  contenedorOpcionesEmoticonesRef!: ElementRef;

  constructor(
    private iconoService: IconoService
  ) { }

  toggleEstadoOpcionesHerramientas() {
    this.estadoOpcionesHerramientas = !this.estadoOpcionesHerramientas;
  }

  toggleEstadoOpcionesEmoticones() {
    this.estadoOpcionesEmoticones = !this.estadoOpcionesEmoticones;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const opcionesElementHerramientas = this.contenedorOpcionesHerramientasRef.nativeElement;
    const opcionesElementEmoticones = this.contenedorOpcionesEmoticonesRef.nativeElement;

    if (opcionesElementHerramientas && !opcionesElementHerramientas.contains(target)) {
      this.estadoOpcionesHerramientas = false;
    }

    if (opcionesElementEmoticones && !opcionesElementEmoticones.contains(target)) {
      this.estadoOpcionesEmoticones = false;
    }
  }

  getInputBottomAltoComputadora(): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--input-bottom-alto-computadora');
  }

}
