class MensagemView extends View {

    template( mensagemModel ) {
        return mensagemModel.text ? `<p class="alert alert-info">${mensagemModel.text}</p>` : `<p></p>`;
    }

}