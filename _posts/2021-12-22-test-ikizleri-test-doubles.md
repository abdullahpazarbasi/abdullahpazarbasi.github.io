---
title: "Test İkizleri (Test Doubles)"
date: 2021-12-22 14:45:53 +0300
layout: post
permalink: /yazilim/tasarim/test-ikizleri-test-doubles
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Test", "Kukla", "Dummy", "Uydurma", "Fake", "Maket", "Stub", "Casus", "Spy", "Taklit", "Mock", "İkiz", "Double" ]
published: true
---

## Kukla (Dummy)

Hiçbir işlevselliği bulunmayan ve state içermeyen, dolayısıyla kullanılmayan, yalnızca boşluk doldurmaya yarayan arayüz taklitçisi yazılım varlığı. Genelde argüman listelerini doldurmak için kullanılır.

## Uydurma (Fake)

Çalışan, fakat aslından farklı çalışan, aslının yeteneklerini taklit işini kısayollar ile halleden ve aslının basitleştirilmiş bir sürümü olan davranış ve arayüz taklitçisi yazılım varlığı.

## Maket (Stub)

Önceden işlenmiş veriyi kendi içinde tanımlı tutan, aslının yeteneklerini taklit etmeden ve yan etkilerden arınmış olarak, gerçek veri yerine, kendi içinde tuttuğu bu söz konusu veri üzerinden çıktı veren arayüz taklitçisi yazılım varlığı.

## Casus (Spy)

Aslını çevreleyen (wrapping), veri sızdırma amaçlı çevreleyen, tamamen geçirgen, çevreleyici yazılım varlığı.

## Taklit (Mock)

Aldığı çağrıları kaydeden, kendisine bağımlı olan yazılım varlığının çağrılarına önceden tanımlandığı şekliyle cevap veren ve aslının yerine enjekte edilebilen, davranış ve arayüz taklitçisi yazılım varlığı.