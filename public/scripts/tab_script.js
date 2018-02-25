function makeTab(){
            var tabTitle = document.getElementsByClassName("tab-title");
            var tab = document.createElement("div");
            tab.className = "tab";

            var input = document.createElement("input");
            input.setAttribute("id","tab-new");

            input.setAttribute("type","checkbox");
            input.setAttribute("name","tabs");

            var tabLabel = document.createElement("label");
            tabLabel.setAttribute("for","tab-new");
            var node = document.createTextNode("New Bus");
            tabLabel.appendChild(node);

            var tabContent = document.createElement("div");
            tabContent.className = "tab-content";
            var tabPara = document.createElement("p");
            var node = document.createTextNode("ETA... 11 minutes");
            tabPara.appendChild(node);
            tabContent.appendChild(tabPara);

            tab.appendChild(input);
            tab.appendChild(tabLabel);
            tab.appendChild(tabContent);
            tabTitle[1].appendChild(tab);
        }
function parseJson(){

}
