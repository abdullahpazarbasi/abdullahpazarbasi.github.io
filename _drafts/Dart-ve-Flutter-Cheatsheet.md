---
id: 1190
title: 'Dart ve Flutter Cheatsheet'
date: '2021-07-22T17:01:45+03:00'
author: 'Abdullah Pazarbaşı'
layout: post
guid: 'http://www.abdullahpazarbasi.com/?p=1190'
permalink: '/?p=1190'
primer_layout:
    - one-column-wide
categories:
    - Dart
    - Flutter
tags:
    - Dart
    - Flutter
---

## Kısa Kısa Dart

## Yorumlar (Commenting)

…

## Yerleşik Veri Tipleri (Built-In Data Types)

- **bool** true/false
- **Numbers**: num, int, double
- **Strings**: String, StringBuffer
- **List** (arrays)

## Sabit ve Değişken Deklarasyonu (Constant and Variable Declaration)

```dart
// dynamic: Değişken tipi değiştirilebilir, değişken değeri daha sonra değiştirilebilir
dynamic v = 123; // v değişkeni int tipinde
v = 456; // v değişkeni değeri 123 iken 456 oldu
v = 'abc'; // v değişkeni int tipinde iken artık String tipinde
```

```dart
// var: Değişken tipi değiştirilemez fakat değeri daha sonra değiştirilebilir
var v = 123; // v değişkeni int tipinde
v = 456; // v değişkeni değeri 123 iken 456 oldu
v = 'abc'; // Hata verir. Bu değişkenin tipi değiştirilemez
```

```dart
// final: Değişken tipi değiştirilemez ve ayrıca sonradan değeri de değiştirilemez (immutability)
var v = 123; // v değişkeni int tipinde
v = 456; // Hata verir. Bu değişkenin değeri değiştirilemez
v = 'abc'; // Hata verir. Bu değişkenin tipi değiştirilemez
```

```dart
// const: Sabit tanımlar
const c = 123; // c sabitine literal ataması yapıldı
var anyVar = 123;
const c2 = anyVar; // Hata verir. Sabitin değeri değişkenden gelemez
```