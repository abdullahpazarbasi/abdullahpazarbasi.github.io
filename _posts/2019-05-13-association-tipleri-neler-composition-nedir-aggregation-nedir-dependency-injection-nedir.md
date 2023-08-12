---
title: "Association Tipleri Neler? Composition Nedir? Aggregation Nedir? Dependency Injection Nedir?"
date: 2019-05-13 16:50:22 +0300
layout: post
permalink: /yazilim/tasarim/association-tipleri-neler-composition-nedir-aggregation-nedir-dependency-injection-nedir
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Aggregate", "Aggregation", "Association", "Bileşik Model", "Bileştirme", "Colleague", "Composite Model", "Composition", "Dependency Injection", "Relationship", "Toparlama" ]
published: false
---

“Association” birden fazla nesnenin birbiri ile alakasının adlandırmasıdır. İki nesnenin birbiri ile nasıl bir bağı var ve birbirinin işlevselliğini nasıl kullanırlar sorusunun cevabı association’da saklıdır.

![Relation Types](/assets/img/2019/05/relation-types-1.png "Relation Types")

4 çeşit association vardır:

## Composition (Bileştirme)

Güçlü tip association’dır. Nesnelerden biri diğerine sahiptir. Sahip nesne yoksa ait nesnenin işlevselliğinden söz edilemez. Arada sahiplik-aitlik ilişkisi (… has …) vardır. Böyle bir association’ın çıktısı “composite model” olarak adlandırılır. Ait olan nesnenin oluşturulması, sahip olan nesnenin constructor’ında yapılır. Ait olacak nesne dışarıda oluşturulup sahip olacak nesneye dışarıdan enjekte edilemez. Composition bileşenleri arasındaki ilişki daima tek yönlüdür (uni-directional). Composition’ı oluşturan nesneler asla birbirleri ile many-to-many ilişkiye sahip olamazlar.

## Aggregation (Toparlama)

Zayıf tip association’dır. Nesnelerden biri diğerinin yalnızca parçasıdır. Bu tip association’ın nesnelerinden birinin örneklemesi yoksa da diğerinin işlevselliği kısmen devam edebilir. Söz konusu nesnelerin varlığı birbirinden bağımsızdır. Arada “-nın kritik parçası” ilişkisi (… crucial part of …) vardır. Böyle bir association’ın çıktısı “aggregate” olarak adlandırılır. Aggregation tek yönlü (uni-directional) de olabilir çift yönlü (bi-directional) de olabilir.

## Dependency (Bağımlılık) – Dependency Injection (Bağımlılık Enjeksiyonu)

Zayıf tip association’dır. “Bağımsıza bağımlı” ilişkisi söz konusudur. Arada “-nın sağlayıcısı/istemcisi” (… supplier/client of …) ilişkisi vardır. Nesnelerin varlığının da varoluş sürecinin de birbiri ile alakası yoktur. Bağımsız olan supplier nesne, bağımlı olan client nesneye, mutlak bağımlılık söz konusu ise construction argümanı üzerinden, opsiyonel bağımlılık söz konusu ise setter üzerinden “enjekte” edilir.

## Directed Association (Yönlü Bağdaşım)

Zayıf tip association’dır. Daima tek yönlüdür (uni-directional). Arada “A, B’ye sahip olabilir” (… can have …) veya “A, B’yi yapabilir” (… can do …) ilişkisi vardır.

## İlaveten,

### Temporary Association (Geçici Bağdaşım) – Usage (Kullanım)

Başlıbaşına nesneler arası bağdaşım değildir. “Çağırma/kullanma” ilişkisi söz konusudur. Arada “-nın sunucusu/istemcisi” ilişkisi (… server/client of …) vardır. Client, kapsayıcı metodun gövdesi, server, kapsanan metodun imzası ve varsa return eldesidir.

**Not**: Inheritance, implementation gibi ilişkiler association kapsamında değildir.