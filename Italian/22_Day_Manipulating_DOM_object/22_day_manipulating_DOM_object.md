<div align="center">
  <h1> 30 Lessons Of JavaScript: Manipulating DOM Object</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/abhilash-panicker-68952b159/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://github.com/abpanic/">
  <img alt="Github Follow" src="https://img.shields.io/github/followers/abpanic?style=social">
  </a>

<sub>Autore:
<a href="https://https://dbugr.vercel.app/" target="_blank">Abhilash Panicker</a><br>
<small> Gennaio, 2020</small>
</sub>

</div>

[<< Lesson 21](../21_Lesson_DOM/21_Lesson_dom.md) | [Lesson 23 >>](../23_Lesson_Event_listeners/23_Lesson_event_listeners.md)

![Thirty Lessons Of JavaScript](../../images/banners/Lesson_1_22.png)
- [Lesson 22](#Lesson-22)
  - [DOM(Document Object Model)-Lesson 2](#domdocument-object-model-Lesson-2)
    - [Creare un elemento](#creating-an-element)
    - [Creare più elementi](#creating-elements)
    - [collegare un elemento child ad un elemento parent](#appending-child-to-a-parent-element)
    - [Rimuovere un elemento child da un elemento parent](#removing-a-child-element-from-a-parent-node)
  - [Esercizi](#exercises)
    - [Esercizi: Livello 1](#exercises-level-1)
    - [Esercizi: Livello 2](#exercises-level-2)
    - [Esercizi: Livello 3](#exercises-level-3)

# Lesson 22

## DOM(Document Object Model)-Lesson 2

### Creare un elemento

Per creare un elemento HTML si usa il nome del tag. Creare un elemento HTML con JavaScript è molto semplice e immediato. Si utilizza il metodo _document.createElement()_. Il metodo prende il nome di un tag dell'elemento HTML come parametro stringa.

```js
// syntax
document.createElement('tagname')
```

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Lessons Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Lesson 2'

        console.log(title)
    </script>
</body>

</html>
```

### Creare più elementi

Per creare più elementi dobbiamo usare il loop. Utilizzando il ciclo, possiamo creare tutti gli elementi HTML che vogliamo.
Dopo aver creato l'elemento, possiamo assegnare il valore alle diverse proprietà dell'oggetto HTML.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Lessons Of JavaScript</title>
</head>

<body>

    <script>
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            console.log(title)
        }
    </script>
</body>

</html>
```

### collegare un elemento child ad un elemento parent

Per vedere un elemento creato nel documento HTML, dobbiamo aggiungerlo al genitore come elemento figlio. Possiamo accedere al corpo del documento HTML usando *document.body*. Il file *document.body* supporta il metodo *appendChild()*. Si veda l'esempio seguente.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Lessons Of JavaScript</title>
</head>

<body>

    <script>
        // creating multiple elements and appending to parent element
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            document.body.appendChild(title)
        }
    </script>
</body>
</html>
```

### Rimuovere un elemento child da un elemento parent

Dopo aver creato un HTML, potremmo voler rimuovere uno o più elementi e possiamo usare il metodo *removeChild()*.

**Esempio:**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Lessons Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Abhilash Panicker challenges in 2020</h1>
    <ul>
        <li>30LessonsOfPython Challenge Done</li>
        <li>30LessonsOfJavaScript Challenge Done</li>
        <li>30LessonsOfReact Challenge Coming</li>
        <li>30LessonsOfFullStack Challenge Coming</li>
        <li>30LessonsOfDataAnalysis Challenge Coming</li>
        <li>30LessonsOfReactNative Challenge Coming</li>
        <li>30LessonsOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```

Come abbiamo visto nella sezione precedente, esiste un modo migliore per eliminare tutti gli elementi HTML interni o i figli di un elemento genitore, utilizzando le proprietà del metodo *innerHTML*.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Lessons Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Abhilash Panicker challenges in 2020</h1>
    <ul>
        <li>30LessonsOfPython Challenge Done</li>
        <li>30LessonsOfJavaScript Challenge Done</li>
        <li>30LessonsOfReact Challenge Coming</li>
        <li>30LessonsOfFullStack Challenge Coming</li>
        <li>30LessonsOfDataAnalysis Challenge Coming</li>
        <li>30LessonsOfReactNative Challenge Coming</li>
        <li>30LessonsOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

Il frammento di codice precedente cancella tutti gli elementi figli.

---

🌕Sei così speciale, fai progressi ogni giorno. Ora sai come distruggere un elemento DOM creato quando è necessario. Hai imparato il DOM e ora hai la capacità di costruire e sviluppare applicazioni. Ti restano solo otto giorni per raggiungere la grandezza. Ora fai qualche esercizio per il cervello e per i muscoli.

## Esercizi

### Esercizi: Livello 1

1. Creare un div contenitore nel documento HTML e creare 100-100 numeri dinamicamente e aggiungerli al div contenitore. 
   - Lo sfondo dei numeri pari è verde
   - Lo sfondo dei numeri dispari è giallo
   - Lo sfondo dei numeri primi è rosso

![Number Generator](../../images/projects/dom_min_project_Lesson_number_generators_2.1.png)

### Esercizi: Livello 2

1. Utilizzare l'array Paesi per visualizzare tutti i Paesi.Vedere il disegno

![World Countries List](../../images/projects/dom_min_project_countries_aray_Lesson_2.2.png)

### Esercizi: Livello 3

Controllare i requisiti di questo progetto da entrambe le immagini (jpg e gif). Tutti i dati e i CSS sono stati implementati utilizzando solo JavaScript. I dati si trovano nella cartella starter project_3. Il pulsante a discesa è stato creato utilizzando l'elemento HTML [*details*](https://www.w3schools.com/tags/tag_details.asp).

![Challenge Information](../../images/projects/dom_mini_project_challenge_info_Lesson_2.3.gif)

![Challenge Information](../../images/projects/dom_mini_project_challenge_info_Lesson_2.3.png)

🎉 CONGRATULAZIONI ! 🎉

[<< Lesson 21](../21_Lesson_DOM/21_Lesson_dom.md) | [Lesson 23 >>](../23_Lesson_Event_listeners/23_Lesson_event_listeners.md)