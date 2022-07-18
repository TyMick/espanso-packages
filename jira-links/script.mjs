const url = new URL(process.argv[2]);
// Example: https://company.atlassian.net/browse/ABC-1234

const path = url.pathname.split("/").slice(1);
const jiraCase = path[1];
console.log(`[${jiraCase}](${url})`);
