---
title: "Nesne Yönelimli Programlamada (OOP) Takip Edilmesi Gereken 15 Önemli Prensip"
date: 2019-05-06 13:33:26 +0300
layout: post
permalink: /yazilim/tasarim/nesne-yonelimli-programlamada-takip-edilmesi-gereken-15-onemli-prensip
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Abstraction", "Auto-Wiring", "Bileştirme", "Composition", "Delegation", "Dependency Injection", "Dependency Inversion Principle", "DIC", "Doğru Tasarım", "Extending", "Factory", "Helper", "Inheritance", "Interface Segregation Principle", "Kalıtım", "Kapsülleme", "Liskov Substitution Principle", "Nesne Yönelimli Programlama", "Object-Oriented Programming", "OOP", "Open-Closed Principle", "Prensip", "Principle", "Private", "Protected", "Public", "Single Responsibility Principle", "SOLID", "Trait", "Utility" ]
published: true
---

## Sakın Kodu Tekrarlama – DRY (Don’t Repeat Yourself)

Yazdığın kodu projede başka bir noktaya kopyalama. İlaveten, projede senin yazacağın kodlamanın işlevini sunan başka bir kodlama var mı araştır. Bir metodu tekrarlama yerine, o metodu, eski sınıfından bir nesneye enjekte edebileceğin yeni bir sınıfta tanımlayarak composition (bileştirme) yolunu tercih et. Yoksa kalıtım için abstract class (soyut sınıf) kullan ve metodunu soyutlamaya çek. Eğer birden fazla soyut sınıfta aynı metodu kullanman gerektiyse (ki bu metodunun bir helper veya utility olabileceğine işaret edebilir) metodunu `trait`e çek.

Eğer tekrarlamaman gereken şey bir metod değil de değişken bir değerse kapsülledikten sonra erişim metodunu `final` olarak işaretle.

Eğer tekrarlamaman gereken şey bir sabit değerse sınıf sabiti olarak tanımla.

Lakin tekrarları bertaraf etmek adına yapacağın birleştirmelerde, benzer koda sahip olup, birbirinden farklı kaynak semantik ve birbirinden farklı hedef semantik ile alakalı metodlara dokunma. Eğer aynı kod ise metodlardan birindeki “tıpkısının aynısı” kısmı `helper` ya da `utility` olarak refactor et.

## Değişeni Kapsülle

Projende değişmeyecek tek şeyin `değişim` olduğunu unutma. Sınıf özelliği tanımlayacaksan önce `private` olarak işaretlemeyi düşün. Olmazsa `protected` olarak. Lakin hiçbir zaman `public` olarak değil. Belirlediğin erişim seviyesine göre de erişim metodları tanımla. Nesne oluşturmayı da `factory` kalıpları ile kapsülle.

Kapsülleme denildiğinde yapısal tasarım şablonlarından `Facade` aklına gelsin.

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

Bir arayüzdeki kabiliyetler (metotlar), bir istemcinin aradığından fazlası ise o arayüz bölünmelidir. Ya da bir arayüz birden fazla sorumluluk alanını kapsayacak şekilde tanımlanmışsa bölünmelidir. Ve eğer bölünmesi gerekiyorsa, arayüzü implemente eden sınıf tek sorumluluk prensibini ihlal etmiş olabilir. Böyle bir ihlale karşı da dikkatli olunmalıdır. Bir sunucu nesne asla sunması gerekmeyen kabiliyetleri implemente etmeye zorlanmamalıdır. Bu prensip bir bakıma `tek sorumluluk prensibi`ne hizmet eder.

## Sınıfa Bağlanma, Sınıfı Bağla – DIP (Dependency Inversion Principle)

Bağımlılığı tersine çevirmek için enjeksiyon önerilir. Bir sınıfa sıkı sıkıya bağlanmak yerine, harici sınıftan bir nesnenin, sınıfından bir nesneye enjekte edilerek o harici sınıfın, arayüzü üzerinden kullanılması sağlanır.

Bu prensibin güzelliklerinden biri de birim testlerde mock’lamayı aşırı kolaylaştırmasıdır.

DI framework’leri (veya DI container’ları), bağlanacak sınıfların nesnelerinin oluşturulmasını merkezileştirir ve kolayca bağlanmasını sağlar. Nasıl bağlama yapıldığını öğrenmek için `auto-wiring` kavramını inceleyiniz.

DI framework’lerinin güzelliklerinden bir diğeri de kodun bakımını kolaylaştırmasıdır. Çünkü istemci kod, bağlanacak sınıfın nesne oturumu ile ilgilenmez.

## Meseleleri Birbirinden Ayır (Separation of Concerns)

Meselelerin birbirinden ayrılması prensibi aslında tek sorumluluk prensibine çok yakın fakat daha soyut düzeyde. Temel olarak, bir program birbiri ile çakışmayan birçok kapsülleme içerecek şekilde tasarlanmalı ve bu kapsüllemeler birbirinin içini bilmemelidir.

MVC (model-view-controller) paradigmasını bilirsiniz. Meselelerin birbirinden ayrılması prensibine çok iyi bir örnektir. Veri (model), iş mantığı (controller) ve uygulama istemcisinin göreceği şeyler (view) meselelerini birbirinden ayırmak içindir.

Meslelerin ayrılması sayesinde meselelerden biri değiştirilecek ya da geliştirilecekse bu diğer meseleleri doğrudan etkilemez.

## Bileştirmeyi Kalıtımın Önünde Tut

Kodu tekrar kullanmanın iki ana yolu var: **Kalıtım (inheritance)** ve **bileştirme (composition)**.

Kalıtım, sınıfın `extend` edilmesi sonucu elde edilir. Hem public hem protected özellik ve metodlar erişilebilir olur bu yöntemle. Tabii ki bir çok dilde çok ebeveynli kalıtım (multi-inheritance) mümkün değil. Bu da esnekliği aşağı çeker.

Bileştirme ise bir sınıftan bir nesneye diğer bir harici sınıftan bir nesnenin enjekte edilmesi ile olur. Hem public olan özellik ve metodlardan başkasına erişilemez hem de sınırsız esneklik sağlanır.

Kodu tekrar kullanacaksan bunu kalıtım üzerinden yapmamaya çalış. Tekrar kullanacağın kodu barındıran sınıftan bir nesneyi enjekte et, kurtul.

## O An İhtiyacın Yoksa Kodlama – YAGNI (You Aren’t Gonna Need It)

YAGNI prensibi, gelecekte ihtiyaç duyulabilecek işlevselliğin asla kodlanmaması gerektiği düşüncesidir. Geliştirici böyle bir şeyi genelde kafasındaki konsepti tamamen koda yansıtmak için yapar. Fakat bu doğru bir yaklaşım değildir. Muhtemeldir ki o işlevselliğe ihtiyaç duyulmayacak ve bu da zaman ve emek kaybı demek. Zarar bununla da kalmaz, kodunuzun karmaşıklığını artırır. Bu da bakım maliyetinin yükselmesi demek.

Genellikle deneyimsiz geliştiriciler WET (write everything twice) kodu önlemek için mümkün olan en soyut ve genel kodu yazmaya çalışırlar. Yaklaşım olumlu ama aşırıya kaçılması olumsuzdur. Aşırı soyutlama, bakımı yapılamayan kod ile sonuçlanır. Ayrıca bazen asıl ihtiyaç duyulan şey soyutlama olmayabilir. Soyutlama düşünülen noktada önce arayüz uyarlamasının iş görüp görmeyeceğine bakılmalıdır. Kodlanması düşünülen şey araç veya yardımcı nitelikteki bir işlevsellik ise bu trait’ler ile de çözülebilir.

Bir işlevselliği iki kere kullanma ihtiyacı doğduğunda, ikinci defa yazılmayıp soyutlaştırma düşünülebilir. E tabi böyle bir ihtiyaç doğmadıysa DRY yaklaşımı yersiz demektir. “Bu tekrarlanmaya yatkın bir kod parçası olacak” deyip baştan önlem almaya çalışmak yanlış bir yaklaşım. Tabi 3rd party bir paket olarak kullanılabilecek bir projede kodlama yapılıyorsa mesele başka…

Soyutlama kalıtımla mümkün olur. Ve kalıtımdan önce bileştirme (composition) taktiği düşünülmelidir.

## Erken Optimizasyondan Kaçın – No Premature Optimization Principle

Bu prensip YAGNI prensibine benzer. Fakat işlevsellik ile değil performans ile ilgilidir. Bir uygulamanın akışındaki bir darboğaz, gerçekleşmesinin sonrasına kadar kesin olarak bilinemez. Elbette tahmin edilebilir. Ama gerçekleşmeden önce bu sadece tahmindir. Yani tahmin edildiği kadar dar bir darboğaz olmayabilir ya da karşılaşıldığı an için müdahale etmeye değmeyecek olabilir. Bu yüzden sadece tahmin edilen şey için erkence optimizasyona kalkışmak çoğu zaman vakit kaybıdır.

Varılmak istenen kilometre taşlarına ulaşıldıktan sonra eğer performans kaybı ile karşılaşılırsa gerçek darboğazları tesbit için profiling yapılmalıdır.

## Arayüzlük Yaz, Kullanmalık Değil

Arayüz için programlama yap. İmplementasyon için değil. Bu sayede yeni implementasyonlara da açık, daha esnek bir kodlama yapmış olursun. Bu yaklaşımla izolasyonu ve dolayısıyla SOLID’i de sağlarsın.

## İhale Et

Sorumlulukları olabildiğince böl ve başka ilişkili sınıflara ihale et. Bunu yaparken run-time performansını da gözardı etme.

## Refactor Refactor Refactor

Programın ilk hali, gelecekteki yeni bir özelliği engelleyecek şekilde yazılmış olabilir. Program zaman içinde karmaşıklaşmış ve söz konusu engel çok büyümüş de olabilir.

Kod tabanları sürekli gelişir. Tüm kod parçasını tekrar gözden geçirmek, yeniden yazmak, tasarımını yenilemek ve hatta komple mimariyi yenilemek dahi normaldir. Hatta sadece normal değil aynı zamanda sağlıklıdır.

Artık projenin ihtiyaçları daha iyi biliniyor ve ayrıca artık mimar ve geliştirici proje üzerinde çok daha fazla deneyim sahibi. Bu deneyim, yeni özellikler eklenmeden daha öncelikli olarak kod tabanını yeniden düzenlemek için kullanılmalı.

Proje yöneticileri de refactoring’i doğal bulup buna kaynak ayırmalılar.

## Akıllı Kod Değil, Temiz Kod

Mesele temiz kod yazmak ise egoyu kapının önünde bırakmak ve akıllı kod yazmayı unutmak lazım. Yani burada bir çözümden ziyade bir bilmece gibi görünen ve yalnızca geliştiricisinin ne kadar akıllı olduğunu göstermek için var olan bir kod parçası kastediliyor.

Bir satıra koca bir mantığı tıkıştırmak akıllı kodun bir örneği olarak verilebilir. Kullanılan dilin incik cıncık inceliklerinden yararlanarak garip ama acayip işlevsel ifadeler yazmak da bir örnek olarak verilebilir. Kodu review eden birinin “bi dakka bu ne yaa?” demesine sebep olabilecek herhangi ifade tarzı içeren kod satırları özetle…

İyi yazılımcılar ve okunabilir kod el ele yürür. Gerektiği noktada yorum da bırakılır. Hatta bu yorumlar geleceğe dönük de olabilir. Ama yazılan kod satırlarını açıklama niteliğindeki yorumlar kodun temiz yazılmadığına işarettir. Dilin dikte ettiği ya da genel kabul görmüş otoritelerin dikte ettiği kod stili yönergelerine uyulmalı. Ve asla bir dildeki genel kabul görmüş stil bir başka dilde yazılan koda bulaştırılmamalı. Dilin kendine has stilleri takip edilmeli.