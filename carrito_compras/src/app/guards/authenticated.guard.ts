import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const autenticacionService = inject(AutenticacionService);
      const router = inject(Router);
  
      if(autenticacionService.isAuthenticated()){
        return router.navigate(['/']);
      }
      else{

        return true;
      }
};
