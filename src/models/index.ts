class Ingredient {
    constructor(public name: string, public quantity: number) {}
}

class Meal {
    constructor(public title: string, public ingredients: Ingredient[]) {}
}

export { Ingredient, Meal };