const Dictionary = require("./dictionary");

class Emojinize {
  decode(text){
    return (text || "").replace(/:([a-zA-Z0-9+-_]*?):/g, (match, part)=>{
      const target = Dictionary.find((emoji)=>{
        return emoji.aliases.indexOf(part) !== -1;
      });
      return target ? target.emoji : match;
    });
  }
}

module.exports = new Emojinize;
