
/* null */
var fader = document.querySelector('.opacityFadeIn')

function getFadeIn(element) {
    /*document.getElementsByClassName("opacityFadeIn").class = "opacityFadeOut";*/
    if (element.className == "opacityFadeIn") {
        element.className = "opacityFadeOut";
    }
    else {
        element.className = "opacityFadeIn";
    }
}

function getFadeOut(element) {
    if (element.className == "opacityFadeOut")
        {
            element.className = "opacityFadeIn";
        }
        else {
            element.className = "opacityFadeOut";
        }

}
        