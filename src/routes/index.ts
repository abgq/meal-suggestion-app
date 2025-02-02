import { Router } from 'express';
import MealController from '../controllers';

const router = Router();
const mealController = new MealController();

export function setRoutes(app) {
    app.use('/api/meals', router);
    router.get('/', mealController.getMeals.bind(mealController));
    router.post('/ingredients', mealController.addIngredient.bind(mealController));
}