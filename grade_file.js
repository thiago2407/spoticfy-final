import fs from "fs";
import prompt from "prompt";

let fileContent;

try {
    fileContent = fs.readFileSync("./notas/template.md", "utf-8");
    console.log(fileContent);
} catch (err) {
    console.log(err);
}

prompt.start();
prompt.get(["apellidos", "curso"], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const file = `./notas/4${result.curso.toUpperCase()}/${
        result.apellidos
    }.md`;

    console.log(`Writing to ${file}`);

    try {
        fs.writeFileSync(file, fileContent);
        console.log("Done!");
    } catch (err) {
        console.log(err);
    }
});
