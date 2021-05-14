import { cd, chmod, exec, cp } from "shelljs";
import { join, resolve } from "path";

cd(join(__dirname, "../"));

chmod("+x", "env.sh");

exec("./env.sh");

cp(resolve("./env-config.js"), resolve("./public"));

exec("npx react-scripts start", (code, stdout, stderr) => {
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});
