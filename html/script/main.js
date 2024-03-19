
document.addEventListener("DOMContentLoaded", () => {

    async function localization(){
        const response = await fetch ('./locales/language.json')
        const data =  await response.json()
        Object.keys(data).forEach( key=>{
            if( document.querySelector(`[data-language="${key}"]`).textContent =data[key]){
                document.querySelector(`[data-language="${key}"]`).textContent
        


            }
        })

    }

    localization('language')
});



function myFunction() {
    var copyyoutubelink = "Your youtube link here";

    navigator.clipboard.writeText(copyyoutubelink);
   
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied !";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Youtube";
}



function myFunction2() {
    var copyinstagramlink = "Your instagram link here";

    navigator.clipboard.writeText(copyinstagramlink);
   
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copied !";
}


function outFunc2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "İnstagram";
}



