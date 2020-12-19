import {readFile, writeFile} from "fs";

const document = function (logic) {

    const doctype = "<!DOCTYPE html>\n";

    const head = (child_n) => "<head>\n" + indent() + child_n + "\n" + "</head>\n";
    const body = (child_n) => "<body>\n" + indent() + child_n + "\n" + "</body>\n";

    const link = (href) => "<link rel='stylesheet' href='" + href + "'"

    const document = doctype + head(link("index.css")) + body(logic);
    return document;

}

readFile("./georgia/lab/struggles/american-dream/index.json", "utf-8", function (error, json) {
    const template = JSON.parse(json);

    writeFile('index.html', document(parse_logic(template)), function (error) {
        if (error) {
            console.log("Error", error);
            return;
        };
        console.log("Write successful"); 
    });

});


function parse_logic(logic) {
    console.log("logic", logic);
    if (logic.argument) {
        // add an argument layer
        return render_argument(logic, parse_logic(logic.argument));
    }
    if (logic.conclusion) {
        if (typeof logic.conclusion === "string" && logic.premises) {
            return renderConclusion(render_premises(logic.premises), logic.conclusion);

        }

    }
}

function render_argument(logic, children) {
    const h1 = "<h1 class='argument'>"
    + logic.argument.conclusion
    + "</h1>\n";

    return h1 + children;

}

function render_premises(premises, conclusion){
    const rendered_premises = premises.map(function(premise){
        if (premise.conclusion && premise.premises) {
            const {conclusion, premises} = premise;
            console.log("The all important lion: ", premise, "\n", conclusion);
            return parse_logic(premise)
        }
        if (premise.premise) {
            if (premise.evidence) {
                console.log("evidence", premise);
                return render_premise(
                    premise.premise,
                    render_evidence(premise.evidence)
                );

            }
            return render_premise(premise.premise);
        }
        if (typeof premise === "string") {
            return render_premise(premise);
        }
    }).reduce((premises, premise) => premises + premise, "");

    return indent(2) + "<div class='premises'>\n"
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
                : evidence.what
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
            + "</li>"
        ).reduce(
            (the_evidence_rendered, rendered_evidence) => the_evidence_rendered
            + rendered_evidence, "<ul class='evidence'>"
        ) + "</ul>";
        return "<div class='evidence'>"+ the_rendered_evidence + "</div>";
    }
}

function render_premise(current_premise, evidence) {
    console.log("Current premise: ", current_premise);
    if (current_premise.premises && current_premise.conclusion) {
        const {premises, conclusion} = current_premise;
        const rendered_conclusion = "<h2>" + conclusion + "</h2>\n"
        return "<div class='conclusion_premise'>\n"
        + indent() + rendered_conclusion
        + indent() + render_premises(premises)
        + "</div>";
    }
    return "<div class='premise'>"
    + "<h3>"
    + current_premise
    + "</h3>"
    + evidence
    + "</div>";

}

function renderConclusion(premises, conclusion) {
    const heading = (
        conclusion
        ? "<h2>" + conclusion + "</h2>\n"
        : ""
    );
    return "<div class='conclusion'>\n" + indent(2) + heading + premises + "</div>\n";

}

function indent(spaces = 1) {
    if (spaces === 1) {
        return "    ";
    }
    return "    " + indent(spaces - 1);
}
