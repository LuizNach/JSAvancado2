class Negociacao {

    /** every class with a constructor, to create a new instance must use the reserved word new */
    constructor(data, quantidade, valor) {

        this._quantidade = quantidade ? quantidade : 1;
        this._valor = valor? valor : 0.00;
        this._volume = this.obtemVolume();

        this._data = data ? new Date(data.getTime()) : new Date(); 
        /* if data is an object referenced outside the class the data from the instance can be changed,
        *   solution for that is to create a new object on the moment of the instance creation
        */

        Object.freeze(this);
        //no future edition allowed after the instance is created
        //Object freeze is not a deep enough to change inner objects, like the Date object
        //solution for that is a defensive programming, see get data()

    }

    obtemVolume() {
        return this._quantidade * this._valor;
    }

    /**Encapsulation pattern */
    get data() {
        //return this._data; 
        /** This will be a problem because this is a reference for the object Date
         * So get method will return the reference and any other funtion who calls this
         * allowing to be possible to change it on execution time
        */

        //defensive programming solution
        return new Date(this._data.getTime());
        /* any change on the object returned wont change the _data value itself*/

    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._volume;
    }

}