// console.log("index.js taken");
// 07a1f21fd96e459a95333b81edf9cb3b

let source = "the-hindu";
let apiKey = "07a1f21fd96e459a95333b81edf9cb3b";
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = "";
    articles.forEach(function(element,index){
 
    let news = `    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <strong>Breaking News ${index+1}:</strong> ${element["title"]} 
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body">
                            ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>
                            </div>
                        </div>
                    </div>`;
      newsHTML += news;
    
});
    newsAccordion.innerHTML = newsHTML;
  }
   else {
    console.log("Some error occured")
  }
}
xhr.send()


