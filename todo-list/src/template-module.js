/*
    <div class="o-wrap">
      <form action="#" class="c-form">
        <fieldset class="c-form__field">
          <legend>Add new Todo</legend>
          <label for="project">Project:</label>
          <input type="text" id="project">
          <label for="project">Todo:</label>
          <input type="text" id="todo">
          <button type="button" class="c-form__field__btn">Add Todo</button>
        </fieldset>
      </form>
    </div>
*/

function addInputDOM () {
    const input = document.createElement("div");
    input.innerHTML = `<div class="o-wrap">
        <form action="#" class="c-form">
            <fieldset class="c-form__field">
                <legend>Add new Todo</legend>
                <label for="project">Project:</label>
                <input type="text" id="project">
                <label for="project">Todo:</label>
                <input type="text" id="todo">
                <button type="button" class="c-form__field__btn">Add Todo</button>
            </fieldset>
        </form>
    </div>`;
    document.getElementsByTagName("body")[0].appendChild(input);
}

export { addInputDOM };