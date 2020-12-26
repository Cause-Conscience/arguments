const argument_conclusion = document.querySelector(
    ".argument__conclusion h2"
);

console.log(argument_conclusion);

const conclusion_c1 = document.querySelector(
    ".conclusion__c1 h2"
);

const conclusion_c2 = document.querySelector(
    ".conclusion__c2 h2"
);

const conclusion_c1_p1 = document.getElementsByClassName(
    "conclusion__c1__p1"
)[0];

const conclusion_c1_p2 = document.getElementsByClassName(
    "conclusion__c1__p2"
)[0];

const conclusion_c2_p1 = document.getElementsByClassName(
    "conclusion__c2__p1"
)[0];

const conclusion_c2_p2 = document.getElementsByClassName(
    "conclusion__c2__p2"
)[0];

const x = document.getElementsByClassName("x")[0];

const context = document.getElementsByClassName("context")[0];
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))) {
    console.log("Destop");
    conclusion_c1.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.border = "dashed deeppink"
        }
    )

    conclusion_c1.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1.style.border = "none";
        }
    )
    conclusion_c2.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.border = "dashed lime"
        }
    )

    conclusion_c2.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2.style.border = "none";
        }
    )

    conclusion_c1_p1.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.backgroundColor = "deeppink";
            conclusion_c1_p1.style.borderLeft = "dashed deeppink"
            conclusion_c1_p1.style.borderRight = "dashed deeppink"
        }
    )

    conclusion_c1_p1.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1_p1.style.backgroundColor = "white"
            conclusion_c1_p1.style.borderLeft = "none"
            conclusion_c1_p1.style.borderRight = "none"
        }
    )
    conclusion_c1_p2.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.backgroundColor = "deeppink";
            conclusion_c1_p2.style.borderLeft = "dashed deeppink"
            conclusion_c1_p2.style.borderRight = "dashed deeppink"
        }
    )

    conclusion_c1_p2.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1_p2.style.borderLeft = "none"
            conclusion_c1_p2.style.borderRight = "none"
        }
    )
    conclusion_c2_p1.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.backgroundColor = "lime";
            conclusion_c2_p1.style.borderLeft = "dashed lime"
            conclusion_c2_p1.style.borderRight = "dashed lime"
        }
    )

    conclusion_c2_p1.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2_p1.style.borderLeft = "none"
            conclusion_c2_p1.style.borderRight = "none"
        }
    )
    conclusion_c2_p2.addEventListener(
        "mouseover",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.backgroundColor = "lime";
            conclusion_c2_p2.style.borderLeft = "dashed lime"
            conclusion_c2_p2.style.borderRight = "dashed lime"
        }
    )

    conclusion_c2_p2.addEventListener(
        "mouseleave",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2_p2.style.borderLeft = "none"
            conclusion_c2_p2.style.borderRight = "none"
        }
    )
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    console.log("Mobile");
    conclusion_c1.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.border = "dashed deeppink"
        }
    )
    conclusion_c1.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1.style.border = "none";
        }
    )

    conclusion_c2.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.border = "dashed lime"
        }
    )

    conclusion_c2.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2.style.border = "none";
        }
    )

    conclusion_c1_p1.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.backgroundColor = "deeppink";
            conclusion_c1_p1.style.borderLeft = "dashed deeppink"
            conclusion_c1_p1.style.borderRight = "dashed deeppink"
        }
    )

    conclusion_c1_p1.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1_p1.style.backgroundColor = "white"
            conclusion_c1_p1.style.borderLeft = "none"
            conclusion_c1_p1.style.borderRight = "none"
        }
    )
    conclusion_c1_p2.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "deeppink";
            conclusion_c1.style.backgroundColor = "deeppink";
            conclusion_c1_p2.style.borderLeft = "dashed deeppink"
            conclusion_c1_p2.style.borderRight = "dashed deeppink"
        }
    )

    conclusion_c1_p2.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c1.style.backgroundColor = "white";
            conclusion_c1_p2.style.borderLeft = "none"
            conclusion_c1_p2.style.borderRight = "none"
        }
    )
    conclusion_c2_p1.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.backgroundColor = "lime";
            conclusion_c2_p1.style.borderLeft = "dashed lime"
            conclusion_c2_p1.style.borderRight = "dashed lime"
        }
    )

    conclusion_c2_p1.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2_p1.style.borderLeft = "none"
            conclusion_c2_p1.style.borderRight = "none"
        }
    )
    conclusion_c2_p2.addEventListener(
        "touchmove",
        function(event) {
            argument_conclusion.style.backgroundColor = "lime";
            conclusion_c2.style.backgroundColor = "lime";
            conclusion_c2_p2.style.borderLeft = "dashed lime"
            conclusion_c2_p2.style.borderRight = "dashed lime"
        }
    )

    conclusion_c2_p2.addEventListener(
        "touchend",
        function(event) {
            argument_conclusion.style.backgroundColor = "black";
            conclusion_c2.style.backgroundColor = "white";
            conclusion_c2_p2.style.borderLeft = "none"
            conclusion_c2_p2.style.borderRight = "none"
        }
    )
}

x.addEventListener(
    "click",
    function(event) {
        console.log("Test");
        context.style.display = "none";

    }
)
