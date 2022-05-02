---
title: "PHP&#8217;de Üreteç Fonksiyonu (Generator Function) Nedir? yield Keyword&#8217;ü Ne İşe Yarar?"
date: 2019-08-26 10:27:12 +0300
layout: post
permalink: /platformlar/betik-isleme/php/phpde-uretec-fonksiyonu-generator-function-nedir-yield-keywordu-ne-ise-yarar
categories: [ "Platformlar", "Betik İşleme", "PHP" ]
tags: [ "Bellek", "Değer Enjeksiyonu", "Fonksiyon", "Iterator", "Memory", "Ne", "Nedir", "PHP", "Return", "Stack", "Üreteç", "Yield", "Yığın" ]
published: true
---

Üreteç fonksiyonları, dizi döndüren fonksiyonlara benzerler. Fakat birer iteratör (iterator) gibi davranırlar.

Üreteçlerde işlev tamamen sonlanana kadar ara değerler elde etmemiz gerekir. Üreteç fonksiyonları içinde, ara değer döndürmek için `return` anahtar kelimesi kullanılmaz. Bunu sağlayacak anahtar kelime `yield` oluyor. `yield` keyword’ü sayesinde fonksiyonun state’i ve yığındaki (stack) yeri korunur.

Üreteç fonksiyonunun üretmesi gereken bir sonraki değer lazım olduğunda duraklatıldığı yerden çalmaya devam eden müzik misali değer üretmeye devam eder. Tabii ki işlev içindeki akış, `yield` satırına değil de bir `return` satırına vardığında ya da işlevin sonuna gelindiğinde üreteç son defa çalışmış olur.

Bir üreteç fonksiyonu çağrıldığında dahili `Generator` sınıfından örneklenmiş bir nesne döner. Bu nesne `Iterator` arayüzünü implemente eder. Ama `Generator` sınıfını `new` keyword’ü ile örnekleyemeyeceğimizi unutmamamız gerekir. `Generator` sınıfı üreteç fonksiyonlarına özeldir.

```php
<?php
// Tanimlama:
function generateNumbers($limit)
{
    echo 'Basladi' . PHP_EOL;
    $i = 0;
    while (true) {
        if ($i > $limit) {
            echo 'Bitti' . PHP_EOL;
            return; // Burada 'break' de aynı sonucu verecekti
        }
        echo 'Ara deger verildi: ' . $i . PHP_EOL;
        yield $i;
        $i++;
    }
}
// Kullanim:
foreach (generateNumbers(5) as $value) {
    echo 'Ara deger alindi: ' . $value . PHP_EOL;
}
```

## yield Keyword’ü Kullanımı

`yield` anahtar kelimesi;

```php
<?php
function myGenerator()
{
    // ...
        yield $value;
    // ...
}
```

şeklinde kullanılırsa,

```php
<?php
foreach (myGenerator() as $key => $value) {
    // ...
}
```

şeklindeki bir döngüde `$key` değişkeni her iterasyonda birer artan sıralı tamsayılar ile doldurulacaktır.

```php
<?php
function myGenerator()
{
    // ...
        yield $key => $value;
    // ...
}
```

şeklinde kullanılırsa,

```php
<?php
foreach (myGenerator() as $key => $value) {
    // ...
}
```

şeklindeki bir döngüde `$key` değişkeni, `yield` ile elde edilen anahtar değeri ile doldurulacaktır.

`yield` değer enjeksiyonu için de kullanılabilir. Bunun için `Generator` sınıfının `send()` metoduna ihtiyaç duyulur.

```php
<?php

// Tanimlama:
function generateNumbers($limit)
{
    echo 'Basladi' . PHP_EOL;
    $i = 0;
    while (true) {
        if ($i > $limit) {
            break;
        }
        echo 'Ara deger verildi: ' . $i . PHP_EOL;
        $request = (yield $i);
        if (-1 === $request) {
            echo 'Bitti' . PHP_EOL;
            return;
        }
        $i++;
    }
    echo 'Bitti' . PHP_EOL;
}

// Kullanim:
$myGenerator = generateNumbers(5);
foreach ($myGenerator as $value) {
    if (3 === $value) {
        $myGenerator->send(-1);
    }
}
```