---
title: "Bağlaşıklık (Coupling) ve Yapışıklık (Cohesion) Nedir?"
date: 2019-04-01 17:33:45 +0300
layout: post
permalink: /yazilim/tasarim/baglasiklik-coupling-ve-yapisiklik-cohesion-nedir
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Akış", "Alt Sınıf Bağlaşıklığı", "Ardışıl Yapışıklık", "Bağlaşıklık", "Bağlaşım", "Cohesion", "Coincidental Cohesion", "Common Coupling", "Communicational Cohesion", "Content Coupling", "Control Coupling", "Coupling", "Data Coupling", "Data-Structured Coupling", "Functional Cohesion", "Genellerle Bağlaşıklık", "High Cohesion", "İçerik Bağlaşıklığı", "İletişimsel Yapışıklık", "İşlevsel Yapışıklık", "Kontrol Bağlaşıklığı", "Logical Cohesion", "Loosely Coupled", "Low Cohesion", "Mantıksal Yapışıklık", "Modül", "Procedural Cohesion", "Prosedürel Yapışıklık", "Sequential Cohesion", "Single Responsibility Principle", "Stamp Coupling", "Subclass Coupling", "Temporal Cohesion", "Temporal Coupling", "Tesadüfi Yapışıklık", "Tightly Coupled", "Uyum", "Veri Yapılarıyla Bağlaşıklık", "Veriyle Bağlaşıklık", "Yapışıklık", "Zamansal Bağlaşıklık", "Zamansal Yapışıklık" ]
published: false
---

Yazılım tasarımının bana göre en temel ve projelerin büyüklüğü ile doğru orantılı olarak en fazla baş ağrıtan meselesi… Yine de genellikle problemlerin ana kaynağı olduğu pek az yazılım geliştiricisi tarafından farkedilir. Güçlü yapışıklık ve gevşek bağlaşıklık elde etmek için modüler programlama gerekir.

Modüler programlama, her programcının dilinde pelesenktir ama çok az programcı bunu doğru biçimde uygular. Modüler programlama, fonksiyonel tasarımı getirir.

> [Fonksiyonel Tasarım Şartnamesi](https://scottmanning.com/content/functional-design-specification/)

## Modülerizasyon (Modularization) Nedir?

Yazılım sistemini bağımsız çalışabilen birden fazla modüle bölme işlemidir. Tabii ki önce yekpare programlayıp sonra modüllere bölmek şart değil. Tecrübeli bir programcı, inşanın başından itibaren modüler programlama yaparak elde edilebilmesi mümkün olan optimal modülleri elde edebilir. Prosedürel programlamada `modül` deyince akıllara gelmesi gereken şey `rutin`, `fonksiyon gövdesi` veya `metot gövdesi` dir. Nesne yönelimli programlamada ise `encapsulation` ilkesi gereği sınıflar/nesneler de modüldür.

Modülerizasyonun veya modüler programlamanın bazı avantajlarını sıralayacak olursak;

- sistemin kolay anlaşılabilir olması
- sistemin bakımı ve ayakta tutulmasının kolaylığı
- yeniden kullanılabilirlik (reusability)

## Bağlaşıklık (Coupling) Nedir?

Bağlaşıklık – kısaca – modüller arası alaka yoğunluğudur.

### Prosedürel Programlamada Bağlaşıklık

Her programlama paradigmasının uygulamasında tek adımdan ibaret bile olsa en az bir prosedür barınır. Bundan dolayı prosedürel programlamadaki bağlaşıklık çeşitleri aslında genel bağlaşıklık çeşitleridir.

#### İçerik Bağlaşıklığı (Content Coupling) - Çok Sıkı -

Bir rutin, bir alt rutinin kod satırlarını aynen kullanıyorsa içerik bağlaşıklığı var demektir ve bu en sıkı bağlaşıklıktır. Mesela `goto label` kullanımı böyle bir bağlaşıklık oluşturur.

#### Genellerle Bağlaşıklık (Commons Coupling)

Modüllerin global scope 'daki (veya dil destekliyorsa ortak scope 'daki) veriye bağımlı kılınmasıyla meydana gelen bağlaşıklıktır. Herhangi geneller (globals) verisi değişikliğinde, görülemeyen yan etkiler meydana gelebilir.

#### Haricilerle Bağlaşıklık (External Coupling)

Modüllerin başka bir yazılım sistemindeki modüllere veya donanım varlıklarına bağımlılığı ile meydana gelen bağlaşıklıktır. Çoğu zaman kaçınılmaz olan bu bağlaşıklık çeşidinden daha fazla soyutlama ile uzaklaşılabilir.

#### Kontrol Bağlaşıklığı (Control Coupling)

Bir modülün, diğer bir modülün akışını, pasladığı "veri" ile kontrol etmesi sonucu meydana gelmiş bağlaşıklıktır. Eğer davranışı değiştirme amaçlı paslanan varlık, veri değil de işlev ise, durum o kadar kötü olmayabilir.

#### Veri Yapılarıyla Bağlaşıklık (Stamp Coupling or Data-Structured Coupling)

Bir modülün, diğeri ile, kompozit veri yapısı (ki bu genelde nesne olarak anılır) **paylaşması** ve paylaşımı alan tarafın bu veri yapısının tamamıyla değil bir kısmı ile ilgili olması sonucu meydana gelmiş bağlaşıklıktır. Pası alan modülün, bu kompozit veri yapısındaki, alakadar olmadığı kısma serseri veri (tramp data) denir. Alıcı modülün işine yaramadığı halde alıcı modül buna zoraki bağımlı kılınmak istenmiştir. Verimlilik faktöründen dolayı ne yaptığını bilen programlayıcılar tarafından **bazı durumlarda** tercih edilebilir, ama ne yaptığını tam olarak bilmeyen veya tembel programlayıcılar tarafından tercih edilmemesi gereken bir veri paslama biçimidir.

Diğer taraftan, eğer paslanan şey, veri yapısının bir kopyası değil de referansı veya işaretçisi (pointer 'ı) ise vaziyet, genellerle bağlaşıklık ile benzerlik gösterir. Bu tür bağlaşıklıkta sakınca, alınan veri yapısının tamamının okunmaya açık olması ile değil, tamamında veya bir kısmında değişiklik yapılmasına açık olması ile ortaya çıkar. Mesela, paslanan varlığın kısmen `mutable` bir `nesne`nin bir `referans`ı olduğunu düşünelim. Bu durumda aynı referansı alan diğer modüller, söz konusu referansı alan modüle bağımlı kılınmış olur.

Fakat, eğer paslanan varlık **ebediyyen** ve tamamen `immutable` bir nesnenin bir referansı olsa vaziyet, serseri veriye bağımlılık arz eder. Bu durumda unutulmamalıdır ki her halükarda paslanan varlığın yapısındaki `değişebilirlik` (`mutability`) niteliğinin değişmesi riski bir faktör halini almış demektir.

#### Veriyle Bağlaşıklık (Data Coupling) - Çok Gevşek -

Bir modülün, diğeri ile veri kopyası (veri referansı ve veri işaretçisi değil) paylaşması sonucu meydana gelmiş bağlaşıklıktır. Tabii ki burada bahsi geçen veri kopyası, parçalanamayan veri (parçalansa anlamını yitiren) olma özelliğine sahiptir ve serseri veri (tramp data) barındırmaz.

### Nesne Yönelimli Programlamada Bağlaşıklık

Nesne yönelimli programlamada, genel bağlaşıklık çeşitlerine ek olarak şunlar var:

#### Alt Sınıf Bağlaşıklığı (Subclass Coupling)

Bir sınıfın (sub-class) varsa üst sınıfına (parent class) olan -ve olabildiğince gevşek olması gereken- bağımlılığı veya bir üst sınıfın alt sınıfına olan -ama olmaması gereken- bağımlılığıdır. Liskov Substitution Prensibi de bu bağlaşıklık ile alakalıdır.

#### Zamansal Bağlaşıklık (Temporal Coupling)

Nesne yönelimli programlamada bir sınıfın iki veya daha fazla metodu arasında, bu metotlardan birinin diğerinden önce çağırılmasını gerektiren örtülü bir ilişkisi bulunması durumunda ortaya çıkar. Bu şart, öğeleri zamansal boyutta sıkıca bağlaştırır. Mesela, ardışıl metot çağırmalarında hangisinin önce çağırılacağı önemliyse, söz konusu metotlar arasında zamansal bağlaşıklık vardır.

### Programlama Paradigmalarından Bağımsız Olan Bağlaşıklık Çeşitleri

#### Dinamik Bağlaşıklık (Dynamic Coupling)

Herhangi bir modülde kullanılan arayüzün aynı olduğu durumlarda, run-time esnasında bağımlılığın dinamik olarak değişebildiği noktadaki bağlaşıklıktır.

#### Anlamsal Bağlaşıklık (Semantic Coupling)

Yazılım varlıkları (software entities) arasındaki yakınlık veya benzerlikleri konu eden kavramsal bağlaşıklık çeşididir.

#### Mantıksal Bağlaşıklık (Logical Coupling, Evolutionary Coupling or Change Coupling)

Yazılımın sürüm geçmişi ile alakalıdır. Yazılım varlıklarından (software entities) biri değiştiğinde buna bağlı olarak başka hangi yazılım varlıkları hangi sırayla değişmesi gerektiğini tesbit ile ortaya çıkarılabilir. Mesela, bir A sınıfında değişiklik yapıldığında bir B sınıfında da değişiklik yapmak gerekiyorsa A ve B arasında mantıksal bağlaşıklık var denilir.

### Sıkı Bağlaşık (Tightly Coupled) Sistemin Dezavantajları

1. Bir modüldeki değişiklik, genellikle diğer modüllerde değişiklik yapmaya zorlar (ripple effect). Özellikle mantıksal bağlaşıklığın sıkı olması.
2. Artan modüller arası bağımlılıktan dolayı modüllerin ictiması daha fazla efor ve zaman gerektirir.
3. Alakalı modüllerin hepsinin import edilmesi gerektiğinden dolayı bir modülün yeniden kullanılması veya test edilmesi zorlaşır.

### İdeal Olan Gevşek Bağlaşıklığı Tesis Etmek İçin

1. Geliştirme yapılırken birbiriyle ilgisi olmayan her şey ayrı geliştirilmelidir (separation of concerns). Aynı çağrışım kümesine ilişkin her şey bir arada geliştirilmelidir. Yani bir arada geliştirilen bu öğeler bir yapışıklık (cohesion) hatta kuvvetli bir yapışıklık (high cohesion) içinde olmalıdır.
2. Derlenen yazılım parçaları bir araya getirildiğinde hep birlikte otomatik olarak çalışacak şekilde tasarlanmalıdır (automated deployment). Derleme sonrası yapılandırmalardan kaçınılmalıdır.
3. Her bir sınıfa ilişkin bütünleştirici soyut sınıflar tanımlanmalıdır (abstraction of subclasses). Alt sınıflar detaylı olarak tanımlanmalı; ancak soyut sınıflar olarak kullanılmalıdır.
4. İşlevlerin geri dönüş değerleri, parametreler ve nesneler, bağımlılık yapmayacak şekilde tanımlanmalıdır.
5. Yazılım çalıştığı ortama bağımlı olarak geliştirilmemelidir (environment independent).

## Yapışıklık (Cohesion) Nedir?

Bir modül tek sorumluluğa sahip olmalı. Bu, tekil sorumluluk prensibi (single responsibility principle) olarak adlandırılır. Peki bir modülün tekil sorumluluğa sahip olup olmadığını nasıl anlarız? Diğer yönden bir modülün sorumluluklarını teke indirgemek için ne yapmalıyız?

Her modülün bir tek odağı olmalıdır. Tek odaklılık genelde tam yapışıklılık demektir. Çok odaklılık söz konusu ise modülün hala parçalanmaya ihtiyacı vardır. Bir değişiklik yapılması gerekiyorsa yalnız bir noktada yapılması gerekmeli. Ve bir öğeyi değiştirmek gerekiyorsa bunun yalnızca bir adet **sebebi** olmalı.

Şimdi kısa kısa yapışıklık çeşitlerine bakalım:

#### Tesadüfi Yapışıklık (Coincidental Cohesion) - En Kötüsü -

Modüldeki öğelerin rasgele seçilmesi durumu. Çoğunlukla utils, helpers tarzı modüllerde görülür.

#### Mantıksal Yapışıklık (Logical Cohesion)

Aynı kategoride olduğu düşünülen öğelerin aynı modüle yerleştirilmesi durumu. Mantıksal olarak alakalı ama işlevsellik olarak alakasız öğelerin bir arada bulunması. Genelde tek açıdan bakıldığında içine düşülen vaziyet olur. Örnek olarak yerel dosya sisteminden, bulut dosya sisteminden ve uzak dosya sisteminden okuma yapan tek bir modül verilebilir.

#### Zamansal Yapışıklık (Temporal Cohesion)

Aynı zaman dilimi içinde çalıştırılması gereken görevlerin aynı modüle yerleştirilmesi durumu.

#### Prosedürel Yapışıklık (Procedural Cohesion)

Belirli bir sırayla ardışıl çalıştırılması gereken görevlerin aynı modüle yerleştirilmesi durumu.

#### İletişimsel Yapışıklık (Communicational Cohesion)

Aynı genel veri, aynı girdi veya aynı çıktı üzerinde çalışan öğelerin aynı modülde bulunması durumu.

#### Ardışıl Yapışıklık (Sequential Cohesion)

Önceki öğenin çıktısının, sonraki öğenin girdisi olduğu bir zincirin modül oluşturması durumu. Fonksiyonel programlamada doğal ve normal olan yapışıklık.

#### İşlevsel Yapışıklık (Functional Cohesion) - En İyisi -

Yalnızca bir tek iş yapmaya ve bir tek işlevselliği gerçeklemeye odaklı öğelerin bir araya getirilip modülleştirilmesi durumu.

### Düşük Yapışıklığın 3 Büyük Sebebi

#### Yanlış 1

**Bir an önce çalışsın da...** : "Hadi çalış artııık!!!"

#### Yanlış 2

**Üşengeçlik** : "Şimdi kim uğraşacak bunları bölüp parçalamayla yaa..!"

#### Yanlış 3

**Karmaşık kodlama (complex coding) "paranoyası"** : "Ordan oraya ordan oraya başım döndü yaa ne kadar çok dosya ve satır dolaştım böyle... Ben böyle yazmiyim, hepsini alt alta yerleştireyim, döndüğümde bir yere bakarım(!)"

## Bağlaşıklık (Coupling) ve Yapışıklık (Cohesion) İlişkisi

![Coupling and Cohesion](/assets/img/2019/04/coupling-and-cohesion.png "Coupling and Cohesion")

Bu iki kavram genelde birbirine karıştırılır. Aslında nicel saysak birbirine ters orantılı şeylerdir. Gevşek bağlaşıklık (loose coupling) genellikle yüksek yapışıklık (high cohesion) ve tabii ki sıkı bağlaşıklık (tight coupling) da genellikle düşük yapışıklık (low cohesion) demektir.

Özetle modüller arası (veya sınıflar arası) düzen bağlaşıklık (coupling), modül içi (veya sınıf içi) düzen yapışıklık (cohesion) olarak tanımlanabilir. Bağlaşıklık gevşetilirken (decoupling) yapışıklık da zayıflatılmamalı, yapışıklık güçlendirilirken bağlaşıklık da sıkılaştırılmamalıdır.
