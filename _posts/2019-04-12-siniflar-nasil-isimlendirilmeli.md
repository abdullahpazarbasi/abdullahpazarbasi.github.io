---
title: "Sınıflar Nasıl İsimlendirilmeli?"
date: 2019-04-12 09:49:03 +0300
layout: post
permalink: /yazilim/tasarim/siniflar-nasil-isimlendirilmeli
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Class", "İsimlendirme", "Naming", "Nasıl", "Sınıf" ]
published: false
---

## Sınıflara nasıl isim verilmeli

### Sınıfların isim formatı nasıl olmalı?

1. Sınıf isimlendirmede “pascal case” kullanılmalı. (Bkz. [İsimlendirme Gelenekleri](/yazilim/isimlendirme-gelenekleri-naming-conventions))
2. Sınıf ismi, **namespace’den bağımsız** düşünülmeli.
3. Business model sınıf isimlerinin sonuna *…Model* **eklenmemeli**.
4. Soyut sınıfların isimlerinin başına *Abstract…* eklenmeli.
5. Arayüz’lerin isimlerinin sonuna *…Interface* eklenmeli.
6. Helper sınıflarının isimlerinin sonuna *…Helper* eklenmeli.
7. Utility sınıflarının isimlerinin sonuna *…Utility*, *…Util* veya *…Utils* **eklenmemeli**.
8. Trait’lerin isimlerinin sonuna *…Trait* eklenmeli.
9. Veri aktarma nesnelerinin (data transfer objects) isimlerinin sonuna *…DTO* veya *…Dto* **eklenmemeli**. Bunun yerine sınıfın kimliğini veya sorumluluğunu açıklayıcı ekler kullanılmalı. DTO kavramının bir klasifikasyon ismi olduğu unutulmamalı. Mesela:  
    *…Command*  
    *…Configuration*  
    *…Context*  
    *…Credentials*  
    *…Details*  
    *…Element*  
    *…Event*  
    *…Header*  
    *…Instruction*  
    *…Item*  
    *…Message*  
    *…Metadata*  
    *…Operation*  
    *…Parameter*  
    *…ParameterBag*  
    *…Payload*  
    *…Representation*  
    *…Request*  
    *…Response*  
    *…Result*  
    *…Row*  
    *…Settings*  
    *…Specification*  
    *…Status*  
    *…Summary*  
    *…View*
10. Entity sınıf isimlerinin sonuna *…Entity* **eklenmemeli**.
11. Bundle sınıf isimlerinin sonuna *…Bundle* eklenmeli.
12. Package sınıf isimlerinin sonuna *…Package* eklenmeli.
13. Extension sınıf isimlerinin sonuna *…Extension* eklenmeli.
14. Controller sınıf isimlerinin sonuna *…Controller* eklenmeli.
15. Exception sınıf isimlerinin sonuna *…Exception* eklenmeli.
16. Type sınıf isimlerinin sonuna *…Type* eklenmeli.
17. Service sınıf isimlerinin sonuna *…Service* eklenmeli.
18. Repository sınıf isimlerinin sonuna *…Repository* eklenmeli.
19. Test sınıf isimlerinin sonuna *…Test* eklenmeli.
20. Bir sınıf traversable ise ve aynı sınıftan nesnelerin listesini barındırıyorsa sınıfın isminin sonuna *…Collection* eklenmeli.

## Namespace İsimlendirmeleri Nasıl Olmalı?

1. Sınıf ismi çatışmalarını önlemeye ve uzun sınıf isimlerini kısaltmaya yönelik oldukları unutulmamalı.
2. Sınıfın içinde bulunduğu dosya sistemi dizin path’i, sınıfın fully-qualified namespace’ine karşılık gelmeli.
3. Namespace, sınıf isminden bağımsız **düşünülmemeli**.
4. Namespace’in kök name’i (sıfırıncı seviye) vendor ismi olmalı.
5. Birinci seviye namespace name’i ana paket ismi olmalı.
6. Ana paket namespace name’inin bulunduğu seviyeden sonraki seviyelerde alt paket namespace name’leri bulunmalı.
7. Business domain ismi de bir paket ismi olabilir.
8. Homojen içeriklerin barındığı paketlerin isimleri çoğul, heterojen içeriklerin barındığı paketlerin isimleri tekil olmalı.
9. Bir package (paket) eğer bir category (kategori), classification (klasifikasyon) ya da bucket’a (bukete) karşılık geliyorsa tekildir ve altındaki sınıf “-nın içinde” (in …) diye ifade edilir. Ama eğer bir package (paket) bir type (tip), label (etiket) ya da identification’a (kimliklendirmeye) karşılık geliyorsa çoğuldur ve altındaki sınıf “-dan bir …” (a … of …) diye ifade edilir.
10. Common, Commons, Other, Others, Global, Globals, Core, Lib, Libs gibi çok geniş kapsamlı paket isimleri kullanılırken dikkatli olunmalı.
11. `Interface` bir tip olarak algılanmamalı; bir klasifikasyon olarak algılanmalı.

### Örneğin,

`Acme`‘nin bir vendor, `Staff`‘ın bir business domain ve `Task`‘ın bir classification (klasifikasyon) olduğunu düşünürsek, PHP’de;

Acme\\Staff\\Task\\TaskManager  
Acme\\Staff\\Task\\TaskHandler  
Acme\\Staff\\Task\\TaskFactory  
Acme\\Staff\\Task\\TaskResolver

gibi sınıflar, görüldüğü gibi, `tekil` Task namespace’i altında bulunur.

Ama `Task` eğer bir type (tip) ise, PHP’de;

Acme\\Staff\\Tasks\\OrderTask  
Acme\\Staff\\Tasks\\ShippingTask  
Acme\\Staff\\Tasks\\FindTask  
Acme\\Staff\\Tasks\\CollectGarbageTask

gibi sınıflar, görüldüğü gibi, `çoğul` Tasks namespace’i altında bulunur.

Benzer biçimde bazı yaygın tipleri sıralayacak olursak; `Service` bir tiptir ve bu tipten bir sınıfın PHP’deki FQN’i mesela `Acme\MyDomain\Services\FooService` olur. `Trait` bir tiptir ve bu tipten bir trait’in PHP’deki FQN’i mesela `Acme\MyDomain\Traits\BarTrait` olur (ki zaten Trait reserved keyword’tür ve namespace içinde tekil kullanamazsınız). Exception bir tiptir ve bu tipten bir sınıfın PHP’deki FQN’i mesela `Acme\MyDomain\Exceptions\NotFoundException` olur. Helper bir tiptir ve bu tipten bir sınıfın PHP’deki FQN’i mesela `Acme\MyDomain\Helpers\UrlHelper` olur. `Validator` bir tiptir ve bu tipten bir sınıfın PHP’deki FQN’i mesela `Acme\MyDomain\Validators\BazValidator` olur. `DependencyInjection` bir klasifikasyondur ve bu sınıflandırmanın PHP’deki FQN’i mesela `Acme\MyBundle\DependencyInjection\Configuration` olur.

Namespace ve Class isimlendirmeye ilişkin PSR kurallarını incelemek için: <https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md#3-namespace-and-class-names>