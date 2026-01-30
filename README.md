# Agentic Swarm Demo

**AI-Native Software Development with Claude Code**

This repository demonstrates **agentic swarming** - a revolutionary pattern where multiple specialized AI agents collaborate with humans to build software in real-time.

## What's Inside

```
AgenticSwarmDemoTest/
├── CLAUDE.md              # Main orchestration guide
├── LIVE-DEMO-GUIDE.md     # Audience participation guide
├── .claude/
│   ├── settings.json      # Swarm configuration
│   └── swarm-config.md    # Agent orchestration rules
├── examples/
│   ├── typescript-cli/    # CLI starter template
│   ├── go-tool/           # Go tool starter template
│   └── web-api/           # Web API starter template
└── [Agent Skill Files]    # 12 specialized agents
```

## The Agent Swarm

| Agent | Purpose |
|-------|---------|
| `planner` | Creates detailed implementation plans |
| `architect` | Designs system architecture |
| `tdd-guide` | Enforces test-first development |
| `code-reviewer` | Reviews code quality |
| `security-reviewer` | Finds vulnerabilities |
| `database-reviewer` | Optimizes SQL & schemas |
| `build-error-resolver` | Fixes TypeScript/build errors |
| `go-build-resolver` | Fixes Go compilation issues |
| `go-reviewer` | Reviews Go code |
| `refactor-cleaner` | Removes dead code |
| `e2e-runner` | Runs end-to-end tests |
| `doc-updater` | Maintains documentation |

## Quick Start

```bash
# See the orchestration guide
cat CLAUDE.md

# See the live demo guide
cat LIVE-DEMO-GUIDE.md

# Explore example projects
ls examples/
```

## For the Live Demo

1. **Audience suggests** what to build
2. **Agents collaborate** to plan, design, and implement
3. **Tests are written first** (TDD approach)
4. **Code is reviewed** for quality and security
5. **Working software** is shipped!

See [LIVE-DEMO-GUIDE.md](LIVE-DEMO-GUIDE.md) for participation details.

## Agent Swarming Patterns

### Feature Development
```
Planner → Architect → TDD Guide → Implement → Review → Ship
```

### Bug Fix
```
TDD Guide (reproduce) → Fix → Verify → Review
```

### Security Audit
```
Security Reviewer → Database Reviewer → Code Reviewer → Report
```

## Learn More

- [CLAUDE.md](CLAUDE.md) - Full orchestration documentation
- [.claude/swarm-config.md](.claude/swarm-config.md) - Agent coordination rules
- [examples/](examples/) - Starter project templates

---

*Built for demonstrating the future of AI-native software development.*
