<div align="center">
  <h1> Masterings Of JavaScript: Manipulating DOM Object</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/abhilash-panicker-68952b159/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://github.com/abpanic/">
  <img alt="Github Follow" src="https://img.shields.io/github/followers/abpanic?style=social">
  </a>


  <sub>Author:
  <a href="https://dbugr.vercel.app/" target="_blank">Abhilash Panicker</a><br>
<sub>Çevirmen:
  <a href="https://github.com/alicangunduz" target="_blank">Ali Can Gündüz</a><br>
  <small> Ocak 2023</small>
  </sub>

</div>

[<< Gün 21](../21_Lesson_DOM/21_Lesson_dom.md) | [Gün 23 >>](../23_Lesson_Event_listeners/23_Lesson_event_listeners.md)

![Mastering JavaScript](../images/21_Lesson_DOM/../../../images/banners/Lesson_1_21.png)
- [Gün 22](#gün-22)
  - [DOM(Document Object Model)-Gün 2](#domdocument-object-model-gün-2)
    - [Element Oluşturma](#element-oluşturma)
    - [Element oluşturma](#element-oluşturma-1)
    - [Bir üst elemente child ekleme](#bir-üst-elemente-child-ekleme)
    - [Bir üst ebeveyn(kapsar element) bir child elementi kaldırma](#bir-üst-ebeveynkapsar-element-bir-child-elementi-kaldırma)
  - [Yukarıdaki kod parçacığı tüm child elementleri temizledi.](#yukarıdaki-kod-parçacığı-tüm-child-elementleri-temizledi)
  - [Egzersizler](#egzersizler)
    - [Egzersiz: Level 1](#egzersiz-level-1)
    - [Egzersiz: Level 2](#egzersiz-level-2)
    - [Egzersiz: Level 3](#egzersiz-level-3)

# Gün 22

## DOM(Document Object Model)-Gün 2

### Element Oluşturma

HTML element oluşturmak için etiket adını kullanırız. JavaScript kullanarak HTML element oluşturmak oldukça basittir . _document.createElement()_ metodunu kullanırız. Bu metod bir HTML element etiket adını string olarak alır.

```js
// syntax
document.createElement('tagname')
```

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:Masterings Of JavaScript</title>
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

### Element oluşturma

Birden fazla element oluşturmak için döngü kullanmalıyız. Döngü kullanarak istediğimiz kadar HTML elementi oluşturabiliriz.
Element oluşturduktan sonra, HTML nesnenin farklı özelliklerine değer atayabiliriz.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:Masterings Of JavaScript</title>
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

### Bir üst elemente child ekleme

Oluşturduğumuz elementi HTML'de görmek için, üst element olarak child olarak eklememiz gerekir. HTML'de body'sine *document.body* ile erişebiliriz. *document.body* *appendChild()* metodunu destekler. Aşağıdaki örneğe bakın.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:Masterings Of JavaScript</title>
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

### Bir üst ebeveyn(kapsar element) bir child elementi kaldırma

HTML oluşturduktan sonra, element veya elementleri kaldırmak isteyebiliriz ve *removeChild()* metodunu kullanabiliriz.

**Örnek:**

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:Masterings Of JavaScript</title>
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

Önceki bölümde gördüğümüz gibi, bir üst elementin tüm iç HTML elementlerini veya child elementleri *innerHTML* metodu ve özelliklerini kullanarak ortadan kaldırmak için daha iyi bir yol mevcut.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:Masterings Of JavaScript</title>
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

Yukarıdaki kod parçacığı tüm child elementleri temizledi.
---

🌕 Çok özel birisin, her gün ilerliyorsun. Şimdi, ihtiyaç duyduğunda oluşturulmuş bir DOM elementini nasıl yok edeceğini biliyorsun. DOM'u öğrendin ve şimdi uygulamaları inşa etme ve geliştirme becerisine sahipsin. Öğrenme yolunda sadece sekiz gün kaldı. Şimdi beynin ve kasların için bazı egzersizler yap.

## Egzersizler

### Egzersiz: Level 1

1. HTML belgesinde bir div kapsayıcısı oluşturun ve dinamik olarak 0 ila 100 sayılar oluşturun ve kapsayıcı div'e ekleyin.
   - Çift sayıların arka planı yeşil
   - Tek sayılar arka planı sarı
   - Prime numaraları arka planı kırmızı

![Number Generator](../../images/projects/dom_min_project_Lesson_number_generators_2.1.png)

### Egzersiz: Level 2

1. Ülkeler dizisini kullanarak tüm ülkeleri görüntüleyin. Tasarımı görün.

![World Countries List](../../images/projects/dom_min_project_countries_aray_Lesson_2.2.png)

### Egzersiz: Level 3



Bu projenin gereksinimlerini jpg ve gif görüntülerinden her ikisinden de kontrol edin. Tüm veri ve CSS, yalnızca JavaScript kullanılarak uygulanmıştır. Veri starter klasörü proje_3'de bulunmaktadır. [*Açılır menü*](https://www.w3schools.com/tags/tag_details.asp) düğmesi detaylar HTML öğesi kullanılarak oluşturulmuştur.


![Challenge Information](../../images/projects/dom_mini_project_challenge_info_Lesson_2.3.gif)

![Challenge Information](../../images/projects/dom_mini_project_challenge_info_Lesson_2.3.png)

🎉 Tebrikler ! 🎉

[<< Gün 21](../Turkish/../21_Lesson_DOM/21_Lesson_dom.md) | [Gün 23 >>](../23_Lesson_Event_listeners/23_Lesson_event_listeners.md)