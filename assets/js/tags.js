---
layout: none
---

const tags = {
    {% for tag in site.tags %}{% capture tag_name %}{{ tag | first }}{% endcapture %}
    "{{ tag_name }}": [
        {% for post in site.tags[tag_name] %}
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
            document.querySelectorAll(".tag").forEach((tag) => {
                tag.addEventListener("click", function (e) {
                    const posts = tags[e.target.innerText];
                    let html = ``
                    posts.forEach(post=>{
                        html += `
<a class="modal-article" href="${post.url}">
    <h4>${post.title}</h4>
    <small class="modal-article-date">${post.date}</small>
</a>
`
                    })
                    document.querySelector("#tag-modal-title").innerText = e.target.innerText;
                    document.querySelector("#tag-modal-content").innerHTML = html;
                    document.querySelector("#tag-modal-bg").classList.toggle("open");
                    document.querySelector("#tag-modal").classList.toggle("open");
                });
            });

            document.querySelector("#tag-modal-bg").addEventListener("click", function(){
                document.querySelector("#tag-modal-title").innerText = "";
                document.querySelector("#tag-modal-content").innerHTML = "";
                document.querySelector("#tag-modal-bg").classList.toggle("open");
                document.querySelector("#tag-modal").classList.toggle("open");
            })
        },
        false
    );
}
