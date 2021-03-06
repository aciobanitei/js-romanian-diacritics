/**
 * Given a Romanian string, finds characters used to represent diacritics in Romanian but which are 
 * not considered official and replaces them with the correct counter-part.
 * 
 * One such example would be replacing "ş" (S with cedilla) to the correct "ș" (S with comma).
 * 
 * @param {text} text a Romanian text for which to change traditional diacritics with standard ones
 * @returns the given text with corrected diacritics (if any)
 */
function standard(text) {
  return text
    .replace(/Ş/g, "Ș").replace(/ş/g, "ș")
    .replace(/Ţ/g, "Ț").replace(/ţ/g, "ț")
    .replace(/Ã/g, "Ă").replace(/ã/g, "ă");
}

/**
 * Given a Romanian string, finds characters used to represent diacritics in Romanian which are 
 * considered official and replaces them with characters used to represent diacritics in Romanian but which are 
 * not considered official.
 * 
 * One such example would be replacing the correct "ș" (S with comma) to "ş" (S with cedilla).
 * 
 * @param {text} text a Romanian text for which to change standard diacritics with traditional ones.
 * @returns the given text with corrected diacritics (if any)
 */

function traditional(text) {
  return text
    .replace(/Ș/g, "Ş").replace(/ș/g, "ş")
    .replace(/Ț/g, "Ţ").replace(/ț/g, "ţ")
    .replace(/Ă/g, "Ã").replace(/ă/g, "ã");
}

/**
 * Given a Romanian string, removes all Romanian diacritics (the official characters for
 * diacritics, as well as the ones which are incorrectly used). As such, this function replaces
 * both "ş" (S with cedilla) and "ș" (S with comma) with the letter "s".
 * 
 * @param {text} text a Romanian text for which to strip the diacritics
 * @returns the given text without Romanian diacritics (if any)
 */
function without(text) {
  return text
    .replace(/[ȘŞ]/g, "S").replace(/[șş]/g, "s")
    .replace(/[ȚŢ]/g, "T").replace(/[țţ]/g, "t")
    .replace(/[ĂÂÃ]/g, "A").replace(/[ăâã]/g, "a")
    .replace(/[Î]/g, "I").replace(/[î]/g, "i");
}

module.exports = {
  standard,
  traditional,
  without
};