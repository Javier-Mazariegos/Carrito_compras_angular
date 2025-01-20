import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 400:
          toast.error('Solicitud incorrecta: Verifica los datos enviados.');
          break;
        case 401:
          toast.warning('No autorizado: Por favor, inicia sesión nuevamente.');
          break;
        case 403:
          toast.warning('Prohibido: No tienes permisos para acceder.');
          break;
        case 404:
          toast.error(`Recurso no encontrado: ${req.url}`);
          break;
        case 500:
          toast.error('Error interno del servidor: Inténtalo de nuevo más tarde.');
          break;
        default:
          toast.error('Ocurrió un error desconocido.');
          break;
      }

      return throwError(() =>
        new Error(error.error?.message || 'An unknown error occurred')
      );
    })
  )
  ;
};
