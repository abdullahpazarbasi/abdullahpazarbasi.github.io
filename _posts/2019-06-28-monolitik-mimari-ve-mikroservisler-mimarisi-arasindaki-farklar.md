---
title: "Monolitik Mimari ve Mikroservisler Mimarisi Arasındaki Farklar"
date: 2019-06-28 12:09:18 +0300
layout: post
permalink: /yazilim/mimari/monolitik-mimari-ve-mikroservisler-mimarisi-arasindaki-farklar
categories: [ "Yazılım", "Mimari" ]
tags: [ "API", "API Gateway", "Application", "Architecture", "Deployment", "Dikey Ölçeklendirme", "Fark", "Horizontal Scaling", "Karşılaştırma", "Katmanlar", "Layers", "Load Balancing", "Microservice", "Microservices Architecture", "Mimari", "Monolith", "Monolithic Architecture", "Proje", "Service", "Vertical Scaling", "Yatay Ölçeklendirme", "Yük Dengeleme" ]
published: true
---

## Monolitik Mimari

Sunucu taraflı bir uygulama projenizi farklı bileşenlerden oluşan modüler bir altıgen mimarisi ile ya da başkaca katmanlı bir mimari ile başlatabilirsiniz.

Katmanlar ana hatları ile şu şekilde olacaktır:

- **Presentation Layer (Sunum Katmanı):** HTTP hizmetlerini yerine getirmekten ve mesaj formatı HTML, JSON ya da XML gibi notasyonlar ile sağlanan mesajlaşmadan sorumludur. Ayrıca konsol üzerinden erişimden de sorumlu olabilir. Uygulama katmanına ve altyapı katmanına bağımlıdır.
- **Application Layer (Uygulama Katmanı)**: Uygulamanın iskeletidir. Akış ve koordinasyondan sorumludur. Framework’ün çekirdeği ile sıkı etkileşim içindedir. Domain’ler katmanına ve altyapı katmanına bağımlıdır.
- **Domains Layer (Domain’ler Katmanı)**: Uygulamanın koordine ettiği ana veya alt domain’lere özel iş mantığı bu katmanda işletilir. Altyapı katmanına bağımlıdır.
- **Infrastructure Layer (Altyapı Katmanı)**: Veri hangarları ve uygulama dışındaki servislerin istemcilerinin, adaptörlerinin, genel yardımcı kütüphanelerinin, utility paket kütüphanelerin ve üçüncü taraf paket kütüphanelerin yer aldığı katmandır.

Bu uygulamayı, mantıksal olarak modüler bir yapıda olmasına rağmen monolit olarak paketlenmiş ve deploy edilmiş varsayıyoruz ve getirisine, götürüsüne bakıyoruz:

### Monolitik Mimarinin Getirileri

- Geliştirmesi basit.
- Test etmek basit. Uçtan uca test tek aşamada mümkün.
- Deploy edilmesi kolay. Dağıtım için, paketlenmiş uygulamayı sunucuya kopyalamak yeterli.
- Yatay ölçeklendirme kolay. Yük dengeleyicisinin ardında aynı paketin birer kopyası çalıştırılarak sağlanabilir.

Monolitik bir mimari ile inşa edilmiş bir uygulama projesi ilk fazlarında iyi çalışır. Ve bugün hayatta olan başarılı projelerin büyük çoğunluğu monolit olarak başlatılmıştır.

### Monolitik Mimarinin Sakıncaları

- Bu basit yaklaşım, büyüklük ve karmaşıklık bakımından sınırlara maruz kalır.
- Uygulama, tam olarak anlaşılamayacak kadar büyük ve karmaşıktır.
- Uygulama çok büyük ve karmaşık olduğundan dolayı herhangi değişiklik aynı anda hem doğru hem kolay yapılamaz.
- Uygulamanın boyutu start-up süresini hatta cevap süresini uzatabilir.
- Her güncellemede uygulamanın tamamı deploy edilmelidir.
- Bir değişikliğin yaratacağı etkiler genellikle tam anlaşılmaz. Ve eğer böyleyse bu kapsamlı bir manuel test gerektirir.
- Sürekli deployment zordur.
- Uygulamanın modüllerinin kaynak gereksinimleri arasında çakışma varsa ölçeklenmesi zor olabilir.
- Güvenilirlik düşüktür. Herhangi bir modüldeki bir bug tüm uygulamanın potansiyelini düşürebilir. Ayrıca uygulamanın tüm örnekleri aynı bug’a sahip olduğundan dolayı tüm sistemin kullanılabilirliğini etkiler.
- Yeni teknolojileri benimseme noktasında bariyeri vardır. Framework’teki ya da dildeki değişiklikler tüm uygulamayı etkileyeceğinden hem zaman hem de diğer maliyetler açısından son derece pahalıdır.

## Mikroservisler Mimarisi

Uygulamayı tek bir monolitik uygulama halinde inşa etmek yerine, daha küçük, birbirine bağlı bir hizmet uygulamaları grubu halinde inşa etme fikridir. Her mikroservis çeşitli adaptörleri ile birlikte kendi iş mantığından oluşan kendi mimarisine sahip bir küçük uygulamadır. Bazı mikroservisler REST, RPC, SOAP vb. mesajlaşma protokolleri bazlı API sunar ve çoğu mikroservis sundukları bu API’lar aracılığı ile birbirine bağlanır. Bazı mikroservisler konsol arayüzü sunarken bazı mikroservisler de web kullanıcısı arayüzü sunabilir.

Mikroservisler mimarisi kalıbı, uygulama ile veritabanı arasındaki ilişkiyi önemli ölçüde etkiler. Tek bir veritabanı şemasının diğer hizmetlerle paylaşılması yerine her mikroservisin kendi veritabanı şeması olur. Bir yandan, bu yaklaşım kurumsal çapta bir veri modeli fikri ile çelişmektedir. Ve zaten bu yaklaşım bazı verilerin geçici kopyalarının oluşturulması sonucunu doğurur. Ancak mikroservisler mimarisinden gereken düzeyde fayda sağlanması düşünülüyorsa gevşek bağlaşıklık (loose coupling) sağladığı için servis başına bir veritabanı şeması olması önemlidir. Servislerin her birinin kendi veritabanı şeması olur. Dahası, bir servis, ihtiyaçlarına en uygun poliglot kalıcılık mimarisi (polyglot persistence architecture) olarak adlandırılan bir veritabanı çeşitliliğini kullanabilir.

Ayrıca bazı API’lar mobil uygulamalar, masaüstü uygulamalar ve web uygulamaları tarafından da kullanılabilir. Ancak uygulamaların back-end servislerine doğrudan erişimi olmaz. Bunun yerine, iletişime “API Gateway” denen bir arabulucu aracılık eder. API Gateway, yük dengeleme (load balancing), önbellekleme (caching), erişim kontrolü, API ölçümleme (metering) ve monitörleme (monitoring) gibi görevlerden sorumludur.

Mikroservisler mimarisi kalıbı, Ölçeklenebilirlikteki “Scale Cube” modelinde Y ekseni ölçeklendirmeye karşılık gelir.

![Ölçekleme Kübü (Scale Cube)](/assets/img/2020/10/scale-cube.png "Ölçekleme Kübü (Scale Cube)")

### Mikroservisler Mimarisinin Getirileri

- Uygulamayı, geliştirilmesi çok daha hızlı, anlaşılması ve bakımı çok daha kolay, yönetilebilir servislere ayrıştırarak karmaşıklık probleminin üstesinden gelir.
- Her servis, servise odaklanan bağımsız birer ekip tarafından geliştirilir.
- Geliştiriciler, servisleri için neyin uygun olduğunu, neyin olmadığını bağımsızca seçebilirler ve projenin başlangıcında yapılan seçimlere sıkı sıkıya bağımlı olmadıklarından dolayı yeni teknolojilerin benimsenmesinin önündeki engeller azalır.
- Her mikroservisin bağımsız olarak deploy edilmesini sağlar.
- Karmaşık uygulama sistemleri için sürekli deployment’ı mümkün kılar.
- Her servisin birbirinden bağımsız olarak ölçeklendirilmesini sağlar.

### Mikroservisler Mimarisinin Sakıncaları

- Mikroservisler sistemi dağıtık bir sistem (distributed system) olduğundan dolayı sisteme bir karmaşıklık katar. Mesajlaşmaya ya da RPC’ye dayalı süreçler arası bir iletişim mekanizması seçip implemente etmek, kısmi arızaların üstesinden gelmek için kod yazmak, dağıtık bilgi işlemenin (distributed computing) diğer bazı saçmalıklarını da dikkate almak gerekir.
- Bölümlendirilmiş veritabanı mimarisine sahiptir. Mikroservisler tabanlı bir uygulamada birden fazla business entity’yi güncelleyen servis etkileşimleri birden fazla servisin sahip olduğu birden fazla veritabanı şemasında güncellemeye ihtiyaç duyabilir. Veritabanlarının çoğunun desteklediği distributed transaction’lar (XA) da çoğunlukla bir seçenek değildir. Ve sonuçta düşük tutarlılığa dayalı yöntemler kullanmak zorunda kalınır. Bu geliştiriciler için daha acı verici bir durumdur.
- Bir mikroservisler uygulamasının test edilmesi monolitik uygulamadakinden çok daha karmaşıktır. Bir servisi test etmek için bağımlı olduğu diğer servisleri de test case’i ile ayakta tutmak gerekebilir. En azından ekstra bir efor ile o bağlı servisleri taklit edebilecek stub’lar yapılandırılması gerekir.
- Birden fazla servisi kapsayan değişiklikleri hayata geçirmek daha zordur. Monolitik uygulamada alakalı modüllerde basit değişiklikler yapmak, ardından değişiklikleri entegre etmek ve deploy etmek bir defada olurdu. Mikroservisler mimarisinde ise hizmetlerin her birinde yapılması düşünülen değişikliklerin dikkatlice planlanması ve sürümler arası koordinasyonun iyi sağlanması gerekir.
- Mikroservisler tabanlı bir uygulamayı deploy etmek daha karmaşıktır (zor değil karmaşık). Monolitik bir uygulama, bir yük dengeleyicisinin ardındaki bir grup benzeşen sunucular üzerine bir defada deploy edilebilir. Buna karşın, bir mikroservisler uygulaması tipik olarak büyük sayıdaki servislerden oluşur. Her servisin birden fazla runtime örneği vardır. Ve her örnek yapılandırılmalı, deploy edilmeli, çoğaltılıp ölçeklendirilmeli, monitör edilmeli. İlaveten, bir servis keşif mekanizması kurmak da gerekecektir. Operasyonları elle kontrol yaklaşımı bu seviyedeki bir karmaşıklığa karşı çok zayıf kalır. Mikroservisler mimarisi yüksek düzeyde otomasyon gerektirir.

## Özetle

Karmaşık uygulamalar inşa etmek doğal olarak zordur. Monolitik mimari basit ve hafif uygulamalarda daha iyidir. Karmaşık bir uygulamayı inşaya monolit başlamayı öngören görüşler de var, doğrudan mikroservisler yaklaşımı ile başlamayı tavsiye eden görüşler de var. Her halükarda monolitik mimariyi anlamak mikroservisler mimarisinin temeli olması açısından çok önemli. Mikroservisler mimarisi kalıbı, karmaşık ve karmaşıklığı gelişen uygulamalar için daha iyi bir seçenektir. Aslında mikroservisler yaklaşımı tamamen, karmaşık sistemler içindir. Fakat bu yaklaşım kendi karmaşıklık kümelerini ve bazı uygulama zorluklarını beraberinde getirir.

*Not*: Anthon Kharenko’nun yazısından faydalanılmıştır.