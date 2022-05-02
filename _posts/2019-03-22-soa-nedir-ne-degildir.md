---
title: "SOA Nedir, Ne Değildir?"
date: 2019-03-22 15:55:57 +0300
layout: post
permalink: /yazilim/mimari/soa-nedir-ne-degildir
categories: [ "Yazılım", "Mimari" ]
tags: [ "Contract", "End-point", "Mesaj", "Otonom", "Policy", "Service-Oriented", "Servis", "Yazılım Mimarisi" ]
published: true
---

## Tanım

**Servis Yönelimli Mimari (Service-Oriented Architecture)**, **servis (service)** adlı **gevşek bağlanmış (loosely coupled)**, **iri taneli (coarse-grained)** ve **özerk (autonomous)** bileşenlerin birbiri ile etkileşimine dayanan sistemler inşa etmeye yarayan bir mimari tarzdır. Her servis, **uç nokta (end-point)** denen keşfedilebilir adreslerden geçebilen **mesajlardan (messages)** oluşan **sözleşmeler (contracts)** yoluyla süreç ve davranış öne sürer. Bir servisin davranışı, servisin kendisi dışından olan **ilkelerle (policies)** kontrol edilir. Sözleşmeler ve mesajlar **servis tüketicileri (service consumers)** denen harici bileşenler tarafından kullanılır.

![SOA](/assets/img/2019/03/SOA.png "SOA")

## SOA Ne Değildir?

- **Yanlış**: SOA, bilgi teknolojileri takımı ile iş geliştirme takımını hizaya sokma yollarından biridir.  
    **Doğrusu**: Hayır, SOA takımları hizaya sokmaya yarayan bir yol değildir. Doğru uyarlanan SOA’ın gevşek bağlaşıklığı sağlaması sebebiyle alt sistemlere çeviklik kazandırarak takımları hizaya sokması yalnızca sonuçlarından biridir.
- **Yanlış**: SOA, web arayüzü olan bir uygulamadır.  
    **Doğrusu**: SOA, bir uygulamayı servis bazlı olarak inşa ederken yapılan tercihlerin bütünüdür ve web arayüzünün bulunması da zorunlu değildir.
- **Yanlış**: SOA, SOAP, REST, HTTP gibi bazı teknolojilerin bir araya getirilmesidir.  
    **Doğrusu**: SOA teknolojilerden bağımsızdır ve bir mimari yaklaşımdır. Tarzlar arasından tercih edilebilecek bir tarzdır.
- **Yanlış**: SOA bir yeniden kullanım stratejisidir.  
    **Doğrusu**: Doğru uyarlanan SOA yeniden kullanım sağlar fakat bu mimarinin sonuçlarından yalnızca biridir.
- **Yanlış**: SOA satışa hazır bir çözümdür.  
    **Doğrusu**: SOA bir ürün değildir. Dağıtık sistemleri imar etmek için kullanılan bir yoldur.