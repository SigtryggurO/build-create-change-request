const core = require('@actions/core');
const github = require('@actions/github');

try {
    if (github.context.eventName === 'pull_request') {
        console.log('This is a pull request');
        // return '';
    }

    console.log("context", github);
    console.log("context", github.context);
    console.log("payload", github.context.payload);
    console.log("pull-request", github.context.payload.pull_request);
    console.log("pull-request_body", github.context.payload.pull_request.body);
    console.log("pull-request_url", github.context.payload.pull_request.html_url);

    // core.setOutput('suffix', suffix);
}
catch (error) {
    core.setFailed(error.message);
    console.log("Github context dump: ", github.context);
}
