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
    div_inicio.style.backgroundImage = 'url(images/panoramica.png)'
    main_div.appendChild(div_inicio)

    //O QUE É
    div_about = document.createElement('div')
    div_about.id = 'div_about'
    div_about.style.backgroundImage = 'url(images/backgrounds01.png)'
    div_about.className = 'div_about'

    main_div.appendChild(div_about)

    //AGENDA
    div_agenda = document.createElement('div')
    div_agenda.id = 'div_agenda'
    div_agenda.className = 'div_agenda'
    div_agenda.style.backgroundImage = 'url(images/backgrounds03.png)'
    main_div.appendChild(div_agenda)
}

function buildFooter() {
    footer = document.createElement('footer')
    footer.className = 'footer'
    main_div.appendChild(footer)
}