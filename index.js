

const firsImage = document.getElementById('firstImage');
const secondImage = document.getElementById('secondImage');
const thirdImage = document.getElementById('thirdImage');
//description
const description = document.getElementById('description');
//price
const price = document.getElementById('price');
//free shipping
const freeShipping = document.getElementById('free-shipping');
//express shipping
const expressShipping = document.getElementById('express-shipping');
//shipping charge
const shippingCharge = document.getElementById('shipping')

//
const total = document.getElementById('total');
//image change
const changeImage = document.getElementById('art');


//extra
function isContent(element) {
    return element.classList.contains('selected');
}


freeShipping.addEventListener('click', function () {
    if (! isContent(freeShipping)) {
        freeShipping.classList.add('selected');
        expressShipping.classList.remove('selected')
    }
    shippingCharge.innerText = '5';
    updateTotal()

});
expressShipping.addEventListener('click', function () {
    if (! isContent(expressShipping)) {
        freeShipping.classList.remove('selected');
        expressShipping.classList.add('selected')
    }
    shippingCharge.innerText = '30'
    updateTotal();
})

firsImage.addEventListener('click', function () {
    //change image
    changeImage.src = 'images/1.jpg';
    //change description
    description.innerText = 'Registered nurses are employed in a wide variety of professional settings, and often specialize in a field of practice. They may be responsible for supervising care delivered by other healthcare workers, including student nurses, ';
    //change price
    price.innerText = 750;
    //change total price
    updateTotal()

});
secondImage.addEventListener('click', function () {
    changeImage.src = 'images/2.jpg';
    description.innerText = 'The film was a co-production between the motion picture studios of Moving Picture Company, DNA Films, UK Film Council, and Ingenious Film Partners. Theatrically, it was commercially distributed by Fox Searchlight Pictures, while the 20th Century Fox Home Entertainment division released the film in the video rental market.';
    price.innerText = 550;
    updateTotal()
})
thirdImage.addEventListener('click', function () {
    changeImage.src = 'images/3.jpg'
    description.innerText = 'Dark is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese.[5][6][7] It ran for three seasons from 2017 to 2020. In the aftermath of a child';
    price.innerText = 450;
    updateTotal()
})
//total function
function updateTotal() {
    const shippingTotalCharge = parseInt(shippingCharge.innerText);
    const priceTotalCharge = parseInt(price.innerText);
    const finalTotal = shippingTotalCharge + priceTotalCharge;
    total.innerText = finalTotal;

}
