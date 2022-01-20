const scriptURL = 'https://script.google.com/macros/s/AKfycbwfhHV5ojcdt3leAJc0ho9hpqzt2W8cuERVzV6ooNBkvc-_MNEfZVS-MjcLsaQKNBWo/exec'
              const form = document.forms['form1']
            
              form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                  .then(response => alert("You have successfully submitted."))
                  .catch(error => console.error('Error!', error.message))
              })