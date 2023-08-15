function main() {
    document.body.innerHTML = ''
    buildHeader()

    main_div = document.createElement('div')
    main_div.id = 'main_div'
    main_div.className = 'main_div'
    document.body.appendChild(main_div)


    buildBody()
    buildFooter()
}

function buildHeader() {
    header = document.createElement('header')
    header.id = 'header'
    header.className = 'header'
    document.body.appendChild(header)

    div_logo_header = document.createElement('div')
    div_logo_header.id = 'div_logo_header'
    div_logo_header.className = 'div_logo_header'
    header.appendChild(div_logo_header)

    img_logo_header = document.createElement('img')
    img_logo_header.id = 'img_logo_header'
    img_logo_header.className = 'img_logo_header'
    img_logo_header.src = 'images/logo_header.png'
    div_logo_header.appendChild(img_logo_header)

    div_menu = document.createElement('div')
    div_menu.id = 'div_menu'
    div_menu.className = 'div_menu'
    header.appendChild(div_menu)

    list_options_menu = ['INÍCIO', 'O QUE É', 'AGENDA', 'PARTICIPAÇÃO SOCIAL', 'PRODUTOS', 'PARTICIPE JÁ', 'DÚVIDAS', 'NOTÍCIAS']
    for (i in list_options_menu) {
        div_menu_item = document.createElement('div')
        div_menu_item.id = 'div_menu_item'
        div_menu_item.className = 'div_menu_item'
        div_menu_item.innerHTML = list_options_menu[i]
        div_menu.appendChild(div_menu_item)
    }
}

function buildBody() {
    //INÍCIO
    div_inicio = document.createElement('div')
    div_inicio.id = 'div_inicio'
    div_inicio.className = 'div_inicio'
    div_inicio.style.backgroundImage = 'url(images/panoramica_inicio.png)'
    main_div.appendChild(div_inicio)

    div_inicio_desc = document.createElement('div')
    div_inicio_desc.id = 'div_inicio_desc'
    div_inicio_desc.className = 'div_inicio_desc'
    div_inicio_desc.innerHTML = 'Vamos discutir a <br>cidade que queremos?'
    div_inicio.appendChild(div_inicio_desc)

    //OVERVIEW
    div_overview = document.createElement('div')
    div_overview.id = 'div_overview'
    div_overview.className = 'div_overview'
        //div_overview.style.backgroundImage = 'url(images/003.png)'
    main_div.appendChild(div_overview)

    div_overview_content = document.createElement('div')
    div_overview_content.id = 'div_overview_content'
    div_overview_content.className = 'div_overview_content'
        //div_overview_content.style.backgroundImage = 'url(images/003_transparente.png)'
    div_overview.appendChild(div_overview_content)

    div_overview_title = document.createElement('div')
    div_overview_title.id = 'div_overview_title'
    div_overview_title.className = 'div_overview_title'
    div_overview_title.innerHTML = `Participe da Revisão
    do Plano Diretor de Guarabira`
    div_overview_content.appendChild(div_overview_title)

    div_overview_desc = document.createElement('div')
    div_overview_desc.id = 'div_overview_desc'
    div_overview_desc.className = 'div_overview_desc'
    div_overview_desc.innerHTML = `A Prefeitura de Guarabira abre mais um canal de comunicação com o objetivo de tornar Sobral a cidade que queremos. 
    Um planejamento organizado, conhecendo de perto as reais necessidades da população, auxiliam na construção desse importante documento.
    
    Através deste espaço incentivamos uma relação de proximidade, onde as informações possam chegar com mais clareza e 
    transparência, com a divulgação de dados para que a população possa participar, acompanhar e contribuir no processo
    de Revisão do Plano Diretor.`
    div_overview_content.appendChild(div_overview_desc)

    div_overview_img = document.createElement('div')
    div_overview_img.id = 'div_overview_img'
    div_overview_img.className = 'div_overview_img'
    div_overview_img.style.backgroundImage = 'url(images/003.png)'
    div_overview.appendChild(div_overview_img)

    //O QUE É
    /* div_about = document.createElement('div')
    div_about.id = 'div_about'
    div_about.style.backgroundImage = 'url(images/backgrounds01.png)'
    div_about.className = 'div_about'

    main_div.appendChild(div_about) */

    //AGENDA
    /* div_agenda = document.createElement('div')
    div_agenda.id = 'div_agenda'
    div_agenda.className = 'div_agenda'
    div_agenda.style.backgroundImage = 'url(images/backgrounds03.png)'
    main_div.appendChild(div_agenda) */
}

function buildFooter() {
    footer = document.createElement('div')
    footer.id = 'footer'
    footer.className = 'footer'
    footer.style.backgroundImage = 'url(images/papel_timbrado_02.png)'
    main_div.appendChild(footer)
}