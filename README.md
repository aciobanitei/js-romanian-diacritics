# `js-romanian-diacritics`

Functions for converting Romanian diacritics from a text (converting characters - standard to traditional or traditional to standard, remove diacritics marks)

## Usage

### Standard/official diacritics
The `standard` function takes a string as an argument and replaces all of its traditional/incorrect Romanian diacritics with their corresponding standard/official counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.standard("Aştept să vinã colegii de muncã.");
  // Output: Aștept să vină colegii demuncă.
```
### Traditional/incorrect diacritics
The `traditional` function takes a string as an argument and replaces all of its standard/official Romanian diacritics with their corresponding traditional/incorrect counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.traditional("Aștept să vină colegii demuncă.");
  // Output: Aştept să vinã colegii de muncã.
```


### Without diacritics
The `without` function takes a string as an argument and replaces all the Romanian diacritics (the official character set, as well as incorrect representations of them) with their accentless counterpart.

```javascript
const diacritics = require("js-romanian-diacritics");
diacritics.without("Aştept să vină primăvara şi vremea bună.");
  // Output: Astept sa vina primavara si vremea buna.
```

## Character set
These Unicode characters are the correct representations of Romanian diacritics:

| Character | Unicode value | Unicode name                            |
| --------- | ------------- | --------------------------------------- |
| Ă         | U+0102        | LATIN CAPITAL LETTER A WITH BREVE       |
| ă         | U+0103        | LATIN SMALL LETTER A WITH BREVE         |
| Â         | U+00C2        | LATIN CAPITAL LETTER A WITH CIRCUMFLEX  |
| â         | U+00E2        | LATIN SMALL LETTER A WITH CIRCUMFLEX    |
| Ș         | U+0218        | LATIN CAPITAL LETTER S WITH COMMA BELOW |
| ș         | U+0219        | LATIN SMALL LETTER S WITH COMMA BELOW   |
| Ț         | U+021A        | LATIN CAPITAL LETTER T WITH COMMA BELOW |
| ț         | U+021B        | LATIN SMALL LETTER T WITH COMMA BELOW   |