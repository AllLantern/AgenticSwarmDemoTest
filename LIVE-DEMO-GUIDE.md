# Live Demo Guide - Agentic Swarming with Claude Code

## Welcome, Audience!

You're about to witness **AI-native software development** where Claude orchestrates multiple specialized agents to build something together - with YOUR input!

---

## What We'll Build Together

**YOU DECIDE!** Suggest ideas in the chat:

### Quick Ideas (5-10 min)
- [ ] CLI tool that organizes files by type
- [ ] Password generator with strength checker
- [ ] JSON to CSV converter
- [ ] Simple countdown timer
- [ ] Todo list CLI app

### Medium Ideas (15-20 min)
- [ ] Web scraper for a specific site
- [ ] Markdown to HTML converter
- [ ] Simple REST API
- [ ] File duplicate finder
- [ ] Log file analyzer

### Ambitious Ideas (30+ min)
- [ ] Simple game (snake, tic-tac-toe)
- [ ] Chat application
- [ ] Mini database engine
- [ ] Code formatter tool
- [ ] Simple testing framework

---

## How Agent Swarming Works

### The Cast of Agents

```
🎯 PLANNER         - Breaks down your idea into steps
🏗️  ARCHITECT       - Designs the system structure
🧪 TDD-GUIDE       - Writes tests FIRST (yes, before code!)
👀 CODE-REVIEWER   - Checks code quality
🔒 SECURITY-REVIEWER - Finds vulnerabilities
🔧 BUILD-RESOLVER  - Fixes any errors
📚 DOC-UPDATER     - Keeps docs in sync
```

### The Flow

```
   YOUR IDEA
       ↓
   [PLANNER] → "Here's the plan in 5 steps"
       ↓
   [ARCHITECT] → "Here's how to structure it"
       ↓
   [TDD-GUIDE] → "Here are the tests to pass"
       ↓
   [IMPLEMENT] → Claude writes the code
       ↓
   [REVIEW] → Agents review in parallel!
       ↓
   WORKING SOFTWARE! ✨
```

---

## Participation Commands

### Voting on Features
Type in chat:
- `+1 CLI tool` - Vote for an idea
- `feature: add color output` - Suggest a feature
- `question: why use TDD?` - Ask the agents

### Steering Development
- `"Add error handling for empty files"`
- `"Make it work on Windows too"`
- `"Add a --verbose flag"`

### Challenging the Code
- `"Is this secure?"`
- `"What about edge cases?"`
- `"Can this handle 1 million files?"`

---

## What to Watch For

### 1. Test-First Development
Watch how TDD-GUIDE writes tests BEFORE any implementation:
```typescript
// Test written first:
it('should organize files by extension', () => {
  expect(organizeFiles(['a.txt', 'b.pdf'])).toEqual({
    txt: ['a.txt'],
    pdf: ['b.pdf']
  })
})

// Then implementation follows to make test pass
```

### 2. Parallel Agent Execution
Watch as CODE-REVIEWER and SECURITY-REVIEWER work simultaneously:
```
[14:32:01] CODE-REVIEWER: Checking code quality...
[14:32:01] SECURITY-REVIEWER: Scanning for vulnerabilities...
[14:32:03] Both complete! ✓
```

### 3. Error Recovery
Watch BUILD-RESOLVER jump in when something breaks:
```
[ERROR] TypeScript: Property 'x' does not exist
[BUILD-RESOLVER] Analyzing error...
[BUILD-RESOLVER] Fixed! Added missing type definition
```

### 4. Agent Handoffs
Watch agents pass context to each other:
```
[PLANNER → ARCHITECT]
"Here's the plan. Design a structure for these 5 features..."

[ARCHITECT → TDD-GUIDE]
"Here's the architecture. Write tests for these interfaces..."
```

---

## Demo Scenarios

### Scenario A: "Build It From Scratch"
1. Audience suggests an idea
2. Planner creates implementation plan
3. Architect designs structure
4. TDD-Guide writes failing tests
5. Implementation makes tests pass
6. Reviews catch any issues
7. **Ship it!** 🚀

### Scenario B: "Fix This Bug"
1. Show broken code
2. TDD-Guide writes test that fails
3. Fix the bug
4. Test passes
5. Review the fix
6. **Bug squashed!** 🐛

### Scenario C: "Security Audit"
1. Show potentially insecure code
2. Security-Reviewer finds issues
3. Database-Reviewer checks queries
4. Fix vulnerabilities
5. Re-audit passes
6. **Secure!** 🔒

---

## Q&A Topics

Ask about:
- "How do agents decide what to do?"
- "Can agents disagree with each other?"
- "How is this different from ChatGPT?"
- "What happens when an agent fails?"
- "Can I use this for my own projects?"

---

## After the Demo

### Try It Yourself
1. Install Claude Code CLI
2. Clone this repo
3. Start experimenting!

### Resources
- Claude Code Documentation
- Agent skill file format
- Building custom agents

### Follow Up
- Share your experiments
- Submit issues/ideas
- Join the community

---

## Remember

This isn't just automation - it's **collaboration**.

The agents have specialized knowledge, but **YOU** have the vision.

Together: Human creativity + AI capability = Better software, faster.

---

**Let's build something amazing!** 🎉
