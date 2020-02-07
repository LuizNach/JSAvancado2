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
        this._listaNegociacoes = new ListaNegociacoes(

            /**
             * We want to pass the function responsable for the visual update to be
             * triggered on the change os the ListaNegociacoes object. We have a context problem here.
             * All the objects for the update functions are instanciated on controller so we must keep 
             * the context of the controler for this function. 
             * We can:
             * - pass a function with a context parameter and use Reflect.apply to set the context on the call of the function;
             * - use the bind function, applying it on the declaration of the function;
             * - we can use the arrow function directly because it keeps the context of its declaration;
             * 
             * function(){
             *      this._negociacoesView.update(this._listaNegociacoes);
             *      this._mensagemView.update(this._mensagem);
             *  }.bind(this) 
             */
            
            
            () => {
                this._negociacoesView.update(this._listaNegociacoes);
                this._mensagemView.update(this._mensagem);
            }

        );

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        

    }

    adiciona(event) {
        /* we are prevent the default behavior of the form refresh of html5 */
        event.preventDefault();
        
        this._mensagem.text = "Negociacao adicionada com sucesso";
        this._listaNegociacoes.adiciona( this._criaNegociacao() );

        this._limpaFomulario();

        //this._negociacoesView.update(this._listaNegociacoes);

        //this._mensagem.text = "Negociacao adicionada com sucesso";
        //this._mensagemView.update(this._mensagem);

    }

    apaga(event) {
        
        this._mensagem.text = "Negociacoes apagas com sucesso";
        this._listaNegociacoes.esvazia();
        //this._negociacoesView.update(this._listaNegociacoes);

        //this._mensagem.text = "Negociacoes apagas com sucesso";
        //this._mensagemView.update(this._mensagem);

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