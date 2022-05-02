---
id: 443
title: 'Blok Sınama Sayfası'
date: '2019-07-29T15:28:45+03:00'
author: 'Abdullah Pazarbaşı'
layout: page
guid: 'http://www.abdullahpazarbasi.com/?page_id=443'
primer_layout:
    - one-column-wide
---

## H2

### H3

#### H4

##### H5

###### H6

Paragraf

<div class="wp-block-image"><figure class="aligncenter">![a-harfi](https://i0.wp.com/www.abdullahpazarbasi.com/wp-content/uploads/2019/04/a.jpg?w=688&ssl=1)<figcaption>a harfi</figcaption></figure></div>- **Eleman 1**
- *Eleman 2*
- Eleman 3

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="php" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""><?php
$num = 123;
$str = "Abcdef";
$boo = TRUE;
function myFunction($myParameter = NULL) {
    return FALSE;
}
interface MyInterface {
}
/**
 * My DocBlock Comment
 */
class MyClass implements MyInterface {
    const MYCONSTANT = [];
    private $prv;
    protected $prt;
    public $pub;
    public function myMethod() {
        /* My Block Comment */
        return 'Abcdef'; // My Inline Comment
    }
}
$obj = new MyClass();
echo MyClass::MYCONSTANT;
print_r(__FILE__);
$obj->myMethod();
?>
```