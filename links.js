







function changeHeaderToMessage(event) {
    event.preventDefault();

    const form = document.getElementById('messageForm');
    const container = document.getElementById('container');
    const header = document.getElementById('header'); 

    if (form.classList.contains('show')) {
        form.classList.remove('show');
        setTimeout(() => form.style.display = 'none', 300); 
        container.style.display = ''; 
        header.innerText = 'My Personal Links!'; 
    } else {
        form.style.display = 'block';
        setTimeout(() => form.classList.add('show'), 50);
        container.style.display = 'none'; 
        header.innerText = 'Send Me A Message!'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const openMessageForm = document.getElementById('sendMessage');
    openMessageForm.addEventListener('click', changeHeaderToMessage);

    const backToLinks = document.getElementById('backToLinks');
    backToLinks.addEventListener('click', changeHeaderToMessage)
});









