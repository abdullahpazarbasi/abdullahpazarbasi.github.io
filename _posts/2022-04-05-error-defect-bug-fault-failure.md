---
title: "Error, Defect, Bug, Fault, Failure"
date: 2022-04-05 13:34:07 +0300
layout: post
permalink: /yazilim/tasarim/error-defect-bug-fault-failure
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Error", "Fault", "Defect", "Bug", "Failure", "Extreme Programming" ]
published: true
---

Bunlar, yanılgı, hata, yanlış, kusur, hasar gibi birbirine çok yakın anlamları varmış gibidirler ama Yazılım Geliştirme Yaşam Döngüsü (SDLC) ‘nde hususi manaları vardır. Kusurun farklı sınıflandırmalarıdırlar.

## Error / Mistake

Geliştiricilerin (programlayıcılar ve/veya analistler) yanılgı kaynaklı hatasıdır. Böyle bir hata varsa mutlaka ya `fault`, ya `defect` ya da `failure` meydana gelir. Mistake, işte bunların sebebi olan insan hatasıdır.

> Error yerine mistake olarak isimlendirilmeliydi.

> Bu error, yazılım platformlarındaki error ile karıştırılmamalıdır.

## Fault

Mistake ‘in sonucudur. Bir ya da birden fazla `bug` ‘ın kaynağı olan veya bir ya da birden fazla `bug` ‘ın kaynağı olmaya aday kodlama hatası ya da kodlama hatalarıdır. `Fault`, geliştirme istasyonundan çıkmadan avlanırsa bir `bug` ‘a ya da `bug` ‘lara dönüşmesi engellenmiş olur.

## Defect

Test otomasyonuna katılmış ya da katılmamış bir test case ‘indeki beklenen (expected) ile gerçek (actual) arasında bulunan, testçilerin tesbit ettiği farka denir.

- **Wrong**: Gereksinimler doğru yoldan gerçeklenmediğinde ortaya çıkar.
- **Missing**: Gereksinimlerden biri gerçeklenmediğinde yani eksik kaldığında ortaya çıkar.
- **Extra**: Gereksinimlerden fazlası gerçeklendiğinde yani fazlalık yapıldığında ortaya çıkar.

## Bug

Testçiler tarafından bildirilen **wrong** tipindeki `defect` ‘in, geliştiriciler (programlayıcılar ve/veya analistler) tarafından kabul edilmiş halidir.

## Failure

Production ortamında, müşterinin (veya müşteri yerine geçen birinin) karşılaştığı kusurdur. Bir `fault` birden fazla `failure` ‘e sebep olabilir.