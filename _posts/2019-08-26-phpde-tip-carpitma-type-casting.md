---
title: "PHP&#8217;de Tip Çarpıtma (Type Casting)"
date: 2019-08-26 12:12:42 +0300
layout: post
permalink: /platformlar/betik-isleme/php/phpde-tip-carpitma-type-casting
categories: [ "Platformlar", "Betik İşleme", "PHP" ]
tags: [ "Array", "Binary", "Bool", "Boolean", "Cast", "Casting", "Double", "Empty", "Float", "Fonksiyon", "Function", "İfade", "Int", "Integer", "İşlev", "Loose", "Object", "Real", "Resource", "Set", "Statement", "String", "Tip", "Type", "Unset" ]
published: true
---

PHP’de type casting C dilindeki gibidir.

```php
$falan = 1;
$filan = (bool) $falan;
// $filan --> true
```

Notasyon esnektir. Mesela şunlar eşdeğerdir:

```php
(int) $falan;
(int)$falan;
( int ) $falan;
```

Array tipine dönüşüm için `(array)`  
Binary tipine dönüşüm için `(binary)` ya da `b"..."`  
Boolean tipine dönüşüm için `(bool)` ya da `(boolean)`  
Float tipine dönüşüm için `(float)` ya da `(double)`  
Integer tipine dönüşüm için `(int)` ya da `(integer)`  
Object tipine dönüşüm için `(object)`  
Resource tipine dönüşüm manasızdır  
String tipine dönüşüm için `(string)`

Nesne olmayan bir değer (object) ile nesneye çarpıtılırsa `stdClass` sınıfının bir örneği oluşturulup doldurulur.

`NULL` değeri `(array)` ile bir diziye çarpıtılırsa, `[]` dizisi yani boş dizi oluşturulur.

Şu 3 tablo’dan çarpıtmalar hakkında daha fazla fikir sahibi olabilirsiniz:

#### Sıkı Karşılaştırma

![Strict Comparison](/assets/img/2019/08/type-casting-strict-comparison.png "Strict Comparison")

#### Gevşek Karşılaştırma

![Loose Comparison](/assets/img/2019/08/type-casting-loose-comparison.png "Loose Comparison")

#### Bazı Fonksiyon ve İfadelerde

![Comparison in Functions](/assets/img/2019/08/type-casting-comparison-in-functions.png "Comparison in Functions")
