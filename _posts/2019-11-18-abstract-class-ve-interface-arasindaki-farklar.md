---
title: "Abstract Class ve Interface Arasındaki Farklar"
date: 2019-11-18 10:39:30 +0300
layout: post
permalink: /yazilim/tasarim/abstract-class-ve-interface-arasindaki-farklar
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Abstract Class", "Abstraction", "Arayüz", "Interface", "Soyutlama" ]
published: true
---

Farklı tip elemanlar olduğu için karşılaştırılması yersiz gibi düşünülse de iki kavram da birer soyutlama tekniği olduğundan ve birbirlerinin yerine kullanılması mümkün olduğundan dolayı böyle bir karşılaştırma yapılmalı.

Kısaca soyutlama (abstraction) ve arayüz (interface) kavramlarından bahsedelim ve karşılaştırmaya geçelim.

## Soyutlama (Abstraction) Nedir?

Seçilen temel özelliklerin karmaşıklıklarının ve fonksiyonelliklerin arka planlarının göz ardı edilerek sunulmasıdır. Seçilen seviyedeki ele alış biçimi aynı ama o seviyenin altında arka planında kalan özellik veya işlevselliklerin farklı olduğu hiyerarşide kök olur. Yazılımın tasarımındaki ve entegrasyonundaki karmaşıklığın azalmasını sağlar.

Soyutlama ve sarmalama (veya kapsülleme) bazen karıştırılabiliyor. Oysa şu temel fark her şeyi açıklar: “sarmalama, kullandırmama ile ilgili iken soyutlama, kullandırmayı basitleştirme ile ilgilidir”.

## Arayüz (Interface) Nedir?

Arayüz de soyutlamanın bir parçasıdır. Soyutlaştırılmış işlevselliğin veya sadeleştirilmiş bilginin sunum şeklidir. Hiyerarşinin köküne soyutlama dediysek, o kökün dışa bakan ucuna veya uçlarından birine de arayüz diyebiliriz.

## Abstract Class vs Interface

![Abstract Class vs Interface](/assets/img/2019/11/abstract-class-vs-interface.png "Abstract Class vs Interface")

Abstract class; statik metotlar içerebilir.

Interface; override edilebilir statik metot içeremez.

Abstract class’da metotların gövdeleri (yani implementasyonları) olabilir.

Interface’de metotların ancak imzaları bulunabilir.

Abstract class; kurucu (constructor) ve yıkıcı (destructor) içerebilir.

Interface; kurucu (constructor) veya yıkıcı (destructor) içeremez. Ancak imzalarını içerebilir.

Abstract class’ın her access modifier’a (private, protected, public gibi) sahip metodu bulunabilir.

Interface’in metot imzaları ancak ‘public’ access modifier’ına sahip olabilir.

Abstract class -genel olarak- ancak bir sınıftan inheritance alabilir. Veya bir sınıf -genel olarak- ancak bir abstract sınıftan inheritance alabilir.

Interface birden fazla interface’den inheritance alabilir.

Abstract class, sınıfın neyden türediğini ifade edebilir (… is a …).

Interface, sınıfın hangi yeteneklere sahip olduğunu ifade edebilir (… can do …).

Ortak sınıf davranışı kazandırma için abstract class kullanılmalıdır.

Ortak yetenek metodu kazandırma için interface kullanılmalıdır.

Abstract class, nesnenin ne yapması gerektiğini belirlemek ile beraber nasıl yapması gerektiğini de belirleyebilir.

Interface, nesnenin ne yapması gerektiğini belirler ama nasıl yapması gerektiğini belirlemez.
