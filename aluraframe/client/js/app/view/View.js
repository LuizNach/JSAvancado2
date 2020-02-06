class View {

    /**
     * Abstract class,
     * Used as reference for others classes to extend
     * Not intended for creating instances
     */

    constructor( element ) {
        this._element = element;
    }

    template( model ) {
        throw new Error("Any instance of view must implement _template");
    }

    update( model ) {
        this._element.innerHTML = this.template(model);
    }
}