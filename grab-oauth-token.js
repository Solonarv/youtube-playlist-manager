var hash = window.location.hash,
    oauthinfo = hash.split("&").reduce(function(acc, elem) {
        var kv = elem.split("=");
        elem[kv[0]] = kv[1];
        return elem;
    }, {});

console.log(oauthinfo);

if (oauthinfo.error) {
    redirect(false);
}

oauthinfo.expires_at = Date.now() + 1000 * oauthinfo.expires_on

$.get("https://www.googleapis.com/oauth2/v1/tokeninfo", {access_token: oauthinfo.access_token}

function saveOAuth() {
    chrome.storage.local.get({"saveOAuth": true}, function (data) {
        chrome.storage.local.set("oauth", oauthinfo)
        redirect();
    }
}

function redirect() {    
    window.location.href = "https://youtube.com/playlists";
}