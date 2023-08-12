---
title: "Portlar ve Adaptörler Mimarisi &#8211; Altıgen Mimari (Ports and Adapters Architecture / Hexagonal Architecture)"
date: 2019-05-13 13:07:26 +0300
layout: post
permalink: /yazilim/mimari/portlar-ve-adaptorler-mimarisi-altigen-mimari-ports-and-adapters-architecture-hexagonal-architecture
categories: [ "Yazılım", "Mimari" ]
tags: [ "Abstraction", "Adapters", "Adaptörler", "Altıgen", "Arayüz", "Architecture", "Back-End", "Business Logic", "Driven", "Driving", "Entry-Point", "Exit-Point", "Front-End", "Hexagonal", "Interface", "Isolation", "Kapılar", "Katmanlar", "Layers", "Mimari", "Portlar", "Ports", "Soyutlama", "Unit Test", "Yazılım Mimarisi" ]
published: false
---

> Bir uygulamanın kullanıcılar, programlar, otomatikleştirilmiş testler veya toplu iş betikleri tarafından eşit bir biçimde güdülmesine ve nihai çalışma zamanı cihazlarından ve veritabanlarından yalıtılmış bir biçimde geliştirilip test edilmesine izin verin.
> 
> <cite>Alistair Cockburn, 2005</cite>

Portlar ve adaptörler mimarisi işte bu esasa göre düşünülmüş bir mimari yaklaşımdır.

### Geleneksel Yaklaşımdaki Sorunlar Neydi?

Geleneksel yaklaşımla tasarlanmış mimari, front-end’de de back-end ’de de sızıntılara açıktır. Front-end tarafında iş mantığı (business logic), UI kodlarına sızabilir veya UI gereksinimleri iş mantığı tarafına sızabilir. Back-end tarafında ise iş mantığı tarafına harici kütüphaneler (external libraries) ya da teknoloji extension’ları sızabilir ve aşırı sıkı bağlaşıklıklar oluşur.

### Nasıl Çözülüyor?

Portlar ve adaptörler yaklaşımı ile portlar ve adaptörler halinde implemente edilen bir soyutlama katmanı (abstraction layer) kullanılarak sorunlar çözüme kavuşuyor.

## Port Nedir?

Port, uygulamanın, tüketiciyi tanımayan entry-point ’i ya da exit-point ’idir. Bu, programlama dillerinin çoğunda “arayüz (interface)” olarak karşılık bulur. Arayüz, concrete implementasyonu tanımaz. Elbette bu yaklaşım, implementasyona yönelik değil de arayüze yönelik programlama gerektirir.

## Adaptör Nedir?

Adaptör (adapter) bir arayüzü bir başka arayüze çeviren veya uyduran bir sınıftır.

### İki tip adaptör vardır

1. **Güden Adaptör (Driving Adapter – Primary Adapter)**: Uygulamada aksiyon tetikleyen tarafın adaptörüdür.
2. **Güdülen Adaptör (Driven Adapter – Secondary Adapter)**: Uygulamada tetiklenen aksiyonlara reaksiyon veren tarafın adaptörüdür.

### Güden ve Güdülen Taraf Arasındaki En Önemli Fark

Güden (driving) tarafta, port da port ’un concrete implementasyonu da uygulamaya dahildir. Güdülen (driven) tarafta ise, port uygulamaya dahildir fakat port ’un concrete implementasyonu uygulamanın dışındadır.

## Altıgen Mimari Yaklaşımı Neler Sağlar?

### İmplementasyon Yalıtımı ve Teknoloji Yalıtımı

Geleneksel yaklaşımda, bir harici kütüphane kullanacaksak kütüphanenin sınıflarını, soyut sınıflarını, arayüzlerini implementasyonumuzda doğrudan kullanırız.

Portlar ve adaptörler yaklaşımında ise harici kütüphanenin sınıflarını doğrudan kullanmayız. Bir arayüz yardımı ile bir port oluştururuz. Sonra bu portu implemente eden ve söz konusu harici kütüphaneyi arayüzümüze uyduran bir adaptör yazarız. Bu adaptör kütüphane sınıflarını wrap eder. Böylece implementasyon yalıtılmış olur.

Söz konusu harici kütüphanenin bir önbellekleme teknolojisine ait olduğunu düşünelim. Bu kütüphaneye yazdığımız adaptör gibi başka bir önbellekleme teknolojisine ait bir kütüphaneye de bir adaptör yazıp önbellekleme teknolojisini port ’u değiştirmeden switch edebiliriz. İşte bu da teknoloji yalıtımı demektir.

### Dağıtım Mekanizmalarının Yalıtımı

Uygulamamız için yazacağımız GUI, API, CLI veya file import/export arayüzlerini bir port arkasına (yani mesela bir interface sınıfı arkasına) alarak saydığımız bu dağıtım mekanizmalarını yalıtmış oluruz. Böylece iş mantığına dokunmamış oluruz.

### Kolay Test Edilebilirlik

Portlar ve adaptörler yaklaşımında birim testleri (unit tests) çok kolaydır. Portlar mock ’lanır veya stub ’lanır. Gerçek implementasyon ile cedelleşilmez. Girdi ve çıktı özellikle benzetilmeye çalışılmaz. Çünkü zaten port arayüzü bellidir.

## Özetle

**Hedef**, sistemimizdeki iş mantığını dağıtım mekanizmaları ve altyapı araçlarından yalıtmak.

Güden tarafta uygulamamızın arayüzlerini kullanan UI adaptörleri oluştururuz. Mesela controller’lar…

Güdülen tarafta ise uygulamamızın arayüzlerini implemente eden altyapı adaptörleri oluştururuz. Mesela persistence repository’leri…