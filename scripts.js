document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('registerModal');
    var btn = document.getElementById('registerButton');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    var loginForm = document.getElementById('loginForm');
    loginForm.onsubmit = function() {
        window.location.href = 'https://servicampo.github.io/';
        return false; 
    }

    var registerForm = document.getElementById('registerForm');
    registerForm.onsubmit = function() {
        window.location.href = 'https://servicampo.github.io/';
        return false; 
    }
});
