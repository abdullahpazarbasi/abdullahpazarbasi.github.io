---
title: "Test İkizleri (Test Doubles)"
date: 2021-12-22 14:45:53 +0300
layout: post
permalink: /yazilim/tasarim/test-ikizleri-test-doubles
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Test", "Kukla", "Dummy", "Uydurma", "Fake", "Taslak", "Stub", "Casus", "Spy", "Maket", "Mock", "İkiz", "Double" ]
published: false
---

## Kukla (Dummy)

Hiçbir işlevselliği bulunmayan ve state içermeyen, dolayısıyla kullanılmayan, yalnızca boşluk doldurmaya yarayan arayüz taklitçisi yazılım varlığıdır. Genelde argüman listelerini doldurmak için kullanılır.

## Uydurma (Fake)

Çalışan, fakat aslından farklı çalışan, aslının yeteneklerini taklit işini kısayollar ile halleden ve aslının basitleştirilmiş bir sürümü olan davranış ve arayüz taklitçisi yazılım varlığıdır.

## Taslak (Stub)

Önceden işlenmiş veriyi kendi içinde tanımlı tutan, aslının yeteneklerini taklit etmeden ve yan etkilerden arınmış olarak, gerçek veri yerine, kendi içinde tuttuğu bu söz konusu veri üzerinden çıktı veren arayüz taklitçisi yazılım varlığıdır.

## Casus (Spy)

Aslını çevreleyen (wrapping), veri sızdırma amaçlı çevreleyen, tamamen geçirgen, çevreleyici yazılım varlığıdır. Spy, çağrılan metotlar ve bu metotlara geçirilen argümanlar gibi özellikler hakkında bilgi toplar. Spy 'lar, test sürecinde gerçekleşen etkileşimleri doğrulamak için kullanılır. Bir spy, metotların ne zaman ve nasıl çağrıldığını takip edebilir.

## Maket (Mock)

Aldığı çağrıları kaydeden, kendisine bağımlı olan yazılım varlığının çağrılarına önceden tanımlandığı şekliyle cevap veren ve aslının yerine enjekte edilebilen, arayüz taklitçisi yazılım varlığıdır. Mock 'lar hem stub 'ların hem de spy 'ların özelliklerine sahiptirler. Bir mock, belirli bir davranışı simüle eder ve aynı zamanda hangi metotların ne zaman ve nasıl çağrıldığını denetler. Eğer beklenen çağrılar yapılmazsa arıza doğar.