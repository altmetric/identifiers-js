# @altmetric/identifiers

[![CI](https://github.com/altmetric/identifiers-js/actions/workflows/ci-tests.yml/badge.svg)](https://github.com/altmetric/identifiers-js/actions/workflows/ci-tests.yml)
[![npm](https://img.shields.io/npm/v/@altmetric/identifiers)](https://www.npmjs.com/package/@altmetric/identifiers)

Extract scholarly identifiers from text strings. Supports Node.js 18, 20, and 22.

## Supported Identifiers

- **DOI** - Digital Object Identifiers (including ISBN-As)
- **arXiv** - arXiv preprint identifiers (pre-2007 and post-2007 formats)
- **ORCID** - Open Researcher and Contributor IDs (with checksum validation)
- **PubMed** - PubMed identifiers
- **Bibcode** - ADS Bibliographic Codes
- **Handle** - Handle System identifiers
- **NCT** - National Clinical Trial identifiers
- **RePEc** - Research Papers in Economics identifiers
- **URN** - Uniform Resource Names

## Installation

```shell
npm install @altmetric/identifiers
```

## Usage

### Import individual identifiers (recommended for tree-shaking)

```javascript
import { extract } from "@altmetric/identifiers/doi";

extract("This is a DOI: 10.1234/foo.bar");
//=> ["10.1234/foo.bar"]
```

### Import multiple identifiers

```javascript
import { extract as extractDoi } from "@altmetric/identifiers/doi";
import { extract as extractArxiv } from "@altmetric/identifiers/arxiv";

extractDoi("10.1234/foo.bar");
//=> ["10.1234/foo.bar"]

extractArxiv("arXiv:1501.00001v2");
//=> ["1501.00001v2"]
```

### Import all identifiers

```javascript
import * as identifiers from "@altmetric/identifiers";

identifiers.doi.extract("10.1234/foo.bar");
//=> ["10.1234/foo.bar"]

identifiers.arxiv.extract("math.GT/0309136");
//=> ["math.GT/0309136"]

identifiers.orcid.extract("0000-0002-0488-8591");
//=> ["0000-0002-0488-8591"]
```

### URN special case

The URN module exports both `extract()` (normalized) and `scan()` (raw):

```javascript
import { extract, scan } from "@altmetric/identifiers/urn";

scan("URN:FOO:BAR");
//=> ["URN:FOO:BAR"]

extract("URN:FOO:BAR");
//=> ["urn:foo:BAR"]
```

## TypeScript

Type definitions are included for all modules.

```typescript
import { extract } from "@altmetric/identifiers/doi";

const dois: string[] = extract("10.1234/foo");
```

## Migration from individual packages

This package replaces the following individual packages:

| Old package | New import |
|---|---|
| `identifiers-arxiv` | `@altmetric/identifiers/arxiv` |
| `identifiers-bibcode` | `@altmetric/identifiers/bibcode` |
| `identifiers-doi` | `@altmetric/identifiers/doi` |
| `identifiers-handle` | `@altmetric/identifiers/handle` |
| `identifiers-nct` | `@altmetric/identifiers/nct` |
| `identifiers-orcid` | `@altmetric/identifiers/orcid` |
| `identifiers-pubmed` | `@altmetric/identifiers/pubmed` |
| `identifiers-repec` | `@altmetric/identifiers/repec` |
| `identifiers-urn` | `@altmetric/identifiers/urn` |

The API is the same — every module exports an `extract()` function (URN also exports `scan()`). The only change is the import path and switching from CommonJS `require()` to ES module `import`:

```javascript
// Before (CommonJS)
const doi = require("identifiers-doi");
doi.extract("10.1234/foo");

// After (ES modules)
import { extract } from "@altmetric/identifiers/doi";
extract("10.1234/foo");
```

## Other versions

We also maintain versions of these libraries for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017-2026 [Altmetric LLP](https://www.altmetric.com)

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
