var scriptURL = "https://script.google.com/macros/s/AKfycbyKsF4QdnXQzWQQBaFiSdsSNBS8Pl8x0FjnYbOKYpYI8NrC1fHBwy8VvPkSXy-lmwEB/exec"
var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('form_alert').innerHTML = "Data has stored")
    .catch(error => document.getElementById('form_alert').innerHTML = "Data has not stored")
})