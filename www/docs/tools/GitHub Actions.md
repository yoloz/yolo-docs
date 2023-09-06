## detected dubious ownership

```log
...
/usr/bin/docker run --name ef7d85337d21ff178245bba6ab81ab9b6168b1_a0d065 --label ef7d85 --workdir /github/workspace --rm -e "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN" -e "INPUT_REPO_TOKEN" -e "INPUT_ACTION" -e "INPUT_APP_LOCATION" -e "INPUT_API_LOCATION" -e "INPUT_OUTPUT_LOCATION" -e "INPUT_API_BUILD_COMMAND" -e "INPUT_APP_ARTIFACT_LOCATION" -e "INPUT_APP_BUILD_COMMAND" -e "INPUT_ROUTES_LOCATION" -e "INPUT_SKIP_APP_BUILD" -e "INPUT_CONFIG_FILE_LOCATION" -e "INPUT_SKIP_API_BUILD" -e "INPUT_PRODUCTION_BRANCH" -e "INPUT_DEPLOYMENT_ENVIRONMENT" -e "INPUT_IS_STATIC_EXPORT" -e "INPUT_DATA_API_LOCATION" -e "HOME" -e "GITHUB_JOB" -e "GITHUB_REF" -e "GITHUB_SHA" -e "GITHUB_REPOSITORY" -e "GITHUB_REPOSITORY_OWNER" -e "GITHUB_REPOSITORY_OWNER_ID" -e "GITHUB_RUN_ID" -e "GITHUB_RUN_NUMBER" -e "GITHUB_RETENTION_DAYS" -e "GITHUB_RUN_ATTEMPT" -e "GITHUB_REPOSITORY_ID" -e "GITHUB_ACTOR_ID" -e "GITHUB_ACTOR" -e "GITHUB_TRIGGERING_ACTOR" -e "GITHUB_WORKFLOW" -e "GITHUB_HEAD_REF" -e "GITHUB_BASE_REF" -e "GITHUB_EVENT_NAME" -e "GITHUB_SERVER_URL" -e "GITHUB_API_URL" -e "GITHUB_GRAPHQL_URL" -e "GITHUB_REF_NAME" -e "GITHUB_REF_PROTECTED" -e "GITHUB_REF_TYPE" -e "GITHUB_WORKFLOW_REF" -e "GITHUB_WORKFLOW_SHA" -e "GITHUB_WORKSPACE" -e "GITHUB_ACTION" -e "GITHUB_EVENT_PATH" -e "GITHUB_ACTION_REPOSITORY" -e "GITHUB_ACTION_REF" -e "GITHUB_PATH" -e "GITHUB_ENV" -e "GITHUB_STEP_SUMMARY" -e "GITHUB_STATE" -e "GITHUB_OUTPUT" -e "RUNNER_OS" -e "RUNNER_ARCH" -e "RUNNER_NAME" -e "RUNNER_ENVIRONMENT" -e "RUNNER_TOOL_CACHE" -e "RUNNER_TEMP" -e "RUNNER_WORKSPACE" -e "ACTIONS_RUNTIME_URL" -e "ACTIONS_RUNTIME_TOKEN" -e "ACTIONS_CACHE_URL" -e GITHUB_ACTIONS=true -e CI=true -v "/var/run/docker.sock":"/var/run/docker.sock" -v "/home/runner/work/_temp/_github_home":"/github/home" -v "/home/runner/work/_temp/_github_workflow":"/github/workflow" -v "/home/runner/work/_temp/_runner_file_commands":"/github/file_commands" -v "/home/runner/work/yolo-docs/yolo-docs":"/github/workspace" ef7d85:337d21ff178245bba6ab81ab9b6168b1
DeploymentId: 71733b39-9cf1-42e2-85dc-ee944b58d81c
...
[WARNING] Error: Failed to retrieve the git history for file "/github/workspace/www/docs/About.md" with exit code 128: fatal: detected dubious ownership in repository at '/github/workspace'
To add an exception for this directory, call:

	git config --global --add safe.directory /github/workspace
```

原因可能[Action fails due to dubious ownership in repository](https://github.com/webispy/checkpatch-action/issues/16)：

- docker container uid is 0(root)
- github workspace directory owner is 1001

上述通过修改`entrypoint.sh`，添加`git config --global --add safe.directory /github/workspace`

通过添加：

```yml
# ...
- name: Set safe directory
  run: git config --global --add safe.directory /github/workspace
# ...
```

仍然报错，查看[Falied to retrieve git history for files in Docusarus build](https://github.com/Seneca-CDOT/telescope/issues/3403)移除配置文件里的：

```js
showLastUpdateAuthor: true,
showLastUpdateTime: true,
```

> Since we are not copying the git history inside the Docker container, Docusaurus cannot find anything.
