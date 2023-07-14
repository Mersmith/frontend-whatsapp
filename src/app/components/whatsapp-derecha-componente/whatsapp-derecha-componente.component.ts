import { Component, OnInit } from '@angular/core';
import { ContactoInteface } from '../../models/contacto-item.model';
import { ContactoSeleccionadoService } from 'src/app/services/contacto-seleccionado.service';

@Component({
  selector: 'app-whatsapp-derecha-componente',
  templateUrl: './whatsapp-derecha-componente.component.html',
  styleUrls: ['./whatsapp-derecha-componente.component.css']
})
export class WhatsappDerechaComponenteComponent implements OnInit{
  
  contactoSeleccionado: ContactoInteface | null = null;

  constructor(
    private contactoSeleccionadoService: ContactoSeleccionadoService
  ) { }

  seleccionarContacto(contacto: ContactoInteface): void {
    this.contactoSeleccionadoService.contactoSeleccionado = contacto;
  }

  ngOnInit(): void {

    this.contactoSeleccionadoService.contactoSeleccionado$.subscribe(contacto => {
      this.contactoSeleccionado = contacto;
    });

  }

}
