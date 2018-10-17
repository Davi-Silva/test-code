var iBrowsers1 = document.querySelectorAll("#browsersList i");
iBrowsers1.forEach(function(i) {
    i.addEventListener('click', function() {
        var coolBrowser = document.querySelector("#browsers")
        coolBrowser.appendChild(i);
        i.onclick = null;
    });
});


