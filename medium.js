function cutPizzaSlices(slices){
    return (numPeople) => {
        const pizzaForEach = (slices/numPeople).toFixed(2);
        return `Each person gets ${pizzaForEach} slices of pizza.`;
    }
}

const sharePizza = cutPizzaSlices(8);
console.log(sharePizza(1));