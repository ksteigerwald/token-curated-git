const octokit = require('@octokit/rest')()
// oauth
octokit.authenticate({
  type: 'oauth',
  token: process.env.GHTOKEN
});
//octokit.repos.createDeploymentStatus('ETHSF', 'token-curated-git', 1, 'pending', '', '', '', '', '', (error, result) => {})
var opts = {owner:'ETHSF', repo:'token-curated-git', sha:'063a8b0430277c15ff6026d0a53c2104e24a11f5', state:'pending'}
octokit.repos.createStatus(opts).then(result => {
  console.log(opts);
}).catch(err => {
 console.log("ERROR:", err)
})
