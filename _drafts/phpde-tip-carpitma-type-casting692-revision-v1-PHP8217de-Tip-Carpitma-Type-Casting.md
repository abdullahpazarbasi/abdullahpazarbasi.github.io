---
id: 1406
title: 'PHP&#8217;de Tip Çarpıtma (Type Casting)'
date: '2021-07-22T17:03:50+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/?p=1406'
permalink: '/?p=1406'
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

<div class="wp-block-image"><figure class="aligncenter">![Strict Comparison](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/type-casting-strict-comparison.png?resize=688%2C294&ssl=1)<figcaption>Strict Comparison</figcaption></figure></div>#### Gevşek Karşılaştırma

<div class="wp-block-image"><figure class="aligncenter">![Loose Comparison](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/type-casting-loose-comparison.png?resize=688%2C296&ssl=1)<figcaption>Loose Comparison</figcaption></figure></div>#### Bazı Fonksiyon ve İfadelerde

<div class="wp-block-image"><figure class="aligncenter">![Comparison in Functions](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/type-casting-comparison-in-functions.png?resize=688%2C409&ssl=1)<figcaption>Comparison in Functions</figcaption></figure></div>