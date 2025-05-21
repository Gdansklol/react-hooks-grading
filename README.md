##  React + Vite Webb App

### Sätta upp React + Vite i ett befintligt Git-repo

1. Installera Vite med React-mall i nuvarande katalog

```bash
npm create vite@latest . -- --template react

```

-  betyder att installationen sker i den nuvarande mappen.

2. Om detta meddelande visas:

```bash
Current directory is not empty. Please choose how to proceed:
○ Remove existing files and continue
○ Ignore files and continue
○ Cancel operation

```

- ➡️ Välj “Ignore files and continue” om det bara finns
 t.ex. README.md i mappen.

 3. Installera beroenden och starta utvecklingsservern

 ```bash
npm install         # Installerar alla nödvändiga paket
npm run dev         # Startar dev-servern på http://localhost:5173

 ```

 4. Lägg till ändringar i Git och gör en commit

```bash
git add .
git commit -m "commit"
git push origin main

```

<hr>

# useState vs useReducer

> When to use useState
The state is simple (e.g., number, string, boolean, or a simple array)

You only need a few pieces of state

The update logic is straightforward

>> Examples:

- A single input field

- A toggle button

- A counter

> When to use useReducer
The state is a complex object or involves array manipulation

You need conditional logic or multiple action types for updating state

You want to separate logic from UI in a larger component

>> Examples:

- A form with multiple fields

- Add/remove items from a list

- Complex UI state transitions

<hr>

## CheckboxList.jsx – Enkel React-komponent med useState

## Syfte
Användaren ska kunna välja sina favoritfrukter via kryssrutor (checkboxes).
Valen lagras i komponentens state, och visas i en text nedanför.

## Använda koncept
- **useState**: för att lagra checkbox-status (true/false för varje frukt)
- **Object.keys()**: för att hämta alla fruktnamn från state
- **.map()**: för att skapa en lista av input-fält (checkboxes)
- **.filter()**: för att plocka ut de frukter som är valda (true)
- **Ternary operator** (`? :`): för att visa olika texter beroende på om något är valt eller inte

##  Viktiga delar

### useState
```js
const [checked, setChecked] = useState({
  banana: false,
  kiwi: false,
  strawberry: false
});

** Startar med alla frukter som inte är valda (false) **

### handleChange
```js
 const handleChange = (e) => {
  setChecked({
    ...checked,
    [e.target.name]: e.target.checked
  });
};

```

- Uppdaterar rätt frukt när användaren klickar på checkboxen

### Object.keys + map

```jsx
Object.keys(checked).map((fruit) => (
  <label key={fruit}>
    <input name={fruit} checked={checked[fruit]} onChange={handleChange} />
    {fruit}
  </label>
))

```

- Skapar en checkbox för varje frukt i checked

### Visa valda frukter

```js
 const selected = Object.keys(checked).filter(fruit => checked[fruit]);

```
- Skapar en lista med endast de frukter som är valda

```jsx
<p>
  {selected.length > 0
    ? `You selected: ${selected.join(', ')}`
    : 'No fruits selected yet'}
</p>

```
 - Visar vald fruktlista eller ett meddelande om ingen är vald

 ## Slutsats
- Bra exempel på kontrollerade komponenter i React

- Lämpligt att använda useState eftersom strukturen är enkel

- Språkligt tydlig kod med enkel logik för junior frontendutvecklare

##  Shopping Cart med `useReducer` (React)

###  Syfte:
Hantera en varukorg där användaren kan:
- Lägga till produkter
- Öka/minska kvantitet
- Ta bort produkter

---

### ⚙️ useReducer
```js
const [cart, dispatch] = useReducer(reducer, initialState);
```

- cart: nuvarande tillstånd (array av produkter)

- dispatch: funktion för att skicka en "action"

- reducer: logik för att uppdatera tillståndet

- initialState: tom array från början []

###  Sammanfattning / Summary 

| Begrepp      | Betydelse                                 |
|--------------|--------------------------------------------|
| `useReducer` | Hook för komplex tillståndshantering       |
| `dispatch`   | Skickar action till reducer                |
| `state`      | Nuvarande tillstånd                        |
| `action`     | Objekt som beskriver vad som ska hända     |


<br>

| Term         | Meaning                                           |
|--------------|---------------------------------------------------|
| `useReducer` | Hook for managing complex state                   |
| `dispatch`   | Sends an action to the reducer                    |
| `state`      | The current state                                 |
| `action`     | An object describing what change should happen    |


