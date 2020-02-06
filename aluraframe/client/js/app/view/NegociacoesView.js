class NegociacoesView extends View {

    template( listaNegociacoesObject ) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${
                
                listaNegociacoesObject.negociacoes.reduce( (acc , negociacao) => {
                    return acc + `
                            <tr>
                                <td>${DateHelper.dateToText(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
                    }
                ,'')
                
               /*
               listaNegociacoesObject
                    .negociacoes
                    .map( ( negociacao ) => 
                    `
                    <tr>
                        <td>${DateHelper.dateToText(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `
                    ).join('')
                */
            }
            </tbody>

            <tfoot>
                <td colspan='3'></td>

                <td>${
                    listaNegociacoesObject.negociacoes.reduce(
                        (acc, negociacao) => {
                            return acc + negociacao.volume;
                        }
                    ,0.0).toString()
                }</td>
            </tfoot>
        </table>
        `;
    }

}
