# Böngészős Javascript

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

### app.js

```javascript
const homerseklet = parseInt(prompt("Adj meg egy hőmérsékletet!"));

// 12 fok alatt hideg, 12 és 20 között közepes, 20 fok felett meleg
function kategorizal(homerseklet) {
    if (homerseklet < 12) {
        return "Hideg";
    } else if (homerseklet < 20) {
        return "Közepes";
    } else {
        return "Meleg";
    }
}

alert(kategorizal(homerseklet));
```

# Vue

## Reverse

### index.html
```html
<!DOCTYPE html> 
<html lang="en"> 
  
<head> 
    <script src= 
"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"> 
    </script> 
</head> 
  
<body> 
    <div id='parent'> 
        <p><strong>Original String: 
            </strong>"{{ str }}" 
        </p> 
  
        <p><strong>Reverse String : 
            </strong>"{{ str | reverse }}"
        </p> 
    </div> 
      
    <script src='app.js'></script> 
</body> 
  
</html> 
```

### app.js

```javascript
const parent = new Vue({ 
    el: '#parent', 
    data: { 
        str: 'GeekforGeeks is a computer science portal', 
    }, 
  
    filters: { 
        reverse: function(data) { 
            const reverse = 
                data.split("").reverse().join(""); 
            return reverse; 
        } 
    } 
})
```

## O-k megszámolása

### index.html

```html
<!DOCTYPE html> 
<html lang="en"> 
  
<head> 
    <script src= 
"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"> 
    </script> 
</head> 
  
<body> 
    <div id='parent'> 
        <p><strong>Original String: 
            </strong>"{{ str }}"
        </p> 
  
        <p><strong>Counter: 
            </strong>"{{ str | counter }}"
        </p> 
    </div> 
      
    <script src='app.js'></script> 
</body> 
  
</html> 
```

### app.js

```javascript
const parent = new Vue({ 
    el: '#parent', 
    data: { 
        str: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur minus iste voluptatum odio dicta illum! Accusamus facere nulla quas voluptatum, provident consectetur a similique ipsa fugit ex unde voluptates!', 
    }, 
  
    filters: { 
        counter: function(data) { 
            const reverse = data.toUpperCase()
                .split("") // szöveget szétvágni karakterenként
                .filter((char) => char == 'O') // csak az o-k maradnak
                .length; // tömb hossza
            return reverse; 
        } 
    } 
})
```

# NodeJS létrehozása

Mielőtt futtatnál bármit hozz létre egy mappát és abba lépj bele!

## Letöltés

[NodeJS hivatalos oldala](https://nodejs.org/en) > LTS verzió letöltése > Telepítés

## Telepítés

```bash
npm init -y
```

## Futtatás

```bash
node main.js
```

# Typescript létrehozás

Mielőtt futtatnál bármit hozz létre egy mappát és abba lépj bele!

## Telepítés

```bash
npm init -y
npm i -D typescript ts-node @types/node
npx tsc --init
```

## Futtatás

```bash
npx ts-node main.ts
```

## npm run start beállítása

Ezt rakd bele a `package.json`-be:
```json
...
"scripts": {
    "start": "npx ts-node main.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

És így elég csak ennyit futtatnod:

```bash
npm run start
```
