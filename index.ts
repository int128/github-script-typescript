import type * as core from '@actions/core'
import type * as github from '@actions/github'

type GitHubScriptContext = {
  core: typeof core
  context: typeof github.context
  github: ReturnType<typeof github.getOctokit>
}

export const main = async ({ core, context, github }: GitHubScriptContext) => {
  core.info('Hello from TypeScript!')

  if (context.eventName === 'pull_request') {
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: 'Hello from TypeScript!'
    })
  }
}
