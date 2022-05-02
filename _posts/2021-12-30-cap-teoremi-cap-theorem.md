---
title: "CAP Teoremi (CAP Theorem)"
date: 2021-12-30 21:12:44 +0300
layout: post
permalink: /yazilim/mimari/cap-teoremi-cap-theorem
categories: [ "Yazılım", "Mimari", "Veritabanı" ]
tags: [ ]
published: true
---

CAP Teoremi veya CAP Kanıtsavı. Dağıtık veritabanı yönetim sistemlerine (distributed database management system) ilişkin bir kanıtsavdır. Eric Brewer, bu kanıtsavını 1998 yılında öne sürmüştür. Sav, özetle, tutarlılık (consistency) garantisi, erişilebilirlik (availability) garantisi ve bölümleme hata payından (partitioning tolerance) aynı anda yalnızca ikisinin mümkün olabileceği, üçünün aynı anda mümkün olamayacağıdır.

![Consistency – Availability – Partitioning Tolerance](/assets/img/2021/12/CAP.png "Consistency – Availability – Partitioning Tolerance")

## Peki Tutarlılık, Erişilebilirlik ve Bölümleme Hata Payı Ne Demek?

### Tutarlılık (Consistency)

![CAP Consistency](/assets/img/2021/12/CAP-Consistency.png "CAP Consistency")
![CAP Inconsistency](/assets/img/2021/12/CAP-Inconsistency.png "CAP Inconsistency")

Cluster’daki bir node’a yazılan bilgi, cluster’daki node’ların hepsinden okunabiliyorsa ve bu rejim bozulduğunda hata alınıyorsa tutarlılık garanti demektir.

Tutarlılık, ACID transaction’ları mümkün kılar.

Burada kastedilen tutarlılık, güçlü sınıf tutarlılık çeşitlerinden herhangi biridir. Zayıf sınıftan olan bir tutarlılık çeşidi zaten toleranslıdır.

### Erişilebilirlik (Availability)

![CAP Availability](/assets/img/2021/12/CAP-Availability.png "CAP Availability")

Cluster’daki herhangi bir node’a herhangi bir anda yazılabiliyorsa ve herhangi bir node’dan herhangi bir anda okunabiliyorsa erişilebilirlik garanti demektir.

### Bölümleme Hata Payı (Partitioning Tolerance)

![CAP Partitioning Tolerance](/assets/img/2021/12/CAP-Partitioning-Tolerance.png "CAP Partitioning Tolerance")

Bölümler (partitions) arası senkronizasyon imkanı geçici olarak yitirildiğinde veya senkronizasyon gecikmesi meydana geldiğinde dahi bölümlerden herhangi birinin yetebilmesi demektir.

Bölünebilirlik, sonsuz ölçeklenebilirliği mümkün kılar.

## Üçten İkisi

### Tutarlılık ve Erişilebilirlik Garanti ise Bölümlemeye Hata Payı Verilemez

Tutarlılıktan taviz yoksa ve cluster’dan okuma da cluster’a yazma da askıya alınamayacaksa hiçbir aksamaya ve gecikmeye tolerans yok demektir. Dolayısıyla bölümlemede hata hoş görülemez.

### Erişilebilirlik Garanti ise ve Bölümlemede Tolerans Varsa Tutarlılık Garanti Değildir

Cluster’dan okumanın da cluster’a yazmanın da askıya alınması istenmiyorsa ve cluster içi senkronizasyonun aksaması hoş görülecekse veri tutarlılığı garanti edilemez.

### Tutarlılık Garanti ise ve Bölümlemede Tolerans Varsa Erişilebilirlik Garanti Değildir

Bölümlere ayrılmış veri veya `replika` lar söz konusu ise ve tam tutarlılık isteniyorsa cluster içi senkronizasyon aksar aksamaz cluster’a yazma da durdurulmalı yani yazma yönlü erişilebilirlik askıya alınmalıdır.

## Varsayılan Konfigürasyonlarıyla

### C&amp;A Sistemleri

- `RDBMS` ‘lerin çoğu
- Neo4j

### A&amp;P Sistemleri

- Couch DB
- Cassandra
- Amazon Dynamo DB
- ElasticSearch
- Apache Solr
- Riak

### C&amp;P Sistemleri

- Mongo DB
- Redis
- Apache HBase
- Memcache
- Big Table
- Yugabyte DB

Bunlar varsayılan konfigürasyonlara göre bir sınıflandırmadır. Konfigürasyona göre değişiklik mümkün olabilir.