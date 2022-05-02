---
id: 983
title: 'Symfony Bileşenleri'
date: '2021-01-04T13:42:41+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/kategorilendirilmemis/598-revision-v1'
permalink: '/?p=983'
---

**Polyfill Components**: İlgili php sürümünün veya php extension’ının bulunmadığı durumlarda sürümün veya extension’ın taklit edilmesini sağlayan bileşenlerdir. Bahsedilen PHP sürümleri: 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0 . Bahsedilen PHP extension’ları: apcu/apc, ctype, iconv, grapheme (intl), icu (intl), idn (intl), msgfmt (intl), normalizer (intl), mbstring ve uuid.

**<s>ClassLoader Component</s>**: Artık kullanılmıyor. Bunun yerine composer kullanın.  
*Bağımlılıkları: –*

**<s>Icu Component</s>**: Artık kullanılmıyor. ICU kütüphanesinin verilerini özel bir sürüm olarak içerir. Bunun yerine Intl bileşenini kullanın.  
*Bağımlılıkları: –*

**<s>Locale Component</s>**: Artık kullanılmıyor. Bunun yerine Intl bileşenini kullanın.  
*Bağımlılıkları: –*

**Asset Component**: CSS stil sayfaları, javascript dosyaları ve görseller gibi asset’lerin versiyonlama ve URL üretme işlerini yönetir.  
*Bağımlılıkları: –*

**CssSelector Component**: CSS seçicileri XPath ifadelerine dönüştürür.  
*Bağımlılıkları: –*

**DomCrawler Component**: HTML ve XML dokümanları için DOM gezinimini kolaylaştırır.  
*Bağımlılıkları: –*

**DotEnv Component**: .env dosyalarını, içindekilerden $\_ENV ve $\_SERVER üzerinden erişilebilecek ortam değişkenleri üretmek için parse etmeye yarar.  
*Bağımlılıkları: –*

**<s>ErrorCatcher Component</s>**: Artık kullanılmıyor. Bunun yerine ErrorHandler bileşenini kullanın.  
*Bağımlılıkları: psr/log*

**Filesystem Component**: Dosyalama sistemi için temel aletler sunar. Framework bileşenidir.  
*Bağımlılıkları: –*

**Finder Component**: Sezgisel bir akıcı arabirim aracılığıyla farklı kriterlere dayalı dosya ve dizinleri bulur. Framework bileşenidir.  
*Bağımlılıkları: –*

**Inflector Component**: İngilizce kelimeleri tekil ve çoğul formları arasında dönüştürür.  
*Bağımlılıkları: –*

**Intl Component**: PHP intl extension’ının eksik ise birtakım case’lerin üstesinden gelebilmek için fallback kodu sağlar.  
*Bağımlılıkları: –*

**Lock Component**: Paylaşılan bir resource’a ayrıcalıklı erişim sağlamak amaçlı kilitler oluşturur ve yönetir.  
*Bağımlılıkları: psr/log*

**Messenger Component**: Uygulamanın doğrudan ya da mesaj kuyruğu üzerinden diğer uygulamalara mesaj göndermesine ve diğer uygulamalardan mesaj almasına yardımcı olur.  
*Bağımlılıkları: psr/log*

**Mime Component**: MIME mesajlarını manipüle etmeye izin verir ve MIME tipleri ile alakalı aletler sağlar.  
*Bağımlılıkları: –*

**Notifier Component**: Bir veya birden fazla kanal üzerinden notifikasyon gönderimi sağlar.  
*Bağımlılıkları: –*

**OptionsResolver Component**: array\_replace fonksiyonunun gelişmiş bir muadili. Bir opsiyon sistemi kurmayı sağlar.  
*Bağımlılıkları: –*

**Process Component**: Command’leri sub-process’lerde koşturmak için kullanılır.  
*Bağımlılıkları: –*

**Serializer Component**: Bildiğiniz serializer aracı sunar. JMS Serializer’ın muadili.  
*Bağımlılıkları: –*

**Templating Component**: Her tür şablon sistemi oluşturmak için gerekli tüm araçları sağlar.  
*Bağımlılıkları: –*

**Uid Component**: UUID, ULID gibi tanımlayıcılar ile çalışabilmek için gerekli araçlar sağlar.  
*Bağımlılıkları: –*

**VarDumper Component**: Herhangi PHP değişkeni üzerinde yürümek için mekanizmalar sağlar.  
*Bağımlılıkları: –*

**VarExporter Component**: Herhangi serialize edilebilir PHP veri yapısını düz PHP kodu olarak dışarı aktarır ve nesneleri constructor’larını çağırmadan örneklendirmeye ve doldurmaya izin verir.  
*Bağımlılıkları: –*

**WebLink Component**: Dokümanları HTTP ve HTTP/2 push’ları üzerinden preload ve prefetch etmek için HTML 5 linklerini, Preload and Resource Hints spesifikasyonlarını istemcilere (tarayıcılara) tavsiye amaçlı implemente eder.  
*Bağımlılıkları: psr/link, fig/link-util*

**Yaml Component**: YAML dosylarını yüklemeye ve YAML dosyaları oluşturmaya yarar.  
*Bağımlılıkları: –*

**<s>Debug Component</s>**: Artık kullanılmıyor. PHP kodunu debug etmeyi kolaylaştıran araçlar sunar.  
*Bağımlılıkları: symfony/error-catcher, psr/log*

**BrowserKit Component**: Bir web tarayıcısının davranışını simüle eder.  
*Bağımlılıkları: symfony/dom-crawler*

**Config Component**: Herhangi bir şeyin yapılandırma değerlerini bulmaya, yüklemeye, bitiştirmeye, autofill etmeye ve doğrulamaya yarayan birçok sınıf sunar. Yapılandırma kaynağı YAML, XML, INI veya DB de olabilir. Framework bileşenidir.  
*Bağımlılıkları: symfony/filesystem*

**Contracts Component**: Bir takım temel soyutlamaların/arayüzlerin bulunduğu bir bileşen.  
*Bağımlılıkları: psr/cache, psr/container*

**Console Component**: Güzel ve test edilebilir komut satırı arayüzleri (CLI) oluşturmayı kolaylaştırır.  
*Bağımlılıkları: symfony/contracts*

**DependencyInjection Component**: Uygulamamızdaki nesnelerin inşa şeklini standartlaştırmaya ve merkezileştirmeye izin veren PSR-11 uyumlu bir service container implemente etmeye yarar. Service Tags kullanarak inşa şekli özelleştirilebilir. Framework bileşenidir.  
*Bağımlılıkları: symfony/contracts, psr/container*

**ErrorHandler Component**: Hataları yönetmek için araçlar sunar ve PHP kodunu debug etmeyi kolaylaştırır.  
*Bağımlılıkları: psr/log, symfony/var-dumper*

**EventDispatcher Component**: Uygulamamızın bileşenlerinin, event dispatching ve event listening yöntemi üzerinden birbirleri ile iletişimini sağlayan araçlar sunar.  
*Bağımlılıkları: symfony/contracts*

**HttpClient Component**: Hem PHP stream wrapper’larını hem de cURL’ü destekleyen low-level bir HTTP istemcisi. Ayrıca API’ları tüketmek için aletler sağlar.  
*Bağımlılıkları: symfony/contracts, psr/log*

**HttpFoundation Component**: HTTP spesifikasyonları için nesne yönelimli bir katman tanımlar. Framework bileşenidir.  
*Bağımlılıkları: symfony/mime*

**HttpKernel Component**: EventDispatcher bileşenini kullanarak bir Request nesnesini bir Response nesnesine dönüştürmek için bir yapılandırılmış süreç sunar. Framework bileşenidir.  
*Bağımlılıkları: symfony/event-dispatcher, symfony/error-catcher, symfony/http-foundation, psr/log*

**Ldap Component**: PHP ldap extension’ı üstüne bir ldap istemcisi sağlar.  
*Bağımlılıkları: symfony/options-resolver*

**Mailer Component**: E-posta göndermeye yardımcı olur ve en popüler postalama servisleriyle entegrasyon sağlar.  
*Bağımlılıkları: symfony/mime, symfony/event-dispatcher, egulias/email-validator, psr/log*

**Mercure Component**: Mercure, veri güncellemelerini web tarayıcılarına ve diğer HTTP istemcilerine kolay, hızlı, güvenilir ve pil dostu olarak aktarmaya izin veren açık bir protokoldür. Web API’ları aracılığıyla sunulan kaynakların gerçek zamanlı güncellemelerini reaktif web ve mobil uygulamalara yayınlamakta yarar sağlar.  
*Bağımlılıkları: symfony/http-client*

**PropertyAccess Component**: Basit bir string notasyonu kullanarak nesneye veya diziye yazma, nesneden veya diziden okuma işlevi sunar.  
*Bağımlılıkları: symfony/inflector*

**PropertyInfo Component**: Farklı meta veri kaynaklarını kullanarak sınıf özellikleri hakkında bilgi edinmeyi sağlar.  
*Bağımlılıkları: symfony/inflector*

**Security (Core &amp; Http) Component**: Web uygulamaları için eksiksiz bir güvenlik sistemi sağlar. HTTP Basic Authentication, etkileşimli form ile login veya X.509 sertifika ile login kullanarak kimlik doğrulaması yapma imkanları ile birlikte gelir. Bunun yanında geliştiricinin özel kimlik doğrulama stratejilerini uyarlamaya izin verir. Ayrıca, kimliği doğrulanmış kullanıcıları, rollerine göre yetkilendirmenin yollarını sunar.  
*Bağımlılıkları: symfony/contracts, symfony/http-foundation, symfony/http-kernel, symfony/property-access*

**Stopwatch Component**: Kodu profiling etmek için bir yol sunar.  
*Bağımlılıkları: symfony/contracts*

**String Component**: Tek yoldan byte’lar, UTF-8 kod noktaları ve grapheme kümeleri ile ilgilenir ve stringler için nesne yönelimli bir API sağlar.  
*Bağımlılıkları: symfony/contracts*

**Translation Component**: Uygulamayı uluslararası hale getirmeye yarayan araçlar sunar.  
*Bağımlılıkları: symfony/contracts*

**Validator Component**: Değerleri JSR-303 Bean Doğrulaması spesifikasyonlarını takip ederek doğrulamak için araçlar sunar.  
*Bağımlılıkları: symfony/contracts*

**Cache Component**: Basitten uzmana önbellekleme ihtiyaçlarını kapsayan özellikler sunar. En iyi interoperabilite için PSR-6 ve kendine has önbellekleme kontratlarını kendi içinde implemente eder. Performans ve esneklik için tasarlanmıştır. En yaygın önbellekleme back-end’leri için kullanıma hazır adaptörleri bulunur. Etiket tabanlı invalidasyon sağlar. Locking ve early expiration üzerinden önbellek izdiham koruması sağlar. Framework bileşenidir.  
*Bağımlılıkları: symfony/contracts, symfony/var-exporter, psr/cache, psr/log*

**ExpressionLanguage Component**: İfadeleri değerleyebilecek ve derleyebilecek bir motor sağlar. İfade denilen şey bir değer döndüren tek bir satırdır.  
*Bağımlılıkları: symfony/contracts, symfony/cache*

**Form Component**: HTML formlarını kolayca oluşturmak, işlemek ve yeniden kullanmak için araçlar sağlar.  
*Bağımlılıkları: symfony/contracts, symfony/event-dispatcher, symfony/intl, symfony/options-resolver, symfony/property-access*

**(Security) Guard Component**: Birçok kimlik doğrulama katmanını bir araya getirerek tam kontrol sağlanabilen karmaşık kimlik doğrulama sistemleri oluşturmayı kolaylaştırır.  
*Bağımlılıkları: symfony/security-core, symfony/security-http*

**Routing Component**: Bir HTTP talebini bir grup yapılandırma değişkenine çevirir. Framework bileşenidir.  
*Bağımlılıkları: symfony/config, symfony/http-foundation, symfony/yaml, symfony/expression-language, symfony/dependency-injection, doctrine/annotations, psr/log*

**Webpack Encore Component**: Javascript tabanlı bir bileşendir. Javascript modüllerini bir araya getirmek, CSS ve JS varlıklarını ön işleme tabi tutmak, derlemek ve küçültmek için güçlü bir API sunan webpack’i uygulamalara entegre etmenin daha basit bir yolu.  
*Bağımlılıkları: –*

**Workflow Component**: Bir iş akışını (workflow) veya sonlu durum makinesini (finite state machine) yönetmek için araçlar sağlar.  
*Bağımlılıkları: symfony/dependency-injection, symfony/event-dispatcher, symfony/expression-language, symfony/security-core, symfony/validator, psr/log*

**PSR-7 Bridge**: HTTP Foundation nesnelerini PSR-7 tarafından tanımlanan HTTP mesaj arayüzlerini implemente eden nesnelere dönüştürür.  
*Bağımlılıkları: symfony/http-foundation, psr/http-message*

**PHPUnit Bridge**: Eski testleri ve deprecated kod kullanımını raporlamak için aletler ve ayrıca zamana duyarlı testler için bir yardımcı sunar.  
*Bağımlılıkları: –*

**Twig Bridge**: Twig ile entegrasyon sağlar.  
*Bağımlılıkları: symfony/contracts, twig/twig*

**Doctrine Bridge**: Doctrine ile entegrasyon sağlar.  
*Bağımlılıkları: symfony/contracts, doctrine/event-manager, doctrine/persistence*

**Monolog Bridge**: Monolog ile entegrasyon sağlar.  
*Bağımlılıkları: symfony/contracts, symfony/http-kernel, monolog/monolog*

**ProxyManager Bridge**: Ocramius Proxy Manager ile entegrasyon sağlar.  
*Bağımlılıkları: symfony/dependency-injection, ocramius/proxy-manager*

**<s>Swiftmailer Bridge</s>**: Artık kullanılmıyor. Bunun yerine Mailer bileşenini kullanın.  
*Bağımlılıkları: swiftmailer/swiftmailer*