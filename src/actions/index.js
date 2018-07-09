export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR";

export function addRecipe({ day, recipe, meal }) {
  type: ADD_RECIPE, recipe, meal, day;
}

export function removeFromCalendar({ day, recipe, meal }) {
  type: REMOVE_FROM_CALENDAR, meal, day;
}
