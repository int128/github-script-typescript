type GitHubScriptContext = {
  core: typeof import('@actions/core')
  context: typeof import('@actions/github').context
  github: ReturnType<typeof import('@actions/github').getOctokit>
}

export const main = async ({ core, context, github }: GitHubScriptContext) => {
  core.info('Hello from TypeScript!')

  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
    body: 'Hello from TypeScript!'
  })
}
