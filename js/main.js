function main() {
    document.body.innerHTML = ''

    main_div = document.createElement('div')
    main_div.id = 'main_div'
    main_div.className = 'main_div'
    document.body.appendChild(main_div)
    buildHeader()

    //CONTENT
    div_content = document.createElement('div')
    div_content.id = 'div_content'
    div_content.className = 'div_content'
    main_div.appendChild(div_content)

    buildInicio()


}

function buildHeader() {
    header = document.createElement('header')
    header.id = 'header'
    header.className = 'header'
    main_div.appendChild(header)

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

    /* div_menu_item = document.createElement('div')
    div_menu_item.id = 'div_menu_item_inicio'
    div_menu_item.className = 'div_menu_item'
    div_menu_item.innerHTML = 'INÍCIO'
    div_menu.appendChild(div_menu_item)
    div_menu_item.onclick = function() {
        buildInicio()
    } */

    list_options_menu = ['INÍCIO', 'O QUE É', 'AGENDA', 'PARTICIPAÇÃO SOCIAL', 'PRODUTOS', 'PARTICIPE JÁ', 'DÚVIDAS', 'NOTÍCIAS']
    list_builders = [buildInicio, buildAbout]
        //for (i in list_options_menu) {
    list_options_menu.forEach(function(option, i) {
        div_menu_item = document.createElement('div')
        div_menu_item.id = 'div_menu_item_' + i
        div_menu_item.className = 'div_menu_item'
        div_menu_item.innerHTML = list_options_menu[i]
        div_menu.appendChild(div_menu_item)

        div_menu_item.onclick = function() {
            list_builders[i]()
        }
    })
}

function buildAbout() {
    div_content.innerHTML = ''

    //INÍCIO
    div_about_inicio = document.createElement('div')
    div_about_inicio.id = 'div_about_inicio'
    div_about_inicio.className = 'div_about_inicio'
    div_about_inicio.style.backgroundImage = 'url(images/panoramica_inicio.png)'
    div_content.appendChild(div_about_inicio)

    div_about_inicio_desc = document.createElement('div')
    div_about_inicio_desc.id = 'div_about_inicio_desc'
    div_about_inicio_desc.className = 'div_about_inicio_desc'
    div_about_inicio_desc.innerHTML = 'O que é o Plano Diretor das Cidades?'
    div_about_inicio.appendChild(div_about_inicio_desc)

    //OVERVIEW
    div_about_overview = document.createElement('div')
    div_about_overview.id = 'div_about_overview'
    div_about_overview.className = 'div_about_overview'
    div_about_overview.innerHTML = `O Plano Diretor, como parte integrante do processo de planejamento municipal, é previsto na nossa Constituição e no Estatuto da Cidade (2001) como o instrumento básico da política de desenvolvimento e de expansão da cidade. Dele resulta um conjunto de leis que tem como objetivo ordenar a cidade para o pleno desenvolvimento das suas funções sociais e para a garantia do bem-estar de seus habitantes.​

    De acordo com o Estatuto da Cidade (2001), a Lei do Plano Diretor é obrigatória para cidades com mais de 20 mil habitantes e deve ser revista a cada 10 anos. Visto que o Plano Diretor vigente em Guarabira foi constituído em 2008, agora atuamos para a realização desta revisão. Como as cidades seguem em constante crescimento, é preciso que essas leis sejam constantemente revisadas e chegou a vez de Guarabira. A licitação para a contratação de uma consultoria para auxiliar a Equipe Técnica Municipal (ETM) na revisão foi realizada em 2019. Ainda em 2019, foi elaborado o plano executivo de trabalho que propõe a estrutura do processo de revisão, tendo seu lançamento oficial em 2020.  
    
    Buscando sua construção coletiva, o Plano Diretor de Guarabira apoia-se na promoção da participação democrática de diversos setores da sociedade, como a gestão municipal, ONGs, conselhos municipais, órgãos ambientais, empresas e sindicatos, universidades e instituições de pesquisa, líderes de associações comunitárias e a população, através de eventos, reuniões, audiências e consultas públicas.`
    div_content.appendChild(div_about_overview)

    buildFooter()
}

function buildInicio() {
    div_content.innerHTML = ''

    //SLIDER DE RESUMO
    //Carousel
    carousel = document.createElement('div')
    carousel.id = 'carousel'
    carousel.className = 'carousel'
    div_content.appendChild(carousel)

    slides = document.createElement('div')
    slides.id = 'slides'
    slides.className = 'slides'
    carousel.appendChild(slides)


    div_slider_inicio = document.createElement('div')
    div_slider_inicio.id = 'div_slider_inicio'
    div_slider_inicio.className = 'slide'
    div_slider_inicio.innerHTML = 'Início'
    div_slider_inicio.setAttribute('data-state', 'active');
    slides.appendChild(div_slider_inicio)

    div_slider_timeline = document.createElement('div')
    div_slider_timeline.id = 'div_slider_timeline'
    div_slider_timeline.className = 'slide'
    div_slider_timeline.innerHTML = 'Timeline'
    slides.appendChild(div_slider_timeline)

    div_slider_noticias = document.createElement('div')
    div_slider_noticias.id = 'div_slider_noticias'
    div_slider_noticias.className = 'slide'
    div_slider_noticias.innerHTML = 'Noticias'
    slides.appendChild(div_slider_noticias)

    //Indicators
    indicators = document.createElement('div')
    indicators.id = 'indicators'
    indicators.className = 'indicators'
    carousel.appendChild(indicators)

    indicator = document.createElement('radio')
    indicator.name = 'indicator'
    indicator.className = 'indicator'
    indicator.setAttribute('data-slide', '1');
    indicator.setAttribute('data-state', 'active');
    indicators.appendChild(indicator)

    indicator = document.createElement('radio')
    indicator.name = 'indicator'
    indicator.className = 'indicator'
    indicator.setAttribute('data-slide', '2');
    indicators.appendChild(indicator)

    indicator = document.createElement('radio')
    indicator.name = 'indicator'
    indicator.className = 'indicator'
    indicator.setAttribute('data-slide', '2');
    indicators.appendChild(indicator)


    //INÍCIO
    div_inicio = document.createElement('div')
    div_inicio.id = 'div_inicio'
    div_inicio.className = 'div_inicio'
    div_inicio.style.backgroundImage = 'url(images/panoramica_inicio.png)'
    div_content.appendChild(div_inicio)

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
    div_content.appendChild(div_overview)

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

    playCarousel()
    buildFooter()
}

function buildFooter() {
    footer = document.createElement('div')
    footer.id = 'footer'
    footer.className = 'footer'
    footer.style.backgroundImage = 'url(images/papel_timbrado_02.png)'
    div_content.appendChild(footer)
}