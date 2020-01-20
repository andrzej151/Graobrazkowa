function changeColour(value)
    {
        var color = document.body.style.backgroundColor;
        switch(value)
        {
            case 'b':
                color = "#6897BB";
            break;
            case 'r':
                color = "#FF4444";
            break;
            case 'p':
                color = "#816283";
            break;
        }
        document.body.style.backgroundColor = color;
    }

function textColour(value)
    {
        var color = document.getElementById("kolorowy").style.color;
        switch(value)
        {
            case 'b':
                color = "#FF0000";
            break;
            case 'r':
                color = "#0000FF";
            break;
            case 'p':
                color = "#FF00FF";
            break;
        }
        document.getElementById("kolorowy").style.color = color;
    }

function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("myP").style.fontFamily = listValue;
}
