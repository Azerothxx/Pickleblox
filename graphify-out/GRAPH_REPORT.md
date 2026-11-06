# Graph Report - Pickleblox  (2026-11-07)

## Corpus Check
- Corpus is ~1,330 words - fits in a single context window. You may not need a graph.

## Summary
- 125 nodes · 145 edges · 20 communities (8 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- TypeScript Compiler Configuration
- Linting Rules and Formatting
- Court Physics and Flamework
- Client Server Networking
- Package Metadata
- Development Tool Dependencies
- Match and Court Management
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
2. `MatchService` - 7 edges
3. `Court` - 6 edges
4. `parserOptions` - 6 edges
5. `@flamework/core` - 6 edges
6. `extends` - 5 edges
7. `@flamework/components` - 4 edges
8. `GlobalEvents` - 3 edges
9. `GlobalFunctions` - 3 edges
10. `@flamework/networking` - 3 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (20 total, 12 thin omitted)

### Community 0 - "TypeScript Compiler Configuration"
Cohesion: 0.09
Nodes (22): compilerOptions, allowSyntheticDefaultImports, baseUrl, downlevelIteration, experimentalDecorators, forceConsistentCasingInFileNames, incremental, jsx (+14 more)

### Community 1 - "Linting Rules and Formatting"
Cohesion: 0.12
Nodes (16): extends, ignorePatterns, parser, parserOptions, ecmaVersion, jsx, project, sourceType (+8 more)

### Community 2 - "Court Physics and Flamework"
Cohesion: 0.17
Nodes (8): dependencies, @flamework/components@^1.2.2, @flamework/core@^1.2.2, @flamework/components, @flamework/core, BallState, Court, CourtModel

### Community 3 - "Client Server Networking"
Cohesion: 0.17
Nodes (12): @flamework/networking@^1.2.2, @flamework/networking, Events, Functions, Events, Functions, ClientToServerEvents, ClientToServerFunctions (+4 more)

### Community 4 - "Package Metadata"
Cohesion: 0.25
Nodes (7): author, description, keywords, license, main, name, version

### Community 5 - "Development Tool Dependencies"
Cohesion: 0.29
Nodes (7): devDependencies, eslint@^7.31.0, eslint-plugin-prettier@^3.4.0, typescript@~5.2.2, eslint, eslint-plugin-prettier, typescript

### Community 7 - "Graphify Navigation Workflow"
Cohesion: 0.33
Nodes (3): Graphify architecture report, Graphify knowledge graph, Graphify wiki index

### Community 8 - "Build and Watch Scripts"
Cohesion: 0.67
Nodes (3): scripts, build, watch

## Knowledge Gaps
- **7 isolated node(s):** `eslint:recommended`, `plugin:prettier/recommended`, `plugin:roblox-ts/recommended`, `plugin:@typescript-eslint/recommended`, `Flamework` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 71 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `@flamework/networking` connect `Client Server Networking` to `Package Metadata`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **What connects `eslint:recommended`, `plugin:prettier/recommended`, `plugin:roblox-ts/recommended` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Why does `@flamework/core` connect `Court Physics and Flamework` to `Package Metadata`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `Linting Rules and Formatting` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Why does `@flamework/components` connect `Court Physics and Flamework` to `Package Metadata`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
## Refresh Coverage Notes

All project code was refreshed through AST extraction. The changed AGENTS.md document was re-extracted semantically. The runtime entry files yielded no symbols; their file nodes and detected imports remain represented.

Semantic extraction token counts were not exposed by the host. Zero counts are unmeasured placeholders, not zero session usage. AST extraction uses no LLM API tokens.
