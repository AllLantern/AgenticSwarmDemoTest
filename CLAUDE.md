# Agentic Swarm Demo - Claude Code AI-Native Development

## Project Overview

This repository demonstrates **agentic swarming** - a pattern where multiple specialized AI agents collaborate to build software together with humans in real-time.

## Quick Start for Live Demo

```bash
# The audience can suggest what to build!
# Examples: "Build a CLI tool", "Create a web scraper", "Make a game"

# Claude will orchestrate multiple agents:
# - Planner: Breaks down the idea into actionable steps
# - Architect: Designs the system structure
# - TDD Guide: Writes tests first
# - Code Reviewer: Reviews all code changes
# - Security Reviewer: Checks for vulnerabilities
```

## Agent Swarm Architecture

```
                    ┌─────────────────────────────────────────┐
                    │           HUMAN + AUDIENCE              │
                    │         (Ideas & Decisions)             │
                    └─────────────────┬───────────────────────┘
                                      │
                    ┌─────────────────▼───────────────────────┐
                    │         CLAUDE ORCHESTRATOR             │
                    │    (Coordinates agent collaboration)    │
                    └─────────────────┬───────────────────────┘
                                      │
        ┌─────────────┬───────────────┼───────────────┬─────────────┐
        │             │               │               │             │
        ▼             ▼               ▼               ▼             ▼
   ┌─────────┐  ┌──────────┐  ┌────────────┐  ┌───────────┐  ┌──────────┐
   │ PLANNER │  │ARCHITECT │  │ TDD-GUIDE  │  │ SECURITY  │  │ CODE     │
   │         │  │          │  │            │  │ REVIEWER  │  │ REVIEWER │
   └────┬────┘  └────┬─────┘  └─────┬──────┘  └─────┬─────┘  └────┬─────┘
        │            │              │               │              │
        └────────────┴──────────────┴───────────────┴──────────────┘
                                    │
                    ┌───────────────▼───────────────────────┐
                    │           WORKING CODE               │
                    │   (Tests, Implementation, Docs)       │
                    └───────────────────────────────────────┘
```

## Available Agents

### Planning & Architecture
| Agent | Trigger | Purpose |
|-------|---------|---------|
| **planner** | New features, complex tasks | Creates detailed implementation plans |
| **architect** | System design, scalability | Designs architecture, evaluates trade-offs |

### Code Quality
| Agent | Trigger | Purpose |
|-------|---------|---------|
| **code-reviewer** | After writing code | Reviews for quality, security, best practices |
| **tdd-guide** | Before writing features | Enforces test-first development |
| **refactor-cleaner** | Code cleanup needed | Removes dead code, consolidates duplicates |

### Build & Error Resolution
| Agent | Trigger | Purpose |
|-------|---------|---------|
| **build-error-resolver** | TypeScript/build errors | Fixes build errors with minimal changes |
| **go-build-resolver** | Go compilation errors | Fixes Go build/vet issues |

### Specialized Reviews
| Agent | Trigger | Purpose |
|-------|---------|---------|
| **security-reviewer** | Auth, API, user input code | Finds OWASP Top 10 vulnerabilities |
| **database-reviewer** | SQL, schemas, queries | Optimizes queries, ensures RLS |
| **go-reviewer** | Go code changes | Reviews for idiomatic Go |

### Testing & Documentation
| Agent | Trigger | Purpose |
|-------|---------|---------|
| **e2e-runner** | User flow testing | Creates and runs E2E tests |
| **doc-updater** | Documentation updates | Maintains codemaps and docs |

## Swarming Patterns

### Pattern 1: Feature Development Swarm
```
1. PLANNER    → Creates implementation plan
2. ARCHITECT  → Designs system structure
3. TDD-GUIDE  → Writes failing tests
4. [Human]    → Implements code
5. CODE-REVIEWER + SECURITY-REVIEWER → Review (parallel)
6. BUILD-ERROR-RESOLVER → Fix any issues
7. DOC-UPDATER → Update documentation
```

### Pattern 2: Bug Fix Swarm
```
1. TDD-GUIDE  → Write test that reproduces bug
2. [Human]    → Fix the bug
3. BUILD-ERROR-RESOLVER → Fix any build issues
4. CODE-REVIEWER → Verify fix quality
```

### Pattern 3: Refactoring Swarm
```
1. REFACTOR-CLEANER → Identify dead code
2. ARCHITECT  → Plan refactoring
3. CODE-REVIEWER → Review changes
4. E2E-RUNNER → Verify nothing broke
```

## Live Demo Commands

### Start a New Project
```
"Let's build [IDEA from audience]. Start with planning."
```

### Invoke Specific Agents
```
"Use the planner agent to break this down"
"Have the architect design the structure"
"Run security review on this code"
"Use TDD approach for this feature"
```

### Parallel Agent Execution
```
"Run code review AND security review in parallel"
"Have planner and architect work together on this"
```

## Development Workflow

### For TypeScript/JavaScript Projects
1. Write tests first (tdd-guide)
2. Implement minimal code
3. Run build (build-error-resolver if errors)
4. Review code (code-reviewer)
5. Check security (security-reviewer)
6. Update docs (doc-updater)

### For Go Projects
1. Write tests first (tdd-guide)
2. Implement code
3. Run `go build` (go-build-resolver if errors)
4. Run `go vet` (go-reviewer)
5. Review code (go-reviewer + code-reviewer)

## Environment Setup

This repository is configured for Claude Code with:
- Agent skill files in root directory (`*.md`)
- Configuration in `.claude/` directory
- Demo examples in `examples/` directory

## Session Commands

```bash
# View available agents
ls *.md

# Check agent configuration
cat .claude/settings.json

# Start demo project
cd examples && ls
```

## Best Practices

1. **Let agents collaborate** - Don't do everything manually
2. **Tests first** - Always use TDD approach
3. **Security by default** - Run security review on sensitive code
4. **Document as you go** - Keep docs in sync
5. **Small, focused changes** - Easier to review and debug

## Audience Participation

During the live demo, the audience can:
- **Suggest what to build** (CLI tool, web app, game, etc.)
- **Vote on features** to implement
- **Ask agents questions** about design decisions
- **Request code reviews** on specific sections
- **Challenge the security** of implementations

---

*This is an AI-native development environment where humans and AI agents collaborate seamlessly to build software.*
