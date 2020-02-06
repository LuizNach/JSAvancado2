class NegociacaoController {

    constructor() {

        /**
         * As we are gonna use the method document.querySelector many times we want to create an alias to it.
         * In order to do that we create a variable to be a reference to it, but this causes to change the method to a simple function.
         * The querySelector method uses 'this' to reference the document instance but it on the alias it wont work
         * exactly because it doesn't have the proper context.
         * Solution for it is the bind function.
         */
        /* document.querySelector was a method inside a class, but used as a separate function it doesn't have a proper context */
        let $ = document.querySelector; 
        /**
         * the bind function return a new function with the correct context applied as a parameter.
         */
        $ = $.bind(document);

        /**
         *  alocating dom elements reference on the constructor avoids 
         *  unnecessary future search on the dom tree
         */
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {
        /* we are prevent the default behavior of the form refresh of html5 */
        event.preventDefault();
        
        this._listaNegociacoes.adiciona( this._criaNegociacao() );

        this._limpaFomulario();

        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.text = "Negociacao adicionada com sucesso";
        this._mensagemView.update(this._mensagem);

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._data.value), 
            this._quantidade.value,
            this._valor.value
        );
    }

    _limpaFomulario(){
        /*clear form*/
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;

        this._data.focus();
    }

}