// Assignment github code link


// Kilometer to meter
function kilometerToMeter(kilometer){
    if (kilometer<0) {
        return 'Kilometer can not be negative.';
    }
    const meter = kilometer * 1000;
    return meter;
}

// Output check
console.log(kilometerToMeter(5));


// Budget Calculator
function budgetCalculator(watch, phone, laptop){
    if (watch<0 || phone <0 || laptop<0) {
        return 'Product can not be negative.'
    }
    const watchPrice = watch * 50;
    const phonePrice = phone * 100;
    const laptopPrice = laptop * 500;
    const totalPrice = watchPrice + phonePrice + laptopPrice ;
    return totalPrice;
}

// Output check
console.log(budgetCalculator(5,-10,3));

// Hotel Cost
function hotelCost(days){
    if (days<0) {
        return 'Days can not be negative.'
    }
    let hotelCost;
    if (days<= 10) {
        hotelCost = 100 * days
    }else if (days <= 20) {
        hotelCost = (10*100) + (days -10)*80;
    }else{
        hotelCost = (10*100) + (10*80) + (days-20)*50;
    }
    return hotelCost;
}

// Output check
console.log(hotelCost(25));

// Mega Friend
function megaFriend(friends){
    if (friends.length == 0) {
        return 'Please enter a valid friend list.'
    }
    let megaFriend = friends[0];
    for(let i=0; i< friends.length; i++){
        let element = friends[i];
        if (element.length > megaFriend.length) {
            megaFriend = element;
        }
    }
    return megaFriend;
}

// Output check
let friendsName = ['abul', 'babul', 'kamran', 'bulu', 'amarname', 'hadiuzzaman'];
console.log(megaFriend(friendsName));
