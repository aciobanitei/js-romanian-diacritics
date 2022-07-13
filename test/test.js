const assert = require("assert");
const standardDiacritics = require("../lib/index").standard;
const traditionalDiacritics = require("../lib/index").traditional;
const withoutDiacritics = require("../lib/index").without;

describe("js-romanian-diacritics", () => {
  describe("#standard", () => {
    it("should convert lower case 't' with cedilla to comma", () => {
      assert.equal(standardDiacritics("ţesut"), "țesut");
    });

    it("should convert upper case 'T' with cedilla to comma", () => {
      assert.equal(standardDiacritics("Ţesut"), "Țesut");
    });

    it("should convert lower case 's' with cedilla to comma", () => {
      assert.equal(standardDiacritics("muşchi"), "mușchi");
    });

    it("should convert upper case 's' with cedilla to comma", () => {
      assert.equal(standardDiacritics("Şale"), "Șale");
    });

    it("should convert lower case 'a' with tilde to breve", () => {
      assert.equal(standardDiacritics("gurã"), "gură");
    });

    it("should convert upper case 'A' with tilde to breve", () => {
      assert.equal(standardDiacritics("Ãluia"), "Ăluia")
    });

    it("should not affect standard diacritics", () => {
      const text = "Ăluia nu o să-i vină să creadă.";
      assert.equal(standardDiacritics(text), text);
    });

    it("should convert multiple diacritics", () => {
      assert.equal(standardDiacritics("Ãştia nu o sã vinã la petrecere."), "Ăștia nu o să vină la petrecere.");
    });

    it("should support empty strings", () => {
      assert.equal(standardDiacritics(""), "");
    });
  });

 describe("#traditional", () => {
      it("should convert lower case 't' with comma to cedilla", () => {
        assert.equal(traditionalDiacritics("țesut"), "ţesut");
      });
  
      it("should convert upper case 'T' with comma to cedilla", () => {
        assert.equal(traditionalDiacritics("Țesătură"), "Ţesãturã");
      });
  
      it("should convert lower case 's' with comma to cedilla", () => {
        assert.equal(traditionalDiacritics("peștera"), "peştera");
      });
  
      it("should convert upper case 's' with comma to cedilla", () => {
        assert.equal(traditionalDiacritics("Șarpanta"), "Şarpanta");
      });
  
      it("should convert lower case 'a' with tilde to breve", () => {
        assert.equal(traditionalDiacritics("papă"), "papã");
      });
  
      it("should convert upper case 'A' with tilde to breve", () => {
        assert.equal(traditionalDiacritics("Ăst"), "Ãst")
      });
  
      it("should not affect traditional diacritics", () => {
        const text = "Ãştia nu o sã revinã în ţarã.";
        assert.equal(traditionalDiacritics(text), text);
      });
  
      it("should convert multiple diacritics", () => {
        assert.equal(traditionalDiacritics("Ăștia nu o să vină la petrecere."), "Ãştia nu o sã vinã la petrecere.");
      });
  
      it("should support empty strings", () => {
        assert.equal(traditionalDiacritics(""), "");
      });
    });

  describe("#without", () => {
    it("should strip lower-case official diacritics", () => {
      assert.equal(
        withoutDiacritics("înaintaș, să, țină, șase, când"),
        "inaintas, sa, tina, sase, cand");
    });

    it("should strip upper-case official diacritics", () => {
      assert.equal(
        withoutDiacritics("Înaintaș, Ălãlalt, Țintuit, Șași, CÃZUT"),
        "Inaintas, Alalalt, Tintuit, Sasi, CAZUT");
    });

    it("should strip S and T with cedilla", () => {
      assert.equal(
        withoutDiacritics("Şaşi, şarpanta, ŢAMBAL, ţoaşcã"),
        "Sasi, sarpanta, TAMBAL, toasca");
    });

    it("should strip A with tilde", () => {
      assert.equal(
        withoutDiacritics("NUMÃR, numãr"),
        "NUMAR, numar");
    });
  });
});