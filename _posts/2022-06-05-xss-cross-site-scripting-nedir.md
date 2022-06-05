---
title: "XSS (Cross-Site Scripting) Nedir?"
date: 2022-06-05 14:15:02 +0300
layout: post
permalink: /yazilim/guvenlik/xss-cross-site-scripting-nedir
categories: [ "Yazılım", "Güvenlik" ]
tags: [ "XSS", "Security", "Hacking" ]
published: true
---

## XSS Saldırısı Nedir?

Bir saldırganın, elindeki `client-side` script 'i, kullanıcı bağlamı barındıran bir kurban web uygulamasının form alanları veya query parametreleri üzerinden enjekte ederek o kurban web uygulamasının enjekte edilen o script parçasını çalıştırıp çalıştırmadığını anlamaya çalışmasıdır.

## XSS 'de Hedef Nedir?

XSS 'in amacı, bir kullanıcının, kurban edilen web uygulamasındaki kişisel verisini elde etmektir.

## Neden XSS ?

Çünkü web uygulamasını çalıştırmaya yarayan genel kabul görmüş bir browser, o uygulama için tanımlanan scope 'un dışında kalan uygulamalara cookie, local storage gibi kullanıcı bağlamını vermez. Bundan dolayı bir saldırgan, hırsızlık yapmaya yarayacak script parçasını ajan olarak o kurban web uygulamasına, uygulamanın bir parçasıymış gibi sokuşturup çalışmasını beklemeli.

## XSS Önlenebilir mi?

Yaygın hale gelmiş XSS yöntemlerine karşı önlem almak gayet mümkün ve basittir.

## XSS Çeşitleri

### Kalıcı XSS (Persistent XSS) veya Saklanmış XSS (Stored XSS)

Bir örnek üzerinden açıklayalım. Yorum kabul eden ve yorum kutusunda güvenlik açığı bulunan bir blog uygulaması düşünelim.

Saldırgan söz konusu blog uygulamasına gelir, yoruma açık bir blog yazısı sayfasını açar ve yorum yazar ama yorumunu yazarken cookie hırsızlığına yarayan script kodunu da yorumuna ekler. Eğer söz konusu blog uygulamasında yorum kutusu için gereken filtreleme bulunmuyorsa ve moderasyonda da farkedilmediyse saldırganın yorumu yayımlandığında artık blog sayfası enfekte olmuş demektir. Çünkü saldırganın enjekte ettiği kod, yorumlu blog sayfasının kodunun bir parçası haline gelmiştir ta ki farkedilene kadar.

O yorumlu blog sayfasını açıp yüklenmesini sağlayan herkes söz konusu blog uygulamasının kapsamına dahil `cookie` 'lerini çaldırmış olur.

### Yansıtıcı XSS (Reflective XSS) veya Yansıtılmış XSS (Reflected XSS)

Yine bir örnek üzerinden açıklayalım. Bir query parametresi ile arama yapan ve sonuçlarını, filtrelenmeyen yani güvenlik açığının sebebi query parametresinin değeri ile başlıklandırılmış bir listede sunan bir web sitesi düşünelim.

Saldırgan, söz konusu web sitesinin arama web sayfasının URL 'ine query parametresini ekler, bu parametrenin değerine de cookie hırsızlığına yarayan script kodunu ekler. Query parametresinin değeri başlıkta filtrelenmeksizin basıldığı için enjekte edilen kod da çalışacaktır.

Saldırgan özel hazırladığı bu linki kurban edeceği kullanıcıya tıklattırmanın yoluna bakar. Bu linki, tuzak bir web sayfasında veya bir phishing e-posta gövdesinde ve hatta bir SMS metninde bir kısaltılmış URL (asıl URL 'e yönlenen) olarak sunabilir.

URL 'e tıklayan kurban saniyeler içinde söz konusu web sitesinin kapsamına dahil `cookie` 'lerini çaldırmış olur.

### DOM Tabanlı XSS (DOM-Based XSS)

Diğer XSS türlerinden farklı olarak DOM tabanlı XSS 'de, enfekte kodu sunucu tarafı sunmaz. Dalavere tamamen istemci tarafında döner.

Zafiyet HTML gövdesinde değil DOM 'de ise mümkündür ve yalnızca run-time anında gözlemlenebilir.

Yine bir örnek üzerinden açıklayalım. Sayfada document nesnesinin baseURI özelliğini filtrelemeksizin dokümana basan bir inline client-side script bulunduğunu düşünelim. Bu durumda Sayfayı yüklemek için girilen veya tıklanan URL 'de bir fragment bulunsa onu da basacaktır. Eğer fragment, cookie nesnesini alert olarak sunmaya yarayan bir inline script içeriyorsa vay ki vay...

Eğer saldırı `fragment` tarafında gerçekleştirilirse yani `#` karakterinden sonrasında ise sunucu taraflı önlemler ve sunucu taraflı zafiyet tarama bir işe yaramaz. Çünkü `#` veya `#!` sonrası hiçbir şey sunucuya gönderilmez.

Önlem olarak kaynağın gidere akmasından önce filtrelemesi yapılmalı. Örnekte `kaynak` (`source`), document nesnesinin baseURI özelliği, `gider` (`sink`) ise document nesnesinin write metodu idi.

Sık kullanılan kaynaklardan (sources) bazıları:
- `document.URL`
- `document.documentURI`
- `document.referer`
- `location.href`
- `location.search`
- ve diğer `location` nesnesi özellikleri
- `window.name`

Sık kullanılan giderlerden (sinks) bazıları:
- `document.write()`
- elemanların `innerHTML` özellikleri
- bazı elemanların `src` özellikleri
- `eval()`
- `setTimeout()`
- `setInterval()`
- `execScript()`

Kod tasarımında mümkün olduğunca `innerHTML` özelliği yerine `innerText` veya `textContent` özellikleri tercih edilmeli.