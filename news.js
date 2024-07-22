async function getData() {
    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1f18fb4228894873b67271b3b93942e4";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      
  
      let articles = await response.json();

      useData(articles);
    } catch (error) {
      console.error(error.message);
    }
  };


  getData();

  function useData(articles) {
    console.log(articles)
  }
