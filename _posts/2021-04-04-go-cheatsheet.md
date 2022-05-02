---
title: "Go Cheatsheet"
date: 2021-04-04 23:57:22 +03:00
layout: post
permalink: /platformlar/programlama/golang/go-cheatsheet
categories: [ "Platformlar", "Programlama", "Golang" ]
tags: [ ]
published: true
---

## Kısa Kısa Go

- Sentaksı `C` sentaksına yakın
- Açık kaynaklı
- Statik tipli
- Programlar native makine koduna derlenir
- `Imperative` dil
- Nesne yönelimli programlama yapılamaz
- `Object` yok
- Dolayısıyla `class` yok
- `Struct` ve `method` var
- `Interface` var
- Type seviyesinde encapsulation yok
- `Encapsulation` paket seviyesinde
- Kalıtım yok (zaten sınıf da yok) ama tip gömme var
- Birinci derece yazılım varlığı fonksiyon
- Fonksiyon, birden fazla değer döndürebilir (aslında bağıntı)
- `Exception` fırlatma yok
- İlave return elemanı olarak `error` döndürme var
- `Closure` var
- `Pointer` var ama pointer aritmetiği (`unsafe` paketi kullanılmazsa) yok
- Temel concurrency elemanları `goroutine` ve `channel`
- Hızlı derlenir
- Çöp toplayıcısı var
- Dahili paket yöneticisi var
- İşe yaramayan değerler `_` ‘ye atanır

### 2 Temel Ortam Değişkeni

`GOROOT` : Go’nun kurulduğu dizini içerir. Bu dizinde derleyici, doküman ve araçlar bulunur

`GOPATH` : Üçüncü taraf çalıştırılabilir dosyaların ve üçüncü taraf paketlerin yer aldığı dizini içerir. Bu dizine bir src klasörü içinde kendi geliştirmelerimizi de atabiliriz. `go get` üçüncü taraf paketleri bu dizinin içindeki `pkg` dizinine indirir

## Yorumlar (Comment)

```go
// Tek satır yorum

/*
Çok
satırlı
yorum
*/
```

## Tırnak İşaretlerinin Kullanımı

```go
'A' // Tek tırnak bir tek karakter (mesela char veya rune tiplerinde olan karakter) için kullanılır

"My String" // Birden fazla karakterden oluşan bir string için kullanılır fakat tek satırda tanımlamaya izin verir

`First line
Second line
Third line` // Bir string için kullanılır fakat yeni satır karakterlerinde escape yapmaya ihtiyaç bırakmaz

type MyClass struct {
	MyProperty int `json:"my_property,omitempty" xml:"MyProperty"` // Yapılarda meta bilgi annotation amaçlı etiketlemelerde çift tırnak escaping meselesi çıkmaması için kullanılabilir
}
```

## Çalıştırma (Running)

Bir programı en basit şekilde hem derleyip hem de ilk defa çalıştırma:

```shell
go run main_iceren_dosya.go
```

En basit örnek program:

```go
// demo.go
package main

import "fmt"

func main() {
	fmt.Println("Merhaba") // -> Merhaba
}
```

```shell
go run demo.go
```

Derlenmiş programı eğer derlendiği ortam ile özdeş ortamda ise çalıştırma:

```shell
./demo
```

## Paketler (Package)

### Paket Oluşturma

Her `go` dosyası bir pakete dahil edilir. Ve hangi pakete dahil olduğu dosyanın en başında deklare edilir:

```go
package mypack
```

Çalıştırılabilir dosya (executable) oluşturabilmek için başlangıç noktası (entrypoint) dosyası `main` paketine dahil edilir:

```go
package main
```

### Paket Kullanımı

Paketler kullanılması için başka bir dosyaya `import` ifadesi aracılığı ile dahil edilir:

```go
import "os"
```

Birden fazla paket import edilecekse:

```go
import (
	"os"
	"fmt"
	"mymodule/mypack"
	"github.com/example/examplepack"
)
```

> Paketlerin sabitleri, değişkenleri, fonksiyonları veya metotlarından yalnızca `exported` olanları paketin dışında kullanılabilir.

> Sabit, değişken, fonksiyon ve metotların isimleri büyük harfle başlıyorsa `exported`, küçük harfle başlıyorsa `unexported` olur.

Import edilen paketin içinden kullanılacak herhangi varlığın önüne paketin adı eklenip `separator` olarak `.` kullanılır.

Paketin adı, `/` ile ayrılmış paket yolunun son dilimidir.

Paket import edilirken pakete takma ad verilebilir. Mesela `mypack` paketi `mp` olarak kullanılmak istense:

```go
import (
	"fmt"
	mp "mymodule/mypack"
)
```

Import edilen paketin takma adı `.` olursa söz konusu kaynak paketteki varlıklar hedef paketin varlığıymış gibi kullanılabilir:

```go
import (
	"fmt"
	. "mymodule/mypack"
)
```

### Paket İndirme

Paket indirmek için komut satırından:

```shell
go get github.com/example/examplepack
```

## Modüller (Module)

### Modül Oluşturma

Komut satırı üzerinden oluşturulacak modülün kök dizinine gelinir ve `initialize` edilir:

```shell
mkdir mymodule
cd mymodule
go mod init example.com/myspace/mymodule
```

Bunun sonucunda modülün kök dizininde `go.mod` isimli bir dosya oluşur.

> Modül içinde modül oluşturulamaz. Bu sebeple modülün kök dizini yolu altında başka bir modülün kök dizini bulunamaz.

### Modül Bağımlılıkları

Modülün tüm bağımlılıklarını listelemek için:

```shell
go list -m all
```

Modülü kullanılmayan gereksiz bağımlılıklardan kurtarmak için:

```shell
go mod tidy
```

### Modül İndirme

Modül indirme ile paket indirme arasında bir fark yok:

```shell
go get example.com/myspace/mymodule
```

### Modül Kullanımı

> `go build` , `go test` gibi paket inşa komutları ile modüle dahil tüm paketlerin bağımlılıkları `go.mod` dosyasına eklenmiş olur.

> Modül ilk defa çalıştırıldığında modül kök dizininde `go.sum` dosyası oluşur. Bu bir bağımlılık `lock` dosyasıdır.

#### Modül İçinde Modül Kullanımı

```plaintext
// go.mod
module example.com/myspace/mymodule

go 1.123

require (
	example.com/anotherspace/anothermodule v1.0.0
)
```

##### Modül İçinde Yerel Modül Kullanımı

```plaintext
// go.mod
module example.com/myspace/mymodule

go 1.123

replace (
	"example.com/myspace/anothermodule" => "../anothermodule"
)

require (
	example.com/myspace/anothermodule v1.0.0
)
```

## Operatörler (Operators)

### Aritmetik (Arithmetic)

- `+` topla
- `-` çıkar
- `*` çarp
- `/` böl
- `%` kalanı bul

### Bitsel (Bitwise)

- `&` bitsel “ve”
- `|` bitsel “veya”
- `^` bitsel “ya da”
- `&^` bitsel “ve değil”
- `<<` bitleri sola kaydır
- `>>` bitleri sağa kaydır

### Mantıksal (Logical)

- `!` mantıksal “değil”
- `&&` mantıksal “ve”
- `||` mantıksal “veya”

### Karşılaştırma (Comparison)

- `==` eşit mi?
- `!=` eşit değil mi?
- `<` küçük mü?
- `<=` küçük veya eşit mi?
- `>` büyük mü?
- `>=` büyük veya eşit mi?

### Atama (Assignment)

- `=` ata
- `:=` deklarasyonlu ata / implicit tipli ata
- `+=` ekle ve ata
- `-=` çıkar ve ata
- `*=` çarp ve ata
- `/=` böl ve ata
- `%=` kalanı bul ve ata
- `&=` bitsel “ve” uygula ve ata
- `|=` bitsel “veya” uygula ve ata
- `^=` bitsel “ya da” uygula ve ata
- `<<=` bitleri sola kaydır ve ata
- `>>=` bitleri sağa kaydır ve ata

### Kanal (Channel)

- `<-` gönder / al

### İşaretçi (Pointer)

- `&` pointer oluştur (address operator)
- `*` referansı getir (dereferencing operator) (tabi bunu işaretçi tipi notasyonu için kullanılan \* ile karıştırmamak lazım)

## Yerleşik Tipler (Built-in Types)

> Yerleşik tipler türetilip özel tipler elde edilebilir

### Basit Tipler (Basic Types)

- `bool` // varsayılan değeri false
- `int` // varsayılan değeri 0
- `int8` // varsayılan değeri 0
- `int16` // varsayılan değeri 0
- `int32` // varsayılan değeri 0
- `rune` // unicode code point, int32 ‘nin diğer adı, varsayılan değeri 0
- `int64` // varsayılan değeri 0
- `uint` // varsayılan değeri 0
- `uint8` // varsayılan değeri 0
- `byte` // uint8 ‘in diğer adı, varsayılan değeri 0
- `uint16` // varsayılan değeri 0
- `uint32` // varsayılan değeri 0
- `uint64` // varsayılan değeri 0
- `uintptr` // varsayılan değeri 0
- `float32` // varsayılan değeri 0
- `float64` // varsayılan değeri 0
- `string` // varsayılan değeri “”
- `complex64` // varsayılan değeri (0+0i)
- `complex128` // varsayılan değeri (0+0i)

> Basit tipteki bir değişken boş olamaz. O değişken mutlaka, tipin varsayılan değerine sahiptir.

### Karma Tipler (Composite Types)

#### Yapı Tipleri (Struct Types)

> `struct` türevi tiplere metot bağlanabilir

#### Fonksiyon Tipleri (Func Types)

#### İşaretçi Tipleri (Pointer Types)

> Doğrudan bir tipin başına `*` konmasıyla ifade edilir

> İşaretçi tiplere metot bağlanabilir

> İşaretçi türevi tiplere metot bağlanamaz

#### Kanal Tipleri (Channel Types)

> `chan` veya türevi tiplere metot bağlanamaz

#### Arayüz Tipleri (Interface Types)

> `interface{}` dinamik tip anlamına geliyor

#### Konteyner Tipler (Container Types)

- Diziler (Arrays) – Sabit uzunluk (list gibi)
- Dilimler (Slices) – Değişken uzunluk ve değişken kapasite
- Maps – Değişken uzunluk (associative array veya dictionary gibi)

> Array, slice veya `map` türevi tiplere metot bağlanabilir

## Fonksiyon Çağırma (Function Call)

```go
myFunction() // Değer dönmeyen bir fonksiyonun çağrımı
yourFunction(v) // Değer alan ama değer döndürmeyen bir fonksiyonun çağrımı
i := int(f) // Değer alan ve değer döndüren bir fonksiyonun çağrımı
```

## Diziler (Array)

```go
a := [5]int{1, 2, 4, 8, 16} // Beş elemanlı array oluştu
a[4] = 32 // Array'in beşinci elemanı 32 oldu
n := a[4] // Değişken int olarak tanımlandı ve 32 oldu
```

```go
a := [...]{2, 4, 6} // Derleyici array'in boyutunu 3 olarak anlar
```

## Dilimler (Slice)

```go
s := []int{1, 2, 3} // Üç elemanlı bir array'in hepsi bir slice olarak alındı
```

```go
k := []string{0: "a", 2: "c", 1: "b"} // [a b c] şeklinde bir slice
```

```go
a := [3]string{"a", "b", "c"} // Üç elemanlı array oluştu
s := a[:] // Array'in hepsi slice olarak alındı
```

```go
a := [4]string{"a", "b", "c", "d"} // Dört elemanlı array oluştu
s1 := a[0:4] // Array'in ilk elemanından dördüncü ve son elemanına kadar dilim olarak alındı
s2 := a[1:] // Array'in ikinci elemanından son elemanına kadar dilim olarak alındı
s3 := a[:3] // Array'in ilk elemanından üçüncü elemanına kadar dilim olarak alındı
low := 1
high := 3
s4 := a[low:high] // Array'in ikinci elemanından üçüncü elemanına kadar dilim olarak alındı
```

```go
s := []string{"a", "b", "c", "d"} // [a b c d] şeklindeki bir slice
s = append(s, "e", "f", "g") // Slice [a b c d e f g] şeklini aldı
```

```go
s1 := []string{"a", "b", "c", "d"} // [a b c d] şeklinde bir slice
s2 := []string{"e", "f", "g", "h"} // [e f g h] şeklinde bir slice
s3 := append(s1, s2...) // -> [a b c d e f g h] şeklinde türemiş bir slice
```

```go
s1 := make([]int, 3) // Üç elemanlı bir array'den [0 0 0] şeklinde bir slice, kapasite opsiyonel
l1 := len(s1) // Uzunluk 3
c1 := cap(s1) // Kapasite 3
s2 := make([]int, 3, 10) // On elemanlı bir array'den [0 0 0] şeklinde bir slice
l2 := len(s2) // Uzunluk 3
c2 := cap(s2) // Kapasite 10
```

## Map

```go
m := map[string]bool{"k1": true, "k2": false} // map[k1:true k2:false] şeklinde bir map oluştu
m["k2"] = true // k2 anahtarlı eleman true oldu
e, ok := m["k2"] // k2 anahtarlı eleman mevcut olduğundan e -> true ve ok -> true
e, ok := m["k3"] // k3 anahtarlı eleman mevcut olmadığından e -> false (varsayılan bool değeri) ve ok -> false
```

```go
m := make(map[string]int) // Boş bir string anahtarlı int map'i
m["key"] = 12 // key anahtarlı 12 değeri set edildi
delete(m, "key") // key anahtarlı değer unset edildi
```

## Yapılar (Struct)

### Yapı Deklarasyonu (Struct Declaration)

```go
type Abc struct {
	A, B, C int
}

type Ghi struct {
	G string
	H int; I float64
}
```

### Yapı Örnekleme (Struct Instantiating)

```go
abc1 := Abc{1, 2, 3} // {1 2 3} şeklinde
abc2 := Abc{A: 1,  C: 3} // {1 0 3} şeklinde
col := []Abc{ {1, 2, 3}, {4, 5, 6} } // [{1 2 3} {4 5 6}] şeklinde
```

### Struct Üyelerine / Alanlara Erişim (Accessing Struct Members / Fields)

```go
type Abc struct {
	A, B, C int
}

abc := Abc{1, 2, 3} // {1 2 3} şeklinde
abc.A = 4 // {4 2 3} şeklinde
abc.C = 6 // {4 2 6} şeklinde
b := abc.B // b -> 2
```

## Arayüzler (Interface)

### Arayüz Deklarasyonu (Interface Declaration)

```go
type Producer interface {
	Produce() float64
	Consume()
}
```

> Somut tiplerin hangi `interface` ‘i gerçekleyeceği deklare edilmez.

## Değişken Deklarasyonu (Variable Declaration)

```go
var i int // Tek değişken deklare edildi ama initialize edilmedi. Değişkenin değeri int tipinin varsayılan değeri olan 0
var j int = 123 // Tek değişken hem deklare hem de initialize edildi
var k1, k2 int // Birden fazla değişken tek seferde deklare edildi ama initialize edilmedi
var l1, l2 int = 123, 456 // Birden fazla değişken tek seferde hem deklare hem de initialize edildi
n := 789 // Implicit tipli değişken deklarasyonu, yalnızca fonksiyon gövdelerinde, tip kararı derleyicide
```

## Tip İddiaları (Type Assertion)

```go
var i interface{} = "mystring" // i değişkeni aslında bir string
var v int // v değişkenini int olarak varsay
var ok bool
v, ok = i.(int) // i değişkeninin int olduğunu iddia ederek v değişkenine ata
fmt.Println(v, ok) // v değişkeninin değeri 0 olur, çünkü i aslında bir string, int olduğu yalnızca bir iddia idi, yani tip dönüştürmesi söz konusu değil, haliyle isabet değişkeni olan ok değişkeni de false olur
```

```go
var i interface{} = true // i aslında bir bool
var v string // v değişkenini string olarak varsay
v = i.(string) // i değişkeninin string olduğunu iddia ederek v değişkenine atarken isabet değişkenini eksik bırakırsan "panic" alırsın
```

```go
var i interface{} = 1.0
v, ok := i.(string) // şeklinde veya
y, _ := i.(bool) // şeklinde de iddia edilebilir
```

## Anonim Yapılar (Anonymous Struct)

```go
myStruct := struct {
	A, B int
}{1, 2}
```

> Anonim struct kullanımı `map[string]interface{}` kullanımından daha masrafsızdır.

## İşaretçiler (Pointers)

```go
// & operatörü bir değişkene veya üyeye işaret eden bir işaretçi oluşturur
abc := Abc{1, 2} // abc, normal bir değişken
p := &abc // p, referansı kapsama alınan bir değişkene işaret eden bir işaretçi
r := &Abc{1, 2} // r, referansı kapsamda bulunmayan bir değişkene işaret eden bir işaretçi
```

```go
// Başına * getirilmiş doğrudan tip, işaretçi tipidir
p := &Abc{1, 2} // p 'nin tipi *Abc 'dir
```

```go
var s *Abc = new(Abc) // Yerleşik fonksiyonlardan new fonksiyonu bir Abc 'ye işaret eden bir *Abc tipli işaretçi üretiyor
```

```go
// * operatörü bir expression 'da bir işaretçinin adının başına getirilirse işaret edilen değişkenin kendisi kastedilmiş olur
var i int
p := &i
fmt.Printf("%v %T\n", p, p) // 0xc000123000 *int
fmt.Printf("%v %T\n", *p, *p) // 0 int
```

```go
// Dolaylı atama (indirect assignment) yapmak için atama yapılan işaretçinin adının başına * getirilir
var i int = 1
var p *int = &i
*p = 2
fmt.Printf("%v\n", i) // i değişkeninin değeri artık 2
```

```go
i := 1
p := &i // i 'ye işaret eden bir işaretçi
q := &*p // i 'ye işaret eden bir başka işaretçi
r := *&p // i 'ye işaret eden bir diğer işaretçi
```

```go
s := []string{"A", "B"} // [A B] []string
p := &s // &[A B] *[]string
a := (*p)[1] // B string
```

```go
s := "A" // A string
p := &s // 0xA0000012345 *string
q := &p // 0xA0000067890 **string
*(*q) = "B" // s şimdi "B" oldu
**q = "C" // s şimdi "C" oldu
```

## Değişken Kapsamı (Scope of Variables)

### Yerel Değişkenler (Local Variables) ve Genel Değişkenler (Global Variables) Farkı

```go
package main

import (
	"fmt"
)

var myVariable int = 1 // Herhangi bir blokun dışında olduğu için global değişkendir

func main() { // Fonksiyon tanımı bir bloktur
	fmt.Println(myVariable) // Bu noktada myVariable değeri 1, çünkü global değişken geçerli
	var myVariable int = 2 // Blokta tanımlandığı için yerel değişkendir. Bu blok ve alt blokların tümünde geçerli. Global olan ile aynı isimde olduğu için de artık bu blok ve alt blokların hiçbirinde global olana erişilemez
	fmt.Println(myVariable) // Bu noktada myVariable değeri artık 2
	for { // Loop bir bloktur
		fmt.Println(myVariable) // Yeni bir bloka daha girildi ama myVariable değeri hala 2
		var myVariable int = 3 // Blokta tanımlandığı için yine yerel değişkendir. Bu blok ve alt blokların tümünde geçerli. Üst blokta yani fonksiyon blokunda tanımlanan ile aynı isimde olduğu için üst bloktakine de globaldekine de erişilemez
		fmt.Println(myVariable) // Bu noktada myVariable değeri artık 3
		break
	}
	fmt.Println(myVariable) // Loop blokundan çıkıldığı için bu noktada myVariable değeri 2
}
```

## Sabit Deklarasyonu (Constant Declaration)

```go
const c1 int = 123 // Tip belirleyerek sabit deklarasyonu
const c2 = 456 // Implicit tipli sabit deklarasyonu
```

## Yapı Gömme (Struct Embedding)

```go
type Client struct {
	ApiHost string
	ApiPort int
	*log.Logger
}

client := &Client{"api.example.com", 80, log.New()}
client.Log("Ok") // Logger gömüldüğünden dolayı bu şekilde yazılarak aslında client.Logger.Log() çağrılır
var logger *log.Logger = client.Logger // Bu da sağlaması
```

## Tip Dönüşümleri / Tip Çarpıtma (Type Conversion / Type Casting)

> Yerleşik tip dönüşüm fonksiyonlarının adları tiplerin adları ile aynıdır.

```go
f := -123.45 // -123.45
i := int(f) // -123
u := uint(i) // 18446744073709551493
```

## Kontrol Yapıları (Control Structures)

### If-Else

```go
// Basit if - else if - else
if i > 0 {
	return 1
} else if i == 0 {
	return 0
} else {
	return -1
}
```

```go
if i := j * k; i > 0 {
	return 1
} else {
	return 0
}
```

### Döngüler (Loop)

```go
// Yalnızca for var. while, do - while veya until yok
for i := 0; i < 10; i++ {
}

for ; i < 10;  { // while gibi çalışır
}

for i < 10  { // Elde yalnızca şart varsa ; notasyonu yazılmayabilir
}

for { // Şartı sabit true olan while gibi çalışır
}
```

```go
for i := 0; i < 10; i++ {
	continue
}

for {
	if i >= 10 {
		break
	}
	i = i + 1
}
```

### Switch

```go
// Basit switch
switch operatingSystem {
case "darwin":
	fmt.Println("macOS")
        // break ifadesine gerek yok
case "linux":
	fmt.Println("Linux")
default:
	fmt.Println("Other")
}
```

```go
// Switch'e konu değişkeni bildirmeden önce değişkene atama yapılabilir
switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("macOS")
	case "linux":
		fmt.Println("Linux")
	default:
		fmt.Println("Other")
}
```

```go
// Karşılaştırma case 'leri mümkün
i := 2
switch i {
case i > 0:
	fmt.Println("Positive")
case i < 0:
	fmt.Println("Negative")
default:
	fmt.Println("Zero")
}
```

```go
// Case 'e dikkat
var c byte = '-'
switch c {
case '.', '-', '/':
	fmt.Println("It is a separator")
// default ifadesi zorunlu değil
}
```

## Range

```go
for ik, e := range array_or_slice_or_map {
	// ik -> endeks veya anahtar, e -> eleman
}

for ik := range array_or_slice_or_map { // Yalnız endeks veya anahtar lazım ise...
}

for _, e := range array_or_slice_or_map { // Yalnız eleman lazım ise...
}
```

```go
for range time.Tick(time.Second) { // Hiçbir değişken lazım olmayabilir de...
}
```

## Tikleyici (Ticker)

```go
for range time.Tick(1 * time.Second) { // Saniyede bir döner
	fmt.Println("Zıp...")
}
```

## Fonksiyonlar (Function)

> Go’da fonksiyonların seçimlik (optional) parametresi olmaz

### İsimlendirilmiş Fonksiyon Tanımlama (Named Function Declaration)

```go
func doSomething() { // İsimlendirilmiş argüman yok, döndürülen değer yok
}
```

```go
func doSomething() string { // İsimlendirilmiş argüman yok, tek değer döndürülür
	return "something"
}
```

```go
func doSomething() (string, error) { // İsimlendirilmiş argüman yok, biri ilkel, diğeri arayüze sahip olan iki isimlendirilmemiş değer döndürülür
	return "something", nil // İkinci değer arayüze sahip bir değer olduğundan dolayı nil olabilir
}
```

```go
func doSomething(someArgument string) { // Tek isimlendirilmiş argüman var, döndürülen değer yok
}
```

```go
func doSomething(someArgument int, anotherArgument int) { // İki isimlendirilmiş argüman var, döndürülen değer yok
}
```

```go
func doSomething(someArgument, anotherArgument int) int { // İki isimlendirilmiş aynı tipte argüman var, tek değer döndürülür
	return someArgument + anotherArgument
}
```

```go
func doSomething() (someValue int, anotherValue int) { // İsimlendirilmiş argüman yok, isimlendirilmiş iki değer döndürülür, isimlendirilmiş değerler değişken olarak tanımlanmış olur
	return // Çıplak (naked) döndürme..
}
```

### Değer Halindeki Fonksiyonlar (Functions As Values)

```go
var duplicate func(int) int
duplicate = func(i int) int {
	return i * 2
}

divideInHalf := func(i int) int {
	return i / 2
}

a := duplicate(12) // 24
b := divideInHalf(48) // 24
```

### Closure

```go
func newIncreaser(step int) func() int { // Anonim fonksiyon olarak closure döndüren bir fonksiyon
	c := 0 // Global değişkene de gerek yok, dışarıdan enjekte etmeye de gerek yok. Sayaç enkapsüle edilmiş oluyor
	return func() int { // Sayaç üzerinde manipülasyon yapacak olan closure
		c += step // Bu closure c ve step değişkenlerine bağlı (bound)
		return c // Manipüle edilmiş sayacın son halinin kopyası döndürülüyor
	}
}

increase := newIncreaser(1) // Anonim fonksiyona, yani closure 'a isim veriliyor
// Her çağrışta dönen değerin arttığı görülecek
fmt.Println(increase()) // 1
fmt.Println(increase()) // 2
fmt.Println(increase()) // 3
```

### Varyadik Fonksiyonlar (Variadic Functions)

```go
func multiply(integers ...int) int {
	return doCalculation(0, integers...)
}

func doCalculation(ctype int, integers ...int) int {
	if 0 == ctype {
		if 1 < len(integers) {
			return integers[0] * doCalculation(0, integers[1:]...)
		}
		return integers[0]
	}
	return 0
}

a := multiply(2, 3, 4) // 24
// veya
b := multiply([]int{2, 3, 4}...) // 24
```

### Defer

```go
func doSomething() {
	defer fmt.Println("C") // Fonksiyon bittiğinde çalıştır
	defer fmt.Println("B") // Fonksiyon bittiğinde çalıştır
	fmt.Println("A")
}

doSomething()
// Çıktı şunun gibi olur:
// A
// B
// C
```

## Metotlar (Methods)

> Bir metot, aslında alıcı (receiver) argümanı olan bir fonksiyondur.

> Alıcı argümanı özel bir argümandır ve yalnızca isimlendirilmiş bir tip paslanır.

### Metot Tanımlama (Method Declaration)

#### Değer Alıcı ile Metot Tanımlama (Method Declaration with Value Receiver)

```go
type MyType struct {
	someValue string
}

func (t MyType) DoSomething() { // MyType yapısının bir metodu, t değişkenindeki değer orijinal değer olamaz
	fmt.Println(t.someValue)
}
```

#### İşaretçi Alıcı ile Metot Tanımlama (Method Declaration with Pointer Receiver)

```go
type MyType struct {
	someValue string
}

func (t *MyType) DoSomething() { // MyType yapısının bir metodu, t işaretçisindeki değer orijinaldir, yapılacak değişiklik orijinalde yapılır
	t.someValue = "New value" // Metodun çağrıldığı noktada yapının orijinalindeki değer değişmiş olur
	fmt.Println(t.someValue)
}
```

> İşaretçi alıcı daima daha tasarrufludur. Çünkü metot alıcısına paslanan değer kopya değildir.

### Gizli Arayüz Gerçeklemesi (Implicit Interface Fitting)

Bir tipe bağlanan metotlar bir `interface` ‘de deklare edilen metotların hepsini gerçekliyorsa o tip o `interface` ‘i gerçeklemiş demektir:

```go
type Producer interface {
	Produce() float64
	Consume()
}

type Abc struct {}

func (abc Abc) Produce() float64 {
	return 1.2
}

func (abc Abc) Consume() {
	fmt.Println("Consumed")
}
// Abc yapısı Producer arayüzünü gerçeklemiş oldu
```

> `SomeType` ile `*SomeType` farklı tiplerdir. Bu yüzden metotlar tanımlanırken dikkat edilmelidir.

### Metot Çağırma (Method Calling)

```go
type SomeType struct {
	someProperty int
}

func (t *SomeType) DoSomething() {
}

func (t SomeType) DoAnotherThing() {
}

// Bir tipin metodu, bir yapının üyesine erişiyormuş gibi "." ile bağlanarak çağrılır. Gerisi sıradan bir fonksiyon çağırma ile aynı şeydir
var v SomeType
v.DoSomething() // Bu da çalışır
(&v).DoSomething() // Bu da çalışır
p := &v
p.DoSomething() // Bu da çalışır
var v SomeType
v.DoAnotherThing() // Bu da çalışır
p := &v
(*p).DoAnotherThing() // Bu da çalışır
p.DoAnotherThing() // Bu da çalışır
```

```go
type Foo interface {
	DoSomething()
}

type Bar interface {
	DoAnotherThing()
}

type Baz struct {}

func (b *Baz) DoSomething() {
	// do something
}

func (b *Baz) DoAnotherThing() {
	// do another thing
}

func (b *Baz) DoSpecialThing() {
	// do special thing
}

func handle(b Foo) { // i argümanı Foo arayüzüne sahip varsayılıyor
	b.DoSomething() // Foo arayüzüne sahip olduğu bilindiği için arayüzün metodu doğrudan çağrılıyor
	b.(Bar).DoAnotherThing() // Ama bu noktada aynı zamanda Bar arayüzüne de sahip olduğu bilinmediği için Bar arayüzüne sahip olduğu iddia edilerek Bar arayüzünün metodu çağrılıyor
	b.(*Baz).DoSpecialThing() // Arayüz yerine doğrudan yapının kendisi olduğu da iddia edilebilir
}
```

## Hata Ele Alımı (Error Handling)

> Fonksiyonlar birden fazla değer döndürebildiğinden dolayı bir fonksiyonun son döndürdüğü değeri hata yapısı olarak belirlemek yeterlidir. Exception eksikliği hissedilmez.

```go
// Ortak kullanım için standart hata arayüzü bu şekilde (built-in) tanımlıdır (predeclared identifier)
type error interface {
	Error() string
}
```

> Hata yapısı tanımlanacaksa yapı isminin sonuna `...Error` eklenmesi, hata atanacak bir değişken tanımlanacaksa değişken isminin başına `err...` veya `Err...` eklenmesi teamüldür ve tavsiye edilir.

```go
// Hem başarı değeri hem standart hata arayüzü gerçekleyen hata değeri döndürebilen bir fonksiyonumuz olsun
func doSomething() (float64, error) {
	// ...
}

func main() {
	r, err := doSomething()
	if nil != err {
		// Hata boş değil, o zaman ele al (handle the error)
	} else {
		// Hata yok, o zaman yoluna devam et
	}
}
```

> Hata mesajlarının küçük harflerle yazılması ve hata mesajlarının sonuna nokta <span style="text-decoration: underline;">konulmaması</span> teamüldür ve tavsiye edilir

## Eşzamanlılık (Concurrency)

### Goroutine’ler (Goroutines)

> Goroutine’ler Go tarafından yönetilen (yani işletim sistemi tarafından yönetilmeyen) az masraflı thread’lerdir.

```go
func myRoutine(s string) { // goroutine olarak çağrılacak isimlendirilmiş fonksiyon
	// ...
}

func main() {
	go myRoutine("blabla") // isimlendirilmiş fonksiyonun goroutine olarak çağrılması
}
```

```go
func main() {
	go func (i int) { // anonim fonksiyonun goroutine olarak başlatılması
		// ...
	}(12) // i parametresine 12 verilerek başlatıldı
}
```

### Kanallar (Channels)

```go
ch := make(chan int) // Bir integer kanalı oluşturuldu
ch <- 12 // ch kanalına 12 değeri gönderildi
i := <-ch // ch kanalından değer alındı
```

```go
var c chan string
c <- "Something"
// fatal error: all goroutines are asleep - deadlock!
```

```go
var c chan string
fmt.Println(<-c)
// fatal error: all goroutines are asleep - deadlock!
```

```go
var c = make(chan string, 1)
c <- "Something"
close(c)
c <- "Something"
// panic: send on closed channel
```

```go
var c = make(chan int, 2)
c <- 1
c <- 2
close(c)
fmt.Println(<-c) // 1
fmt.Println(<-c) // 2
fmt.Println(<-c) // 0
fmt.Println(<-c) // 0
```

### Eşzamanlı Çalıştırma Örneği

```go
// Paralel çalıştırılacak fonksiyonların çıktısı olacak yapı
type channelDTO struct {
	payload interface{}
	error   error
}

// Paralel çalışacak bir prosedür içeren fonksiyonlardan biri
func retrieveAbc(ch chan channelDTO, otherParameter bool) {
	// do something
	ch <- channelDTO{
		payload: "OK",
		error:   nil,
	}
}

// Paralel çalışacak bir prosedür içeren fonksiyonlardan diğeri
func retrieveDef(ch chan channelDTO, anotherParameter int) {
	// do something
	ch <- channelDTO{
		payload: "HELLO",
		error:   nil,
	}
}

// Kanallar hazırlanıyor
abcChannel := make(chan channelDTO)
defChannel := make(chan channelDTO)

// Paralel çalıştırma siparişi veriliyor
go retrieveAbc(abcChannel, false)
go retrieveDef(defChannel, 0)

// Paralel çalıştırmaların meyveleri toplanıyor
channelDtoForAbc, channelDtoForDef := <-abcChannel, <-defChannel
```

## Reflection

…

### Type Switch

```go
func printType(v interface{}) { // v interface{} demek herhangi bir tipteki v demek
	switch t := v.(type) { // v.(type) ifadesi yalnızca switch içinde çalışır
	case int:
		fmt.Println("Integer")
	case float64:
		fmt.Println("Float 64")
	case string:
		fmt.Println("String")
	default:
		fmt.Println("Other")
	}
}

printType(12) // Integer
printType("Hello") // String
printType(1.2) // Float 64
printType(false) // Other
```

## Sinyal Ele Alma (Signal Handling)

```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	var err error
	terminationChannel := make(chan bool)
	errorChannel := make(chan error)

	fmt.Println("PID:", os.Getpid())

	// Bu thread işletim sisteminden, termination 'a sebep olabilecek bir sinyal gelip gelmediğini takip edecek
	go handleSignals(terminationChannel)

	termination := false
	for { // termination true olana kadar tekrarla
		// Asıl rutin iş bu thread 'de
		go func() {
			fmt.Println("...Work...")
			time.Sleep(500 * time.Millisecond) // rutin iş güya yarım saniye sürüyor
			errorChannel <- nil // Hata yoksa devam... Select bloklaması sona erecek
		}()
		// Kanallardan birinden cevap bekleme bloklaması
		select {
		// termination kanalını bir yokla
		case termination = <-terminationChannel:
		// termination kanalına bir true akmadıysa, hata kanalını bir yokla
		case err = <-errorChannel:
			if nil != err {
				fmt.Println(err.Error())
				return
			}
		// hata yoksa bloklamayı kaldır... Bir bak bakalım termination true mu?
		}
		if termination {
			fmt.Println("It was last cycle. Bye...")
			break
		}
	// termination true ise bir başka rutin başlatılmayacak
	}
}

func handleSignals(terminationChannel chan bool) {
	var termination bool
	var immediate bool
	signalChannel := make(chan os.Signal, 1)
	// 4 sinyalden biri gelirse sinyal kanalına akıtmak üzre takibe başlar
	signal.Notify(signalChannel, syscall.SIGINT, syscall.SIGQUIT, syscall.SIGTERM, syscall.SIGHUP)
	for lastSignal := range signalChannel {
		fmt.Printf("\nSignal received: %s\n", lastSignal.String())
		switch lastSignal {
		case syscall.SIGINT, syscall.SIGQUIT:
			termination = true
			immediate = false
		case syscall.SIGTERM:
			termination = true
			immediate = true
		case syscall.SIGHUP:
			termination = false
		}
		if termination {
			doJustBeforeTermination()
			fmt.Println("Terminating...")
			if immediate {
				termination = false
				os.Exit(0) // Derhal process 'i başarı ile sonlandır
			}
		}
		// report the value of termination via the channel
		terminationChannel <- termination
	}
}

func doJustBeforeTermination() {
	fmt.Println("Doing something just before termination...")
}
```

## Çağrı Yığını Takibi (Tracing Caller Stack)

```go
type CallerFrame struct {
	StackIndex                     int
	CallerFilePath                 string
	CallerName                     string
	CallerEntryPointProgramCounter uintptr
	CallerEntryPointLine           int
	CallPointProgramCounter        uintptr
	CallPointLine                  int
}

func traceCallerStack(numberOfSkippableFrames int, depth int) []CallerFrame {
	callerProgramCounters := make([]uintptr, depth)
	n := runtime.Callers(numberOfSkippableFrames, callerProgramCounters)
	stack := make([]CallerFrame, 0)
	if n > 0 {
		var i int
		var k int
		var callPointProgramCounter uintptr
		var callerEntryPointProgramCounter uintptr
		var callPointFunc *runtime.Func
		var entryPointFunc *runtime.Func
		var callerFilePath string
		var callPointLine int
		var callerEntryPointLine int
		for i, k = 0, n; i < n; i++ {
			k--
			callPointProgramCounter = callerProgramCounters[i]
			callPointFunc = runtime.FuncForPC(callPointProgramCounter)
			callerEntryPointProgramCounter = callPointFunc.Entry()
			entryPointFunc = runtime.FuncForPC(callerEntryPointProgramCounter)
			callerFilePath, callPointLine = callPointFunc.FileLine(callPointProgramCounter)
			_, callerEntryPointLine = entryPointFunc.FileLine(callerEntryPointProgramCounter)
			stack = append(
				stack,
				CallerFrame{
					StackIndex:                     k,
					CallerFilePath:                 callerFilePath,
					CallerName:                     callPointFunc.Name(),
					CallerEntryPointProgramCounter: callerEntryPointProgramCounter,
					CallerEntryPointLine:           callerEntryPointLine,
					CallPointProgramCounter:        callPointProgramCounter,
					CallPointLine:                  callPointLine,
				},
			)
		}
	}
	return stack
}

fmt.Println(traceCallerStack(2, 32))
```

## Proje Kök Dizini Bulucusu (Project Root Directory Finder)

```go
// project/get_root_directory_path.go
package project

import (
	"path"
	"path/filepath"
	"runtime"
)

func GetRootDirectoryPath() string {
	_, f, _, _ := runtime.Caller(0)
	d := path.Join(path.Dir(f))

	return filepath.Dir(d)
}
```

## Basma (Printing)

```go
fmt.Println("Welcome\nHoşgeldin\nأهلا بك"); // String 'i stdout 'a yazar ve bir de yeni satır ekler
pt := struct { X, Y int }{ 1, 3 }
fmt.Println("Point:", pt, "X:", pt.X, "Y:", pt.Y) // Birden fazla Println çağırmak yerine bu şekilde tek bir Println çağrılabilir
s1 := fmt.Sprintln("Point:", pt, "X:", pt.X, "Y:", pt.Y)
// Yer tutuculara verb deniyor
fmt.Printf("dec: %d hex: %x bin: %b flp: %f sci: %e", 12, 12, 12, 12.0, 12.0) // c tarzı yer tutucular
s2 := fmt.Sprintf("dec: %d hex: %x bin: %b flp: %f sci: %e", 12, 12, 12, 12.0, 12.0)
// Verb'lerin hepsi: https://pkg.go.dev/fmt
welcomeMessages := `Welcome
Hoşgeldin
أهلا بك`
```

## Birim Testleri (Unit Testing)

### Test Fonksiyonu

Test dosyalarının adlarının sonunun `_test.go` ile bitirilmesi önerilir:

```go
// demo_test.go
package demo

import (
	"github.com/stretchr/testify/assert" // İddia için gereken bir paket
	"testing" // Unit test için gereken paket
)

func TestMyFunction(t *testing.T) { // Test fonksiyonunun adı "Test" ile başlar
	expected := "Merhaba"
	actual := MyFunction() // Aynı pakette (demo) bulunan teste tabi fonksiyon
	assert.Equal(t, expected, actual) // Testin iddiası. Birden fazla iddia bulunabilir
}
```

### Arayüz Taklitleme (Interface Mocking)

#### Taklitleyici Kurulumu (Mocker Installation)

```shell
go install github.com/golang/mock/mockgen@v1.5.0
```

#### Taklit Üretimi (Mock Generation)

```go
// abc_service.go
// Mock 'a temel olacak interface 'i tanımlayalım
package abc

type AbcService interface {
	Serve(s string) string
}
```

Taklit jeneratörünü bu dosya için çalıştıralım:

```shell
mockgen -source=abc/service.go -package=abc_mock -destination=abc/mock/service_mock.go
```

#### Taklit Kullanım Örneği (Mock Usage)

```go
package abc

import (
	abc_mock "example.com/myspace/abc/mock"
	"fmt"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestAbcService(t *testing.T) {
	mockController := gomock.NewController(t) // Mock controller ayarlar
	defer mockController.Finish() // Mock controller sonlandırır

	mockAbcService := abc_mock.NewMockService(mockController) // mockgen ile oluşturulan taklit servis
	mockAbcService.
		EXPECT(). // Beklenen,
		Serve(gomock.Any()). // 'Serve' herhangi bir girdi ile çağrıldığında
		Times(1). // 1 kereliğine
		Return("OK") // "OK" dönmesi

	var err error
	handler := NewHandler(mockAbcService) // Gerçek handler'a taklit servis enjekte ediliyor
	err = handler.Handle() // Gerçek handler taklit servis ile çalıştırılıyor
	assert.Nil(t, err) // Çalıştırma sonucunda hata yok iddiası
}
```

### Birim Testleri Koşturma

Yalnızca bulunulan dizindeki birim testlerin çalıştırılması için:

```shell
go test .
```

Bulunulan dizin ve alt dizinlerdeki tüm paketlerin birim testlerinin çalıştırılması için:

```shell
go test ./...
```