/**
 * @example copyToClipboard("foo").then(() => console.log("ok")).catch(() => console.log("fail"));
 */
function copyToClipboard(textToCopy) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy); // promise
    } else {
        let fake = document.createElement("textarea");
        fake.value = textToCopy;
        fake.style.position = "absolute";
        fake.style.opacity = "0";
        fake.style.left = "-999999px";
        fake.style.top = "-999999px";
        document.body.appendChild(fake);
        //
        fake.select();

        return new Promise(function(res, rej) {
            document.execCommand("copy") ? res() : rej();
            fake.remove();
        });
    }
}
