var worldData = ''
var individualCountryData = ''
worldInit()
worldCountries()
function worldInit() {

    var url ="https://imunizacao-es.saude.gov.br/desc-imunizacao"

    $.get(url, function (worldData) {
        worldData = `
        <td> ${worldData.data.numerodevacinados} </td>
        `
        $("worldData").html(worldData)

    })


}