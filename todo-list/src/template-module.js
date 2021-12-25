function initDOM () {
    const input = document.createElement("div");
    input.classList.add("o-wrap");
    input.innerHTML = `
            <form action="#" class="c-form">
                <fieldset class="c-form__field">
                    <legend>Add new Todo</legend>
                    <div class="c-form__field__container">
                        <label for="project">Project:</label>
                        <input type="text" id="project" required>
                    </div>
                    <div class="c-form__field__container">
                        <label for="todo">Todo:</label>
                        <input type="text" id="todo" required>
                    </div>
                    <div class="c-form__field__container">
                        <label for="desc">Description:</label>
                        <textarea name="description" id="desc" cols="40" rows="5" id="desc" placeholder="Enter description..."></textarea>
                    </div>
                    <div class="c-form__field__container">
                        <label for="date">Due Date:</label>
                        <input type="date" id="date" required>
                    </div>
                    <div class="c-form__field__container">
                        <label for="priority">Select Priority</label>
                        <select name="priority" id="priority">
                        <option value="high">High</option>
                        <option value="normal" selected>Normal</option>
                        <option value="low">Low</option>
                        </select>
                    </div>
                    <button type="submit" class="c-form__field__btn">Add Todo</button>
                </fieldset>
            </form>
            
            <div class="c-list">
                <h2 class="c-list__headline">Current Tasks:</h2>
                <button type="button" class="c-list__btn">Delete all tasks</button>
            </div>`;
    document.getElementsByTagName("body")[0].appendChild(input);
}

export { initDOM };