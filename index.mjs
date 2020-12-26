import {readFile, writeFile} from "fs";

const document = function (logic, context) {

    const doctype = "<!DOCTYPE html>\n";

    const head = (child_n) => "<head>\n" + indent() + child_n + "\n" + "</head>\n";
    const body = (child_n, child_n_1, last_child) => "<body>\n"
        + indent() + child_n + "\n"
        + indent() + child_n_1 + "\n"
        + indent() + last_child + "\n"
        + "</body>\n";

    const link = (href) => "<link rel='stylesheet' href='" + href + "'";
    const script = "<script type='module' src='index.js'></script>"

    const document = doctype + head(link("index.css")) + body(
        context,
        logic,
        script
    );

    return document;

}

readFile("./georgia/lab/struggles/american-dream/index.json", "utf-8", function (error, json) {
    const template = JSON.parse(json);

    const context = () => "<div class='context'>\n<h2>Purpose</h2>\n"
        + "<p>We hear both Senator David Perdue and Senator Kelly Loeffler repeatedly describe the democratic agenda as something very bad and harmful. In the recent debate, Senator Loeffler remarked: \"There are two visions for our country. Mine: the American dream. My opponent: socialism.\" Hearing these variations about the Democrats, I finally wondered if Senator Loeffler and Senator Purdue were making a false promise. In what follows here are some of the considerations I've made in thinking about this question. I have thought more than I have put down and I hope to continually improve this space. If you want help understanding or feel like you can help me improve this, feel free to contact us.</p><div class='x'></div>\n</div>"

    writeFile('public/causes/georgia-senate-runoffs-2021/arguments/electing-republican-senators-in-georgia-would-not-protect-the-american-dream-1/index.html', document(parse_logic(template), context()), function (error) {
        if (error) {
            console.log("Error", error);
            return;
        };
        console.log("Write successful"); 
    });

});


function parse_logic(logic, depth = 0) {
    if (logic.argument) {
        // add an argument layer
        return render_argument(logic, parse_logic(logic.argument));
    }
    if (logic.conclusion) {
        if (typeof logic.conclusion === "string" && logic.premises) {
            return render_conclusion(
                logic.premises,
                logic.conclusion,
                depth
            );
        }

    }
}
/*
function render_conclusion(premises, conclusion, depth=0) {
    const heading = (
        conclusion
        ? "<h2>" + conclusion + "</h2>\n"
        : ""
    );
    const depth_class = (
        depth === 0
        ? "argument__conclusion"
        : "conclusion__c" + depth
    );

    return "<div class='" + depth_class + "'>\n" + indent(2) + heading + premises + "</div>\n";

}
*/

function render_conclusion(premises, conclusion, depth=0) {
    const heading = (
        conclusion
        ? "<h2>" + conclusion + "</h2>\n"
        : ""
    );
    const depth_class = (
        depth === 0
        ? "argument__conclusion"
        : "conclusion__c" + depth
    );

    return "<div class='" + depth_class + "'>\n" + indent(2) + heading + render_premises(premises, undefined, depth) + "</div>\n";

}

function render_argument(logic, children) {
    const h1 = "<h1 class='argument'>"
    + logic.argument.conclusion
    + "</h1>\n";

    return h1 + children;

}

function render_premises(premises, conclusion, depth=0){
    console.log("render_premises: ", depth);
    console.log("render_premises: ", premises);
    const rendered_premises = premises.map(function(premise, number){
        if (premise.conclusion && premise.premises) {
            const {conclusion, premises} = premise;
            return render_conclusion(premises, conclusion, number + 1);
            //return parse_logic(premise, depth + 1)
        }
        if (premise.premise) {
            if (premise.evidence) {
                return render_premise(
                    premise.premise,
                    render_evidence(premise.evidence),
                    depth,
                    number,
                );

            }
            return render_premise(
                premise.premise,
                undefined,
                depth,
                number
            );
        }
        if (typeof premise === "string") {
            return render_premise(premise, undefined, depth, number);
        }
    }).reduce((premises, premise) => premises + premise, "");

    const class_name = (
        depth === 0
        ? " high-premises"
        : ""

    );

    return indent(2) + "<div class='premises" + class_name +"'>\n"
    + indent() + rendered_premises
    + indent(1) + "</div>\n";
}

function use_if_able(property, name, description) {
    return (
        property
        ? "<div class='" + name + "'>" + description + property + "</div>\n"
        : ""
    )
}

function render_evidence(the_evidence) {
    if (Array.isArray(the_evidence)) {
        const the_rendered_evidence = the_evidence.map(
            (evidence) => "<li class='evidence__source'>"
            + "<a href='"
            + evidence.url
            + "'>"
            + (
                evidence.how
                ? evidence.how
                : (
                    evidence.what
                    ? evidence.what
                    : "This just uses " + evidence["inference-type"]



                ) 
            )
            + "</a>\n"
            + use_if_able(
                evidence.who,
                "who",
                "Who: "
            ) 
            + use_if_able(
                evidence["about-who"],
                "about-who",
                "About: "
            )
            + use_if_able(
                evidence["start-time"],
                "start-time",
                "Start time: ",
            )
            + use_if_able(
                evidence["source"],
                "source",
                "Source: ",
            )
            + use_if_able(
                evidence["inference-type"],
                "inference-type",
                "Inference type: "
            )
            + "</li>"
        ).reduce(
            (the_evidence_rendered, rendered_evidence) => the_evidence_rendered
            + rendered_evidence, "<ul class='evidence'>"
        ) + "</ul>";
        return "<div class='evidence'>"+ the_rendered_evidence + "</div>";
    }
}

function render_premise(current_premise, evidence, depth, number) {
    if (current_premise.premises && current_premise.conclusion) {
        const {premises, conclusion} = current_premise;
        const rendered_conclusion = "<h2>" + conclusion + "</h2>\n"
        return "<div class='conclusion_premise'>\n"
        + indent() + rendered_conclusion
        + indent() + render_premises(premises, undefined, depth)
        + "</div>";
    }
    return "<div class='conclusion__c" + depth  + "__p"
    + (number + 1) +" premise'>"
    + "<h3>"
    + current_premise
    + "</h3>"
    + evidence
    + "</div>";

}


function indent(spaces = 1) {
    if (spaces === 1) {
        return "    ";
    }
    return "    " + indent(spaces - 1);
}
