---
id: 860
title: 'PHP 8 Yenilikleri'
date: '2021-07-22T17:11:40+03:00'
author: 'Abdullah Pazarbaşı'
layout: post
guid: 'http://www.abdullahpazarbasi.com/?p=860'
permalink: '/?p=860'
primer_layout:
    - one-column-wide
categories:
    - PHP
tags:
    - PHP
    - PHP8
---

PHP’nin yeni majör sürümü 2020 sonuna doğru stable haliyle sürülecek plana göre. PHP 8 ‘in çıkışı en fazla benim gibi strict declaration yeğleyen geliştiricileri heyecanlandırıyor. Bu sürümle en çok amaçlanan da kodlama esnasındaki belirsizlikleri en aza indirmeye yardımcı olmak diye düşünüyorum. Paslama ve çıktı döndürmede kontrol dışı meseleler kalmamasını sağlayacak devrim mesabesinde yenilikler barındırıyor PHP 8.

## PHP 8 ile Gelen Yenilikler Neler?

### Nullsafe Operator

Null coalescing operator’a benzer bir operatör geldi. Artık `null` döndürülmesini de beklediğimiz noktalarda daha kısa kod yazıyoruz.

Şöyle sınıflarımız olduğunu düşünelim:

```php
<?php
class Foo
{
    public function getCode(): string
    {
        return 'ABC123';
    }
}
class Bar
{
    protected ?Foo $foo;
    public function __construct(?Foo $foo)
    {
        $this->foo = $foo;
    }
    public function getFoo(): ?Foo
    {
        return $this->foo;
    }
}
```

Şu prosedür çalıştırıldığında:

```php
<?php
$bar = new Bar(null);
var_dump($bar->getFoo()->getCode());
```

alacağımız şey bir hatadır:

```plaintext
Fatal error: Uncaught Error: Call to a member function getCode() on null in ......
```

Fakat eğer:

```php
<?php
$bar = new Bar(null);
$foo = $bar->getFoo();
var_dump($foo ? $foo->getCode() : null);
```

şeklindeki prosedürü çalıştırırsak, bir hata değil:

```plaintext
NULL
```

alırız.

Ama artık PHP 8’de bu case’i handle etmenin başka kısa bir yolu var:

```php
<?php
$bar = new Bar(null);
var_dump($bar->getFoo()?->getCode());
```

İşte `?->` operatörü yeni **nullsafe operator** ([RFC](https://wiki.php.net/rfc/nullsafe_operator)).

### Union Types

**Argument type declarations**, **return type declarations** ve **property type declarations** noktalarında tek bir type kullanılabiliyorken PHP 8 ile artık `|` ile ayrılmış type koleksiyonları kullanılabiliyor.

```php
<?php
class Foo
{
    protected Bar|Baz|null $bax;
    public function getBax(): Bar|Baz|null
    {
        return $this->bax;
    }
}
```