# Graph Report - Pickleblox  (2026-11-07)

## Corpus Check
- 20 files · ~1,648 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .code-snippets 1, .toml 1)

## Summary
- 143 nodes · 175 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Compiler Configuration
- Linting Rules and Formatting
- court.ts
- Client Server Networking
- package.json
- MatchService
- player-controller.ts
- Graphify Navigation Workflow
- Build and Watch Scripts
- Flamework Template Setup

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 22 edges
2. `@flamework/core` - 8 edges
3. `PlayerController` - 8 edges
4. `MatchService` - 7 edges
5. `parserOptions` - 6 edges
6. `@flamework/components` - 6 edges
7. `Paddle` - 6 edges
8. `Court` - 6 edges
9. `extends` - 5 edges
10. `scripts` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "TypeScript Compiler Configuration"
Cohesion: 0.09
Nodes (22): compilerOptions, allowSyntheticDefaultImports, baseUrl, downlevelIteration, experimentalDecorators, forceConsistentCasingInFileNames, incremental, jsx (+14 more)

### Community 1 - "Linting Rules and Formatting"
Cohesion: 0.12
Nodes (16): extends, ignorePatterns, parser, parserOptions, ecmaVersion, jsx, project, sourceType (+8 more)

### Community 2 - "court.ts"
Cohesion: 0.16
Nodes (8): dependencies, @flamework/components@^1.2.2, @flamework/core@^1.2.2, @flamework/components, @flamework/core, BallState, Court, CourtModel

### Community 3 - "Client Server Networking"
Cohesion: 0.17
Nodes (12): @flamework/networking@^1.2.2, @flamework/networking, Events, Functions, Events, Functions, ClientToServerEvents, ClientToServerFunctions (+4 more)

### Community 4 - "package.json"
Cohesion: 0.08
Nodes (32): author, description, devDependencies, eslint@^7.31.0, eslint-config-prettier@^8.3.0, eslint-plugin-prettier@^3.4.0, eslint-plugin-roblox-ts@^0.0.30, prettier@^2.3.2 (+24 more)

### Community 6 - "player-controller.ts"
Cohesion: 0.17
Nodes (4): Paddle, PlayerController, toolComponentTags, waitForChildWithType()

### Community 7 - "Graphify Navigation Workflow"
Cohesion: 0.33
Nodes (3): Graphify architecture report, Graphify knowledge graph, Graphify wiki index

### Community 8 - "Build and Watch Scripts"
Cohesion: 0.67
Nodes (3): scripts, build, watch

## Knowledge Gaps
- **7 isolated node(s):** `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:roblox-ts/recommended`, `plugin:prettier/recommended`, `Graphify architecture report` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 78 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@flamework/core` connect `court.ts` to `package.json`, `player-controller.ts`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **What connects `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:roblox-ts/recommended` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Why does `@flamework/networking` connect `Client Server Networking` to `package.json`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `Linting Rules and Formatting` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Why does `@flamework/components` connect `court.ts` to `package.json`, `player-controller.ts`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._