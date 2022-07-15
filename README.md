# `js-romanian-diacritics`

Functions for converting Romanian diacritics from a text (converting characters - standard to traditional or traditional to standard, remove diacritics marks)

## Usage

### Standard/official diacritics
The `standard` function takes a string as an argument and replaces all of its traditional/incorrect Romanian diacritics with their corresponding standard/official counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.standard("Aştept să vinã colegii de muncã.");
  // Output: Aștept să vină colegii de muncă.
```
### Traditional/incorrect diacritics
The `traditional` function takes a string as an argument and replaces all of its standard/official Romanian diacritics with their corresponding traditional/incorrect counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.traditional("Aștept să vină colegii de muncă.");
  // Output: Aştept să vinã colegii de muncã.
```


### Without diacritics
The `without` function takes a string as an argument and replaces all the Romanian diacritics (the official character set, as well as incorrect representations of them) with their accentless counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.without("Aştept să vină colegii de muncă.");
  // Output: Astept sa vina colegii de munca.
```

## Character set
There are six Romanian-specific characters that are incorrectly implemented in all Microsoft Windows versions before Vista:

U+0218 Ș LATIN CAPITAL LETTER S WITH COMMA BELOW – incorrectly implemented as U+015E Ş LATIN CAPITAL LETTER S WITH CEDILLA
U+0219 ș LATIN SMALL LETTER S WITH COMMA BELOW – incorrectly implemented as U+015F ş LATIN SMALL LETTER S WITH CEDILLA
U+021A Ț LATIN CAPITAL LETTER T WITH COMMA BELOW – incorrectly implemented as U+0162 Ţ LATIN CAPITAL LETTER T WITH CEDILLA
U+021B ț LATIN SMALL LETTER T WITH COMMA BELOW – incorrectly implemented as U+0163 ţ LATIN SMALL LETTER T WITH CEDILLA
U+0102 Ă LATIN CAPITAL LETTER A WITH BREVE – incorrectly implemented as U+00E3 ã LATIN CAPITAL LETTER A WITH TILDE
U+0103 ă LATIN SMALL LETTER A WITH BREVE – incorrectly implemented as U+00C3 Ã LATIN SMALL LETTER A WITH TILDE

These Unicode characters are the correct representations of Romanian diacritics:

| Character | Unicode value | Unicode name                            |
| --------- | ------------- | --------------------------------------- |
| Ă         | U+0102        | LATIN CAPITAL LETTER A WITH BREVE       |
| ă         | U+0103        | LATIN SMALL LETTER A WITH BREVE         |
| Â         | U+00C2        | LATIN CAPITAL LETTER A WITH CIRCUMFLEX  |
| â         | U+00E2        | LATIN SMALL LETTER A WITH CIRCUMFLEX    |
| Î         | U+00CE	    | LATIN CAPITAL LETTER S WITH CIRCUMFLEX  |
| î         | U+00EE        | LATIN SMALL LETTER S WITH CIRCUMFLEX    |
| Ț         | U+021A        | LATIN CAPITAL LETTER T WITH COMMA BELOW |
| ș         | U+0219        | LATIN SMALL LETTER S WITH COMMA BELOW   |
| Ț         | U+021A        | LATIN CAPITAL LETTER T WITH COMMA BELOW |
| ț         | U+021B        | LATIN SMALL LETTER T WITH COMMA BELOW   |

## Inspired by:

This project is inspired and it is a refinement of js-ro-diacritics

https://github.com/esevo-tech/js-ro-diacritics