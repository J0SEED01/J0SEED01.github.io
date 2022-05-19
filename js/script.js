document.addEventListener('submit', (e) => {

    e.preventDefault();
    fetch("https://formsubmit.co/ajax/josedaniel23011@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json)
        document.querySelector('.form__contact').reset()
      })
      .catch((err) => {
        console.log(err)
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
    })
})
