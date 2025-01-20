import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgxSonnerToaster, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrito_compras';

  mostrarHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.mostrarHeader = this.router.url !== '/login';
    });
  }
}
