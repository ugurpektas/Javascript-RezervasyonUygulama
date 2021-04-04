const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');


//contains="içermek anlamı taşır"
//e.target.classList.contains('seat') => seat class'ını içerenler  
//!e.target.classList.contains('reserved') => reserved class'ını içermeyenler 

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
            //seçilen elemanların classına ekleme yapmak "classList.toggle"
        e.target.classList.toggle('selected');
        calculateTotal();
    }
    e.preventDefault();
});

select.addEventListener('change',function(){
    calculateTotal();
});

function calculateTotal(){
    //seçilen koltukların sayısı
    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    let price = select.value;

    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * price;
}