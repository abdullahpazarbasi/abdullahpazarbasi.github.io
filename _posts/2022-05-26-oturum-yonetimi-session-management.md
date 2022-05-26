---
title: "Oturum Yönetimi (Session Management)"
date: 2022-05-26 08:15:58 +0300
layout: post
permalink: /yazilim/tasarim/oturum-yonetimi-session-management
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Mimari", "Oturum", "Session", "Sticky", "Affinity", "Load Balancer", "Yük Dengeleyici", "Ölçeklenebilirlik", "Scalability" ]
published: true
---

# Oturum Yönetimi (Session Management)

## Oturum (Session)

İstemciye veya istemciyi kullanana has bir takım `on-demand` ve kalıcı olmayan verinin <u>geçici</u> olarak saklanması gerekir. Bu tür verilere örnek olarak kimliklendirme jetonları, yetkilendirme anahtarları, kullanıcının aldığı son aksiyonlar listesi, alışveriş sepeti, kişiselleştirmeye yarayan bilgiler sayılabilir. Her tekil istemcinin sunucu <u>tarafında</u> oluşturabildiği kendine has `state` oturumdur (session). Bu alana bir anahtar üzerinden erişilir. İstemci bu anahtarı kaybetse oturumuna erişemeyeceğinden dolayı oturumunu da kaybetmiş olur.

## Yerel Oturum Depolaması ile Yapışkan Oturumlar (Sticky Sessions with Local Session Storage)

> sticky session = session affinity

Load balancer daima kullanıcının yapıştığı node 'u seçer ve bir kullanıcı daima (teoride) aynı node ile muhatap olacağı için o node 'un local 'inde oturum verisi saklanabilir.

### Avantajları

- Düşük kaynak maliyeti. İlgili node, state 'i yerelde sakladığından dolayı ağ gecikmelerinden azadedir.

### Dezavantajları

- Hata durumunda kayıp. İlgili node düştüğünde veya düşürüldüğünde bu node 'dan hizmet alan istemcilerin state 'leri yok olacağından dolayı oturumlarını kaybederler.
- Scalability 'de verimsizlik. Ölçeklenebilirlik eksenlerinde ilerleme meydana gelse istemci, node 'a yapıştığından dolayı ölçeklemenin getireceği rahatlamadan faydalanamaz, üstüne üstlük sunucu tarafı da yapışmış istemcilerden dolayı ölçeklemeden verim alamayabilir. Ölçeklenebilirlik eksenlerinde gerileme meydana gelse node 'ların bir kısmı düşürüleceğinden dolayı oturum state 'lerinin göç ettirilmemesi durumunda istemcilerin bir kısmı oturumlarını kaybederler.

## Dağıtık Oturum Yönetimi (Distributed Session Management)

İstemci oturum state 'lerinin, paylaşılan veri ambarı veya ambarlarında saklandığı yöntemdir. Genellikle `in-memory` `Key-Value DB` tercih edilir.

### Avantajları

- Scalability 'de verimli. Asgari ve azami node sayısından başka hesaplanması gereken bir şey kalmaz.
- State 'lerin saklandığı DB replikalı ise hata durumunda oturum kaybı yaşanmaz.

### Dezavantajları

- State 'i yazma ve okuma maliyeti. Veritabanı sunucusundaki gecikmeler ve ağdaki gecikmeler.

## Kaynaklar

> **Kaynak 1**: <https://aws.amazon.com/tr/caching/session-management/>

> **Kaynak 2**: <https://redis.com/solutions/use-cases/session-management/>