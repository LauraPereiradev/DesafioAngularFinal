import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);

  // Lê do localStorage se o usuário está logado
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Se NÃO estiver logado → redireciona para login
  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  // Se estiver logado → permite acesso
  return true;
};
