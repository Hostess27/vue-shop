# vue-shop

## Task
You already have a fake server that returns some test data and a
boilerplate Vue 2 application. You need to continue the Vue application
by implementing the following features:
1. Render the list retrieved from the `http://localsost:3000/goods` endpoint.
The list should contain the following columns:
Image, Name, Price, Weight,"Add to cart" button.
2. By clicking on an item name, open a new page with the item details,
which renders all the item's fields and a "Add to cart" button.
3. Render a "Cart" icon at the top-right corner on every page. By clicking
the "Cart" button, it should open a dropdown with the current cart state:
a list of the items added and a summary block with the total price, total count
and total weight of the cart. The item list row contains the following columns:
Image, Name, an editable current item amount input, Remove button.
4. By clicking on any "Add to cart" button, add this item to the cart.
The "Cart" button should now render the total items added ("Cart (1)"). The
appropriate "Add to cart" buttons are replaced with editable +/- buttons and a number
that represent the current item amount in the cart.
5. Handle the cart state with vuex. Preserve the cart state on page reload.

## Project setup
```
npm install
```

### Fake API
```
npm run serve-fake-api
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
