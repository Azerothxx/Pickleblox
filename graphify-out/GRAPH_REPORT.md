# Graph Report - Pickleblox  (2026-11-06)

## Corpus Check
- 17 files · ~770 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 7, .code-snippets 1)

## Summary
- 116 nodes · 133 edges · 19 communities (8 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Compiler Configuration
- Linting Rules and Formatting
- Client Server Networking
- Flamework Runtime Dependencies
- Package Metadata
- Development Tool Dependencies
- Graphify Navigation Workflow
- Build and Watch Scripts
- Flamework Template Setup
- Prettier ESLint Configuration
- Roblox TypeScript Linting
- Prettier Formatter
- Roblox Compiler Types
- Flamework Compiler Transformer
- Roblox API Types
- Roblox TypeScript Compiler
- TypeScript ESLint Plugin
- TypeScript ESLint Parser

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 22 edges
2. `parserOptions` - 6 edges
3. `extends` - 5 edges
4. `@flamework/core` - 5 edges
5. `@flamework/components` - 4 edges
6. `Court` - 4 edges
7. `MatchService` - 4 edges
8. `scripts` - 3 edges
9. `@flamework/networking` - 3 edges
10. `GlobalEvents` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (19 total, 11 thin omitted)

### Community 0 - "TypeScript Compiler Configuration"
Cohesion: 0.09
Nodes (22): compilerOptions, allowSyntheticDefaultImports, baseUrl, downlevelIteration, experimentalDecorators, forceConsistentCasingInFileNames, incremental, jsx (+14 more)

### Community 1 - "Linting Rules and Formatting"
Cohesion: 0.12
Nodes (16): extends, ignorePatterns, parser, parserOptions, ecmaVersion, jsx, project, sourceType (+8 more)

### Community 2 - "Client Server Networking"
Cohesion: 0.21
Nodes (10): Events, Functions, Events, Functions, ClientToServerEvents, ClientToServerFunctions, GlobalEvents, GlobalFunctions (+2 more)

### Community 3 - "Flamework Runtime Dependencies"
Cohesion: 0.15
Nodes (9): dependencies, @flamework/components@^1.2.2, @flamework/core@^1.2.2, @flamework/networking@^1.2.2, @flamework/components, @flamework/core, @flamework/networking, Court (+1 more)

### Community 4 - "Package Metadata"
Cohesion: 0.25
Nodes (7): author, description, keywords, license, main, name, version

### Community 5 - "Development Tool Dependencies"
Cohesion: 0.29
Nodes (7): devDependencies, eslint@^7.31.0, eslint-plugin-prettier@^3.4.0, typescript@~5.2.2, eslint, eslint-plugin-prettier, typescript

### Community 6 - "Graphify Navigation Workflow"
Cohesion: 0.40
Nodes (3): Graphify architecture report, Graphify knowledge graph, Graphify wiki index

### Community 7 - "Build and Watch Scripts"
Cohesion: 0.67
Nodes (3): scripts, build, watch

## Knowledge Gaps
- **7 isolated node(s):** `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:roblox-ts/recommended`, `plugin:prettier/recommended`, `Graphify architecture report` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 64 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@flamework/networking` connect `Flamework Runtime Dependencies` to `Client Server Networking`, `Package Metadata`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `eslint:recommended`, `plugin:@typescript-eslint/recommended`, `plugin:roblox-ts/recommended` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Development Tool Dependencies` to `Package Metadata`, `Prettier ESLint Configuration`, `Roblox TypeScript Linting`, `Prettier Formatter`, `Roblox Compiler Types`, `Flamework Compiler Transformer`, `Roblox API Types`, `Roblox TypeScript Compiler`, `TypeScript ESLint Plugin`, `TypeScript ESLint Parser`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `Linting Rules and Formatting` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Why does `@flamework/core` connect `Flamework Runtime Dependencies` to `Package Metadata`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `Flamework Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._