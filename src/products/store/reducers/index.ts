import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromPizzas from "./pizzas.reducers";
import * as fromToppings from './toppings.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);
