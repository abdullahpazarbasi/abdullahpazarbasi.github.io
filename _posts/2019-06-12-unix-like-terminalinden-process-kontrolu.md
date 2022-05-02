---
title: "UNIX-like Terminalinden Process Kontrolü"
date: 2019-06-12 09:34:47 +0300
layout: post
permalink: /platformlar/isletim-sistemleri/unix/unix-like-terminalinden-process-kontrolu
categories: [ "Platformlar", "İşletim Sistemleri", "UNIX" ]
tags: [ "Background", "EOF", "Foreground", "Job", "Kill", "Process", "Signal", "Sinyal", "Terminal", "TTY", "UNIX" ]
published: true
---

Process ’leri sinyaller (signals) ile kontrol edebilirsiniz. Sisteminizin desteklediği sinyalleri görmek için

```shell
$ kill -l
```

komutunu gönderiniz. Şuna benzer bir çıktı alacaksınız:

```shell
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL
 5) SIGTRAP      6) SIGABRT      7) SIGEMT       8) SIGFPE
 9) SIGKILL     10) SIGBUS      11) SIGSEGV     12) SIGSYS
13) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGURG
17) SIGSTOP     18) SIGTSTP     19) SIGCONT     20) SIGCHLD
21) SIGTTIN     22) SIGTTOU     23) SIGIO       24) SIGXCPU
25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH
29) SIGINFO     30) SIGUSR1     31) SIGUSR2
```

Terminal penceresinde komut satırında komutunuz bekleniyorsa

```shell
$ kill -[Signal Number] [PID]
```

komutunu gönderebilirsiniz. Burada \[Signal Number\] sinyal numarası \[PID\] ise process ID ’sidir. Mesela;

```shell
$ kill -9 1234
```

komutu, 1234 ID ’li process ’e 9 numaralı sinyali gönderir. 9 numaralı sinyal ise SIGKILL ’dir. Göndermeniz gereken sinyalin numarasını yazının başında bahsettiğimiz yöntemle öğrenebilirsiniz. Process ID ’sini öğrenmek için ise

```shell
$ ps
```

komutunu gönderiniz. Bu komutun çıktısında, kendisine sinyal göndermek istediğiniz process ’i bulup ID’sini öğrenebilirsiniz.

Komut satırında komutunuz beklenmiyorsa ne yapacaksınız? Aktif process’e gönderilebilecek sinyallerden bazılarını klavye kısayolları ile göndermek mümkün.

SIGINT göndermek için Ctrl+C ( ^C ),

SIGQUIT göndermek için Ctrl+\\ ( ^\\ ),

SIGTSTP göndermek için Ctrl+Z ( ^Z ),

SIGINFO göndermek için Ctrl+T ( ^T ),

kullanılabilir.

Ayrıca Ctrl+D ( ^D ), shell ’e bir EOF marker ’ı göndererek terminal penceresinin nazikçe kapanmasını sağlar. Ctrl+L ( ^L ) de uygulamadan çıkmaya gerek kalmadan ekranı temizler.

```shell
$ stty -a
```

komutu ile elde edeceğiniz çıktıda, kullanılabilecek klavye kısayolları listelenir. Diğer kısayolları, bu listeyi inceleyerek anlayabilirsiniz.

## Job

Shell ’in yönettiği her process birer job ’tır.

Bir job ancak 3 durumdan birindedir:

1. **Foreground**: Varsayılan durumdur. Job ön planda çalışır.
2. **Background**: Job arka planda çalışır. Bir komutun sonuna &amp; sembolünü eklerseniz komut arka planda çalışmaya başlayacaktır. Önce sanki ön planda çalışıyormuş gibi görünebilir ama Enter’a basınca komut satırı komut beklemeye başlayacaktır.
3. **Stopped**: Job durmuş, job ’a bağlı process duraklatılmış durumdadır. Bir job’ın bu vaziyete geçmesi için, job, foreground durumundayken yukarıda bahsedildiği gibi Ctrl+Z kullanılabilir.

### Job Kontrol Komutları

```shell
$ jobs
```

komutu, tüm job ’ları listeler. Ayrıca background ’ta iken bitmiş process ’lere bağlı job ’ları da bir defalığına listelemeye ekler.

```shell
$ bg
```

komutu, son başlayan job ’ın çalışmasını arka planda devam ettirir.

```shell
$ bg %[Job Number]
```

komutu, \[Job Number\] numaralı job ’ın çalışmasını arka planda devam ettirir.

```shell
$ fg
```

komutu, en son arka plana atılan job ’ı ön plana alarak bağlı process ’in çalışmasını, eğer duraklatılmış idi ise, devam ettirir.

```shell
$ fg %[Job Number]
```

komutu, \[Job Number\] numaralı job ’ı ön plana alarak bağlı process ’in çalışmasını, eğer duraklatılmış idi ise, devam ettirir.

```shell
$ sleep [seconds]
```

komutuyla alıştırmalar yapabilirsiniz. Mesela;

```shell
$ sleep 60 &
```

process ’i background durumunda 60 saniye çalışır.