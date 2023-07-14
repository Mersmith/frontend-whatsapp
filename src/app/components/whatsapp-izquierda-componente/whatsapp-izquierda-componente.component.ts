import { Component, Input } from '@angular/core';
import { ContactoInteface } from 'src/app/models/contacto-item.model';
@Component({
  selector: 'app-whatsapp-izquierda-componente',
  templateUrl: './whatsapp-izquierda-componente.component.html',
  styleUrls: ['./whatsapp-izquierda-componente.component.css']
})
export class WhatsappIzquierdaComponenteComponent {

  @Input() contactoItems: ContactoInteface[] = [];

}
