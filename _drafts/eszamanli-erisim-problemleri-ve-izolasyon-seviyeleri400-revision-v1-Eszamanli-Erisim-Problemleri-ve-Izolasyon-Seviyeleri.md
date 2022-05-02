---
id: 802
title: 'Eşzamanlı Erişim Problemleri ve İzolasyon Seviyeleri'
date: '2019-10-24T12:04:07+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/400-revision-v1'
permalink: '/?p=802'
---

## Eşzamanlı Erişim Sakıncaları

Eşzamanlı erişim bazı sakıncalar meydana getirir. Bu sakıncalar 4 ana senaryo olarak açıklanmış ve yerleşmiştir. Bunlar kayıp güncelleme, kirli okuma, tekrarlanamayan okuma ve hayalet okumadır.

**Kayıp Güncelleme (Lost Update)**: Aynı satıra erişen birden fazla transaction söz konusu olduğunda bu transaction’lardan veriyi en son değiştiren hangisi ise daha önceki güncellemelerin kaybolmasına neden olur, yani ezmiş olur.

**Kirli Okuma (Dirty Read)**: Bir transaction tarafından güncellenmiş ama henüz commit’lenerek kesinleşmiş hale getirilmemiş verinin, başka bir transaction tarafından, verinin son haliymiş gibi okunmasıdır.

**Tekrarlanamayan Okuma (Non-Repeatable Read)**: İkincil bir okuma transaction’ı, bir satıra her erişiminde farklı bir değer okuyor da sadece okuma yapmasına rağmen bir türlü sabit bir değere ulaşamıyorsa, buna tekrarlanamayan okuma denir.

**Hayalet Okuma (Phantom Read)**: Transaction’lardan biri, ekleme veya silme işlem(ler)i gerçekleştirirken eş zamanlı olarak diğer bir transaction, bu işlem(ler)i içine alan aralıkta listeleme okuması yapıyorsa, ya okuma sonucu elde ettiği satırlardan bir kısmı artık mevcut değil ya da okuma sonucu elde ettiği satırlar arasında olması gereken satırlar bulunmuyordur. İşte buna hayalet okuma denir.

## İzolasyon Seviyeleri (Isolation Levels)

Eşzamanlı erişim sakıncalarını bertaraf etmek için çözüm kilitlemedir (locking). Kilitleme ile satır veya tablo erişimleri kısa süreliğine tüm başka transaction’lara ya da yalnız yazan transaction’lara ya da yalnız okuyan transaction’lara yasaklanmış olur. Bu sayede veri tutarlılığın sağlanması için geçici olarak izole edilmiş olur. Böylece tutarsızlıklar belli seviyelerde engellenmiş olur.

### 4 İzolasyon Seviyesi:

**1. Kesinleşmemişi okuyabilirsin (Read uncommitted)**: En düşük izolasyon seviyesidir. Bir transaction okuma yaparken diğer transaction’ların güncelleme yapmasına karşı bir kilitleme yapılmaz. Transaction’lar birbirinden izole değildir. Veri tutarlılığını sağlamak tamamen istemciye bırakılmıştır.

**2. Kesinleşmişi okuyabilirsin (Read committed)**: Genelde varsayılan izolasyon seviyesidir. Geçerli satıra yazma kilidi konur. Transaction’lar arası veri tutarlılığı istemciye bırakılmıştır.

**3. Tekrar tekrar okuyabilirsin (Repeatable read)**: Transaction’da eklenen, güncellenen, silinen tüm satırlar referanslarıyla birlikte kilitlenir. Diğer transaction’lar bu satırları okuyamaz, güncelleyemez ve silemez.

**4. Sıralılaştırabilirsin (Serializable)**: En yüksek izolasyon seviyesidir. Veri eklenirken, silinirken veya güncellenirken tablolar transaction boyunca diğer transaction’ların erişimine kapatılır. Dead-lock’lara karşı dikkatli olunmalıdır.

<div class="wp-block-image image-background-white"><figure class="aligncenter">![izolasyon-seviyeleri](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/03/izolasyon-seviyeleri.png?resize=491%2C239&ssl=1)<figcaption>İzolasyon Seviyeleri</figcaption></figure></div>