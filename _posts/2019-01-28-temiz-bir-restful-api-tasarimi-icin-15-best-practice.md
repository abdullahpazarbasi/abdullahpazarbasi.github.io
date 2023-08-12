---
title: "Temiz Bir RESTful API Tasarımı için 15 Best-Practice"
date: 2019-01-28 16:46:05 +0300
layout: post
permalink: /yazilim/tasarim/temiz-bir-restful-api-tasarimi-icin-15-best-practice
categories: [ "Yazılım", "Tasarım" ]
tags: [ "API", "Best Practice", "Çabuk Anlaşılabilirlik", "DELETE Metodu", "Doğru Tasarım", "Düzenli İfadeler", "End-Point", "Error-Payload", "GET Metodu", "Hata Tamiri Hızı", "HATEOAS", "Headers", "HTTP", "HTTP Status Codes", "Kararlılık", "Kullanım Kolaylığı", "PATCH Metodu", "PCRE", "POST Metodu", "PUT Metodu", "Query Parameters", "Regular Expressions", "Resource", "REST", "RESTful", "Sayfalama", "Serializasyon", "Serialization Groups", "Sıralama", "Slug Names", "Süzme", "Tasarım", "Uç Nokta", "URI", "UUID", "Versiyonlama" ]
published: false
---

Doğru bir API tasarımı, kullanım kolaylığı, çabuk anlaşılabilirlik, hata tamirinde hız ve kararlılığa katkı sağlar. Ayrıca API arkasındaki aplikasyonun doğru bir yapıyla inşa edilmesinde ve geliştirilmesinde geliştiriciyi olumlu yönlendirir.

Bu maddelerin önem sırasına göre dizilmediğini bildirmeliyim. Bence hepsi birbirini tamamlayıcı pratikler.

## İsim kullan, fiil kullanma

REST (Temsili Durum Aktarımı) **kaynak yönelimlidir (resource-oriented)**. Ve bir kaynak URI ile ifade edilir. Dolayısıyla kaynak isimle ifade edilir. Fiil zaten metottur. RESTful’da end-point ise fiil ve isimin bir kombinasyonu ile ifade edilir:

```plaintext
Resource: /cars
Method: GET
End-point: GET /cars
İş: Araba listesi döndürür

Resource: /cars
Method: POST
End-point: POST /cars
İş: Araba oluşturur

Resource: /cars
Method: PUT
End-point: PUT /cars
İş: Arabaları topluca replace eder

Resource: /cars
Method: PATCH
End-point: PATCH /cars
İş: Arabaları topluca kısmi günceller

Resource: /cars
Method: DELETE
End-point: DELETE /cars
İş: Arabaların hepsini siler

Resource: /cars/123
Method: GET
End-point: GET /cars/123
İş: ID'si 123 olan arabayı döndürür

Resource: /cars/123
Method: POST
End-point: POST /cars/123
İş: Method Not Allowed 405 hatası döndürür

Resource: /cars/123
Method: PUT
End-point: PUT /cars/123
İş: ID'si 123 olan arabayı replace eder

Resource: /cars/123
Method: PATCH
End-point: PATCH /cars/123
İş: ID'si 123 olan arabayı kısmi günceller

Resource: /cars/123
Method: DELETE
End-point: DELETE /cars/123
İş: ID'si 123 olan arabayı siler
```

Resource yolu olarak fiil kullanmayın. Şunlar gibi:

```plaintext
/getAllCars
/createNewCar
/deleteAllBlackCars
```

Anlaşıldığı üzre metotlar yani fiiller CRUD işlemlerine karşılık geliyor: `GET` `oku`‘ya, `POST` `oluştur`‘a, `PUT` `güncelle`‘ye ya da `yerleştir`‘e, `PATCH` `kısmi güncelle`‘ye, `DELETE` `sil`‘e denktir.

## GET metodu ve query parametreleri nesne veya nesnelerin state’ini değiştirmemeli

Sistemin state’ini değiştirmeye yönelik taleplerde `POST`, `PUT`, `PATCH` veya `DELETE` metotlarını kullanın.

Örneğin şunları kullanmayın:

```http
GET /cars/123?activate
GET /cars/123/activate
```

## Koleksiyonlar için yalnızca çoğul isim kullan

Resource path’i `/collection/item/collection/item/collection/item...` analojisi ile belirlenmeli. Resource path’indeki koleksiyonlar için şunlarda olduğu gibi yalnızca çoğul isim kullanın:

```plaintext
GET /cars/123 ( /car/123 değil )

GET /users ( /user değil )

GET /settings/notification-sending ( /setting/notification-sending değil )

GET /orders/789/statuses/delivered ( /orders/789/status/delivered değil )

POST /customers/123/segmentation-changings (/customers/123/segmentation-changing değil)
```

## Bir resource eğer başka bir resource ile ilişkili ise sub-resource düzenini kullan

```plaintext
Resource: /cars/123/drivers
Method: GET
İş: ID'si 123 olan arabanın sürücü listesini döndürür

Resource: /cars/123/drivers/456
Method: GET
İş: ID'si 123 olan arabanın sürücülerinden ID'si 456 olanı döndürür
```

Burada `/cars/123/drivers/456` resource path’indeki `drivers/456` ile gösterilenin bir **sub-resource** olduğunu varsaymalısınız. Eğer sub-resource değil de **resource** olsaydı `/drivers/456` şeklinde tek başına ifade edilebiliyor olurdu.

Olur da resource path’ini belirlemekte zorlanırsanız, resource’un gövdesini statik bir dosya sistemi dosyası olarak düşünün. “Bu dosyayı hangi klasör yapısı içindeki hangi klasöre koyardınız??” Bu bakış açısı doğru resource path’ini belirlemenizde size yol gösterecektir.

## Döndürülmesi istenen içerik tipini header bölümünde iste ve döndürülecek içeriğin tipini header bölümünde belirt

İstemci de sunucu da hangi format’ta iletişim kurması gerektiğini bilmelidir. Bu bilgi HTTP header’ları ile aktarılmalıdır.  
 `Content-Type` header’ı, request gövde format’ını bildirmek için;  
 `Accept` header’ı, response format’ını veya format listesini bildirmek için kullanılmalıdır.

## Serializasyon’a girecek model ve alt modelleri filtrelemek için HTTP header’larını kullan

Serialize edilecek response çıktı yapısı bir ya da birden fazla parametreye bağlı olacaksa bu bir header unsuru olarak bildirilmelidir. Örneğin:

```http
X-Serialization-Groups: CarDetails,DriverDetails
```

Bu parametre aynı zamanda response’a katılmayacak herhangi model için boşu boşuna işlem yapmamak adına sunucu uygulamanın daha iç katmanlarında kullanılabilir.

## HATEOAS kullan

**H**ypermedia **a**s **t**he **E**ngine **o**f **A**pplication **S**tate, daha iyi API navigasyonu sağlayacak olan bir hypertext link kullanımı prensibidir. Örneğin:

```json
{
  "id": 123,
  "manufacturer": "BMC",
  "drivers": [
    {
      "id": 456,
      "name": "Abdullah Pazarbasi",
      "_links": [
        {
          "rel": "self",
          "href": "/api/v2/drivers/456"
        }
      ]
    }
  ]
}
```

## Koleksiyonlar için alan seçimi, filtreleme, sıralama ve sayfalama bilgisi sağla

### Alan Seçimi

Bir `fields` query parametresinin içinde virgülle ayrılmış alan isimlerini göndererek seçilen alanlar haricindekilerin payload’da bulunmamasını sağlayabilirsiniz. Bazen iletişim yükünü azaltmak için işe yarayabilir. Örneğin:

```http
GET /cars/123?fields=id,manufacturer,model
```

Fakat tam entegrasyon sağlanması gereken noktalarda alan seçimi doğru bir uygulama olmaz.

### Filtreleme

Süzme için şu örnekteki gibi parametre gönderebilirsiniz:

```http
GET /cars?color=black&classification=sport
```

### Sıralama

Artan ve azalan sıralama bildirmek için birden fazla alan için bile olsa şunun gibi kullanabilirsiniz:

```http
GET /cars?sort=-manufacturer,model
```

### Sayfalama

`offset` ve `limit` parametreleri ile sayfalama sağlayabilirsiniz. Örneğin:

```http
GET /cars?offset=0&limit=10
```

total count’u istemciye bildirmek için `X-Total-Count` header’ını kullanın.

Ya da `page` ve `page-size` parametreleri ile de sayfalama sağlayabilirsiniz. Örneğin:

```http
GET /cars?page=1&page-size=10
```

total pages’i istemciye bildirmek için `X-Total-Pages` header’ını kullanın.

Eğer API response payload’unu zarflıyorsanız sayfalama geribildirim bilgisini envelope meta’sı olarak gömmek daha iyidir.

## Versiyonla

Şunun gibi resource yolu öncesi versiyon bildirin:

```http
GET /api/v2/cars/123
```

Dikkat edilmesi gereken şeyler version başına `v` karakteri koymak ve versiyon numarasında nokta ( `.` ) kullanmamak.

Elinizde tek bir versiyon bulunsa bile, resource path’ini böylece versiyonlamaktan erinmeyin. Eğer sunucu uygulamanız geliş(tiril)meye devam ediyorsa, bir gün mutlaka kullanmak durumunda kalacaksınız mevcut consumer entegrasyonları akamete uğratmamak adına.

## Hataları, HTTP Status Code’ları ile ele al

Tüm status code’larını kullanmamıza gerek yok. Şunları kullanın:

```plaintext
200 - OK : Herşey yolunda
201 - Created : Yeni bir resource oluşturuldu
202 - Accepted : Güncelleme isteği kabul edildi ve işlenecek
204 - No Content : Resource listesi boş / Resource silindi
304 - Not Modified : İstemci önbelleklenen veriyi kullanabilir
```

4xx istemci hataları error-payload’unda açıklanmalıdır.

```plaintext
400 - Bad Request : Geçersiz request gövdesi / Eksik parametre / Geçersiz parametre
401 - Unauthorized : User authentication gerekiyor
403 - Forbidden : Sunucu talebinizi algıladı ve fakat reddetti / Sunucu talebinizi algıladı ve fakat talebi yapmaya yetkiniz yok
404 - Not Found : URI ardındaki tekil resource mevcut değil
405 - Method Not Allowed : Geçerli HTTP metodu söz konusu URI için kullanılamaz
406 - Not Acceptable : Accept* header'ları ile bildirilerek talep edilen ifade biçimi kabul edilebilirler arasında değil
409 - Conflict : Kendi içinde çelişki bulunan parametre seti veya hedef resource'ın geçerli state'i ile çelişkide olan parametre seti alındı
415 - Unsupported Media Type : Desteklenmeyen içerik tipi / Desteklenmeyen request gövde notasyonu (json, xml vb.)
422 - Unprocessable Entity : Ön koşulları gerçekleşmemiş olduğu için hedeflenen state değişimi gerçekleştirilemedi
```

Şöyle bir örnek ile bazı 4xx hataları arasındaki farklar daha iyi anlaşılabilir:

- Gönderilmesi beklenen `email` bilgisi gönderilmemişse veya adres kalıbına uymuyorsa 400 dönülür.
- Gönderilen `email` bilgisi verifikasyon işleminden geçemediyse ve geçersiz olduğu anlaşıldıysa 422 dönülür.
- Gönderilen `email` alanındaki e-posta adresi daha önce kaydedilenlerden ise 409 dönülür.

5xx sunucu hatalarının detayları production ortamında istemiciye ulaştırılmamalı ve fakat log’lanmalıdır.

```plaintext
500 - Internal Server Error : Tamamen beklenmedik bir hata oluştu
```

500 hatası uygulamada, yakalanmaya çalışılmayan veya başka bir değişle kendisine try/catch tuzağı kurulmayan exception’lar için kullanılmalıdır.

Burada sıralanan HTTP status’ları arasında yanlış anlaşılabilenler var.

Her başarılı işleme cevap olarak `200 OK` dönülmemeli. İşlemin türüne göre ayrım yapılmalıdır.

`202 Accepted`, bir `PUT` talebinin veya bir `PATCH` talebinin anında gerçekleşmesi sonucu döndürülmemesi gerekir. `202 Accepted` talebin geçerli olduğunu ve gerçekleştirilmek üzere kuyruğa alındığını bildirmek içindir. Başarılı bir `PATCH` **sonucunda** `200 OK` dönülmelidir. Başarılı bir `PUT` **sonucunda** -ki bu istekteki payload, identifier ile birlikte gelmiş olmalı- eğer yeni bir hedef resource oluştuysa `201 Created`, eğer var olan hedef resource güncellendiyse `200 OK` döndürülmesi gerekir. Bu arada `PUT` ile gönderilen payload identifier içermiyorsa talebin `PUT` yerine `POST` ile gerçekleştiriliyor olması gerekir.

Bir hata sonucunda meydana gelmemiş bir boş liste döndürülecekse `204 No Content` ile döndürülmelidir. Böyle bir durumda `200 OK` ya da `404 Not found` kullanılmamalıdır. `404 Not Found` tekil bir resource’un bulunamaması durumunda kullanılmalıdır.

Başarılı bir `DELETE` işlemi sonucu ister tekil resource için olsun ister birden fazla resource için olsun `204 No Content` döndürülmelidir.

İsimlerin çağrıştırdığının tersi olarak `401 Unauthorized` “unauthenticated” durumu, `403 Forbidden` ise “unauthorized” durumu için kullanılmalıdır.

Peki `error payload` ne sunmalı? Şu şekilde düzenlenebilir:

```json
{
  "errors": [
    {
      "publicMessage": "Foo",
      "privateMessage": "Bar",
      "code": "E123",
      "fields": [
        "baz"
      ],
      "moreInfo": "https://services.example.com/api/v2/errors/e123"
    }
  ]
}
```

## Response, domain dışınaysa zarfa koy

Uygulamanız domain’inizin dışına hitap ediyorsa döndürülmek istenen şey şunun gibi yalın `item` da olsa:

```json
{
  "id": 123,
  "name": "Ahmet Yilmaz"
}
```

şunun gibi `item collection` da olsa:

```json
[
  {
    "id": 123,
    "name": "Ahmet Yilmaz"
  },
  {
    "id": 456,
    "name": "Abdullah Pazarbasi"
  }
]
```

`data payload` zarflanarak bir `response payload` oluşturulmalı ve oluşturulan zarf gönderilmeli. Şunun gibi:

```json
{
  "errors": [],
  "warnings": [],
  "notices": [],
  "info": [
    {
      "privateMessage": "Process 1.234 seconds elapsed"
    }
  ],
  "data": [
    {
      "id": 456,
      "name": "Abdullah Pazarbasi",
      "_links": [
        "rel": "self",
        "href": "/api/v2/drivers/456"
      ]
    }
  ],
  "pagination": {
    "currentPage": 2,
    "pageSize": 1,
    "totalPages": 5,
    "_links": [
      {
        "rel": "first",
        "href": "/api/v2/cars/123/drivers?page=1&page-size=1"
      },
      {
        "rel": "previous",
        "href": "/api/v2/cars/123/drivers?page=1&page-size=1"
      },
      {
        "rel": "self",
        "href": "/api/v2/cars/123/drivers?page=2&page-size=1"
      },
      {
        "rel": "next",
        "href": "/api/v2/cars/123/drivers?page=3&page-size=1"
      },
      {
        "rel": "last",
        "href": "/api/v2/cars/123/drivers?page=5&page-size=1"
      }
    ]
  }
}
```

Zarfa koymazsanız ne olur? Meta-data’yı nerelere sıkıştırayım diye düşünmeye başlarsınız. Envelope, aktarılması gereken meta-data’ya ev sahipliği yapabilecek bir frame sağlar. Peki domain içi mesela bir mikro-servis response’u ile fark ne? Domain’iniz içinde meta-data aktarımı çok sık lazım olacak bir şey değil. Lazım hale gelse de ufak tefek meta-data’yı header’lara atıp meseleyi kapatabilirsiniz. Ne de olsa verici de alıcı da sizsiniz. Yani domain’iniz dahilindeki uygulamalar. Kontrat’ınızı kendinizle yapıyorsunuz. Ama domain’iniz dışındaki tüketicilerle kontratınız nasıl olacak? Header’lara veya multi-part response’un part’larından birine attığınızda ne olacak? Mesela JSON-Schema kullanıyor olsanız şema tanımlama dili olarak, header’daki meta-data’yı nasıl tanımlayacaksınız? Veya diğer body part’ındaki model için ikinci bir şema mı hazırlayacaksınız?

## HTTP metodu override’ına izin ver

Bazı proxy’ler yalnız `GET` ve `POST` metodlarını destekler. Aktüel metod `GET` ya da `POST` olsa da `X-HTTP-Method-Override` header’ının değeri kastedilen metod olarak verilip engel kaldırılabilir.

## URI’ın sonundaki taksim işaretini kızmadan ele al

```http
GET /cars/123/
```

Burada görüldüğü gibi sonuna fazladan taksim işareti konmuş. Böyle bir talebi kızarak geri çevirmeyip `301` kalıcı yönlendirmesi ile karşılayın.

## Güncellenmiş Nesneyi Döndür

Herhangi bir resource, `POST`, `PUT` ya da `PATCH` sorgusu sonucunda başarılı şekilde oluşturulduğunda, değiştirildiğinde ya da güncellendiğinde resource’un son state’i response’a yerleştirilmelidir.

## Tekil resource ve sub-resource’ların URI’daki karşılıkları için kullanılabilecek regular expression’lar (PCRE)

Sayısal ID’ler için:

```regex
^[1-9]\d*$
```

UUID’ler için:

```regex
^[\da-f]{8}\-[\da-f]{4}\-[1-5][\da-f]{3}\-[89ab][\da-f]{3}\-[\da-f]{12}$
```

Slug name’ler için:

```regex
^[a-z\d]+(?:\-[a-z\d]+)*$
```

Bir “separator” ile (mesela `,` ile) ayrılmış değerler için:

```regex
^(?P<item>(?:my_value|your_value))(?:,(?P>item))*$
```