const domOn = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach(el => el.addEventListener(event, callback))
}

domOn("#plus", "click", evt => {
    document.querySelector("#global-page").classList.add("hidden");
    document.querySelector("#add-movie").classList.remove("hidden");
})

