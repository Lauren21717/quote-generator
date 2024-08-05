const api_url = "https://type.fit/api/quotes"

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
}

getquote(api_url)