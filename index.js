function cTable(tag,attr,attrval,attr1,attrval1) {
    var table = document.createElement(tag);
    table.setAttribute(attr,attrval);
    table.setAttribute(attr1,attrval1);
    return table;
}

function cThead(tag){
    var thead = document.createElement(tag)
    return thead;
}

function cTr(tag){
    var tr = document.createElement(tag)
    
    return tr;
}

function cTh(tag,attr,atrval,attr1,attrval1,content){
    var ctr = document.createElement(tag)
    ctr.setAttribute(attr,atrval);
    ctr.setAttribute(attr1,attrval1);
    ctr.innerHTML = content;
    return ctr;
}

function cTbody(tag){
    var tbody = document.createElement(tag);
    return tbody;
}

function trBody(tag){
    var trbody = document.createElement(tag)
    return trbody;
}

function cTd(tag,attr,attrval,content){
    var ctd = document.createElement(tag);
    ctd.setAttribute(attr,attrval)
    ctd.innerHTML = content;
    return ctd;
}

var table = cTable("table","class","table","style","width:50%;border:1px solid black;")
var head = cThead("thead")
var trHead = cTr("tr","style")
var header = ['First','Last','Middle'] ;
var data = ['Mark','Otto',"@mdo"]
var tbody = cTbody("tbody")
var trbody = trBody("tr");

for(let i=0;i<3;i++) {
    var tdThead = cTh("th","scope","col","style","border:1px solid black",header[i])
    trHead.append(tdThead);
}

for(let i=0;i<3;i++) {
    var tdTbody = cTd("td","style","border:1px solid black",data[i])
    trbody.append(tdTbody);
}

head.append(trHead);
table.append(head);
tbody.append(trbody)
table.append(tbody);
document.body.append(table);