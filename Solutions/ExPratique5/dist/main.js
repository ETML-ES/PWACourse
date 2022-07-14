import { domOn } from "./lib/esayDOMmanipulation.js";
import { monthToMonth } from "./lib/dateManipulation.js";
import { template } from "./lib/template.js";
const tabRating = ["rating0", "rating1", "rating2", "rating3", "rating4", "rating5"]
const TEMP_MOVIE = document.querySelector("#temp-movie");

let choosenindex = "storagedate";//NEW

//IndexedDB
const request = window.indexedDB.open("cinetheque", 1);
let db;

//ça marche pas
request.onerror = event => {
    console.log("Problems, user no allowence");
};

//ça marche
request.onsuccess = event => {
    db = event.target.result;
    callDOM(choosenindex)//NEW
    db.onerror = event => {
        console.error("Database error: " + event.target.errorCode);
    };
};

request.onupgradeneeded = event => {
    db = event.target.result;
    db.onerror = event => {
        console.error("Database error: " + event.target.errorCode);
    };
    const objectStore = db.createObjectStore("movies", { keyPath: "numKey", autoIncrement: true });
    objectStore.createIndex("titleMovie", "titleMovie", { unique: false });
    objectStore.createIndex("watchingdate", "date", { unique: false });
    objectStore.createIndex("rate", "rate", { unique: false });
    objectStore.createIndex("storagedate", "storagedate", { unique: false });
}

domOn("#plus", "click", evt => {
    document.querySelector("#global-page").classList.add("hidden");
    document.querySelector("#add-movie").classList.remove("hidden");
})
//fin IndexedDB
//////////////
//fonction Appel du DOM des film
const callDOM = async (choosenindex) => {//NEW

    //pour supprimer le DOM puis le mettre à jour 
    if (document.querySelectorAll(".content-image") != null) {
        document.querySelectorAll(".content-image").forEach(el => el.remove())
    }

    db.transaction("movies").objectStore("movies").index(`${choosenindex}`).getAll().onsuccess = (event) => {//NEW
        const myresults = event.target.result
        myresults.reverse()
        myresults.forEach(element => {
            //viewingDate transformation
            const finalDate = monthToMonth(element.date);
            //templating
            const clone = TEMP_MOVIE.content.cloneNode(true)
            const vars = {
                title: element.title,
                day: finalDate.day,
                month: finalDate.month,
                year: finalDate.year,
            }
            const templateDone = template({ template: clone, selectors: "p, span, time", vars: vars })
            templateDone.querySelector(".rating").classList.add(tabRating[element.rate])
            templateDone.querySelector(".image").src = window.URL.createObjectURL(element.picture)
            document.querySelector("#home").appendChild(templateDone)
        });
    };
}
//fin fonction appel DOM
////////////////////////


domOn("#add-movie-button", "click", async () => {
    //récupération formulaire
    const movieTitle = document.querySelector('#title-movie').value
    const viewingDate = document.querySelector('#date').value
    const picture = document.querySelector('#picture').files[0];
    const stars = document.querySelector('#star').value

    //Store it !
    //transform image as a blob
    const url = window.URL.createObjectURL(picture)
    const response = await fetch(url);
    const blob = await response.blob()

    const movie = {
        storagedate: new Date(Date.now()),
        title: movieTitle,
        date: new Date(viewingDate),
        picture: blob,
        rate: stars
    }

    db.transaction(["movies"], "readwrite").objectStore("movies").add(movie)

    document.querySelector("#global-page").classList.remove("hidden");
    document.querySelector("#add-movie").classList.add("hidden");

    callDOM(choosenindex);

})


// tri de l'information champs de recherche

domOn("#bytitle", "keyup", () => {
    const letters = document.querySelector('#bytitle').value
    const filter = letters.toUpperCase()
    const movies = document.querySelectorAll(".content-image");
    for (const movie of movies) {
        if (movie.querySelector(".title").innerHTML.toUpperCase().indexOf(filter) > -1) {
            movie.classList.remove("hidden");
        } else {
            movie.classList.add("hidden");
        }
    }
})


//NEW
//appel du DOM avec le bon tri dessus
domOn("#bystars", "click", () => {
    choosenindex = "rate"
    callDOM(choosenindex)
})


domOn("#bydate", "click", () => {
    choosenindex = "watchingdate"
    callDOM(choosenindex)

})

domOn("#reset", "click", () => {
    choosenindex = "storagedate"
    callDOM(choosenindex)

})







