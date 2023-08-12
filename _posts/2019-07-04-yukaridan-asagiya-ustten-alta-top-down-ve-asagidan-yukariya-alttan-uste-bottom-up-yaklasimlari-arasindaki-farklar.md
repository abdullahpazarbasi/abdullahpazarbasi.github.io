---
title: "Yukarıdan Aşağıya / Üstten Alta (Top-Down) ve Aşağıdan Yukarıya / Alttan Üste (Bottom-Up) Yaklaşımları Arasındaki Farklar"
date: 2019-07-04 10:24:28 +0300
layout: post
permalink: /yazilim/tasarim/yukaridan-asagiya-ustten-alta-top-down-ve-asagidan-yukariya-alttan-uste-bottom-up-yaklasimlari-arasindaki-farklar
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Alttan Üste", "Approach", "Aşağıdan Yukarıya", "Bottom-Up", "Fark", "Karşılaştırma", "OOP", "POP", "Top-Down", "Üstten Alta", "Yaklaşım", "Yukarıdan Aşağıya" ]
published: false
---

Yukarıdan aşağıya yaklaşım temel olarak tersine mühendislik tarzıyla bir programın tamamlayıcı küçük programlarına (veya modüllerine) yönelik sezgi kazanmak için o programın parçalanmasıdır.

Aşağıdan yukarıya yaklaşım daha karmaşık bir programın doğması için tamamlayıcı küçük programların (veya modüllerin) bir araya getirilmesi ile o karmaşık programın orijinal modüllerinin oluşturulmasıdır.

C, Go gibi yapı / prosedür yönelimli programlama dilleri ile yukarıdan aşağıya yaklaşım takip edilir.

C++, Java gibi nesne yönelimli programlama dilleri ile aşağıdan yukarıya yaklaşım takip edilir.

Yukarıdan aşağıya yaklaşımı ile geliştirilen bir yazılım yüksek seviye tasarım ile başlar ve düşük seviye tasarımlar ile sona erer.

Aşağıdan yukarıya yaklaşımı ile geliştirilen bir yazılım düşük seviye tasarımlar ile başlar ve yüksek seviye tasarım ile biter.

Yukarıdan aşağıya yaklaşımda önce ana işlev yazılır (main), tüm alt işlevler ana işlevden çağrılır. Böylece tüm alt işlevler ihtiyaç doğdukça yazılır.

Aşağıdan yukarıya yaklaşımda uç modüllerden başlanır, modüller entegre edile edile en son ana işlev ile entegrasyon yapılır.