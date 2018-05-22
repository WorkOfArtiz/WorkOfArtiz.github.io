/* Code required to show the appropriate explanations */
window.onload = function() {
    var blockIds = ["intro", "magic", "constantpool", "text"];
    var headings = ["magic-header", "constantpool-origin", "constantpool-size", "constantpool-data", "text-origin", "text-size", "text-data"];

    function explain(block, heading) {
        var i;
        for (i = 0; i < blockIds.length; i++) {
            var elem = document.getElementById(blockIds[i] + "-explanation");
            elem.className = blockIds[i] != block ? "off" : "";
        }

        for (i = 0; i < headings.length; i++) {
            var elem = document.getElementById(headings[i] + "-explanation");
            elem.className = headings[i] == heading ? "highlight" : "";
        }
    }

    headings.forEach(function(x){
    var blockId = x.split("-")[0];
    var headId = x.split("-")[1];

    var elemList = document.getElementsByClassName(x);
    
    [].slice.call(elemList).forEach(function(elem){
        if (!elem)
        return;
        
        elem.addEventListener("click", function(){explain(blockId, x);});
    });
    });

    document.getElementById("switch-theme").addEventListener("click", function(){
    var body = document.getElementsByTagName("body").item(0);
    body.className = body.className != "dark-theme" ? "dark-theme" : "";
    });
}