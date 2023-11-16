var form = document.getElementById("form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset()
          alert('Gracias por tu mensaje!')
        } else {
          alert('Error al enviar mensaje, vuelve a intentarlo mas tarde')
        }
      });
    }
    form.addEventListener("submit", handleSubmit)