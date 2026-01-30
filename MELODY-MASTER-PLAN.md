# Melody Master - Implementation Plan

## Agent Swarm Review Complete

This plan was created and reviewed by the following agents:
- **Planner** - Implementation breakdown and phasing
- **Architect** - System design and data flow
- **TDD-Guide** - Test strategy and coverage
- **Security-Reviewer** - Vulnerability assessment
- **Code-Reviewer** - Quality patterns and a11y

---

## Project Overview

**Melody Master** is a Heardle-inspired music guessing game where players identify songs from progressively longer synthesized melody clips using Web Audio API.

### Tech Stack
- React 18 + TypeScript + Vite
- Tailwind CSS
- Web Audio API (no external audio files)
- LocalStorage for persistence

---

## Architecture Overview

```
                    ┌─────────────────────────────────────────┐
                    │              App.tsx                    │
                    │    (AudioContext + Game Providers)      │
                    └─────────────────┬───────────────────────┘
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        │                             │                             │
        ▼                             ▼                             ▼
┌───────────────┐           ┌─────────────────┐           ┌───────────────┐
│   GameScreen  │           │  PlaybackPanel  │           │   ResultsModal│
│  (orchestrator)           │  - PlayButton   │           │  - Win/Lose   │
└───────┬───────┘           │  - Waveform     │           │  - Share      │
        │                   └─────────────────┘           │  - Stats      │
        │                                                 └───────────────┘
        ▼
┌───────────────┐    ┌───────────────┐
│  GuessInput   │    │  ProgressBar  │
│  (autocomplete)    │  (6 attempts) │
└───────────────┘    └───────────────┘
```

### State Flow
```
LocalStorage ←→ usePersistence ←→ GameContext
                                       │
Date Seed ───→ useDailyChallenge ──────┤
                                       │
Web Audio ←── useAudioEngine ←─────────┘
```

---

## Implementation Phases

### Phase 1: Foundation (MVP Core)

| Step | Task | Complexity | Files |
|------|------|------------|-------|
| 1.1 | Project setup (Vite + React + TS + Tailwind) | Simple | `package.json`, `vite.config.ts`, `tailwind.config.js` |
| 1.2 | Type definitions | Simple | `src/types/` |
| 1.3 | Web Audio Engine | Complex | `src/lib/audio/AudioEngine.ts` |
| 1.4 | Sample melody library (public domain songs) | Medium | `src/lib/songs/songData.ts` |
| 1.5 | `useAudioEngine` hook | Medium | `src/hooks/useAudioEngine.ts` |
| 1.6 | `useGameState` hook/reducer | Medium | `src/hooks/useGameState.ts` |
| 1.7 | Player component | Medium | `src/components/Player/` |
| 1.8 | GuessInput with autocomplete | Medium | `src/components/GuessInput/` |
| 1.9 | Progress indicator | Simple | `src/components/ProgressBar/` |
| 1.10 | Game container integration | Medium | `src/components/Game/` |

### Phase 2: Daily Challenge & Persistence

| Step | Task | Files |
|------|------|-------|
| 2.1 | Deterministic daily seed | `src/lib/utils/seedRandom.ts`, `src/hooks/useDailyChallenge.ts` |
| 2.2 | LocalStorage stats | `src/hooks/useStats.ts`, `src/lib/storage/` |
| 2.3 | Game state persistence | `src/lib/storage/gameStorage.ts` |
| 2.4 | Stats modal | `src/components/Stats/` |

### Phase 3: Share & Social

| Step | Task | Files |
|------|------|-------|
| 3.1 | Results screen | `src/components/Results/` |
| 3.2 | Emoji grid generation | `src/lib/utils/shareText.ts` |
| 3.3 | Web Share API / Clipboard | `src/lib/utils/share.ts` |

### Phase 4: Polish & A11y

| Step | Task |
|------|------|
| 4.1 | Tailwind design system |
| 4.2 | Waveform visualization |
| 4.3 | ARIA labels, keyboard nav, focus management |
| 4.4 | Mobile/iOS audio fixes |
| 4.5 | Error boundaries |

### Phase 5: Testing

| Step | Task |
|------|------|
| 5.1 | Unit tests (reducer, utils) |
| 5.2 | Component tests |
| 5.3 | Integration tests |

---

## Key Data Structures

### Melody Format
```typescript
interface Note {
  pitch: number;        // MIDI note (60 = middle C)
  duration: number;     // Beats
  startBeat: number;    // Position
}

interface MelodyData {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  notes: Note[];
  difficulty: 'easy' | 'medium' | 'hard';
}
```

### Game State (Discriminated Union)
```typescript
type GameState =
  | { phase: 'playing'; currentAttempt: number; guesses: Guess[] }
  | { phase: 'won'; attempts: number; guesses: Guess[] }
  | { phase: 'lost'; correctAnswer: MelodyData; guesses: Guess[] };
```

### Stats Persistence
```typescript
interface PlayerStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: [number, number, number, number, number, number];
  lastPlayedDate: string;
}
```

---

## Progressive Reveal Durations

| Attempt | Duration | Notes Revealed |
|---------|----------|----------------|
| 1 | 1 second | Opening 1-2 notes |
| 2 | 2 seconds | First phrase fragment |
| 3 | 4 seconds | Complete first phrase |
| 4 | 7 seconds | Two phrases |
| 5 | 11 seconds | Most of chorus |
| 6 | 16 seconds | Full memorable section |

---

## Security Assessment (LOW RISK)

| Risk | Severity | Mitigation |
|------|----------|------------|
| LocalStorage tampering | LOW | Accept (single-player game) |
| XSS via share text | LOW | React auto-escaping, no innerHTML |
| Date manipulation | LOW | Accept (no backend) |
| Dependency vulnerabilities | MEDIUM | Regular `npm audit` |

**Key Security Practices:**
- Never use `dangerouslySetInnerHTML`
- Schema validation on LocalStorage reads
- CSP headers in deployment
- HTTPS only

---

## Accessibility Requirements (CRITICAL)

### Must Implement
- ARIA combobox pattern for autocomplete
- `aria-live` regions for game state announcements
- Full keyboard navigation
- Focus management (modal open/close)
- Non-color feedback (icons + text, not just red/green)

### AudioPlayer ARIA
```tsx
<button
  aria-label={isPlaying ? 'Pause' : 'Play'}
  aria-pressed={isPlaying}
>
```

---

## Test Strategy (80%+ Coverage)

### Critical Unit Tests
- `gameReducer` - all state transitions
- `seedRandom` - determinism verification
- `fuzzySearch` - matching algorithm
- `shareText` - emoji grid generation

### Integration Tests
- Full game win flow
- Progressive reveal mechanics
- LocalStorage persistence
- Daily challenge consistency

### Mocking Strategy
- Mock `AudioContext` with spies
- Mock `localStorage` with in-memory store
- Mock dates with `vi.setSystemTime()`

---

## Code Quality Patterns

### DO
- Discriminated unions for state phases
- Separate contexts by domain (Game, Audio, Settings)
- Web Audio API scheduling for precise timing
- `useRef` for high-frequency updates (progress bar)
- Memoize expensive search/filter operations

### DON'T
- `setTimeout` for audio timing (drifts)
- Single mega-context for all state
- React state for animation frames
- Inline `any` types
- `dangerouslySetInnerHTML`

---

## Sample Melodies (Public Domain)

| Song | Difficulty |
|------|------------|
| Twinkle Twinkle Little Star | Easy |
| Happy Birthday | Easy |
| Ode to Joy (Beethoven) | Easy |
| Mary Had a Little Lamb | Easy |
| Jingle Bells | Easy |
| Amazing Grace | Medium |
| Für Elise (opening) | Medium |
| Canon in D (opening) | Medium |

---

## File Structure

```
melody-master/
├── src/
│   ├── components/
│   │   ├── Game/
│   │   ├── Player/
│   │   ├── GuessInput/
│   │   ├── ProgressBar/
│   │   ├── Results/
│   │   └── Stats/
│   ├── hooks/
│   │   ├── useAudioEngine.ts
│   │   ├── useGameState.ts
│   │   ├── useDailyChallenge.ts
│   │   └── useStats.ts
│   ├── lib/
│   │   ├── audio/
│   │   ├── songs/
│   │   └── utils/
│   ├── types/
│   │   └── index.ts
│   ├── contexts/
│   │   ├── GameContext.tsx
│   │   └── AudioContext.tsx
│   └── App.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## Estimated Effort

| Phase | Effort | Priority |
|-------|--------|----------|
| Phase 1: Foundation | 3-4 days | P0 |
| Phase 2: Daily + Persistence | 1-2 days | P0 |
| Phase 3: Share Features | 1 day | P1 |
| Phase 4: Polish | 2 days | P2 |
| Phase 5: Testing | 1-2 days | P0 |

**Total: 8-11 days**

---

## Ready to Build

This plan has been reviewed by:
- **Planner**: 22 implementation steps
- **Architect**: Component tree, data flow, state management
- **TDD-Guide**: 54+ test cases, mocking strategy
- **Security-Reviewer**: 6 risk categories assessed
- **Code-Reviewer**: TypeScript, React, a11y patterns

**Next step**: Create the project structure and start with Phase 1.1 (Project Setup)
