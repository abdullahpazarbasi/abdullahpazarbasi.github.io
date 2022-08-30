---
title: "Yazılım Geliştirme Yaşam Döngüsü (SDLC - Software Development Life-Cycle)"
date: 2022-08-30 20:15:00 +0300
layout: post
permalink: /yazilim/tasarim/yazilim-gelistirme-yasam-dongusu-sdlc-software-development-life-cycle
categories: [ "Yazılım", "Tasarım" ]
tags: [ "SDLC", "Software Development Life-Cycle" ]
published: false
---

## Yazılım Geliştirme Yaşam Döngüsünün 5 Ana Aşaması (5T)

* **T**ahlil (Analysing)
* **T**arif (Defining)
* **T**asarım (Designing)
* **T**atbik (Implementing)
* **T**eslim (Delivering)

![SDLC 5T](/assets/img/2022/08/sdlc-5t.png "SDLC 5T")

### Tahlil (Analysing)

Tahlil aşamasında, müşteri veya paydaşlar dinlenir. Dinlenilenler sistematik olarak kayıt altına alınır. Olacaksa entegrasyon noktalarındaki muhtemel kontratlar incelenir ve gerekiyorsa kendilerine entegre olunacak sistemlerin vaadleri, davranışları ve potansiyelleri irdelenir. Fizibilite çalışmaları yapılır. Kabataslak akış diyagramları, kabataslak bağımlılık diyagramları ve kabataslak kullanıcı arayüzleri (mock arayüzler) çizilir veya varsa önceki döngüden kalanlar üzerinde değişiklikler yapılır. Hatta bu çizilenler üzerinden görüşmek sağlıklı olur. Bu aşamanın sonunda tüm gereksinimler (idealde) netleşmiş olmalı ve icab eden anlaşmalar imzalanmış olmalıdır.

### Tarif (Defining)

Önceki aşamanın çıktılarının ışığında içe dönülerek tanımlamalar yapılır. Proje standartları belirlenir. Kullanılacak metodolojiler seçilir. Geçerli proje fazında yer alacak özellikler eleme yapılarak netleştirilir. Çözülmesi gereken problemlerin "ne"ler olduğu netleşir. Senaryolarda veya kullanım şekillerinde (use-case) meydana gelecek olaylar öngörülür ve bunlara göre akış diyagramları netleştirilir. Kullanıcılar rol alacaksa, seçilen metodolojiler uyarınca epikler (epics), hikayeler (stories) ve senaryolar (scenarios) yazılır. Kabul kriterleri belirlenir. İş planları çıkarılır. İnsan kaynağı göz önüne alınarak seçilen metodolojiler uyarınca iş kuyruğu veya takvimi belirlenir.

### Tasarım (Designing)

Önceki aşamanın çıktıları olan tanımlamalar üzerinden ve plan doğrultusunda özellik, yetenek, davranışlar tam dozunda soyutlamadan geçirilir. Kullanıcı deneyimleri tasarımları son halini alır. Sistem mimarisi ve bağlı olarak uygulama mimarisi belirlenir veya yenilenir. Modül haritası oluşturulur veya yenilenir. Varsa mevcut arayüzlere uyumlu yeni veya yenilenmiş, yoksa yepyeni arayüzler (uygulama programlama arayüzleri, komut satırı arayüzleri veya grafik kullanıcı arayüzleri olsun farketmez...) tasarlanır. Bunlar aktif soyutlamalardır. Kullanıcı deneyimlerine bağlı olarak grafik kullanıcı arayüzlerinin durağan görselleri tasarlanarak son halini alır. Özellik, alan veya veri modellemeleri tasarlanır. Bunlar da pasif soyutlamalardır. Pasif soyutlamalar ikiye ayrılır. Saklamaya yönelik pasif varlıkları (veri tipi, veri yapısı, nesne gibi...) modelleme statik modelleme olarak anılır. Akışa hizmet eden pasif varlıkları (olay (event), durum (state), öbek (heap), kuyruk (queue), yığın (stack), politika (policy) gibi...) modelleme dinamik modelleme olarak adlandırılır. Tasarım aşamasının sonunda çözülmesi gereken problemlerin "nasıl" çözüleceği netleşir.

### Tatbik (Implementing)

...

#### Kodlama

...

#### Birim ve Bileşen Sınama

...

### Teslim (Delivering)

...

#### Entegrasyon Sınama

...

#### Kabul Kriteri Sınama

...

#### Versiyonlama ve Release

...

#### Dağıtım (Deployment)

...

#### Launch

...

#### Bakım (Maintenance)

...
