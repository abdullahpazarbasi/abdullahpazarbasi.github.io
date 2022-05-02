---
id: 581
title: 'Nesne Yönelimli Programlamada (OOP) Takip Edilmesi Gereken 10 Önemli Prensip'
date: '2019-06-27T09:36:06+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/478-revision-v1'
permalink: '/?p=581'
---

## Sakın Kodu Tekrarlama – DRY (Don’t Repeat Yourself)

Yazdığın kodu projede başka bir noktaya kopyalama. İlaveten, projede senin yazacağın kodlamanın işlevini sunan başka bir kodlama var mı araştır. Bir metodu tekrarlama yerine, o metodu, eski sınıfından bir nesneye enjekte edebileceğin yeni bir sınıfta tanımlayarak composition (bileştirme) yolunu tercih et. Yoksa kalıtım için abstract class (soyut sınıf) kullan ve metodunu soyutlamaya çek. Eğer birden fazla soyut sınıfta aynı metodu kullanman gerektiyse (ki bu metodunun bir helper veya utility olabileceğine işaret edebilir) metodunu `trait`e çek.

Eğer tekrarlamaman gereken şey bir metod değil de değişken bir değerse kapsülledikten sonra erişim metodunu `final` olarak işaretle.

Eğer tekrarlamaman gereken şey bir sabit değerse sınıf sabiti olarak tanımla.

Lakin tekrarları bertaraf etmek adına yapacağın birleştirmelerde, benzer koda sahip olup, birbirinden farklı kaynak semantik ve birbirinden farklı hedef semantik ile alakalı metodlara dokunma. Eğer aynı kod ise metodlardan birindeki “tıpkısının aynısı” kısmı `helper` ya da `utility` olarak refactor et.

## Değişeni Kapsülle

Projende değişmeyecek tek şeyin `değişim` olduğunu unutma. Sınıf özelliği tanımlayacaksan önce `private` olarak işaretlemeyi düşün. Olmazsa `protected` olarak. Lakin hiçbir zaman `public` olarak değil. Belirlediğin erişim seviyesine göre de erişim metodları tanımla. Nesne oluşturmayı da `factory` kalıpları ile kapsülle.

Bu yaklaşımın dev faydalarını birim testlerde ve kod bakımında hissedeceksin.

## Tek Sorumluluk Yükle – SRP (Single Responsibility Principle)

Bir sınıfın değiştirilmesi için birden fazla sebep **olmamalı**. Bir başka ifade ile bir sınıf daima ve yalnızca bir işlevsellik kotarmalı. `Sınıfın sorumluluğu` ve `metodun sorumluluğu` geliştirme esnasında sürekli sorgulanmalı.

Bu prensibin uygulandığı yerde elde edilebilecek en büyük kazanım, yazılımın bir bileşeni ile kod arasındaki bağlaşıklığın düşük kalmasıdır.

## Gelişime Açık Ama Değişime Kapalı – OCP (Open-Closed Principle)

Sınıflar ve metodlar `extend` edilmeye açık (yani gelişime açık) ama modifikasyona kapalı (yani değişime kapalı) olmalı.

Bu prensibin uygulandığı yerde elde edilecek en büyük kazanım, denenmiş ve test edilmiş koda dokunulmasına gerek kalmamış olmasıdır. Bu sayede akış kırılmamış olur.

## Alt Sınıflar Üst Sınıflarının Yerine Geçebilmeli – LSP (Liskov Substitution Principle)

Bir üst sınıftan bir nesneyi kullanan bir `istemci kod`, o üst sınıftan türemiş bir alt sınıftan bir nesneyi de hiçbir sorun yaşamadan tüm işlevselliği ile kullanabilmeli.

Bir üst sınıf, alt sınıfından daha fazla işlevsellik barındırıyorsa LSP ihlal edilmiş demektir. Çünkü o alt sınıftan bir nesne o üst sınıftan bir nesnenin yerine geçtiğinde, o alt sınıftan nesne bazı özellikleri desteklemeyecektir.

## Arayüzün Bütününü Kullanmayacaksan Böl – ISP (Interface Segregation Principle)

Bir arayüzdeki metodlar, bir istemcinin aradığından fazlası ise o arayüz bölünmelidir. Ve eğer bölünmesi gerekiyorsa, arayüzü implemente eden sınıf tek sorumluluk prensibini ihlal etmiş olabilir. Böyle bir ihlale karşı da tetkik lazım demektir.

## Sınıfa Bağlanma, Sınıfı Bağla – DIP (Dependency Inversion Principle)

Bağımlılığı tersine çevirmek için enjeksiyon önerilir. Bir sınıfa sıkı sıkıya bağlanmak yerine, harici sınıftan bir nesnenin, sınıfından bir nesneye enjekte edilerek o harici sınıfın, arayüzü üzerinden kullanılması sağlanır.

Bu prensibin güzelliklerinden biri de birim testlerde mock’lamayı aşırı kolaylaştırmasıdır.

DI framework’leri (veya DI container’ları), bağlanacak sınıfların nesnelerinin oluşturulmasını merkezileştirir ve kolayca bağlanmasını sağlar. Nasıl bağlama yapıldığını öğrenmek için `auto-wiring` kavramını inceleyiniz.

DI framework’lerinin güzelliklerinden bir diğeri de kodun bakımını kolaylaştırmasıdır. Çünkü istemci kod, bağlanacak sınıfın nesne oturumu ile ilgilenmez.

## Bileştirmeyi Kalıtımın Önünde Tut

Kodu tekrar kullanmanın iki ana yolu var: **Kalıtım (inheritance)** ve **bileştirme (composition)**.

Kalıtım, sınıfın `extend` edilmesi sonucu elde edilir. Hem public hem protected özellik ve metodlar erişilebilir olur bu yöntemle. Tabii ki bir çok dilde çok ebeveynli kalıtım (multi-inheritance) mümkün değil. Bu da esnekliği aşağı çeker.

Bileştirme ise bir sınıftan bir nesneye diğer bir harici sınıftan bir nesnenin enjekte edilmesi ile olur. Hem public olan özellik ve metodlardan başkasına erişilemez hem de sınırsız esneklik sağlanır.

Kodu tekrar kullanacaksan bunu kalıtım üzerinden yapmamaya çalış. Tekrar kullanacağın kodu barındıran sınıftan bir nesneyi enjekte et, kurtul.

## Arayüzlük Yaz, Kullanmalık Değil

Arayüz için programlama yap. İmplementasyon için değil. Bu sayede yeni implementasyonlara da açık, daha esnek bir kodlama yapmış olursun. Bu yaklaşımla izolasyonu ve dolayısıyla SOLID’i de sağlarsın.

## İhale Et

Sorumlulukları olabildiğince böl ve başka ilişkili sınıflara ihale et. Bunu yaparken run-time performansını da gözardı etme.