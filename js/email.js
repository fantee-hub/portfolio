
window.onload = function() {
  document.getElementById('contact').addEventListener('click',function(e){
    page.change(new contactPage)
    closeNav()
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('tobi', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
              clearInput();
              sweet();
          }, function(error) {
              console.log('FAILED...', error);
              
          });
  });
    e.preventDefault()
  })
}
function clearInput(){
  document.getElementById('contact-form').reset();
}
function sweet(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Message sucessfully sent'
  })
}



