---
id: 749
title: 'SOA Nedir, Ne Değildir?'
date: '2019-09-03T23:12:51+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/392-revision-v1'
permalink: '/?p=749'
---

## Tanım

**Servis Yönelimli Mimari (Service-Oriented Architecture)**, **servis (service)** adlı **gevşek bağlanmış (loosely coupled)**, **iri taneli (coarse-grained)** ve **özerk (autonomous)** bileşenlerin birbiri ile etkileşimine dayanan sistemler inşa etmeye yarayan bir mimari tarzdır. Her servis, **uç nokta (end-point)** denen keşfedilebilir adreslerden geçebilen **mesajlardan (messages)** oluşan **sözleşmeler (contracts)** yoluyla süreç ve davranış öne sürer. Bir servisin davranışı, servisin kendisi dışından olan **ilkelerle (policies)** kontrol edilir. Sözleşmeler ve mesajlar **servis tüketicileri (service consumers)** denen harici bileşenler tarafından kullanılır.

<div class="wp-block-image image-background-white"><figure class="aligncenter is-resized">![SOA](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/03/SOA.png?resize=688%2C516&ssl=1)<figcaption>SOA</figcaption></figure></div>## SOA Ne Değildir?

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