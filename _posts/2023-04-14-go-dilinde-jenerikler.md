---
title: "Go Dilinde Jenerikler"
date: 2023-04-14 18:50:45 +0300
layout: post
permalink: /platformlar/programlama/golang/go-dilinde-jenerikler
categories: [ "Platformlar", "Programlama", "Golang" ]
tags: [ "Generics", "Jenerikler", "Konseptler", "Kavramlar", "Go", "Golang", "Type Parameters" ]
published: true
---

Go dilinin eski sürümlerinde jenerik desteği bulunmuyordu, ancak Go 1.18 sürümü ile birlikte jenerikler desteklenmeye başlandı.

Go dilinde jenerikler, farklı veri tiplerinde çalışan, aynı kod bloklarını yeniden kullanmak için varlar. Bu, kod tekrarını azaltır ve daha az hata ile daha az kod yazılmasını sağlar.

Jenerikler, Go dilinde "type parameters" ile ifade edilirler. "type parameters", fonksiyon veya yapı tanımları sırasında tanımlanır ve o an kullanılan veri tiplerine göre değişebilirler.

## Tip Parametreleri (Type Parameters)

Örneğin, aşağıdaki kod bloğunda bir "Swap" fonksiyonu, jenerik bir şekilde tanımlanmıştır:

```go
func Swap[T any](a, b *T) {
    *a, *b = *b, *a
}
```

Bu fonksiyon, "T" tipindeki herhangi bir veri tipi için çalışacaktır. Fonksiyonu kullanmak için, herhangi bir veri tipi belirlenebilir:

```go
a, b := 10, 20
Swap(&a, &b) // a = 20, b = 10
```

ya da

```go
x, y := "hello", "world"
Swap(&x, &y) // x = "world", y = "hello"
```

Go dilinde jeneriklerin desteğinin gelmesi, dilin daha esnek ve genel kullanıma sahip olmasını sağlar. Ayrıca, Go geliştiricileri tarafından tavsiye edilen belirli jenerik kullanım stilleri bulunmaktadır. Bu stillerin dışına çıkılmaması önerilir.
