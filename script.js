function handleTicketCount(isIncrese, ticketType){
    const ticketQuantity = document.getElementById(ticketType + '-input').value;
    var ticketQuantityNumber = parseInt(ticketQuantity);
    if(isIncrese == true){
        ticketQuantityNumber+=1;
    }
    else if(isIncrese == false && ticketQuantityNumber > 0){
        ticketQuantityNumber-=1;
    }
    document.getElementById(ticketType + '-input').value = ticketQuantityNumber;
    handleTicketCost();
}

function handleTicketCost(){
    const firstClassTicketQuantity = getTicketQuantity('firstClass'); 
    const economyTicketQuantity = getTicketQuantity('economy');

    const firstClassTicketPrice = firstClassTicketQuantity * 150;
    const economyTicketPrice = economyTicketQuantity * 100;

    const totalTicketPrice = firstClassTicketPrice + economyTicketPrice;
    document.getElementById('ticket-price').innerText ='$' + totalTicketPrice;

    const taxAmount = Math.round(totalTicketPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + taxAmount;

    const totalCost = taxAmount + totalTicketPrice;
    document.getElementById('total-paice').innerText ='$' + totalCost;
}

function getTicketQuantity(ticketType){
    const ticketQuantityInput = document.getElementById(ticketType +'-input').value;
    const ticketQuantityInputNumber = parseInt(ticketQuantityInput);
    return ticketQuantityInputNumber;
}