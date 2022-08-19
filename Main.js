function seterror(id,error)
{
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function validate()
{
    var returnval=true;
    var name=document.forms['myForm']['Fullname'].value;
    if(name.length<5)
    {
        seterror("name","Length is too short");
        returnval=false;
    }
    return returnval;
}