window.addEventListener("load", function () {
    var newtodo = document.getElementById("toDoInput");
    var todolist = document.getElementById("toDoList");
    var list = [
        {
            checked: true,
            text: "Ins Stadion gehen"
        },
        {
            checked: false,
            text: "Burger essen"
        },
        {
            checked: false,
            text: "gntm schauen"
        }
    ];
    newtodo.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            list.push({ text: newtodo.value, checked: false });
            showList();
        }
    });
    showList();
    function showList() {
        todolist.innerHTML = "";
        var _loop_1 = function (i) {
            var element = list[i];
            var liElement = document.createElement("li");
            var checkIcon = void 0;
            if (element.checked) {
                checkIcon = document.createElement("i");
                checkIcon.className = "far fa-check-square";
            }
            else {
                checkIcon = document.createElement("i");
                checkIcon.className = "far fa-square";
            }
            checkIcon.addEventListener("click", function () {
                element.checked = !element.checked;
                showList();
            });
            liElement.append(checkIcon);
            var textnode = document.createTextNode(" " + element.text);
            liElement.append(textnode);
            var trashcan = document.createElement("i");
            trashcan.className = "far fa-trash-alt";
            trashcan.addEventListener("click", function () {
                list = list.filter(function (elem) {
                    return elem != element;
                });
                showList();
            });
            liElement.append(trashcan);
            //liElement.innerHTML += " <i class='far fa-trash-alt'></i> ";
            todolist.append(liElement);
        };
        for (var i = 0; i < list.length; i++) {
            _loop_1(i);
        }
    }
});
//# sourceMappingURL=script9.js.map