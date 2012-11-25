/*
    XML processor for prompt page
*/
function addProperties(input, promptType) {
    xml = $.parseXML(input);
    text = $(xml).find("properties").text();
    var newText = "";
    if (promptType == "Multiple Choice" || promptType == "Multiple Choice Custom") {
        properties = text.split("\n");
        lenText = properties.length;
        for (i = 0; i < lenText; i++)
        {
            property = properties[i].split(":");
            key = "<key>" + i + "</key>";
            label = "<label>" + property[0] + "</label>";
            value = "<value>" + property[1] + "</value>";
            
            if (property[0] != "") {
                if (property[1] != "") {
                    newText += "<property>" + key + label + value + "</property>"
                }
                else {
                    newText += "<property>" + key + label + "</property>"
                }
            }
        }
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Number") {
        properties = text.split("\n");
        for (i = 0; i < 2; i++)
        {
            property = properties[i].split(":");
            key = "<key>" + property[0] + "</key>";
            label = "<label>" + property[1] + "</label>";
            newText += "<property>" + key + label + "</property>"
        }
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Photo") {
        properties = text.split("\n");
        property = properties[0].split(":");
        key = "<key>" + property[1] + "</key>";
        newText += "<property>" + key + "</property>"
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Remote Activity") {
        properties = text.split("\n");
        lenText = properties.length;
        for (i = 0; i < lenText; i++)
        {
            property = properties[i].split(":");
            key = "<key>" + property[0].toLowerCase() + "</key>";
            label = "<label>" + property[1] + "</label>";
            if (property[0] != "") {
                newText += "<property>" + key + label + "</property>";
            }
        }
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Single Choice" || promptType == "Single Choice Custom") {
        properties = text.split("\n");
        lenText = properties.length;
        for (i = 0; i < lenText; i++)
        {
            property = properties[i].split(":");
            key = "<key>" + i + "</key>";
            label = "<label>" + property[0] + "</label>";
            value = "<value>" + property[1] + "</value>";
            
            if (property[0] != "") {
                if (property[1] != "") {
                    newText += "<property>" + key + label + value + "</property>"
                }
                else {
                    newText += "<property>" + key + label + "</property>"
                }
            }
        }
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Text") {
        properties = text.split("\n");
        for (i = 0; i < 2; i++)
        {
            property = properties[i].split(":");
            key = "<key>" + property[0].toLowerCase() + "</key>";
            label = "<label>" + property[1] + "</label>";
            newText += "<property>" + key + label + "</property>"
        }
        $(xml).find("properties").text(newText);
        return xml;
    }
    else if (promptType == "Timestamp") {
        // doing nothing
    }
    else {
        // invalid
    }
    
}
jQuery.XMLtoStr = function(xmlData) {
  if (window.ActiveXObject) {
    return xmlData.xml;
  } else {
    return (new XMLSerializer()).serializeToString(xmlData);
  }
}