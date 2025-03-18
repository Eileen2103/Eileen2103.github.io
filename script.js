function loadPages(page) {
    fetch(page).then(response => response.text()).then(data => {
        document.getElementById('content').innerHTML = data;
    })
        .catch(error => console.error('Hata: ', error));

}