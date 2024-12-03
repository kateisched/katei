document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.itens-menu a[href="login.html"]');
    const cadastroButton = document.querySelector('.itens-menu a[href="cadastro.html"]');
  
    function navigateToInitialPage() {
      loginButton.classList.add('transicao-hidden');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 300);
    }
  
    function navigateToLogin() {
      cadastroButton.classList.add('transicao-hidden');
      setTimeout(() => {
        window.location.href = 'cadastro.html';
      }, 300);
    }
  
    loginButton.addEventListener('click', () => {
      navigateToInitialPage();
    });
  
    cadastroButton.addEventListener('click', () => {
      navigateToLogin();
    });
  });
  