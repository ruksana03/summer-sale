let itemCount = 1;
let totalPrice = 0;
function makeItemList(itemId, titleId, priceId) {
    const items = document.getElementById(itemId);
    items.addEventListener('click', function () {
        const itemTitle = document.getElementById(titleId).innerText;
        const pricesField = document.getElementById(priceId);
        const pricesString = pricesField.innerText;

        const prices = parseFloat(pricesString);
        console.log(typeof (prices));

    
        const listItem = document.getElementById('item-list');
        const li = document.createElement('li');
        li.innerText = `${itemCount}. ${itemTitle}`;
        li.classList.add(itemId);
        listItem.appendChild(li);
        

        
        itemCount++;
        totalPrice += prices;
       

        const totalPriceField = document.getElementById('total-price');
        totalPriceField.innerText = totalPrice.toFixed(2);
    
        const PriceTotalField = document.getElementById('total');
        PriceTotalField.innerText = totalPrice.toFixed(2);

        const purchaseButton = document.getElementById('purchase-btn')
        if (totalPrice > 0) {
            purchaseButton.removeAttribute('disabled');
        }

        const couponButton = document.getElementById('apply-btn')
        if (totalPrice >= 200) {
            couponButton.removeAttribute('disabled')
        }

        document.getElementById('apply-btn').addEventListener('click', function () {
            const inputTextValue = document.getElementById('input');
            const inputText = inputTextValue.value;
            if (inputText == 'SELL200') {
                const discount = totalPrice * (0.2);
                const total = totalPrice - discount;

                const totalDiscountField = document.getElementById('total-discount');
                totalDiscountField.innerText = discount.toFixed(2);
                const totalField = document.getElementById('total');
                totalField.innerText = total.toFixed(2);
            }
        })
    })
}

makeItemList('item-1', 'title-1', 'price-1');
makeItemList('item-2', 'title-2', 'price-2');
makeItemList('item-3', 'title-3', 'price-3');

makeItemList('item-4', 'title-4', 'price-4');
makeItemList('item-5', 'title-5', 'price-5');
makeItemList('item-6', 'title-6', 'price-6');

makeItemList('item-7', 'title-7', 'price-7');
makeItemList('item-8', 'title-8', 'price-8');
makeItemList('item-9', 'title-9', 'price-9');



