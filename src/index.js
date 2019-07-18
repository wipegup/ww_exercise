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

$(document).ready( () => {

  getTopWord();

  // $('button').on('click', postWordList)
  // have fun!


})
