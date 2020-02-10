class ListaNegociacoes {

    constructor(updateReference) {
        this._negociacoes = []
        //this._updateViewFunction = updateReference;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //this._updateViewFunction();
    }

    esvazia(){
        this._negociacoes = [];
        //this._updateViewFunction();
    }

    get negociacoes() {

        /** defensive programming, this will prevent any future changes on _negociacoes. 
         * This will not prevent cahnges on the objects within _negociacoes so 
         * they need to have their own defensive programming */
        return [...this._negociacoes];
    }
}