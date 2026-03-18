/**
 * @altmetric/identifiers
 *
 * Extract scholarly identifiers from text strings.
 * Each identifier type can be imported individually for tree-shaking:
 *
 *   import { extract } from "@altmetric/identifiers/doi";
 *
 * Or import all identifiers at once:
 *
 *   import * as identifiers from "@altmetric/identifiers";
 *   identifiers.doi.extract("10.1234/foo");
 */

export * as arxiv from "./arxiv.js";
export * as bibcode from "./bibcode.js";
export * as doi from "./doi.js";
export * as handle from "./handle.js";
export * as nct from "./nct.js";
export * as orcid from "./orcid.js";
export * as pubmed from "./pubmed.js";
export * as repec from "./repec.js";
export * as urn from "./urn.js";
