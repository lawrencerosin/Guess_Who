class CheatCheck extends HTMLElement{
    constructor(){
        this.attachShadow({mode:"open"});
        this.internals=this.attachInternals();
        this.internals.states.add("cheating");
    }
}