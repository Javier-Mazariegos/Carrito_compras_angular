import { HttpInterceptorFn } from '@angular/common/http';
import { SpinnerService } from '../spinner.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
const spinnerService = inject(SpinnerService);
spinnerService.showSpinner();
return next(req).pipe(
  finalize(() => spinnerService.hideSpinner())
);

};
