---
title: "Go Dilinde Nesne Yönelimli Programlama Kavramları"
date: 2023-04-14 17:30:45 +0300
layout: post
permalink: /platformlar/programlama/golang/go-dilinde-nesne-yonelimli-programlama-kavramlari
categories: [ "Platformlar", "Programlama", "Golang" ]
tags: [ "OOP", "Object-Oriented Programming", "Konseptler", "Kavramlar", "Go", "Golang" ]
published: true
---

## Sınıf (Class)

Go 'da sınıf taklidi için kullanılabilecek 2 unsur vardır:

### Yapılar (Structs)

Go dilinde, sınıflar yerine struct yapıları kullanılır. Struct yapıları, verileri gruplamak için kullanılır ve Go 'da nesne oluşturmak için kullanılır. Yani, bir struct yapısı bir sınıf gibi davranır ve nesnelerin yapısını tanımlar.

Sınıf yerine geçen bir yapı örneği:

```go
type Person struct {
    name string
    age int
}
```

### Metotlar (Methods)

Go dilinde, struct yapılarına bağlanan fonksiyonlara metot denir. Bu metotlar, struct yapısı ile birlikte çalışır ve nesnelere özgü işlemleri gerçekleştirirler. Metotlar, struct yapısına ait verilere erişebilirler ve nesnelerin davranışlarını kontrol edebilirler.

Yukarıdaki örnek yapıya bir metot bağlayalım:

```go
func (p *Person) sayHello() {
    fmt.Printf("Merhaba, benim adım %s ve ben %d yaşındayım.\n", p.name, p.age)
}
```

Bir metot, bir struct instance 'ı oluşturulduğunda çağrılabilir.

## Nesne (Nesne)

Go dilinde, nesne oluşturmak için struct kullanılır ve nesneye erişmek için pointer gerekir.

Bu yapı ile bir nesne oluşturmak için, özelliklere değer atanabilmelidir. Bunu yapmak için iki yöntem vardır:

### Yapı Literalleri

Yapıları doğrudan yapılandırmak için yapı literalleri (struct literals) kullanılabilir.

Aşağıdaki örnekte, yapıdan bir nesne oluşturuluyor ve bağlanan metot çağrılıyor:

```go
p := &Person{name: "Abdullah", age: 40}
p.sayHello()
```

### Yapıcı Fonksiyonlar

Go dilinde, yapıcı fonksiyonlar (constructor functions) kullanarak yapıya dışarıdan varsayılan değerler atanabilir. Zorunlu değerler bu fonksiyonun parametreleri olarak verilir.

Örnek bir yapıcı tanımlayalım;

```go
func NewPerson(name string, age int) *Person {
    return &Person{name: name, age: age}
}
```

Bu fonksiyon, belirli bir ad ve yaş değerleriyle bir "Person" nesnesi oluşturmak için kullanılabilir:

```go
p := NewPerson("Abdullah", 40)
```

## Kalıtım (Inheritance)

Go dilinde inheritance, yapılar kullanılarak sağlanabilir. Go dilinde, yapılara başka yapılar gömerek, inheritance benzeri bir ilişki elde edilebilir.

Örneğin, bir "Person" yapısı oluşturulabilir ve bu yapıya "Employee" yapısı gömülebilir. Bu, "Employee" yapısının, "Person" yapısındaki tüm özelliklere ve metotlara erişim sağlayacağı anlamına gelir.

```go
type Person struct {
    name string
    age int
}

type Employee struct {
    Person
    salary float64
}
```

Yukarıdaki örnekte, "Employee" yapısı, "Person" yapısını gömüyor. Bu, "Employee" yapısının "name" ve "age" özelliklerine doğrudan erişim sağlayabileceği anlamına gelir. Ayrıca, "Employee" yapısına ait bir metot, "Person" yapısına ait özelliklere erişebilir.

Aşağıdaki örnek, "Employee" yapısına ait bir metot oluşturur ve bu metot, "Person" yapısındaki özelliklere erişir:

```go
func (e *Employee) introduce() {
    fmt.Printf("Benim adım %s ve ben %d yaşındayım. Maaşım ise %f.\n", e.name, e.age, e.salary)
}
```

Bu metot, "Employee" yapısından bir nesne oluşturulduğunda çağrılabilir:

```go
e := &Employee{Person: Person{name: "Abdullah", age: 40}, salary: 100000}
e.introduce()
```

## Soyutlama (Abstraction)

Go dilinde, abstraction kavramı genellikle interface 'ler kullanılarak taklit edilir. Interface 'ler, bir nesnenin hangi metotları desteklediğini belirten bir tür sözleşmedir. Tanımlanan interface 'i uygulaması gereken tüm yapılar ve diğer tipler, üzerinde sözleşilen metotları emplemente etmek zorundadır.

Örneğin;

```go
type Shape interface {
    area() float64
}
```

Herhangi bir yapı, "Shape" interface 'ini uygulaması gerekiyorsa "area()" metodunu emplemente etmek zorunda kalır.

```go
type Rectangle struct {
    width  float64
    height float64
}

func (r *Rectangle) area() float64 {
    return r.width * r.height
}

type Circle struct {
    radius float64
}

func (c *Circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
```

Soyut arayüz, somut davranışlara dönüşmüş oldu.

```go
r := &Rectangle{width: 10, height: 5}
c := &Circle{radius: 7}

fmt.Println("Dikdörtgenin alanı:", r.area())
fmt.Println("Dairenin alanı:", c.area())
```

Bir soyut arayüz ile iki daha somut davranış elde etmiş bulunuyoruz.

## Polimorfizm (Polymorphism)

Go dilinde polymorphism kavramı, farklı yapılardan oluşan nesnelerin aynı metotları kullanabilmesi anlamına gelir. Bu, farklı yapılardan oluşan nesnelerin aynı şekilde davranabilmesini sağlar.

Örneğin, "Shape" interface 'ini kullanarak polymorphism kavramını gösterelim. Yukarıda bahsedildiği gibi, "Shape" interface 'i bir "area()" metodunu tanımlar. Bu metot, farklı şekillerin alanlarını hesaplamak için kullanılabilir.

Bir "Shape" interface 'i için bir slice oluşturabilir ve bu slice 'a farklı yapılardan oluşan nesneler eklenebilir:

```go
shapes := []Shape{
    &Rectangle{width: 10, height: 5},
    &Circle{radius: 7},
}
```

Farklı yapılar ama aynı arayüzlü elemanlardan oluşan bir slice elde edildi.

```go
for _, shape := range shapes {
    fmt.Println("Alan:", shape.area())
}
```

Arayüz farkı bulunmadığından dolayı hiçbir iterasyonda mesele çıkmayacak. Ama her bir iterasyondaki davranış farklı olabilir.

Yani dıştan aynı fakat içten farklı davranış. Bu da polimorfizm demek.
