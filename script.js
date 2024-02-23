document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    const boton = document.getElementById('submitaButton');
    const botona = document.getElementById('submitButton');
    const contenidoInicial = document.getElementById('contenidoInicial');
    const contenidoNuevo = document.getElementById('contenidoNuevo');
    const error = document.getElementById('Error');
    error.style.display='none';
    submitButton.addEventListener('click', function() {
      const emailAddress = emailInput.value;
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!emailRegex.test(emailAddress)) {
            emailInput.style.borderColor = 'red';
            error.style.display='block ';
            return; 
        }
        
      contenidoInicial.style.display = 'none';
      contenidoNuevo.style.display = 'block';

      const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
        mensajeConfirmacion.innerHTML = mensajeConfirmacion.innerHTML.replace('ash@loremcompany.com', emailAddress);
      
    });
    

    boton.addEventListener('mouseover', function() {
        boton.classList.add('hover'); 
      });
      
      boton.addEventListener('mouseout', function() {
        boton.classList.remove('hover'); 
      });
      botona.addEventListener('mouseover', function() {
        botona.classList.add('hover');
      });
      
      botona.addEventListener('mouseout', function() {
        botona.classList.remove('hover'); 
      });
      emailInput.addEventListener('input', function() {
        emailInput.style.borderColor = '';
    });
   
  

  });