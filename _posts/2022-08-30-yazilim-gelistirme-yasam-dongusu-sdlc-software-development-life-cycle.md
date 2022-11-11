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

Tahlil aşamasında,

- Müşteri veya paydaşlar dinlenir. Dinlenilenler sistematik olarak kayıt altına alınır. A-B testler analiz... Crash raporlarına bakılır... Olacaksa entegrasyon noktalarındaki muhtemel kontratlar incelenir ve gerekiyorsa kendilerine entegre olunacak sistemlerin vaadleri, davranışları ve potansiyelleri irdelenir. Fizibilite çalışmaları yapılır. Kabataslak akış diyagramları, kabataslak bağımlılık diyagramları ve kabataslak kullanıcı arayüzleri (mock arayüzler) çizilir veya varsa önceki döngüden kalanlar üzerinde değişiklikler yapılır. Hatta bu çizilenler üzerinden görüşmek sağlıklı olur. Bu aşamanın sonunda tüm gereksinimler (idealde) netleşmiş olmalı ve icab eden anlaşmalar imzalanmış olmalıdır.

### Tarif (Defining)

Önceki aşamanın çıktılarının ışığında içe dönülerek tanımlamalar yapılır. Proje standartları (isimlendirme konvansiyonları, anahtarlama standartları gibi...) belirlenir. Kullanılacak paradigmalar, yaklaşımlar, metodolojiler seçilir. Geçerli proje fazında yer alacak özellikler eleme yapılarak netleştirilir. Çözülmesi gereken problemlerin "ne"ler olduğu netleşir. Senaryolarda veya kullanım şekillerinde (use-case) meydana gelecek olaylar öngörülür ve bunlara göre akış diyagramları netleştirilir. Kullanıcılar rol alacaksa, seçilen metodolojiler uyarınca epikler (epics), hikayeler (stories) ve senaryolar (scenarios) yazılır. Kabul kriterleri belirlenir. Alınabilecek teknik borçlar belirlenir. İş planları çıkarılır. Ödenmesi gereken veya ödenmesi gerekecek teknik borçların ödeme işleri plana dahil edilir. İnsan kaynağı göz önüne alınarak seçilen metodolojiler uyarınca iş kuyruğu veya takvimi belirlenir.

### Tasarım (Designing)

Önceki aşamanın çıktıları olan tanımlamalar üzerinden ve plan doğrultusunda özellik, yetenek, davranışlar tam dozunda soyutlamadan geçirilir. Kullanıcı deneyimleri tasarımları son halini alır. Sistem mimarisi ve bağlı olarak uygulama mimarisi belirlenir veya yenilenir. Konsept sağlamaları (proof of concept - POC) yapılır. Modül haritası oluşturulur veya yenilenir. Hazır modüllere bağımlılıklar. Kullanılacak tasarım kalıpları/desenleri haritlara ve diyagramlara katılır. Varsa mevcut arayüzlere uyumlu yeni veya yenilenmiş, yoksa yepyeni arayüzler (uygulama programlama arayüzleri, komut satırı arayüzleri veya grafik kullanıcı arayüzleri olsun farketmez...) tasarlanır. Bunlar aktif soyutlamalardır. Kullanıcı deneyimlerine bağlı olarak grafik kullanıcı arayüzlerinin durağan görselleri tasarlanarak son halini alır. Özellik, alan veya veri modellemeleri tasarlanır. Bunlar da pasif soyutlamalardır. Pasif soyutlamalar ikiye ayrılır. Saklamaya yönelik pasif varlıkları (veri tipi, veri yapısı, nesne gibi...) modelleme statik modelleme olarak anılır. Akışa hizmet eden pasif varlıkları (olay (event), durum (state), öbek (heap), kuyruk (queue), yığın (stack), politika (policy) gibi...) modelleme dinamik modelleme olarak adlandırılır. Tasarım aşamasının sonunda çözülmesi gereken problemlerin "nasıl" çözüleceği netleşir. CI/CD kullanılacaksa pipeline'lar bu aşamada oluşturulur.

### Tatbik (Implementing)

Top-down veya bottom-up yaklaşıma göre kodlama başlar ve aynı yönde devam eder. Test odaklı geliştirme (test-driven development) yapılıyorsa/yapılacaksa her bir katmanda birim testler (unit tests) önce yazılır.

#### Kodlama (Coding)

Tasarım, uygulama haline getirilmeye çalışılır.

#### İşlevsel Sınamalar (Functional Testings)

Fonksiyonel testler (functional tests) çoğunlukla 3T (3A) esasına göre kurgulanır:

- **T**ertip (**A**rrange)
- **T**ahrik (**A**ct)
- **T**eftiş (**A**ssert)

##### Fonksiyonel Test Türlerinden Bazıları

- Birim Testi (Unit Test)
- Entegrasyon Testi (Integration Test)
- Regresyon Testi (Regression Test): Yazılımda yapılan değişikliğin yazılımın toplam kalitesine etkisini (ilave özellik, önceki hataların tamiri, başka noktaları bozup bozmadığını) araştırmayı kapsar.
- Kabul Testi (Acceptance Test)
- Duman Testi (Smoke Test): Fişe taktığında duman geliyor mu? Sistemin genelinde patlayan modül var mı?
- Doğruluk Testi (Sanity Test/Sanity Check): Detaya girilmeden eklenen yeni özelliklerin çalışıp çalışmadığını üstünkörü biçimde sınamayı amaçlar.
- Arayüz Testi (Interface Test)
- Sistem Testi (System Test)
- Kullanıcı Seyir Testi (User Journey Test)
- Yoldan geçen adam testi

### Teslim (Delivering)

...

#### İşlevsel Olmayan Sınamalar (Non-Functional Testings)

Kriterleri, kalite güvence uzmanları ve sistem güvenlik uzmanlarının tavsiyeleri uyarınca belirlenen, insan müdahalesi ile de başlatılan ama çoğu, pipeline 'lara dahil edilebilecek, sistemin işlevsellik davranışları ile ilgili olmayan sınamalardır.

##### İşlevsel Olmayan Test Türlerinden Bazıları

- Dokümantasyon Testi (Documentation Test)
- Kurulum Testi (Installation Test)
- Yük Testi (Load Test)
- Güvenilirlik Testi (Reliability Test)
- Dayanıklılık Testi (Resilience Test)
- Güvenlik Testi (Security Test)
- Performans Testi (Performance Test)
- Sızma Testi (Pen-Test, Penetration Test): Temsili siber saldırıdır.

#### Versiyonlama ve Çıkma (Versioning and Release)

- Alpha Release
- Beta Release
- Official Release

#### Dağıtım (Deployment)

...

#### Kullanıma Açma (Launch)

- Feature Toggling
- Phased Release
- Staged Rollout

Stratejiler:

- Soft Launch
- Dark Launch
- Canary Release
- Hard Launch

#### Bakım (Maintenance)

Her projede az ya da çok insan müdahalesine pay olarak bırakılmış işlevsellikler veya insan müdahalesine açık bırakılmış noktalar bulunabilir. Bu müdahaleler icabında müdahaleler veya periyodik müdahaleler olabilir.

Error, fault, defect, bug ve failure tamir (fix) etmek maintenance 'a girmez. Bunlar için - ama tam tekmil ama çabuk tarafından olsun - yeni bir yazılım geliştirme döngüsüne girilir.
