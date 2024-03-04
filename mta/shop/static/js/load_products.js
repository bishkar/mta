document.addEventListener('click', function (event) {
    if (event.target.classList.contains('active_desc')) {
        
        let description = event.target.parentElement.nextElementSibling;
        let close = document.createElement('button');

        makeModalDescription(description);
        makeCloseButton(close);

        close.addEventListener('click', function () {
            description.style.display = 'none';
        });
        
        description.appendChild(close);
    }
});

function makeModalDescription(description) {
    description.style.display = 'block';
    description.style.position = 'fixed';
    description.style.top = '50%';
    description.style.left = '50%';
    description.style.transform = 'translate(-50%, -50%)';
    description.style.backgroundColor = 'white';
    description.style.padding = '30px';
    description.style.border = '1px solid black';
    description.style.borderRadius = '10px';
    description.style.zIndex = '1000';
}

function makeCloseButton(close){
    close.innerHTML = `X`;
    close.style.position = 'fixed';
    close.style.top = '0';
    close.style.right = '0';
    close.style.color = 'red';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.background = 'none';
    close.style.width = '30px';
}




