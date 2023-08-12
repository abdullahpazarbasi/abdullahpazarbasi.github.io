---
title: "Fonksiyonel Programlama (Functional Programming) ve Nesne Yönelimli Programlama (Object-Oriented Programming) Arasındaki Farklar"
date: 2020-11-10 18:05:16 +0300
layout: post
permalink: /yazilim/tasarim/fonksiyonel-programlama-functional-programming-ve-nesne-yonelimli-programlama-object-oriented-programming-arasindaki-farklar
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Declarative", "Deklaratif", "FP", "Functional Programming", "İmperatif", "Imperative", "Object-Oriented Programming", "OOP", "Paradigm", "Paradigma", "Programlama Modelleri" ]
published: false
---

Öncelikle ikisinin de birer programlama paradigması olduğunu bilelim. Bunlar çok farklı ve hatta bazı noktalarda birbirine zıt iki yaklaşımdır. Uygulama alanına göre biri diğerinden daha iyi olabilir. Hibrit olarak da kullanılabilen yaklaşımlardır. Farklarının farkında olan, tercihini doğru yapar.

## Fonksiyonel Programlama (Functional Programming – FP) Nedir?

Fonksiyonel programlama, ***state*** değiştirmekten ve ***mutable*** veriden kaçınmayı hedefleyen bir programlama tarzıdır. Bilirsiniz, ***fonksiyon*** matematikte aynı girdi veya girdiler ile aynı çıktıyı veren bir ***bağıntı*** çeşididir. İşte fonksiyonel programlamada da tam olarak bu şart sağlanmaya çalışılır.

En basit haliyle, fonksiyonun ürettiği çıktı tamamen fonksiyonun argümanlarına dayanır. Arka planda bir sihir meydana gelmesi umulmaz. Böylece ***yan etki*** (***side effect***) denilen şey doğal olarak elimine edilmiş olur.

Mantıksal ve yapısal açıdan bakılırsa, fonksiyonel programlama, baş edilmesi gereken bir **geçmiş** bulunmadığı durumda üstündür. Özellikle sınırlamalar söz konusu olmadığı durumda veya bazı önceden tanımlı sınırlamalar söz konusu olduğu durumda gayet sorunsuz işler. Bu da ***state***‘in bir faktör olmadığı ve ***mutable*** verilerle alakanın çok az olduğu (veya hiç olmadığı) şartlarda gelişir.

Fonksiyonel programlama, ***yüksek verimlilik***, ***lazy evaluation***, ***nested functions***, ***bug’sız kod***, ***paralel programlama*** (paralel işleme ile karıştırılmasın) gibi avantajlar sunar. Basit bir dille, fonksiyonel programlama, uygulama için belirli bir görevi yürütmek üzre ifadeler içeren fonksiyonu geliştirmektir. Her küçük fonksiyon yalnızca ve yalnızca kendine düşeni yapar. Diğerlerine etkisi yoktur. Tanımlama anında da diğerleri ile hiçbir alakası olmaması lazımdır.

Bir fonksiyon, herhangi bir noktada kolayca çağrılabilir ve yeniden kullanılabilir. Aynı zamanda kodun yönetilmesine yardımcı olur ve aynı ifadelerin tekrar tekrar yazılmasına gerek kalmaz. Birlikte uyum içinde çalışan çok modüler ve temiz kod parçalarının yazılmasına imkan sağlar.

###### Fonksiyonel programlamayı temellendiren konseptler:

- HOF – High-Order Functions
- Pure Functions
- Recursion
- Strict &amp; Non-Strict Evaluation
- Type Systems
- Referential Transparency

## Nesne Yönelimli Programlama (Object-Oriented Programlama – OOP) Nedir?

Nesne yönelimli programlama, hakkında programlama yapılacak şeyleri (çoğunlukla gerçek dünyadaki şeyleri) **temsil** etmek için sanal nesnelerin kullanıldığı bir programlama paradigmasıdır. Nesne denilen şey temelde veri yapısıdır. Verisini, ***özellik***lerinde (***property***) veya ***öznitelik***lerinde (***attribute***) tutar. Ama nesne yalnızca veri yapısından ibaret değildir. Yetenek(ler)i de vardır. ***Metot*** adı verilen fonksiyonvari rutin blokları **bind** edilerek yeteneklendirilir. İşte nesneye verilen özellik veya öznitelikler yine nesneye bağlanan metotlar ile işlenir.

OOP’in temel özelliği, dışarıdan gelen veriyi kapsülleme yetisidir. ***Kapsülleme*** (***encapsulation***), nesnedeki veriyi tutan değişkenleri gizleyerek dış erişime kapatma yetisidir. Bu da OOP’i, istenmeyen kullanım, kazara kullanım veya sızdırma (leakage) gibi güvenlik hususlarında muhteşem yapar.

Şurası tartışmasız ki OOP, gerçek dünya senaryolarının modellenmesini çok çok kolaylaştıran bir programlama tarzıdır. Bu da, gereksinimlerden, müşterinin veya kullanıcının istediği gibi çalışan koda, iyi bir geçiş sağlar.

###### Nesne yönelimli programlamayı temellendiren konseptler:

- Abstraction
- Inheritance
- Encapsulation
- Polymorphism
- Association

## Farklar Neler?

### Tanımlama Hususundaki Fark:

Fonksiyonel programlama, fonksiyonların değer alması üzerinde durur.  
Nesne yönelimli programlama, nesne konsepti üzerine temellendirilmiştir.

### Veri Hususundaki Fark:

Fonksiyonel programlamada ***immutable*** veri kullanılır.  
Nesne yönelimli programlamada ***mutable*** veri de ***immutable*** veri de kullanılır.

### State Hususundaki Fark:

Fonksiyonel programlama ***stateless*** bir programlama modelidir.  
Nesne yönelimli programlama ise ***stateful*** bir programlama modelidir.

### Programlama Modeli Hususundaki Fark:

Fonksiyonel programlamada ***deklaratif*** (***declarative***) programlama modeli takip edilir.  
Nesne yönelimli programlamada ***imperatif*** (***imperative***) programlama modeli takip edilir.

### Paralel Programlama Hususundaki Fark:

Fonksiyonel programlama, paralel programlamayı destekler.  
Nesne yönelimli programlama, paralel programlamayı desteklemez.

### Manipülasyon Birimi Hususundaki Fark:

Fonksiyonel programlamada birincil manipülasyon birimi fonksiyondur.  
Nesne yönelimli programlamada birincil manipülasyon birimi nesnedir.

### Koşullu İfadeler Hususundaki Fark:

Fonksiyonel programlamada koşullu ifadeler desteklenmez.  
Nesne yönelimli programlamada koşullu ifadeler kullanılabilir.

### Ardışıllık Hususundaki Fark:

Fonksiyonel programlamada ifadelerin hangi sırayla çalıştırıldığı mesele olmaz.  
Nesne yönelimli programlamada ifadelerin hangi sırayla çalıştırıldığı genelde önemlidir.

### İterasyon Hususundaki Fark:

Fonksiyonel programlamada iteratif veri için ***recursion*** kullanılır.  
Nesne yönelimli programlamada iteratif veri için ***loop*** da ***recursion*** da kullanılabilir.

### Temel Yazılım Varlıkları Hususundaki Fark:

Fonksiyonel programlamada temel yazılım varlıkları fonksiyonlar ve değişkenlerdir.  
Nesne yönelimli programlamada temel yazılım varlıkları metotlar ve nesne özellikleridir.

### Soyutlama Desteği Hususundaki Fark:

Fonksiyonel programlamada veri üzerinde de davranış üzerinde de soyutlama **doğrudan** mümkündür.  
Nesne yönelimli programlamada **doğrudan** soyutlama ancak veri üzerinde mümkündür.

### Odak Noktası Hususundaki Fark:

Fonksiyonel programlamada ***deklaratif*** programlamanın bir gereği olarak ana odak noktası **ne** yapıyor olduğumuzdur.  
Nesne yönelimli programlamada ***imperatif*** programlamanın bir gereği olarak ana odak noktası **nasıl** yapıyor olduğumuzdur.

### Büyük Veri (Big-Data) İşleme Performansı Hususundaki Fark:

Fonksiyonel programlamada büyük veri işleme performansı nisbeten yüksektir.  
Nesne yönelimli programlamada büyük veri işleme performansı nisbeten düşüktür.

### Kullanım Alanı Hususundaki Fark:

Fonksiyonel programlama, nisbeten, ***az şey – çok operasyon*** söz konusu olduğunda tercih edilir.  
Nesne yönelimli programlama, nisbeten, ***çok şey – az operasyon*** söz konusu olduğunda tercih edilir.

## Fonksiyonel Programlamanın Dezavantajları Neler?

Koda işlevsel bir bakış açısından yaklaşmak gerçekten farklı bir zihniyet gerektirir. Nesne yönelimli terimlerle düşünmek gerçek hayatın bir taklidi ve soyutlaması olduğu için kolayken, fonksiyonel programlama tamamen düz veri manipülasyonu ile ilgilidir. Bir gerçek dünya senaryosunu düz veri ve sade operasyonlara dönüştürmek fazladan düşünmeyi gerektirebilir. Sistematik, nisbeten, gerçek dünyadakine daha uzak olacaktır.

## Nesne Yönelimli Programlamanın Dezavantajları Neler?

Nesne yönelimli programlamada, iş yaptıran kod bloklarına yeniden kullanılabilirlik kazandırmak zordur. Yeniden kullanılabilirlik sağlanmasının mümkün olmadığına katılmıyorum şahsen. Fakat dolaylı yöntemlerle halledilebildiği nettir. Global fonksiyonu metot ile wrap etmek, statik metodu metot ile wrap etmek, manuel metot bind etmek, soyut sınıf metodu kullanmak (tavsiye edilmez), ***trait*** sınıfı kullanmak bu dolaylı yöntemlerden birkaçıdır.

İşlevsellik hem hiyerarşik yapıda olabildiği hem de enkapsüle olabildiği için operasyonla baş etmek nisbeten daha karmaşıktır ve bununla birlikte verimlilik bir miktar düşük olur. Fonksiyonel programlamadaki işlevsellik ise genellikle **flat**‘tir. “Platformda engebe yoktur” da denebilir.

OOP’de temsil mühim olduğu için **büyük** mimarilerde temsil edilen nesnenin fazlalığı, uçuk karmaşaya yol açabilir.

## Sonuç Olarak

Nesne yönelimli diller, ***nesneler üzerinde sabit bir işlem kümeniz*** olduğunda iyidir ve kodunuz geliştikçe, öncelikle yeni şeyler eklersiniz. Bu, mevcut metotları implemente eden yeni sınıflar eklenerek gerçekleştirilebilir ve mevcut sınıflar yalnızlaştırılır.

Fonksiyonel diller, ***sabit şeyler kümesine*** sahip olduğunuzda iyidir ve kodunuz geliştikçe, öncelikle mevcut şeylere yeni operasyonlar eklersiniz. Bu, mevcut veri tipleri ile işleyen yeni fonksiyonlar eklenerek gerçekleştirilebilir ve mevcut fonksiyonlar yalnızlaştırılır.

Basitçe ifade etmek gerekirse, farklı çerçeveler içinde çalışılıyorsa OOP her şeyi paketlenmiş olarak tutmak ve istenmeyen harici kullanımlardan korumak için mükemmel bir yöntem iken fonksiyonel programlama, uygulama karmaşıklık ihtiva ediyorsa iyidir.

Nesne odaklı düşünme **back-end**‘de işe yarar. Çünkü çoğu zaman sonraki çerçeveye paslamak için bir şeyler inşa etmek, bilinmeyene göndermeden önce paketlemek, sarmalamak gerekir.

Fonksiyonel programlamada ve nesne yönelimli programlamada verileri manipüle etmek ve depolamak için farklı yöntemler kullanılır. Fonksiyonel programlamada, veriler nesnelerde saklanmaz, sadece fonksiyonlar oluşturularak dönüştürülebilir. Nesne yönelimli programlamada, veriler nesnelerde saklanır. Nesne yönelimli programlama yaygın olarak kullanılır ve aynı zamanda başarılıdır da.

Nesne yönelimli programlamada, kalıtım düzeylerini artırırken nesneleri korumak gerçekten zordur. Bu, aynı zamanda kapsülleme ilkesini de bozar ve hatta tamamen modüler olmaktan çıkarır. Fonksiyonel programlamada nesne kullanıldığında ise, fonksiyonları çalıştırmak için her zaman yeni bir nesne gerekir ve uygulamayı çalıştırmak çok fazla belleğe mal olabilir.

Paradigmaları, yaklaşımları, teknikleri, yöntemleri kullanım alanına göre seçmek lazım. Seçeneklerinizi biliyorsanız ne yaptığınızı bilmenize çok yakınsınız demektir.