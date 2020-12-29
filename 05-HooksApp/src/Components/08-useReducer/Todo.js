export class Todo{
    constructor(description){
        this.description = description;
        this.done = false;
        this.id = new Date().getTime();
    };
};