## Interactions

- drag from inventory view onto locations rendered in the entrance overlay view
- if pools aren't mixed, have candidate entrances do a subtle animation
- don't allow dropping on to an entrance that has been given a value, have a react button on the entrance summary component that will wipe it. you could mismark an entrance but realistically you're not ever going to want to have a rewrite happen by accident so it should be a little bit more explicit effort
- map Scene should be quick information summary of the whole game in one place
    - woth indicators
    - mark regions as complete
-

## Data Flow

- Preloader Scene loads er data and layout data and inventory data
- Tracker Scene init 
    - reads er data into Entrance Overlay View
    - reads layout data into Map View
    - reads inventory data into Inventory View

 