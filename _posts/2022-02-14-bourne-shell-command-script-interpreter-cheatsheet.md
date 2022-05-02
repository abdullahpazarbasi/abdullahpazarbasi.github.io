---
title: "Bourne Shell Command &#038; Script Interpreter Cheatsheet"
date: 2022-02-14 00:16:35 +0300
layout: post
permalink: /platformlar/isletim-sistemleri/unix/bourne-shell-command-script-interpreter-cheatsheet
categories: [ "Betik İşleme", "Operating System", "Bourne Shell", "İşletim Sistemleri", "Linux", "macOS", "UNIX" ]
tags: [ ]
published: true
---

## Shebang, Sha-Bang, Hashbang

```shell
#!/usr/bin/env sh
```

veya

```shell
#!/bin/sh
```

## Açıklama/Yorum Satırı Ekleme

```shell
#!/usr/bin/env sh

# Benim yorumum

```

## Tırnak İçine Almak ve Görevden Kaçırmak (Quoting &amp; Escaping)

```shell
#!/usr/bin/env sh

myvar1=pwd
myvar2=date

echo "$myvar1 $myvar2" # pwd date
echo '$myvar1 $myvar2' # $myvar1 $myvar2
echo "\$myvar1 \$myvar2" # $myvar1 $myvar2
echo `$myvar1` `$myvar2` # /my/script/directory/path Sun Feb 13 17:15:16 +03 2022

```

## Özel Karakterler (Special Escape Characters)

- `\b` : Backspace
- `\c` : Aşağı inmeden satır açar
- `\f` : Form Feed (Yeni ekrana geçirir)
- `\n` : Newline (Yeni satıra geçirir)
- `\r` : Carriage Return (Satır başına geçirir)
- `\t` : Tab (Yatay Sektirir)
- `\v` : Vertical Tab (Dikey sektirir)
- `\\` : Backslash
- `\0<n><n><n>` : Octal ifadeden karakter verir
- `\x<x><x>` : Hexadecimal ifadeden karakter verir
- `;` : Aynı satırda solundaki komut da sağındaki komut da çalıştırılır
- `&` : Komutun sonuna konursa komut arkaplanda (background) çalışır

## Değişkene Atama

```shell
#!/usr/bin/env sh

myvariable=myvalue
myvariable="myvalue"

```

## Kullanıcı Girdisi (User Input)

```shell
#!/usr/bin/env sh

echo "x ve y için değer giriniz:"
read x y
echo "x=$x ve y=$y"

```

## Değişken Kullanımı

```shell
#!/usr/bin/env sh

echo $myvariable
echo "$myvariable"
echo "${myvariable}"

```

## Koşullu Değişken İkamesi (Conditional Variable Substitution)

```shell
#!/usr/bin/env sh

echo "${myvar:-"abc"}" # abc
echo "${myvar:-'abc'}" # 'abc'
echo "${myvar:-$'123'}" # 123
echo "${myvar:-abc}" # abc
theirvar="xyz"
echo "${myvar:-$theirvar}" # xyz
echo "${hisvar:-`date`}" # Wed Feb 16 23:21:28 +03 2022
echo "${myvar}" # ""
echo "${yourvar:=def}" # def
echo "${yourvar}" # def
hervar=""
echo "${hervar:+ghi}" # ""
hervar="123"
echo "${hervar:+ghi}" # ghi
echo "${hervar}" # 123
echo "${myvar:?}" # varsayılan bir mesajla ölümcül hata doğar
echo "${myvar:?"this variable has not been set"}" # belirlenen mesajla ölümcül hata doğar
```

## Argüman Kullanımı

```shell
#!/usr/bin/env sh
# thisscript.sh
echo "Script file path: $0" # Çalıştırmak için sh interpreter 'ına verilen ilk argüman `/bin/sh thisscript.sh` 'daki thisscript.sh
echo "First argument: $1" # Betikin ilk argümanı (verilmediyse boş string)
echo "Second argument: $2" # Betikin ikinci argümanı (verilmediyse boş string)

```

```shell
#!/usr/bin/env sh

cd "$(dirname "$0")" # Geçerli çalışma dizinini çalıştırıldığı noktadaki çalışma dizininden betikin barındığı dizine çeker

```

## Kalıp Eşleme (Pattern Matching)

- `?` : 1 herhangi karakter
- `*` : 0 veya daha fazla herhangi karakter
- `[AaBbCcXx]` : listedeki karakterlerden biri
- `[^AbC]` : listedekiler haricindeki karakterlerden biri
- `[a-f]` : belirtilen aralıktaki karakterlerden biri (inclusive)

## Shell Yerleşik Değişkenler (Shell Built-In Variables)

- `$0` : geçerli script ‘in dosya sistemi yolu. Nasıl çağrıldıysa o biçimde. Yani relative ise relative, absolute ise absolute…
- `$<n>` : script çağrılırken verilen argümanlardan `n` ‘ncisi
- `$#` : geçerli script çağrılırken verilen argümanların sayısı
- `$*` : geçerli script çağrılırken verilen argümanlar (double quoted)
- `$@` : geçerli script çağrılırken verilen argümanlar (individually double quoted)
- `$-` : shell ‘e verilen veya script içinde `set` ile verilen bayraklar (flags)
- `$?` : son çalıştırılan komutun `exit code` ‘u
- `$$` : geçerli shell ‘in veya geçerli script ‘in process ID ‘si
- `$!` : son başlatılan alt process (child process) ‘in ID ‘si

```shell
#!/usr/bin/env sh
# thisscript.sh

echo "$0" # thisscript.sh
echo "$#" # 2
echo "$*" # myarg1 myarg2
echo "$@" # myarg1 myarg2
echo "$-" # hB

nonexistentprogram # bir executable çalıştırılıyor
echo "$?" # 127
echo "$$" # 54321

nohup echo "foobar" & # bir alt process başlatılıyor
echo "$!" # 54322

```

## İçiçe Komutlar (Nested Commands)

```shell
#!/usr/bin/env sh

echo "1 $(echo "2 $(echo "3")")" # 1 2 3
# veya
echo "1 `echo "2 \`echo \"3\"\`"`" # 1 2 3

```

## Koşullular (Conditionals)

```shell
#!/usr/bin/env sh

myvar=0

if test $myvar -eq 0 # Aslı bu şekil
then
  echo "yes"
else
  echo "no"
fi

if [ $myvar -eq 0 ] # test 'in kısaltılmış notasyonudur
then
  echo "yes"
else
  echo "no"
fi

```

```shell
#!/usr/bin/env sh

if [ "" ]; then
  echo "first"
elif [ '' ]; then
  echo "second"
elif [ `echo ""` ]; then
  echo "third"
else
  echo "last" # bu çalışır
fi

```

## Case İfadesi (Case Statement)

```shell
#!/usr/bin/env sh

echo "1: Mehmet"
echo "2: Ahmet"
echo "3: Mustafa"
echo "Choose staff: \c"
read staffn
case "$staffn" in
  1)
    echo "Mehmet is chosen"
    echo "Mehmet will be called"
    ;; # çift noktalıvirgüle dikkat
  2)
    echo "Ahmet is chosen"
    echo "Ahmet will be called"
    ;;
  3)
    echo "Mustafa is chosen"
    echo "Mustafa will be called"
    ;;
  *)
    echo "Invalid number"
    echo "No one will be called"
    exit 1
    ;;
esac

```

## Koşullu Komut Çalıştırma (Conditional Command Execution)

- `&&` : soldaki başarılı ise sağdakini de çalıştır
- `||` : soldaki başarısız ise sağdakini çalıştır

```shell
#!/usr/bin/env sh

touch afileisnotexistentbefore.txt

if rm afileisnotexistentbefore.txt
then
  echo "The file has been successfully removed"
fi

touch afileisnotexistentbefore.txt

rm afileisnotexistentbefore.txt && echo "The file has been successfully removed"

if rm afileisnotexistentbefore.txt
then
  :
else
  echo "The file could not be removed"
fi

rm afileisnotexistentbefore.txt || echo "The file could not be removed"

touch afileisnotexistentbefore.txt

if rm afileisnotexistentbefore.txt
then
  echo "The file has been successfully removed"
else
  echo "The file could not be removed"
fi

touch afileisnotexistentbefore.txt

rm afileisnotexistentbefore.txt && echo "The file has been successfully removed" || echo "The file could not be removed"

```

## Birden Fazla Şarta Bağlama (Multi-Conditionals)

```shell
#!/usr/bin/env sh

a=1
b=0
c=0

if test $a -eq 0 -o \( $b -eq 0 -a $c -eq 0 \)
then
  echo "yes" # olumlu
fi

if [ $a -eq 0 ] || { [ $b -eq 0 ] && [ $c -eq 0 ]; } ; then
  echo "yes" # olumlu
fi

```

## String Karşılaştırma (String Comparison)

- `=` veya `==` : iki string aynı mı?
- `!=` : iki string farklı mı?

```shell
#!/usr/bin/env sh

myvar="abc"
yourvar="abc"
if [ "$myvar" = "$(echo "$yourvar")" ]
then
  echo "equal" # evet
fi

```

## String Sınama (Checking Strings)

- `-z` : string boş mu?
- `-n` : string dolu mu?

```shell
#!/usr/bin/env sh

myvar="abc"
if [ -n "$myvar" ]
then
  echo "non-empty" # evet
fi

```

## Sayı Karşılaştırma (Number Comparison)

- `-eq` : iki sayı eşit (EQual) mi?
- `-ne` : iki sayı farklı (Not Equal) mı?
- `-lt` : soldaki sayı sağdakinden küçük (Less Than) mü?
- `-le` : soldaki sayı sağdakinden küçük veya sağdakine eşit (Less than or Equal to) mi?
- `-gt` : soldaki sayı sağdakinden büyük (Greater Than) mü?
- `-ge` : soldaki sayı sağdakinden büyük veya sağdakine (Greater than or Equal to) eşit mi?

```shell
#!/usr/bin/env sh

if [ $# -lt 3 ] # argüman sayısı 3 den az ise
then
  echo "error"
  exit 1
fi

```

## Shell Aritmetiği (Shell Arithmetic)

```shell
#!/usr/bin/env sh

result=`expr 6 + 2`
echo $result # 8
result=`expr 6 - 2`
echo $result # 4
result=`expr 2 - 6`
echo $result # -4
result=`expr 6 \* 2` # escape karakterine (\) dikkat
echo $result # 12
result=`expr 6 / 2`
echo $result # 3
result=`expr 6 % 4`
echo $result # 2

```

## Döngüler (Loops)

```shell
#!/usr/bin/env sh

myvar=0
while test $myvar -lt 10
do
  myvar=`expr $myvar + 1`
  echo "$myvar"
done

myvar=0
while [ $myvar -lt 10 ]
do
  myvar=`expr $myvar + 1`
  echo "$myvar"
done

until [ $# -eq 0 ]
do
  echo "$@"
  shift # argümanları kaydırır
done

for item in a b c ; do
  echo "$item"
done

items="1 2 3 4"
for item in $items ; do
  echo "$item"
done

```

## Dosya ve Dizin Sınama (Checking Files)

- `-e` : dosya veya dizin mevcut mu?
- `-f` : bir sıradan dosya mı?
- `-d` : bir dizin mi?
- `-s` : dosyanın boyutu sıfırdan büyük mü?
- `-r` : dosya veya dizin okunabilir (Readable) mi?
- `-w` : dosya veya dizine yazılabilir (Writable) mi?
- `-x` : dosya çalıştırılabilir (eXecutable) mi?

```shell
#!/usr/bin/env sh

if [ -e "$0" ]
then
  echo "existent" # tabii ki mevcut :)
fi

```

## Mantıksal Operatörler (Boolean Operators)

- `!` : sağdakinin tersi – değil (not)
- `-a` : soldaki ve sağdakinden ikisi de doğru mu? (and)
- `-o` : soldaki veya sağdakinden biri veya her ikisi de doğru mu? (or)

```shell
#!/usr/bin/env sh

if [ ! -e "myfile.txt" ]
then
  echo "myfile does not exist"
  exit 1
fi

```

## Standart Akış Yatakları (Standard Streams)

| **Anahtar** | **File Descriptor** | **Açıklama** |
|---|---|---|
| stdin | 0 | Standard Input |
| stdout | 1 | Standard Output |
| stderr | 2 | Standard Error |

## Girdi/Çıktı Kanalize Etme (I/O Redirection)

- `x > f` : x çalıştırılabilirinin standard output stream ‘inden geçen içeriği f dosyasına yazar
- `x >> f` : x çalıştırılabilirinin standard output stream ‘inden geçen içeriği f dosyasına ekler
- `x < f` : f dosyasından gelen içeriği x çalıştırılabilirinin standard input stream ‘ine yönlendirir
- `x n> f` : x çalıştırılabilirinin n file descriptor ‘lı output stream ‘inden geçen içeriği f dosyasına yazar
- `x n>> f` : x çalıştırılabilirinin n file descriptor ‘lı output stream ‘inden geçen içeriği f dosyasına ekler
- `x &> f` : x çalıştırılabilirinin standard output ve standard error stream ‘lerinden geçen içeriği dosyaya yazar (bu operatör bazı sistemlerde kullanılamayabilir)
- `x &>> f` : x çalıştırılabilirinin standard output ve standard error stream ‘lerinden geçen içeriği dosyaya ekler (bu operatör bazı sistemlerde kullanılamayabilir)
- `n>&m` : n file descriptor ‘lı output stream ‘inin akışını m file descriptor ‘lı stream ‘in akışı ile birleştirir
- `n<&m` : n file descriptor ‘lı input stream ‘inin akışını m file descriptor ‘lı stream ‘in akışı ile birleştirir
- `|` : soldaki programın standard output akışını sağdaki programın standard input akışına yönlendirir
- `x << t` : t etiketinin bulunduğu satırdan sonraki satır ile başlayan ve yine yeni bir satırdaki t etiketi ile biten aradaki içeriği x çalıştırılabilirinin standard input stream ‘ine akıtır
- `x <<< 'text'` : text içeriğini aynen girildiği gibi x çalıştırılabilirinin standard input stream ‘ine akıtır

```shell
#!/usr/bin/env sh

echo "foobar" > output.txt
echo "foobar" >> output.txt

cat < output.txt

ls nonexistent.txt 2> errors.txt
ls nonexistent.txt 2>> errors.txt

touch existent.txt
ls existent.txt nonexistent.txt &> output.txt
ls existent.txt nonexistent.txt 1> output.txt 2> errors.txt
ls existent.txt nonexistent.txt 1>> output.txt 2>> errors.txt

ls existent.txt nonexistent.txt 2>&1
ls existent.txt nonexistent.txt > output.txt 2>&1

head output.txt | cat

cat << EOF
a
b
c
EOF

cat <<< 'foo bar'

```

## Çalıştırılabilir (Executable) Hale Getirme

```shell
$ chmod +x myscript.sh
```