---
id: 1449
title: 'Test Güdümlü Geliştirme (Test-Driven Development) Nedir?'
date: '2021-12-23T08:13:30+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'https://www.abdullahpazarbasi.com/?p=1449'
permalink: '/?p=1449'
---

TDD olarak kısaltılır. Extreme programming’in bir parçası olarak icad edilen bir yaklaşımdır. “Test-first” (önce test) ilkesi üzerinden disiplin haline getirilmiştir.

TDD yaklaşımı ana hatlarıyla 5 aşamadan ibarettir:

1. Düşün ve test-case oluştur.
2. Birimi geliştirmeden önce programcı testinin başarısız olmasını sağla.
3. Birimi geliştir ve programcı testini başarılı hale getir.
4. Önceden oluşturulmuşlarla birlikte tüm programcı testlerinin başarılı olmasını sağla.
5. Son geliştirdiğin ile birlikte tüm birimleri tarayarak gerekli noktalarda refactoring yap.

Geliştirmeyi yapıp sonradan testini yapmak TDD değildir. TDD’de ilk sırada, fail veren bir test birimi yazmak vardır. Sonradan yazılan programcı testleri de çok faydalıdır fakat bu TDD’nin konusu değildir.

## Peki TDD Ne Tür Faydalar Getirir?

Çoğunlukla, programcı testinin (ya da birim testinin) uygulama geliştirme sürecini uzatacağı düşünülür. Bu yanlış bir kanıdır. Programcı testlerinin tasarıma başlarken yazılması tasarımı kolaylaştırır. Kolay olan şey genelde kısadır.

Projedeki iş mantığı, koda tam olarak yansır. Özellikler, yetenekler, kısıtlar, sınırlar programcı testleri aracılığı ile code-base’e çerçeve olarak yansıtılır. Çerçevenin dışına çıkma söz konusu olduğunda kimse bağırmasa, birim testi bağıracaktır.

Sonradan ortaya çıkacak bug’lar, olumlu birim testleri yanında olumsuz birim testleri sayesinde önceden farkedilir. Bu da her tür zarardan erken dönmek demektir. Ayrıca bu yine zamandan da tasarruf demektir.

İşlevselliğin birinde yapılan değişiklik, diğer işlevsellik(ler)in davranışını bozsa bunun tespitinin çok kısa sürede olması muhtemeldir. Bunun için genelde birimler arası bağlaşıklığın test-case’de tamamen kaldırılmamış olması yeterlidir.

Projenin bakımı (maintenance) esnasında bug avına çıkıldığında, programcı testleri çalıştırıldığı an o bug için çember bir hamlede dramatik olarak daralmış olur.

TDD, top-down yaklaşımını getirir. Yani tasarımcıyı dıştan içe tasarıma, yani en üst seviye katmandan en alt seviye katmana doğru bir tasarıma çeker. Nesne yönelimli yaklaşım ise geliştiriciyi bottom-up yaklaşımına iter. Bottom-up yaklaşımı “önce nesneleri belirle” demektir. Nesne yönelimli yaklaşım, önce alt katmanlar ile uğraşmaya iter. Oysa nesne yönelimli programlamada top-down ve bottom-up yaklaşımları beraber kullanılabilir, kullanılmalıdır. Bir yandan interface’ler, contract’lar şekillendirilirken bir yandan test-case’ler ortaya çıkarılabilir. Mimarinin her katmanında aynı noktaya hem 0 derece hem 180 derece açıdan bakılarak TDD ve OOP cem edilebilir.

<section class="wp-block-uagb-section uagb-section__wrap uagb-section__background-undefined uagb-block-e90a5b21"><div class="uagb-section__overlay"></div><div class="uagb-section__inner-wrap">#### Birim (Unit) Ne Demek?

Birim, bir projenin en küçük modülüne denir. Projeye göre, en küçük modül; fonksiyon, metod, sınıf veya bir uygulama olabilir. Amaç, projeyi olabilecek en küçük boyutlu birimlere ayırmak, bağımlılıklardan mümkün olduğunca kurtarmak ve test etmek. Tüm birimler doğru çalışıyorsa “tüm proje doğru çalışıyor demektir” yargısına varılır.

</div></section>Birim testi, her bir işlevsellik için yazılmalıdır. Böyle yapıldığında işlevselliklerin ve sorumlulukların doğru yerden bölünmüş olması muhtemeldir. Böylece uygulama da Separation of Concerns ve Single Responsibility prensiplerine uygun birimlere sahip hale gelir.

Gerçekten her bir işlevsellik için test yazılıyorsa fazladan karmaşıklık oluşturabilecek bir kodlama yapılamaz. Çünkü üst test-case bellidir, genişletilemez. Bu, KISS (Keep It Simple Stupid) prensibini hayata geçirir.

Birim testi, birimi, diğer birimlerden alabildiğine daha az bağımlı olarak çalıştırmayı hedefler. Bu da gevşek bağlaşıklık (loose coupling) demektir. Birim testi, birimi ne kadar yalnız bırakabiliyorsa bağlaşıklık da o kadar azalır.

Birim testleri, kullanılan CI (Continuous Integration) ile entegre edildiğinde SUT (System Under Test) prensibi doğrultusunda, sürekli test edilen bir uygulama elde edilmiş olur.

Gönderilen her commit ile birim testlerin koşturulması commit’in güvenilirliğini tesciller.

TDD’nin hakim olduğu bir projede refactoring’den korkulmaz. Çünkü bir değişikliğin nereleri bozacağı çok rahat tahmin edilebilir. İş mantığı çerçevesi projedeki test-case’lere tamamen yansıtılmışsa değişikliği yapıp tüm testleri yeniden çalıştırmak yeterlidir.

<div class="wp-block-image"><figure class="aligncenter">![test-driven-development](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/07/test-driven-development.png?resize=688%2C540&ssl=1)<figcaption>Test Güdümlü Geliştirme</figcaption></figure></div>## O Halde Programcı Testleri (ya da Birim Testler) Nasıl Yazılmalı?

Programcı testleri,

- programcının zamanını harcamasını en aza indirmeli,
- güvenilir biçimde çalışmalı,
- deploy edilebilirliği önceden haber verebilmeli,
- davranış değişikliklerine sessiz kalmamalı,
- yapısal değişikliklere sessiz kalmalı,
- yazması ucuz olmalı,
- okuması ucuz olmalı,
- değiştirmesi ucuz olmalı.

## Özetle

TDD, tasarımı basitçe yapmamızı, basit ve yalın kodlama yapmamızı, düzenli refactoring yapmamızın kolaylaşmasını ve gevşek bağlaşıklığı sağlayan bir yaklaşımdır.