const scriptURL = 'https://script.google.com/macros/s/AKfycbyv76sXS1gn6-ZMtAAPy1FpHGBKX9gBYs_KM9SSC-nb0GWZx45ZX2BM728qaIFyEdUh/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = 'Thank You For Subscribing!';
       setTimeout(() => {
        msg.innerHTML = '';
        
       }, 3000)
       form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});