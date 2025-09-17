var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalButton = document.querySelector('.modal .modal__action--negative')

for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

backdrop.addEventListener('click', function() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})

modalButton.addEventListener('click', function() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})