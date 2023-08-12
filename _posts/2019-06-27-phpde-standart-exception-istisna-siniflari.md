---
title: "PHP&#8217;de Standart Exception (İstisna) Sınıfları"
date: 2019-06-27 09:21:50 +0300
layout: post
permalink: /platformlar/betik-isleme/php/phpde-standart-exception-istisna-siniflari
categories: [ "Platformlar", "Betik İşleme", "PHP" ]
tags: [ "Exception", "İstisna", "PHP", "Standart" ]
published: false
---

## \\Exception

Temel istisna sınıfıdır. Sonradan tanımlanan tüm istisnalar bu istisnadan türetilmelidir.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\LogicException

Bir SPL istisna sınıfıdır. \\Exception sınıfından türemiştir. Program mantığındaki hatayı temsil eder. Bu tür bir istisna kullanılıyorsa, yakalanmalı ve yakalandığında kod akışında bir düzeltme eylemine yol açılmalı.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\RuntimeException

Bir SPL istisna sınıfıdır. \\Exception sınıfından türemiştir. Yalnızca çalışma anında bulunabilecek, yani çalışma öncesi bir tarama ile bulunamayacak hatayı temsil eder.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\BadFunctionCallException

Bir SPL istisna sınıfıdır. \\LogicException sınıfından türemiştir. Bir işlev çağrısı tanımsız bir işleve atıfta bulunursa veya çağırırken bazı argümanlar eksik bırakıldıysa fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\BadMethodCallException

Bir SPL istisna sınıfıdır. \\BadFunctionCallException sınıfından türemiştir. Bir metot çağrısı tanımsız bir metota atıfta bulunursa veya çağırırken bazı argümanlar eksik bırakıldıysa fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\DomainException

Bir SPL istisna sınıfıdır. \\LogicException sınıfından türemiştir. Bir değer, tanımlanmış geçerli bir domain’e uygun değilse fırlatılır. \\RangeException’ın derleme anı versiyonudur.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\InvalidArgumentException

Bir SPL istisna sınıfıdır. \\LogicException sınıfından türemiştir. İşleve veya metoda verilen argüman beklenen şekilde değilse fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\LengthException

Bir SPL istisna sınıfıdır. \\LogicException sınıfından türemiştir. Bir uzunluk beklendiği gibi değilse fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\OutOfRangeException

Bir SPL istisna sınıfıdır. \\LogicException sınıfından türemiştir. Geçersiz bir index istenirse fırlatılır. Derleme anında anlaşılabilir hataları temsil içindir. \\OutOfBoundsException’ın derleme anı versiyonudur.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\OutOfBoundsException

Bir SPL istisna sınıfıdır. \\RuntimeException sınıfından türemiştir. Geçersiz bir anahtar istenirse fırlatılır. Derleme anında tesbit edilemeyen hataları temsil içindir. \\OutOfRangeException’ın çalışma anı versiyonudur.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\OverflowException

Bir SPL istisna sınıfıdır. \\RuntimeException sınıfından türemiştir. Dolu varsayılan bir container’a bir eleman ilave edilmek istendiğinde fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\UnderflowException

Bir SPL istisna sınıfıdır. \\RuntimeException sınıfından türemiştir. Boş bir container’dan eleman silmeye çalışmak gibi geçersiz bir işlem gerçekleştirilmek istendiğinde fırlatılır.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\RangeException

Bir SPL istisna sınıfıdır. \\RuntimeException sınıfından türemiştir. Programın işleyişi esnasındaki aralık hatalarını göstermek için fırlatılır. Normalde bu, taşmalar dışında bir aritmetik hata meydana geldiği manasına gelir. \\DomainException’ın çalışma anı versiyonudur.

*Özellikleri*: message (string), code (int), file (string), line (int)

## \\UnexpectedValueException

Bir SPL istisna sınıfıdır. \\RuntimeException sınıfından türemiştir. Bir değer, bir değer kümesi ile eşleşmez ise fırlatılır. Bu genellikle, bir işlev başka bir işlevi çağırdığında gerçekleşir ve işlevin return değerinin aritmetik ya da buffer ile alakalı hatalardan uzak olarak belirli bir tip veya değerde olması beklenir.

*Özellikleri*: message (string), code (int), file (string), line (int)