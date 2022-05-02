---
title: "Prosedür Yönelimli Programlama (POP) ve Nesne Yönelimli Programlama (OOP) Paradigmaları Arasındaki Farklar Neler?"
date: 2019-06-10 11:19:27 +0300
layout: post
permalink: /yazilim/mimari/prosedur-yonelimli-programlama-pop-ve-nesne-yonelimli-programlama-oop-paradigmalari-arasindaki-farklar-neler
categories: [ "Yazılım", "Mimari" ]
tags: [ "Fark", "Karşılaştırma", "Nesne Yönelimli Programlama", "OOP", "POP", "Prosedür Yönelimli Programlama" ]
published: true
---

Prosedür yönelimli programlamada algoritmayla uğraşılır.

Nesne yönelimli programlamada veri ile uğraşılır.

Prosedür yönelimli yaklaşımda programlar fonksiyonlara bölünür.

Nesne yönelimli yaklaşımda programlar sınıflara bölünür.

Prosedür yönelimli programlamada fonksiyonların çoğu global data ’yı paylaşır.

Nesne yönelimli programlamada ise nesneleri, veri yapıları şekillendirir. Nesneler zaten global ’dir fakat referansları gizlenerek veya referanslar katmanlara hapsedilerek kapsülleme (encapsulation) sağlanır.

Prosedür yönelimli programlamada veri fonksiyondan fonksiyona zıplar.

Nesne yönelimli programlamada veri üzerinde işleyen fonksiyonlar, o veri ile sınıfı meydana getirmek üzere bağlanır. Bağlanmış (binded) fonksiyona `metot` denir. Data mapping öne çıkar.

Prosedür yönelimli programlamada fonksiyonlar, veriyi bir formdan diğer bir forma dönüştürmekle sorumludur.

Nesne yönelimli programlamada veriyi bir formdan diğer forma dönüştürme sorumluluğu sınıfa aittir. Veri başka sınıflardan ve fonksiyonlardan gizlenir (kapsülleme – encapsulation). Sınıftaki veriye sınıf haricindeki metotlar veya fonksiyonlar doğrudan erişemez (erişememeli).

Prosedür yönelimli programlama yaklaşımı üstten alta (top-down) yani üst katmandan alt katmana doğru bir yaklaşımdır.

Nesne yönelimli programlama yaklaşımı ise alttan üste (bottom-up) yani alt katmandan üst katmana doğru bir yaklaşımdır.

Prosedür yönelimli programlamada az belleğe ihtiyaç duyulur.

Nesne yönelimli programlamada POP’e göre daha fazla belleğe ihtiyaç olur.

Prosedür yönelimli programlama daha az güvenlidir.

Nesne yönelimli programlama daha güvenlidir.

Prosedür yönelimli programlamada herhangi overloading takip edilmez.

Nesne yönelimli programlamada ise operator overloading ve metot overloading mümkündür ve birçok durumda gereklidir.

## Nesne Yönelimli Yaklaşıma Geçiş Yapamamak

Nesne yönelimli yaklaşımla geliştirilen bir projede çalışan bir geliştirici “bu veri şu aşamada gereksiz”, “bu alanlar şu noktada gereksiz” gibi şikayetlerde bulunuyorsa, bu tür şikayetleri o geliştiricinin hala ağır prosedürel düşündüğünü, kafa olarak OOP’e geçemediğini gösterir.

Nesne yönelimli yaklaşım, gerçek hayattaki nesnelerin aslına daha yakın ve daha kolay soyutlamasını getirir. Bu hususta püf noktası niteliğindeki bazı kriterleri korkuluklarıyla birlikte sıralayalım;

1. Nesne, gerçek hayatta parça parça düşünülemiyorsa programlamada da parça parça düşünülememelidir. Geliştirme esnasında herhangi bir noktada bir nesnedeki bazı verinin kullanılmayacak/işlenmeyecek olması nesnenin parçalanması gerektiğini göstermez!
2. Programlama sırasında bir nesnenin parçalanması ihtiyacı derinden hissedildiyse o nesne yanlış soyutlanmış demektir. Yanlış soyutlanan nesne, gerçek hayattaki birkaç nesnenin kompozit hali olarak düşünülmeli ve tekrar soyutlanmalıdır. Parçalama ihtiyacı derinden hissedilmediyse, “mapping” üşengeçliği gösteriliyor olabilir. Yine de geliştirici gerçek hayattaki nesneyi göz önüne getirmeli ve kendini ikna etmelidir.
3. Bir kompozit nesnenin veya toparlanmış (aggregated) nesnenin öyle parçalı halde bulunuyor olması geliştirme esnasında gereksiz görüldüyse üzülerek belirtmeliyim ki geliştiricinin “kolaya kaçma eğilimi”nin depreşmiş olması ihtimali yüksektir. Derhal tekrar düşünülüp, nesnenin gerçek hayattaki hali tekrar ele alınmalıdır. Geliştirici kendini “merging” işleminin gereksizliği konusunda ikna etmelidir.

Nesne yönelimli yaklaşıma geçiş yapamamışlığın bir diğer önemli göstergesi de değer nesnesi (value object) halinde tutulması gereken bir takım verinin hala sayıl (scalar) halde ya da dizi (array) olarak paslanıyor olmasıdır.

Hatta bazı ara modellerin bir model sınıfı yerine associative array’lerde tanımlanıyor olması daha vahim bir vaziyettir.

Elbette böyle bir vaziyette bulunan bir uygulama projesinde arayüze yönelik programlama yapmak mümkün olmaz. Mecburen implementasyona yönelik programlama tek yol olarak kalır. Arayüze yönelik programlamanın mümkün olmadığı bir uygulamayı da büyüdükçe bölmek aşırı derecede zor olacaktır.