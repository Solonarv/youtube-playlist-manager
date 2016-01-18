// Replace the current page with playlist-manager.html

(function(){
    var manager_url = chrome.extension.getURL("playlist-manager.html");
    console.log(manager_url);
    
    xhr = new XMLHttpRequest();
    xhr.open("GET", manager_url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.write(xhr.responseText);
        }
    };
    xhr.send();
    
    document.body.innerHTML = "<h1>Loading...</h1>";
    document.body.style.background = "#b7b7b7";
    
    //window.location.href = manager_url;
})();