import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const authGuard: CanActivateFn = (route, state) => {
    const autenticacionService = inject(AutenticacionService);
    const router = inject(Router);

    if (typeof window === 'undefined') {
      return false; 
    }

    if(autenticacionService.isAuthenticated()){
      return true;
    }
    else{
      return router.navigate(['/login']);
    }
};
