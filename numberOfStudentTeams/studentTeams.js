process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*x
 * Complete the function below.
 */
function differentTeams(skills) {
    let people = skills.split("")

    let teamCount = 0

    while (people.length > 0) {

        let team = []
        let indexesToRemove = []
        const reducer = (acc, person, index, initArray) => {

            if (acc.length <= 5) {
                if (
                    (person === "p" && !team.includes("p"))
                    || (person === "c" && !team.includes("c"))
                    || (person === "m" && !team.includes("m"))
                    || (person === "b" && !team.includes("b"))
                    || (person === "z" && !team.includes("z"))
                ) {
                    acc.push(person)
                    indexesToRemove.push(index)
                }
            }
            return acc
        }

        let currentTeam = people.reduce(reducer, team)

        people = people.reduce((acc, val, ind) => {
            if (indexesToRemove.includes(ind)) {
                return acc
            } else {
                acc.push(val)
                return acc
            }
        }, [])

        if (
            currentTeam.includes("p")
            && currentTeam.includes("c")
            && currentTeam.includes("b")
            && currentTeam.includes("m")
            && currentTeam.includes("z")
        ) {

            teamCount += 1
        }
    }

    return teamCount
}

var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);

process.stdin.on('end', function() {
    __input_stdin_array = __input_stdin.split("\n");
    var skills;
    var skills = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;


    res = differentTeams(skills);
    wstream.write(res + "\n");

    wstream.end();
});
