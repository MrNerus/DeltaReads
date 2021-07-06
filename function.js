// fetch api to show questions
fetch('./JSONs/portal.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendLinks(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });
// append the fetched information
function appendLinks(data) {
    var container = document.getElementById("portal");
    for (var item = 0; item < data.length; item++) {
        var ins = document.createElement("li");
        ins.innerHTML = `<div class="border">
                            <div class="inside_border">
                                <a href="${data[item].Link}" target="_blank">${data[item].Subject_Name}</a>
                            </div>
                        </div>`
        container.appendChild(ins);
    }
}