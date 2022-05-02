---
id: 853
title: 'Teknik Borç (Technical Debt) Nedir?'
date: '2020-10-01T16:16:39+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/700-revision-v1'
permalink: '/?p=853'
---

Teknik borç, finansal borç misali, alındığında faiziyle birlikte geri ödenmesi gereken hayali borçtur. Agile Manifesto’nun yaratıcılarından ve Extreme Programming öncülerinden Ward Cunningham tarafından ortaya atılmış bir kavramdır.

### CHEAP-FAST-GOOD Kanununa Göre

Bir özelliğin veya işlevselliğin bir ürüne (alanımızla ilgili olarak bir uygulamaya diyebiliriz) eklenmesi veya mevcut bir özelliğin veya işlevselliğin geliştirilmesi söz konusu olduğunda temelde 3 yol vardır:

1. Çabuk ve ucuz, ama kötü
2. İyi ve ucuz, ama yavaş
3. Çabuk ve iyi, ama pahalı

<div class="wp-block-image image-background-white"><figure class="aligncenter is-resized">![Ucuz-Çabuk-İyi](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/CHEAP-FAST-GOOD.png?resize=480%2C360&ssl=1)<figcaption>Ucuz-Çabuk-İyi</figcaption></figure></div>Bu 3 yolun birbiriyle alakası CHEAP-FAST-GOOD Kanunu, Kalite-Hız-Fiyat Kanunu (The Quality-Speed-Price Law) ya da Üçün İkisi Kanunu (The Law of Two-Thirds) olarak geçer.

Varsayalım ki maddi külfetle (finansal maliyet ile) ilgilenmiyoruz ve sabit alıyoruz. Bu durumda sadeleştirmeleri yaptıktan sonra 2 yol kalır:

1. Çabuk ama kötü
2. İyi ama yavaş

Yani ya mimari ve tasarımsal açıdan kötü ama daha kısa sürecek geliştirme süreci; ya da mimari ve tasarımsal açıdan iyi ama daha uzun sürecek geliştirme süreci benimsenecek.

<div class="wp-block-image image-background-white"><figure class="aligncenter is-resized">![Teknik Borç Kısır Döngüsü](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/teknik-borc-kisir-dongusu.png?resize=688%2C516&ssl=1)<figcaption>Teknik Borç Kısır Döngüsü</figcaption></figure></div>## Teknik Borcun Çeşitleri Nelerdir?

### Kaçınılmaz Teknik Borç

Öngörülemeyen ve önlenemeyen teknik borç çeşididir. Geliştiricilerin hataları veya eksiklerinden kaynaklanmaz. Projenin büyüklüğü ve kapsamlılığı ile doğru orantılıdır.

### Stratejik Teknik Borç

“Çabuk ama kötü” seçeneğinin öbür adıdır. Bunun kararını geliştiriciler veya geliştirici ekipleri almaz. Erken istenen ürünün teknik borcu yüksek olur. Hızlı giden atın … deyişini hatırladınız mı?

### Taktiksel Teknik Borç

Stratejik teknik borca benzer fakat bunun kararını geliştirici ekip alır. Projenin dead-line’larının normalinden daha yakın olması genelde asıl sebeptir. Tabii ki bu da daha üst yönetim kademelerinin tutumu ile yakından alakalıdır. Taktikten kasıt: “Projeyi erken tamamla ve aldığın teknik borcu başka bir fazda öde”.

### Kifayetsiz Teknik Borç

Yeteri kadar yetkin olmayan ya da yetkin olup da gereken özeni göstermeyen geliştiricilerin sebep olduğu teknik borçtur.

<div class="wp-block-image image-background-white"><figure class="aligncenter is-resized">![Teknik Borç Kadranı](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/08/teknik-borc-kadrani.png?resize=688%2C516&ssl=1)<figcaption>Teknik Borç Kadranı</figcaption></figure></div>### Bileşik Teknik Borç

Geçmişte alınan teknik borcun ödenmeden üzerine daha fazla teknik borcun alınması ile meydana gelmiş kat be kat borçtur. Saçma sapan workaround’lar bu çeşit borca girer.

## Teknik Borç Alınmadan Üretim Olur mu?

Hayır olmaz. Bahsettiğimiz gibi ideal durumda dahi en azından “kaçınılmaz teknik borç” alınmıştır. Mükemmel ürün diye bir şey yoksa her ürünün gelişmeye ihtiyacı var demektir. Gelişmeye ihtiyaç söz konusu ise teknik borç çoktan alınmış ve zamana bağlı olarak şişiyor demektir.

## Teknik Borç Kapatılmaya Çalışılmalı mıdır?

Duruma göre. Bazen en kısa zamanda ödenmesi, bazen ödemenin alabildiğine ertelenmesi, bazen borcun azaltılması, bazen artırılması uygun düşer. Borç alma ve ödeme kararlarına etki eden faktörlerden ilk akla gelenler:

- Ürünün toplam ömrü
- Pazar stratejisi
- Risk stratejisi
- Geliştirici eki(b/pler)in taktiksel bakışı
- Rekabet
- İş gücü, hammadde, ar-ge maliyetleri ve başka finansal maliyetler
- Ürünün marjinal faydası
- Verimlilik
- Motivasyon
- Öngörüde isabet
- Adaptasyon
- Kalite sınıfı
- Marka değeri

## Teknik Borç Tesbit Edilebilir mi?

Hiçbir zaman kesin ve net bir biçimde tesbit edilemez. Yaklaşık hesaplamalar ile ancak fikir edinilebilir. Teknik borcu hesaplamaya çalışan tool’lar bulunabilir fakat onlar da yalnızca temayüller hakkında fikir verir ve ancak “nereye doğru gidiyoruz?” sorusuna cevap verebilir.

## Yüksek Teknik Borç Ne Demektir?

- Yüksek teknik borç, düşük verim demektir.
- Yüksek teknik borç, düşük motivasyon demektir.
- Yüksek teknik borç, adaptasyon ve oryantasyon süreçlerinin uzaması demektir.
- Yüksek teknik borç, ilave maliyetler demektir.
- Yüksek teknik borç, tahminlerdeki isabetlerin az olması demektir.
- Yüksek teknik borç, kırık camlar demektir (Bkz. Kırık Camlar Teorisi).
- Yüksek teknik borç, her müdahalenin riskinin yüksekliği demektir.
- Yüksek teknik borç, daha fazla erteleme demektir.
- Yüksek teknik borç, müşteri memnuniyetsizliği demektir.
- Yüksek teknik borç, yüksek hata oranı (yazılımda bug) demektir.
- Yüksek teknik borç, fazla endişe ve sonucunda daha fazla stres demektir.
- Yüksek teknik borç, düşük esneklik demektir.
- Yüksek teknik borç, kötü tasarım demektir.
- Yüksek teknik borç, kirli proje demektir.
- Yüksek teknik borç, günün sonunda kalitesiz ürün demektir.
- Yüksek teknik borç, günün sonunda düşük kar marjı demektir.
- Yüksek teknik borç, günün sonunda düşük marka değeri demektir.

## Hardware veya Software Üretiminin İçinde Olanlara Birkaç Tavsiye

1. Öncelikle projenizdeki veya sisteminizdeki teknik borçlarınızın tamamını kapatamayacağınızı unutmayın!
2. Hardware de üründür. Software de üründür. Bakış açınızı sınayın.
3. Plandan sapmanın kaynak kaybıyla birlikte daha fazla teknik borca mal olacağını unutmayın. Yeni plan ise yalnızca daha fazla kaynak harcaması demek olabilir.
4. Eğer sık sık büyük teknik borç almaya yatkın (agresif) çalışıyorsanız mutlaka teknik borcunuzu ödemeye odaklanmış ekip veya ekipler kurun. Refactoring team, optimization team gibi. Ya da en azından işinizin büyüklüğüne göre ekipleriniz içinde refactoring’e kanalize olabilecek birine veya birilerine yer verin. Ki bu iş gücü arkanızı toplasın.
5. Bir ürünü üretmenin çok fazla yolu, kullanılabilecek çok fazla teknik vardır. Kesinlikle bu sizin ürününüz için de geçerli. Hal böyleyken bir ürünü berbat etmenin yolu da yine söz konusu yollar ve teknikler arasındadır. Başka yerde değil. Bunu daima hatırınızda tutun.
6. Ürününüz veya müstakbel ürününüz çok primitive bir şey değilse (ki bu yazıyı buraya kadar okuduysanız muhtemelen değildir) onu geliştirirken kesinlikle ama kesinlikle katmanlama kullanın. Katmanlar halinde geliştirin (yüksek teknoloji ürünü ise zaten başka şansınız yok). Ve katmanlara sadık kalın. Doğru katmanlara ayırmak ve bunlara sadık kalmak hayatidir.
7. Geliştirmenizi ürüne uygularken, başından beri yaptığınız tüm testleri tekrar edin.
8. “Daha çabuk” ifadesi aklınıza düştüğü anda “daha fazla istihdam” ifadesi de aklınıza düşsün. Eğer bu ifade yerine “daha yüksek verim” ifadesi aklınıza geliyorsa bakış açınızda problem var demektir. “Yüksek verim”, sanılanın aksine, daima “büyük iş gücü” nden sonra ele alınması gereken kavramdır.
9. Maksimum verimin kesinlikle ütopik bir kavram olduğunu unutmayın.
10. “Biraz acil”, “acil”, “çok acil”, “çok çok acil”, “aşırı acil”, “ultra acil”, “ölümcül acil” vb. kelimeleri lügatinizden çıkarın. Bunlar yerine “sıra numarası”, “board” yani bi zahmet bir proje geliştirme metodolojisi kullanın.
11. Seçtiğiniz proje geliştirme metodolojisine sadık kalın. Bolca ihlal edilen, sık akamete uğrayan, arada rafa kaldırılan metodolojiyi kullanmamak, kullanmaktan daha iyi olabilir.
12. Ve son olarak; eğer bir yönetenseniz, tüm bunları, yönettiklerinizden net bir biçimde isteyiniz. Kuralsa kural, emirse emir, fermansa ferman…