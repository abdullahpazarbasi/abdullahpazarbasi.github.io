---
id: 583
title: 'Metot Tanımlama ve Çağırma'
date: '2019-06-27T10:23:10+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/553-revision-v1'
permalink: '/?p=583'
---

## Metot Tanımlama

Metot tanımı (method definition) iki ana kısımdan oluşur:

- metot başlığı (method header)
- metot gövdesi (method body)

<div class="wp-block-image"><figure class="aligncenter">![PHP Metot Tanımlama](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/05/php-method-definition.png?resize=688%2C289&ssl=1)<figcaption>PHP Metot Tanımlama</figcaption></figure></div>Metot başlığına önce anahtarlar, sonra metot imzası ve en son da zaruri olmamakla birlikte çıktı cinsi deklarasyonu yerleştirilir.

Başlıktaki anahtarları inceleyelim;

**Kesinleştirme Anahtarı (Final Keyword)**: Kesinleştirme anahtarı (“final”) bir metodun extend edilemeyeceğini ve böylelikle overload olamayacağını bildirmek için yerleştirilir. Bu anahtar, etkiler birbirine zıt olmasından dolayı soyutluk anahtarı ile birlikte kullanılamaz. Kesinleştirme anahtarının metot başlığında en başa yerleştirilmesi tavsiye edilir.

**Soyutluk Anahtarı (Abstract Keyword)**: Soyutluk anahtarı (“abstract”) extend edilebilecek bir sınıf içindeki gövdesi bulunmayan bir metodun başlığına yerleştirilir ve amacı, alt sınıfta, metoda mutlaka bir gövde kazandırılması gerektiğini bildirmektir. Bu anahtar, işlevinden de anlaşılabileceği üzre, kesinleştirme anahtarı ile birlikte kullanılamaz. Soyutluk anahtarının metot başlığında en başa yerleştirilmesi tavsiye edilir.

**Erişim Niteleyicisi (Access Modifier)**: Erişim niteleyicisi PHP’de “private”, “protected”, “public” anahtar kelimelerinden biri olabilir. Doğru kapsülleme için gerekli şeylerdendir. Metoda erişimi iki seviyede kısıtlamak veya kısıtsız erişimde bırakmak için kullanılır. Yerleştirilmediğinde erişim kısıtsız demektir. Yerleştirilecekse, kesinleştirici anahtarından ya da soyutluk anahtarından hemen sonra yerleştirilmesi tavsiye edilir.

**Statik Anahtarı (Static Keyword)**: Statik anahtarı (“static”) metodun nesne metodu mu sınıf metodu mu olduğunu bildirmek için metodun başlığına yerleştirilir. Yerleştirilmediğinde metot nesne metodu olarak belirlenmiş demektir. Fonksiyon tanımlayıcı anahtardan hemen önce yerleştirilmesi tavsiye edilir.

**Fonksiyon Tanımlayıcı Anahtar (Function Definition Keyword)**: Fonksiyon tanımlayıcı anahtar kelime (“function”) sınıf gövdesinde metot tanımlamak, diğer noktalarda fonksiyon tanımlayabilmek için zorunlu bir anahtar kelimedir. Metodun imzasından hemen önce yerleştirilir.

### Metot İmzası (Method Signature)

Metot imzası metodun adı ve parantez içinde metodun parametre listesi (ya da argüman listesi) bileşenlerinden müteşekkildir.

Metot anahtarının bileşenlerini inceleyelim;

**Metot Adı (Method Name)**: Metot adı, ingiliz alfabesindeki büyük ve küçük harfleri, rakamları ve underscore karakterini içerebilir. Rakam, adın başına gelemez. Metot adlandırmada “camel case” kullanımı tavsiye edilir. Metot imzasındaki ilk bileşendir.

**Parametre Listesi (Parameter List)**: Metot imzasında metot adından hemen sonra parantez içine yerleştirilen bileşendir. Parametre tanımlarının (parameter definitions) virgülle ayrılmış listesidir. Metot tanımlarken parametre olan şey metodu çağırırken argümandır. Bir parametrenin tanımında önce eğer kullanılacaksa parametre cinsi deklarasyonu (parameter type declaration) yerleştirilir. Mütakiben değişken gösterimi (variable representation) yerleştirilir. Eğer paslama referans ile yapılacaksa (pass-by-reference) değişken gösteriminin hemen öncesine “&amp;” işareti yerleştirilir. Sonra da eğer kullanılacaksa varsayılan değer ataması yapılır.

### Çıktı Cinsi Deklarasyonu (Return Type Declaration)

Metot imzasından sonra bir adet iki nokta üst üste işaretini takiben çıktı cinsi deklarasyonu (return type declaration) yapılabilir.

### Metot Gövdesi (Method Body)

Metot gövdesi bir kod bloğudur. Blok başlatma ve blok bitirme işaretleri olan { ve } işaretleri arasına yerleştirilir. Blok, metot başlığından hemen sonra yerleştirilir. Araya ancak whitespace ya da comment girebilir.

## Nesne Metodu Çağırma (Object Method Invocation/Call)

<div class="wp-block-image"><figure class="aligncenter">![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/06/object-method-invocation.png?resize=359%2C22&ssl=1)<figcaption>Nesne Metodu Çağırma</figcaption></figure></div>Nesne (object)’nin referans değişkeni ifadesine ‘-&gt;’ eklenir. Ardından metot adı belirtilir. Metot adından (method name) sonra parantez içinde argüman listesi (argument list) verilir. Argüman listesi, metot tanımlamadaki gibi, virgülle ayrılmış değişken, değişken referansı, genel sabit, sınıf sabiti, literal, işlev çağrısı ya da metot çağrısıdır.

## Statik Metot Çağırma (Static Method Invocation/Call)

<div class="wp-block-image"><figure class="aligncenter">![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/06/class-method-invocation.png?resize=344%2C24&ssl=1)<figcaption>Statik Metot Çağırma</figcaption></figure></div>Sınıf (class)’ın adı ifadesine ‘::’ eklenir. Ardından statik metot (static method) adı belirtilir. Metot adından (method name) sonra, nesne metodu çağırmadaki gibi, parantez içinde argüman listesi (argument list) verilir. Argüman listesi virgülle ayrılmış değişken, değişken referansı, genel sabit, sınıf sabiti, literal, işlev çağrısı ya da metot çağrısıdır.