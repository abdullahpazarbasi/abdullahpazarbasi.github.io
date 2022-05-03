---
layout: none
---

const categories = {
    {% for category in site.categories %}{% capture category_name %}{{ category | first }}{% endcapture %}
    "{{ category_name }}": [
        {% for post in site.categories[category_name] %}
        {
            "url": `{{ site.baseurl }}{{ post.url }}`,
            "date": `{{ post.date | date: "%e %B %Y %A" | replace: "January", "Ocak" | replace: "February", "Şubat" | replace: "March", "Mart" | replace: "April", "Nisan" | replace: "May", "Mayıs" | replace: "June", "Haziran" | replace: "July", "Temmuz" | replace: "August", "Ağustos" | replace: "September", "Eylül" | replace: "October", "Ekim" | replace: "November", "Kasım" | replace: "December", "Aralık" | replace: "Sunday", "Pazar" | replace: "Monday", "Pazartesi" | replace: "Tuesday", "Salı" | replace: "Wednesday", "Çarşamba" | replace: "Thursday", "Perşembe" | replace: "Friday", "Cuma" | replace: "Saturday", "Cumartesi" }}`,
            "title": `{{ post.title }}`
        }{% if forloop.last != true %},{% endif %}
        {% endfor %}
    ]{% if forloop.last != true %},{% endif %}
    {% endfor %}
}

if (window.addEventListener) {
    window.addEventListener(
        'load',
        function () {
            document.querySelectorAll(".category").forEach((category) => {
                category.addEventListener("click", function (e) {
                    const posts = categories[e.target.innerText];
                    let html = ``
                    posts.forEach(post=>{
                        html += `
<a class="modal-article" href="${post.url}">
    <h4>${post.title}</h4>
    <small class="modal-article-date">${post.date}</small>
</a>
`
                    })
                    document.querySelector("#category-modal-title").innerText = e.target.innerText;
                    document.querySelector("#category-modal-content").innerHTML = html;
                    document.querySelector("#category-modal-bg").classList.toggle("open");
                    document.querySelector("#category-modal").classList.toggle("open");
                });
            });

            document.querySelector("#category-modal-bg").addEventListener("click", function(){
                document.querySelector("#category-modal-title").innerText = "";
                document.querySelector("#category-modal-content").innerHTML = "";
                document.querySelector("#category-modal-bg").classList.toggle("open");
                document.querySelector("#category-modal").classList.toggle("open");
            })
        },
        false
    );
}
