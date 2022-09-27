const url = new URL(process.argv[2]);
const path = url.pathname.split("/").slice(1);

let jiraCase;
switch (path[0]) {
  // Example: https://company.atlassian.net/browse/ABC-1234
  case "browse":
    jiraCase = path[1];
    break;

  // Example: https://company.atlassian.net/servicedesk/customer/portal/10/ABC-1234
  case "servicedesk":
    jiraCase = path[4];
    break;

  default:
    throw new Error("Unknown Jira URL format");
}

console.log(`[${jiraCase}](${url})`);
