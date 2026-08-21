# Contributing to Go-turkmen

Thank you for your interest in contributing to **Go-turkmen**!

Go-turkmen is an open-source project focused on helping Turkmen-speaking developers learn the Go programming language through explanations, examples, exercises, and practical projects.

Contributions of all sizes are welcome.

## Ways to Contribute

You can help the project by:

- Fixing bugs or broken examples
- Improving Turkmen translations
- Fixing spelling or grammar mistakes
- Adding new Go lessons
- Improving existing lessons
- Adding code examples
- Adding exercises and solutions
- Adding practical Go projects
- Improving documentation
- Reporting outdated Go examples
- Suggesting new topics
- Improving CI and project tooling

You do not need to make a large contribution. Small corrections are useful too.

## Before You Start

Before making a significant change, check the existing Issues to see if the work is already being discussed.

For larger changes, create an Issue first.

Examples:

- New Go lesson
- New project
- Major restructuring
- New tooling
- Large translation changes

Small typo and documentation fixes generally do not require a separate Issue.

## Development Workflow

The recommended contribution workflow is:

1. Choose or create an Issue.
2. Create a branch from `main`.
3. Make your changes.
4. Format and verify the code.
5. Commit your changes.
6. Push your branch.
7. Open a Pull Request.
8. Wait for CI checks and review.
9. Merge when everything is ready.

## Clone the Repository

```bash
git clone https://github.com/dayanchm/Go-turkmen.git
cd Go-turkmen
```

Make sure your local `main` branch is up to date:

```bash
git switch main
git pull origin main
```

## Create a Branch

Do not make feature changes directly on `main`.

Create a separate branch:

```bash
git switch -c feat/go-testing
```

Recommended branch prefixes:

| Prefix | Purpose |
| --- | --- |
| `feat/` | New lesson, feature, example, or project |
| `fix/` | Bug or incorrect code fix |
| `docs/` | Documentation changes |
| `translation/` | Turkmen translation improvements |
| `ci/` | GitHub Actions / CI changes |
| `refactor/` | Code or content restructuring |

Examples:

```text
feat/go-testing
feat/rest-api-project
fix/channel-example
docs/improve-readme
translation/functions-lesson
ci/improve-go-checks
```

## Writing Go Examples

Go examples should be simple, readable, and educational.

Whenever possible, examples should:

- Follow standard Go conventions
- Be formatted with `gofmt`
- Compile successfully
- Use the Go standard library when practical
- Avoid unnecessary dependencies
- Demonstrate one concept clearly
- Use meaningful variable and function names
- Include comments only when they improve understanding

Format Go files before submitting:

```bash
gofmt -w .
```

For Go modules, also run:

```bash
go vet ./...
go test ./...
go build ./...
```

where applicable.

## Educational Examples

Remember that this repository is intended for learning.

Prefer:

```go
func add(a int, b int) int {
	return a + b
}
```

over unnecessarily complex abstractions.

Examples should focus on the concept being taught.

Avoid introducing unrelated libraries, patterns, or optimizations into beginner lessons unless they are necessary.

## Adding a New Lesson

Before adding a new lesson, check that a similar lesson does not already exist.

A good lesson should generally contain:

1. A clear title
2. A short explanation
3. Basic syntax
4. A working example
5. Explanation of the example
6. Common mistakes when relevant
7. Exercises when appropriate
8. Links to related lessons when useful

Keep lessons focused on one primary topic.

## Adding Exercises

Exercises should reinforce concepts already introduced in the lesson.

A good exercise should:

- Clearly explain the task
- Avoid requiring knowledge not yet introduced
- Have a reasonable difficulty level
- Prefer more than one possible solution when appropriate

If a solution is provided, keep it separate from the exercise whenever possible so learners can attempt the problem first.

## Adding Projects

Practical projects should demonstrate how multiple Go concepts work together.

Good project ideas include:

- CLI applications
- REST APIs
- HTTP servers
- Database applications
- Concurrent programs
- Developer tools

Projects should include instructions explaining:

- What will be built
- What concepts are used
- How to run the project
- Any required dependencies
- Suggested improvements or challenges

## Turkmen Language Guidelines

Use clear and understandable Turkmen.

The primary goal is to make Go understandable to Turkmen-speaking developers.

Do not translate technical terminology when the translation would make the concept harder to understand.

For example, established terms such as:

- Go
- goroutine
- channel
- interface
- package
- API
- HTTP
- JSON
- SQL

may remain in their commonly understood technical form.

When introducing a difficult technical term, you can explain its meaning in Turkmen while preserving the original term.

Try to use terminology consistently throughout the repository.

If you are unsure about a translation, open an Issue or Discussion instead of silently introducing a new terminology standard.

## Documentation Style

Keep documentation:

- Clear
- Friendly
- Technically accurate
- Easy for beginners to follow
- Consistent with existing lessons

Use Markdown headings to organize longer content.

Use fenced code blocks with the appropriate language:

```go
package main

import "fmt"

func main() {
	fmt.Println("Salam, Türkmenistan!")
}
```

Commands should use:

```bash
go run main.go
```

## Commit Messages

Use short and descriptive commit messages.

Recommended format:

```text
type: description
```

Examples:

```text
feat: add Go testing lesson
feat: add REST API example
fix: correct channel example
docs: improve installation guide
translation: improve interface explanation
ci: add GitHub Actions workflow
```

Avoid unclear messages such as:

```text
update
changes
fix stuff
new
test
```

## Pull Requests

Keep each Pull Request focused on one topic.

A Pull Request should explain:

- What was changed
- Why the change was needed
- How it was verified
- Which Issue it resolves, if applicable

If the Pull Request resolves an Issue, add:

```text
Closes #123
```

to the Pull Request description.

This allows GitHub to automatically close the Issue when the Pull Request is merged.

## Pull Request Checklist

Before submitting a Pull Request, check:

- [ ] My changes are focused on one topic.
- [ ] I checked for similar existing content.
- [ ] Go code is formatted with `gofmt`.
- [ ] Go examples compile where applicable.
- [ ] Existing tests pass where applicable.
- [ ] I reviewed my own changes.
- [ ] Documentation is clear.
- [ ] Turkmen terminology is consistent.
- [ ] I linked the relevant Issue if one exists.

## CI Checks

Pull Requests may be checked automatically with GitHub Actions.

CI may verify things such as:

```text
gofmt
go vet
go test
go build
```

Please make sure relevant checks pass before the Pull Request is merged.

If CI fails, inspect the failed check and update the same branch. The Pull Request will update automatically after you push new commits.

## Reporting Bugs

When reporting a problem, include as much useful information as possible.

For code problems, include:

- Lesson or file name
- Go version
- Operating system if relevant
- Expected behavior
- Actual behavior
- Error message
- Minimal reproduction when possible

## Translation Corrections

Translation improvements are especially welcome.

When proposing a terminology change, explain why the new wording is clearer or more accurate.

For changes that affect terminology across many lessons, open an Issue first so the terminology can be discussed before changing many files.

## Security

Do not publish sensitive information in Issues, Pull Requests, examples, or screenshots.

Never commit:

- Passwords
- API keys
- Access tokens
- Private keys
- Database credentials
- Personal secrets

Use placeholder values in educational examples.

For example:

```text
DATABASE_URL=postgres://user:password@localhost:5432/example
```

instead of real credentials.

## Code of Conduct

Be respectful and constructive when communicating with other contributors.

Technical disagreements are welcome, but discussions should focus on improving the project.

Help beginners when possible and explain requested changes clearly.

## Getting Help

If you are unsure how to contribute, open an Issue and describe what you would like to improve.

You can also look for Issues labeled:

```text
good first issue
help wanted
documentation
translation
enhancement
```

These are good starting points for contributors.

## Thank You

Thank you for helping improve Go education for Turkmen-speaking developers.

Every bug fix, translation improvement, example, lesson, and project helps make Go more accessible to the Turkmen developer community.