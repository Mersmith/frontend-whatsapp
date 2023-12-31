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
  iconoCheckDoble,
  iconoFiltroComplejo,
  iconoChatLista,
  iconoImagenes,
  iconoCamara,
  iconoDocumento,
  iconoEncuesta,
  iconoSticker,
  iconoTienda,
  iconoRespuestaRapida,
  iconoRetroceder,
  iconoHora,
  iconoHoraActivo,
  iconoPausa,
  iconoPlay,
  iconoDocumentoAudio,
  iconoDocumentoComprimido,
  iconoDocumentoExcel,
  iconoDocumentoMp3,
  iconoDocumentoPdf,
  iconoDocumentoTxt,
  iconoDocumentoWord
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

  public IconoFiltroComplejo() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoFiltroComplejo);
  }

  public IconoChatLista() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoChatLista);
  }

  public IconoImagenes() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoImagenes);
  }

  public IconoCamara() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoCamara);
  }

  public IconoDocumento() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumento);
  }

  public IconoEncuesta() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoEncuesta);
  }

  public IconoSticker() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoSticker);
  }

  public IconoTienda() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoTienda);
  }

  public IconoRespuestaRapida() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoRespuestaRapida);
  }

  public IconoRetroceder() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoRetroceder);
  }

  public IconoHoraActivo() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoHoraActivo);
  }

  public IconoHora() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoHora);
  }

  public IconoPlay() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoPlay);
  }

  public IconoPausa() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoPausa);
  }

  public IconoDocumentoAudio() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoAudio);
  }

  public IconoDocumentoComprimido() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoComprimido);
  }

  public IconoDocumentoExcel() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoExcel);
  }

  public IconoDocumentoMp3() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoMp3);
  }

  public IconoDocumentoPdf() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoPdf);
  }

  public IconoDocumentoTxt() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoTxt);
  }

  public IconoDocumentoWord() {
    return this.sanitizer.bypassSecurityTrustHtml(iconoDocumentoWord);
  }

}
