#!/usr/bin/env node
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageJsonTemplate } from "./packageJsonTemplate.js";
import { question } from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";
import path from "path";
const answer = await question();

const config = createConfig(answer);

// 1. Create a folder
fs.mkdirSync(getRootPath());

// 2. Create index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));

// 3. Create package.json 
fs.writeFileSync(
  getRootPath() + "/package.json",
  createPackageJsonTemplate(config)
);

// // 4. Instal dependencies
execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName);
}
