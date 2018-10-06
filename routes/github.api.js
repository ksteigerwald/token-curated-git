const octokit = require('@octokit/rest')()
// oauth
octokit.authenticate({
  type: 'oauth',
  token: process.env.GHTOKEN
});
//octokit.repos.createDeploymentStatus('ETHSF', 'token-curated-git', 1, 'pending', '', '', '', '', '', (error, result) => {})
var opts = {owner:'ETHSF', repo:'token-curated-git', deployment_id:1, state:'pending'}
octokit.repos.createDeploymentStatus(opts).then(result => {
  console.log(opts);
})
