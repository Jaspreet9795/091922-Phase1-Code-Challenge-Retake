// Your code here

fetch ("http://localhost:3000/films")
   .then (res=>res.json())
   .then ( data=>{
        renderMovie(data[0])
        addMovieList(data)
    })


   function renderMovie (movie){

    const title= document.getElementById("title")
    const runtime=document.getElementById("runtime")
    const info = document.getElementById("film-info")
    const showTime= document.getElementById("showtime")
    const ticketNum= document.getElementById("ticket-num")
    
    const poster= document.getElementById("poster")
    
    // const movieList= document.querySelector("li")

    console.log(movie);

    title.textContent=movie.title 
    runtime.textContent=movie.runtime 
    info.textContent= movie.description
    showTime.textContent= movie.showtime
   
    ticketNum.textContent= movie.capacity-movie.tickets_sold
    poster.src=movie.poster
   }


   // adding list on the side menu 
   function addMovieList (movies){
    const movieList = document.getElementById("films")
    console.log("adding movies");
    for (const i in movies) {
        const movieTitleDisplay= document.createElement("li")

        // console.log("movie title "+movies[movie].title)
        movieTitleDisplay.textContent= movies[i].title

        movieList.append(movieTitleDisplay)
    }
   }
  

    const btn = document.getElementById("buy-ticket")
    btn.addEventListener("click", e => buyTicket(e))
    
    function buyTicket (movie){
        console.log("movie clicked "+JSON.stringify(movie))
        const ticketNum= document.getElementById("ticket-num")
        var currTickets = parseInt(ticketNum.textContent)
        if(currTickets - 1 === 0) {
            ticketNum.textContent= "0"
            const btn = document.getElementById("buy-ticket")
            btn.innerText = "Sold"
            btn.disabled = true
        }
        else {
            ticketNum.textContent= parseInt(ticketNum.textContent) - 1
        }


    }




