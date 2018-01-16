function app() {
    var todos = [];

    while (action !== "quit") {
        var action = prompt("What would you like to do?");

        if (action === "list") {
            if (!todos[0]) {
                console.log("****************");
                todos.forEach(function fun(todo, i) {
                    console.log(i + ": " + todo);
                });
                console.log("****************");
            } else {
            	console.log("There are no items in your to-do list")
            };
        } else if (action === "new") {
            todos.push(prompt("Enter a new todo"));
        } else if (action === "delete") {
            todos.splice(prompt("What is the index of the to-do you would like to delete?"),1);
        } else if (action === "clear") {
            todos = []
        } else {
            action = prompt("I'm sorry, I didn't understand that. What would you like to do?")
        };
    }

}