 document.addEventListener('DOMContentLoaded', function() {
      const cartCount = document.getElementById('cartCount');
      let count = parseInt(localStorage.getItem('cartCount') || '0');
      cartCount.textContent = count;

      document.querySelectorAll('.add-to-cart').forEach(function(button) {
        button.addEventListener('click', function() {
          count++;
          cartCount.textContent = count;
          localStorage.setItem('cartCount', count);
        });
      });
    });