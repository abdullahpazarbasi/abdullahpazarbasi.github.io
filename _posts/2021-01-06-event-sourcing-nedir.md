---
title: "Event Sourcing Nedir?"
date: 2021-01-06 10:36:35 +0300
layout: post
permalink: /yazilim/tasarim/event-sourcing-nedir
categories: [ "Yazılım", "Tasarım" ]
tags: [ "Command Model", "Architectural Tasarım Kalıpları", "Tasarım Kalıpları", "Veritabanı", "Yazılım Kavramları Sözlüğü", "Consistency", "CQRS", "CQS", "Event", "Event Sourcing", "Eventual Consistency", "Immutablity", "Projection", "Query Model" ]
published: true
---

Bir nesnenin bütünsel state’ini saklamak yerine, o nesnenin state değişimine sebep olan tüm olayların kronolojik olarak saklanması sayesinde bütünsel state’in ilk olaydan son olaya kadar bir aggregation ile – yani toparlayarak – hesaplanması sonucu elde edilmesine dayanan tekniktir.

Nesnenin state’ini oluşturan event’ler `immutable` ‘dır. Yani yalnızca oluşturulabilirler, güncellenemezler.

Geçmişte kalmış bir state’e dönmek için saklanmış olaylar geriye doğru silinir. Peki istenen state’e dönene kadar geçen zaman problem değil mi? Evet olabildiğince hızlı yapılmalı. Buna `eventual consistency` deniyor. Yani consistency, ancak bir zaman aralığı içinde tam olarak gerçekleşmiş oluyor.

Bir nesneyi yüklemek için hala her seferinde ilgili tüm olayları toparlamak ve hesaplamak gerekiyor. Bu darboğaz nasıl aşılmalı?

### CQRS

Yani `Command-Query Responsibility Segregation`.  
Yani Komut ve Sorgu Sorumluluk Ayrışması.  
Yani yazma ve okuma sorumluluklarının farklı sorumlulara dağıtılmasına dayanan bir tasarım şablonu. Bu şablonda nesne modellerinin de farklı olması gerekiyor. `command model` ve `query model`.

Event sourcing yaklaşımıyla saklanacak event modeli, command model olarak tasarlanır. Bütünsel state için gereken model ise query model olarak tasarlanır. Bu iki modelin farklı veri kaynaklarında saklanması tavsiye edilir. CQRS şablonunun `projection` denen aşamasında command model halindeki olaylar toparlanıp modelin bütünsel state’i elde edildikten sonra query model olarak yansıtılıp saklanır. Bu saklama, oluşturma ve silmenin yanısıra güncelleme şeklinde de olabilir. Çünkü query model `mutable` modeldir. Artık query model basit biçimde sorgulanabilir duruma gelmiştir.

## Özetle

- Command ile gelen değişimi olay modeli olarak sakla.
- Olay modellerini toparlayarak bütünsel modeli elde et ve query modeline yansıt.
- Query ile gelen model talebini karşılamak için query modelini veri kaynağından oku.