function evento(event) {
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.style.width = '200px';
    })

    let currentBox = event.currentTarget;
    currentBox.style.width = '900px';
}