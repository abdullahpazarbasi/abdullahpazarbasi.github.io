---
id: 1413
title: 'MySQL JOIN Cheatsheet'
date: '2021-07-22T17:30:26+03:00'
author: 'Abdullah Pazarbaşı'
layout: revision
guid: 'http://www.abdullahpazarbasi.com/?p=1413'
permalink: '/?p=1413'
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

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/select-star-from-a.png?resize=446%2C272&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/select-star-from-a.png?ssl=1)<figcaption>Yalnız A</figcaption></figure></div>```sql
-- Yalnız B:
SELECT * FROM B;
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/select-star-from-b.png?resize=450%2C278&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/select-star-from-b.png?ssl=1)<figcaption>Yalnız B</figcaption></figure></div>Gelelim `JOIN` ‘lere. Yalnızca temel JOIN işlemlerini tanıtacağım. Bunlar **transactional DB** işlemlerinde en çok lazım olan JOIN deklarasyonlarıdır. A ve B kümeleri yalnızca `id` ‘lerden müteşekkildir. `name` alanı ile işimiz yok. Onu meta olarak düşünün.

### A Kesişim B Birleşim A Kesişim B (INNER JOIN)

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-intersect-b-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-intersect-b-schema.png?ssl=1)<figcaption>INNER JOIN</figcaption></figure></div>A kesişim B kümesi; yani A ve B kümelerinin kesişim kümesi; yani A kümesindeki id ‘ler ile B kümesindeki id ‘lerden ortak olanların kümesi; yani A tablosundaki satırlar ile B tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- A kesişim B birleşim A kesişim B (INNER JOIN using id):
SELECT A.*, B.* FROM A INNER JOIN B ON (A.id = B.id);
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-intersect-b.png?resize=688%2C160&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-intersect-b.png?ssl=1)<figcaption>INNER JOIN</figcaption></figure></div>Aynı sonucu `INNER` kelimesini kullanmadan da elde edebilirsiniz:

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

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-union-a-intersect-b-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-union-a-intersect-b-schema.png?ssl=1)<figcaption>LEFT OUTER JOIN</figcaption></figure></div>A birleşim A kesişim B; yani A kümesi ile A ve B kümelerinin kesişim kümesi; yani A kümesindeki id ‘ler ile birlikte A kümesindeki id ‘ler ile B kümesindeki id ‘lerden ortak olanların kümesi; yani A tablosundaki satırlar ile birlikte A tablosundaki satırlar ile B tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- A birleşim A kesişim B (LEFT OUTER JOIN using id):
SELECT A.*, B.* FROM A LEFT OUTER JOIN B ON (A.id = B.id);
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-union-a-intersect-b.png?resize=688%2C195&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-union-a-intersect-b.png?ssl=1)<figcaption>LEFT OUTER JOIN</figcaption></figure></div>Solda tüm A tablosu satırlarını görüyorsunuz. Sağda ise yalnızca ortak id ‘li satır(lar) var. Sağdaki null değer(ler)i farkettiniz mi? İşte onlar A fark B kümesinin B tarafında bir karşılığının olmadığının ifadesi.

Aynı sonucu OUTER kelimesini kullanmadan da elde edebilirsiniz:

```sql
-- LEFT JOIN = LEFT OUTER JOIN:
SELECT A.*, B.* FROM A LEFT JOIN B ON (A.id = B.id);
```

### B Birleşim B Kesişim A (RIGHT JOIN)

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-union-b-intersect-a-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-union-b-intersect-a-schema.png?ssl=1)<figcaption>RIGHT OUTER JOIN</figcaption></figure></div>B birleşim B kesişim A; yani B kümesi ile B ve A kümelerinin kesişim kümesi; yani B kümesindeki id ‘ler ile birlikte B kümesindeki id ‘ler ile A kümesindeki id ‘lerden ortak olanların kümesi; yani B tablosundaki satırlar ile birlikte B tablosundaki satırlar ile A tablosundaki satırlardan aynı id ‘ye sahip olanlarının eşleşerek birleştirilmiş hali.

```sql
-- B birleşim B kesişim A (RIGHT OUTER JOIN using id):
SELECT A.*, B.* FROM A RIGHT OUTER JOIN B ON (A.id = B.id);
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-union-b-intersect-a.png?resize=688%2C192&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-union-b-intersect-a.png?ssl=1)<figcaption>RIGHT OUTER JOIN</figcaption></figure></div>Yine aynı sonucu OUTER kelimesini kullanmadan da elde edebilirsiniz:

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

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-schema.png?ssl=1)<figcaption>A EXCEPT B</figcaption></figure></div>```sql
-- A fark B:
SELECT A.*, B.* FROM A LEFT JOIN B ON (A.id = B.id) WHERE B.id IS NULL;
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b.png?resize=688%2C162&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b.png?ssl=1)</figure></div>### B Fark A

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-except-a-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-except-a-schema.png?ssl=1)<figcaption>B EXCEPT A</figcaption></figure></div>```sql
-- B fark A:
SELECT A.*, B.* FROM A RIGHT JOIN B ON (A.id = B.id) WHERE A.id IS NULL;
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-except-a.png?resize=688%2C162&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/b-except-a.png?ssl=1)</figure></div>### A Fark B Birleşim B Fark A Birleşim A Kesişim B Birleşim A Kesişim B (Full Outer Join)

<div class="wp-block-image image-background-white"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-union-b-except-a-union-a-intersect-b-schema.png?resize=688%2C516&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-union-b-except-a-union-a-intersect-b-schema.png?ssl=1)<figcaption>FULL OUTER JOIN</figcaption></figure></div>```sql
-- A fark B birleşim B fark A birleşim A kesişim B birleşim A kesişim B (Full Outer Join):
SELECT A.*, B.* FROM A LEFT OUTER JOIN B ON (A.id = B.id)
UNION
SELECT A.*, B.* FROM A RIGHT OUTER JOIN B ON (A.id = B.id);
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-union-b-except-a-union-a-intersect-b.png?resize=688%2C224&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-except-b-union-b-except-a-union-a-intersect-b.png?ssl=1)<figcaption>FULL OUTER JOIN</figcaption></figure></div>### A Kartezyen B (CROSS JOIN)

```sql
-- A kartezyen B (CROSS JOIN):
SELECT A.*, B.* FROM A CROSS JOIN B;
```

<div class="wp-block-image"><figure class="aligncenter size-large">[![](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-cartesian-product-b.png?resize=688%2C257&ssl=1)](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2020/12/a-cartesian-product-b.png?ssl=1)<figcaption>A X B</figcaption></figure></div>```sql
-- Şartsız JOIN = CROSS JOIN:
SELECT A.*, B.* FROM A JOIN B;
```

## Özetle

…