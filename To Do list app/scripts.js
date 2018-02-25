function app() {
    var toDoList = []
    while (takeAction !== "quit") {
        var takeAction = prompt("What would you like to do?")
        if (takeAction === "list") {
            printToDos(toDoList)
        } else if (takeAction === "new") {
            toDoList.push(prompt("Enter new todo"))
            console.log(toDoList)
        } else if (takeAction === "delete") {
            toDoList.splice(prompt("What index would you like to delete?"), 1)
        }
    }
}

function addToDos(itemToAdd, arr) {
    arr.push(arr.length + ": " + itemToAdd)
}

function printToDos(todos) {
    if (todos.length = 0) {
        return
    }
    console.log("**********")
    todos.forEach(function printItems(item) { console.log(todos.indexOf(item) + ": " + item) })
    console.log("**********")
}

for (var i = 0; i < movies.length; i++) {
	movie = movies[i]
    var prefix
    if (movie.hasWatched) {
		prefix = "You have watched "+""
    } else {
		prefix = "You have not seen "+""
    }
    var str = ""
    str = prefix + movie.name + ""+" - " + movie.rating + " stars"
    console.log(str)
}