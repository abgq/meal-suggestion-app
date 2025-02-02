export class MealService {
    private meals: { title: string; ingredients: string[] }[] = [
        { title: "Pasta Primavera", ingredients: ["pasta", "vegetables", "olive oil"] },
        { title: "Omelette", ingredients: ["eggs", "cheese", "vegetables"] },
        { title: "Smoothie", ingredients: ["banana", "yogurt", "milk"] },
        { title: "Stir Fry", ingredients: ["chicken", "vegetables", "soy sauce"] },
    ];

    suggestMeals(ingredients: string[]): string[] {
        return this.meals
            .filter(meal => meal.ingredients.every(ingredient => ingredients.includes(ingredient)))
            .map(meal => meal.title);
    }
}