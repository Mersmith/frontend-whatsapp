import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  iconoEstado,
  iconoOpciones,
  iconoChat,
  iconoCerrar,
  iconoBuscar,
  iconoFiltro,
  iconoArchivo,
  iconoChatNoLeido,
  iconoContacto,
  iconoGrupo,
  iconoContactoNoGuardado,
  iconoEtiqueta,
  iconoSuma,
  iconoEmoticon,
  iconoMicrofono,
  iconoCheck,
  iconoCheckDoble
} from 'src/assets/icons';

@Injectable({
  providedIn: 'root'
})
export class IconoService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public getIconoSanitized(icono: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icono);
  }

  public IconoEstado() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoEstado);
  }

  public IconoOpciones() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoOpciones);
  }

  public IconoChat() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoChat);
  }

  public IconoCerrar() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoCerrar);
  }

  public IconoBuscar() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoBuscar);
  }

  public IconoFiltro() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoFiltro);
  }

  public IconoArchivo() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoArchivo);
  }

  public IconoChatNoLeido() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoChatNoLeido);
  }

  public IconoContacto() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoContacto);
  }

  public IconoGrupo() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoGrupo);
  }

  public IconoContactoNoGuardado() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoContactoNoGuardado);
  }

  public IconoEtiqueta() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoEtiqueta);
  }

  public IconoSuma() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoSuma);
  }

  public IconoEmoticon() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoEmoticon);
  }

  public IconoMicrofono() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoMicrofono);
  }

  public IconoCheck() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoCheck);
  }

  public IconoCheckDoble() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoCheckDoble);
  }

}