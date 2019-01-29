const app = {
    listContainer: $('ul'),
    deleteIcon: "<span class='deleteIcon'><i class='fas fa-trash-alt'></i> </span>",
};
app.init = function() {
    this.crossOff();
    this.deleteTodo();
    this.createTodo();
    this.toggleTextbox();
};

// clicking on list items makes text gray and crossed off.
app.crossOff = function(){
    this.listContainer.on('click', 'li', function(){
        $(this).toggleClass('crossOff');
    })
};

// creates a new list item when user enters text and presses enter
app.createTodo = function (){
    $('#textBox').on('keypress', function(e){
            if(e.which === 13){
                app.listContainer.append('<li>'+ app.deleteIcon + $(this).val()+ '</li>')
                // reset textbox
                $(this).val('');
            }
    })
}

// clicking on the delete icon deletes the list item forever
app.deleteTodo = function(){
    this.listContainer.on('click', '.deleteIcon', function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })

        e.stopPropagation();    //prevents app.crossOff from firing
    })
}

// fade the textbox when user clicks the plus icon
app.toggleTextbox = function(){
    $('.plus').on('click', function(){
        // detail to user that icon was clicked
        $(this).toggleClass('plus_transform');
        // fade out textbox
        $('#textBox').fadeToggle();
    })
}
// call all the app functions
app.init();
