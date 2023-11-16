

/*function changeHeaderToMessage(){
    event.preventDefault();
    var headerTextChange = document.getElementById('header').innerText = 'Send Me a Message!';

    alert('your message has been sent')
}

function headerDoubleClick(){
    var headerText = document.getElementById('header').innerText = 'My Personal Links!'
} */



function changeHeaderToMessage(event) {
    event.preventDefault();

    const form = document.getElementById('messageForm');
    
    if (form.classList.contains('show')) {
        form.classList.remove('show');
        setTimeout(() => form.style.display = 'none', 1000); 
    } else {
        form.style.display = 'block';
        setTimeout(() => form.classList.add('show'), 50); 
    }
}

