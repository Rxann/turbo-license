import { createReadStream, createWriteStream } from "fs";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import colors from "picocolors";

inquirer
  .prompt([
    {
      type: "list",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL-3.0"],
    },
  ])
  .then((answer) => {
    const spinner = createSpinner("Generating...").start();
    if (answer.license === "MIT") {
      createReadStream("MIT.txt")
        .pipe(createWriteStream("LICENSE"))
        .on("close", () => {
          spinner.stop();
          console.log(colors.green("Done!"));
          console.log(
            colors.bold(
              "Please make sure to add needed info to the LICENSE file."
            )
          );
        });
    } else if (answer.license === "Apache 2.0") {
      createReadStream("Apache2.txt")
        .pipe(createWriteStream("LICENSE"))
        .on("close", () => {
          spinner.stop();
          console.log(colors.green("Done!"));
          console.log(
            colors.bold(
              "Please make sure to add needed info to the LICENSE file."
            )
          );
        });
    } else if (answer.license === "GPL-3.0") {
      createReadStream("GPL.txt")
        .pipe(createWriteStream("LICENSE"))
        .on("close", () => {
          spinner.stop();
          console.log(colors.green("Done!"));
          console.log(
            colors.bold(
              "Please make sure to add needed info to the LICENSE file."
            )
          );
        });
    }
  });
