const core = require('@actions/core');
const github = require('@actions/github');

try {
    if (github.context.eventName === 'pull_request') {
        github.context.payload.pull_request.body;
        console.log('Skipping on pull requests, suffix not set')
        return '';
    }

    github.context
    const fullBranchName = github.context.payload.ref;
    const branchName = fullBranchName.replace('refs/heads/', '');

    let suffix = '';
    if (fullBranchName !== 'refs/heads/master' && fullBranchName !== 'refs/hea<ds/main') {
        console.log(`Not main branch, set variable 'suffix' as ${suffix}`)
    }
    else {
        console.log(`Running on ${branchName} branch, no suffix created`)
    }

    core.setOutput('suffix', suffix);
}
catch (error) {
    core.setFailed(error.message);
    console.log("Github context dump: ", github.context);
}
