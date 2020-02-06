class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        /** defensive programming, this will prevent any future changes on _negociacoes. 
         * This will not prevent cahnges on the objects within _negociacoes so 
         * they need to have their own defensive programming */
        return [...this._negociacoes];
    }
}