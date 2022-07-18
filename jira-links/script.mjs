const url = new URL(process.argv[2]);
// Example: https://faithlife.atlassian.net/browse/FLCOM-8425

const path = url.pathname.split("/").slice(1);
const jiraCase = path[1];
console.log(`[${jiraCase}](${url})`);
