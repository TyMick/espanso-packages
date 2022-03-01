const url = new URL(process.argv[2]);
const path = url.pathname.split("/").slice(1);
const repo = path[1];

if (path[2] === "pull" || path[2] === "issues") {
  const number = path[3];
  console.log(`[${repo}#${number}](${url})`);
}

if (path[2] === "commit") {
  const hash = path[3];
  console.log(`[\`${hash.substring(0, 7)}\`](${url})`);
}