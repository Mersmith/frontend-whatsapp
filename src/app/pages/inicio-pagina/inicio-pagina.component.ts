import { Component, OnInit } from '@angular/core';
import { contactoItems } from './data-contactos';
import { ContactoInteface } from '../../models/contacto-item.model';

@Component({
  selector: 'app-inicio-pagina',
  templateUrl: './inicio-pagina.component.html',
  styleUrls: ['./inicio-pagina.component.css']
})
export class InicioPaginaComponent implements OnInit {

  contactoItems: ContactoInteface[] = [];

  ngOnInit(): void {
    this.contactoItems = contactoItems;
  }

}
