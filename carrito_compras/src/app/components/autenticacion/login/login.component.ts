import { Component, inject } from '@angular/core';
import { AutenticacionService } from '../../../services/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  public autenticacionService = inject(AutenticacionService);
  private router = inject(Router);

  login(): void {
    this.autenticacionService.login(this.user, this.password).subscribe({
      next: () => {
        toast.success('Inicio de sesión exitoso');
        this.router.navigate(['/']);
      },
      error: (err) => this.handleLoginError(err),
    });
  }

  private handleLoginError(error: any): void {
    if (error.status === 401) {
      toast.error('Usuario o contraseña incorrectos.');
    } else if (error.status === 500) {
      toast.error('Error en el servidor. Por favor, inténtalo más tarde.');
    } else {
      toast.error('Ocurrió un error inesperado. Inténtalo de nuevo.');
    }

  }
}
