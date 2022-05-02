---
title: "MySQL JOIN Cheatsheet"
date: 2020-12-27 19:05:49 +0300
layout: post
permalink: /platformlar/veritabani/mysql-join-cheatsheet
categories: [ "Platformlar", "Veritabanı", "Database" ]
tags: [ "INNER JOIN", "JOIN", "LEFT JOIN", "MySQL", "OUTER JOIN", "RIGHT JOIN" ]
published: true
---

Test için 2 tablo – yani 2 küme – kullanacağız. Örnekleri takip etmesi kolay olsun diye ikişer eleman verdim. Şimdi test ön gereksinimlerini gerçekleştirelim:

```sql
CREATE TABLE IF NOT EXISTS A (
    id INT(10) NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL
) ENGINE = MEMORY;
CREATE TABLE IF NOT EXISTS B (
    id INT(10) NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL
) ENGINE = MEMORY;
TRUNCATE TABLE A;
TRUNCATE TABLE B;
INSERT INTO A (id, name) VALUES (1, 'I');
INSERT INTO A (id, name) VALUES (2, 'II');
INSERT INTO B (id, name) VALUES (1, 'I');
INSERT INTO B (id, name) VALUES (3, 'III');
```

Tablolarımızın durumu şöyle:

```sql
-- Yalnız A:
SELECT * FROM A;
```

![Yalnız A](/assets/img/2020/12/select-star-from-a.png "Yalnız A")

```sql
-- Yalnız B:
SELECT * FROM B;
```

![Yalnız B](/assets/img/2020/12/select-star-from-b.png "Yalnız B")

Gelelim `JOIN` ‘lere. Yalnızca temel JOIN işlemlerini tanıtacağım. Bunlar **transactional DB** işlemlerinde en çok lazım olan JOIN deklarasyonlarıdır. A ve B kümeleri yalnızca `id` ‘lerden müteşekkildir. `name` alanı ile işimiz yok. Onu meta olarak düşünün.

### A Kesişim B Birleşim A Kesişim B (INNER JOIN)

![INNER JOIN](/assets/img/2020/12/a-intersect-b-schema.png "INNER JOIN")

A kesişim B kümesi; yani A ve B kümelerinin kesişim kümesi; yani A kümesindeki id ‘ler ile B kümesindeki id ‘lerden ortak olanların kümesi; yani A tablosundaki satırlar ile B tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- A kesişim B birleşim A kesişim B (INNER JOIN using id):
SELECT A.*, B.* FROM A INNER JOIN B ON (A.id = B.id);
```

![INNER JOIN](/assets/img/2020/12/a-intersect-b.png "INNER JOIN")

Aynı sonucu `INNER` kelimesini kullanmadan da elde edebilirsiniz:

```sql
-- JOIN using id = INNER JOIN using id:
SELECT A.*, B.* FROM A JOIN B ON (A.id = B.id);
```

Şartsız bir `NATURAL JOIN` ise tam olarak kesişim kümesini verir:

```sql
-- Şartsız NATURAL JOIN:
SELECT * FROM A NATURAL JOIN B;
```

### A Birleşim A Kesişim B (LEFT JOIN)

![LEFT OUTER JOIN](/assets/img/2020/12/a-union-a-intersect-b-schema.png "LEFT OUTER JOIN")

A birleşim A kesişim B; yani A kümesi ile A ve B kümelerinin kesişim kümesi; yani A kümesindeki id ‘ler ile birlikte A kümesindeki id ‘ler ile B kümesindeki id ‘lerden ortak olanların kümesi; yani A tablosundaki satırlar ile birlikte A tablosundaki satırlar ile B tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- A birleşim A kesişim B (LEFT OUTER JOIN using id):
SELECT A.*, B.* FROM A LEFT OUTER JOIN B ON (A.id = B.id);
```

![LEFT OUTER JOIN](/assets/img/2020/12/a-union-a-intersect-b.png "LEFT OUTER JOIN")

Solda tüm A tablosu satırlarını görüyorsunuz. Sağda ise yalnızca ortak id ‘li satır(lar) var. Sağdaki null değer(ler)i farkettiniz mi? İşte onlar A fark B kümesinin B tarafında bir karşılığının olmadığının ifadesi.

Aynı sonucu OUTER kelimesini kullanmadan da elde edebilirsiniz:

```sql
-- LEFT JOIN = LEFT OUTER JOIN:
SELECT A.*, B.* FROM A LEFT JOIN B ON (A.id = B.id);
```

### B Birleşim B Kesişim A (RIGHT JOIN)

![RIGHT OUTER JOIN](/assets/img/2020/12/b-union-b-intersect-a-schema.png "RIGHT OUTER JOIN")

B birleşim B kesişim A; yani B kümesi ile B ve A kümelerinin kesişim kümesi; yani B kümesindeki id ‘ler ile birlikte B kümesindeki id ‘ler ile A kümesindeki id ‘lerden ortak olanların kümesi; yani B tablosundaki satırlar ile birlikte B tablosundaki satırlar ile A tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- B birleşim B kesişim A (RIGHT OUTER JOIN using id):
SELECT A.*, B.* FROM A RIGHT OUTER JOIN B ON (A.id = B.id);
```

![RIGHT OUTER JOIN](/assets/img/2020/12/b-union-b-intersect-a.png "RIGHT OUTER JOIN")

Yine aynı sonucu OUTER kelimesini kullanmadan da elde edebilirsiniz:

```sql
-- RIGHT JOIN = RIGHT OUTER JOIN:
SELECT A.*, B.* FROM A RIGHT JOIN B ON (A.id = B.id);
```

#### RIGHT JOIN Kullanmak Zorunda mıyım?

Hayır. `RIGHT JOIN` yerine `LEFT JOIN` kullanabilirsiniz. `A` yerine `B`, `B` yerine `A` yazarsanız mesele kalmaz.

```sql
-- A RIGHT JOIN B = B LEFT JOIN A:
SELECT A.*, B.* FROM B LEFT JOIN A ON (B.id = A.id);
```

Bunu test ettiğinizde önceki ile aynı sonucu elde ettiğinizi göreceksiniz.

### A Fark B

![A EXCEPT B](/assets/img/2020/12/a-except-b-schema.png "A EXCEPT B")

```sql
-- A fark B:
SELECT A.*, B.* FROM A LEFT JOIN B ON (A.id = B.id) WHERE B.id IS NULL;
```

![A EXCEPT B](/assets/img/2020/12/a-except-b.png "A EXCEPT B")

### B Fark A

![B EXCEPT A](/assets/img/2020/12/b-except-a-schema.png "B EXCEPT A")

```sql
-- B fark A:
SELECT A.*, B.* FROM A RIGHT JOIN B ON (A.id = B.id) WHERE A.id IS NULL;
```

![B EXCEPT A](/assets/img/2020/12/b-except-a.png "B EXCEPT A")

### A Fark B Birleşim B Fark A Birleşim A Kesişim B Birleşim A Kesişim B (Full Outer Join)

![FULL OUTER JOIN](/assets/img/2020/12/a-except-b-union-b-except-a-union-a-intersect-b-schema.png "FULL OUTER JOIN")

```sql
-- A fark B birleşim B fark A birleşim A kesişim B birleşim A kesişim B (Full Outer Join):
SELECT A.*, B.* FROM A LEFT OUTER JOIN B ON (A.id = B.id)
UNION
SELECT A.*, B.* FROM A RIGHT OUTER JOIN B ON (A.id = B.id);
```

![FULL OUTER JOIN](/assets/img/2020/12/a-except-b-union-b-except-a-union-a-intersect-b.png "FULL OUTER JOIN")

### A Kartezyen B (CROSS JOIN)

```sql
-- A kartezyen B (CROSS JOIN):
SELECT A.*, B.* FROM A CROSS JOIN B;
```

![A X B](/assets/img/2020/12/a-cartesian-product-b.png "A X B")

```sql
-- Şartsız JOIN = CROSS JOIN:
SELECT A.*, B.* FROM A JOIN B;
```

## Özetle

…