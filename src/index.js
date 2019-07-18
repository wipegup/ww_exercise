import $ from 'jquery'

function displayTopWord(response){
  console.log("displaying");
  $('article.word-count').empty()
  let wordInfo =  response['word'];
  let word = Object.keys(wordInfo)[0];
  let count = wordInfo[word];
  $('article.word-count').prepend(`<div>${word} : ${count}</div>`)
}

function getTopWord(){$.ajax({
  type:"GET",
  url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
  success: displayTopWord
})};

async function postWordList(event){
  var wordList = $('textarea').val().split(" ")
  var url = "https://wordwatch-api.herokuapp.com/api/v1/words"
  const successFunc = function(response){console.log(response)}

  for( var word of wordList){
    if(word != ""){
      var data = {word: {value:word}}

      await $.ajax({
        type:"POST",
        url: url,
        data: data,
        success: successFunc,
      });
    }
  }

  await getTopWord()
  console.log("POST DONE");
}

$(document).ready( () => {

  getTopWord();

  $('button').on('click', postWordList)
  // have fun!


})
