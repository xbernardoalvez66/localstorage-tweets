// variables

const listaTweets = document.getElementById('lista-tweets');

// Event Listenner

eventListenner ();

function eventListenner(){
    // cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet);
    // borrar tweet 
    listaTweets.addEventListener('click',borrarTweet);

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);

}



// Funciones 





//Añadir Tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweets';
    botonBorrar.innerText = 'x';


    //crear elemmento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el boton de borrar tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);


    //añadir a LocalStorage
    agregarTweetLocalStorage(tweet);





}
//Eliminar tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.textContent);
     
   
    }
}

//Mostrar datos DE LocalStorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
       //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweets';
    botonBorrar.innerText = 'x';


    //crear elemmento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el boton de borrar tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);
        
    });
}

//Agregar tweet al LocalSotrage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //añadir el nuevo tweet
    tweets.push(tweet);
    //convertir de arreglo a localSotrage
    localStorage.setItem('tweets',JSON.stringify(tweets));

    //Agregar al Local Storage
    localStorage.setItem('tweets',tweet);

}
//comprobar que haya elementos en localStorage,retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    //revisamos los valores de localStorage
    if(localStorage.getItem('tweets') ===  null){
        tweets =[];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;


}

// Eliminar tweet de LocalStorage
function borrarTweetLocalStorage(tweet){
    let tweets , tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
       if(tweetBorrar === tweet){
           tweet.splice(index, 1);
       }

    });

    localStorage.setItem('tweets', JSON.stringify)

}




