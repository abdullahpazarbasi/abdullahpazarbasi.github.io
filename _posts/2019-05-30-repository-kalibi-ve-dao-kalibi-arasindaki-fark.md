---
title: "Repository Kalıbı ve DAO Kalıbı Arasındaki Fark"
date: 2019-05-30 11:22:09 +0300
layout: post
permalink: /yazilim/tasarim/tasarim-kaliplari/repository-kalibi-ve-dao-kalibi-arasindaki-fark
categories: [ "Yazılım", "Tasarım", "Tasarım Kalıpları" ]
tags: [ "DAO", "Data Access Object", "Data Transfer Object", "DTO", "Repository" ]
published: false
---

Veri merkezli birçok uygulamada Repository (ki o uygulamada muhtemelen bu, “entity repository”dir) ile DAO (Data Access Object) aynı işi yapar ve birbirinin yerine oturabilir. Fakat fark karmaşık business davranışa sahip uygulamalarda ortaya çıkar.

DAO, saklayıcı katmana daha yakındır. Repository’e göre alt seviyededir.

Repository ise Business/domain katmanına daha yakındır. DAO’ya göre üst seviyededir.

DAO, veri merkezlidir.

Repository ise model merkezlidir.

DAO, tabloyu veya view’ı tamamen çevreler. Erişim tarzı birebirdir.

Repository ise bir şeyle birebir örtüşmek zorunda değildir. Data aggregation ve delegation ile sorumludur. Hatta bunun için DAO da kullanabilir.

DAO, çirkin sorguları gizleyerek tablo satırının nesne halini (entity) ithal edip saklar ya da tablo satırının nesne halini ihraç eder.

Repository de, eğer business basit ise, sadece bunu yapar. Fakat repository, asıl, model doldurmakla veya modeli saklamayı delege etmekle görevlidir.

DAO, DBAL ile entity arasındaki etkileşimi kanalize eder.

Repository ise business/domain model ile entity, entity ile DTO, DTO ile business/domain model arasında köprü olur.

DAO’nun amacı, veri erişimini soyutlamaktır.

Repository’nin amacı ise business modellerini veya domain modellerini veritabanı erişim zımbırtılarından yalıtmaktır.