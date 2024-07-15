
debugger
function textAnalysisTool(str) {
  try {
    // character count

    let count = str.length;
    console.log("character :", count);

    //word count

    let word = str.split(" ").length;
    console.log("word :", word);

    // frequency of each word
    let frequencyCount = {};
    str.split("").forEach((element) => {
      frequencyCount[element] = (frequencyCount[element] || 0) + 1;
    });
    console.log("frequencyCount :",frequencyCount);
  } catch (error) {
    console.warn(error);
  }
}
textAnalysisTool("my name is hit")
