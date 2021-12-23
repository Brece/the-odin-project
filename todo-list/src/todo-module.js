import { millisecondsToHours } from "date-fns";

function todo (title, description, dueDate, priority = 0) {
    const _id = new Date().getTime();
    

    const getTitle = function() {return this.title};
    const getProject = function() {return this.project}
    const getDescription = function() {return this.description};
    const getDueDate = function() {return this.dueDate};
    const getId = function() {return _id};

    const setTitle = function(newTitle) {this.title = newTitle};
    const setProject = function(project) {this.project = project};
    const setDescription = function(desc) {this.description = desc};
    const setDueDate = function(date) {this.dueDate = date}; 
    const setPriority = function(num) {this.priority = num};

    // update remaining hours
    const _remainingHours = () => millisecondsToHours(dueDate.getTime() - new Date().getTime());

    return { title, 
        description,
        dueDate,
        priority,
        getId,
        getTitle,
        getProject,
        getDescription,
        getDueDate,
        setTitle,
        setProject,
        setDescription,
        setDueDate,
        setPriority };
}

export { todo };