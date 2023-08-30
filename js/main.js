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

    list_options_menu = ['INÍCIO', 'O QUE É', 'PARTICIPAÇÃO SOCIAL', 'AGENDA', 'PRODUTOS', 'PARTICIPE JÁ', 'DÚVIDAS', 'NOTÍCIAS']
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
    div_about_inicio.style.backgroundImage = 'url(images/slipe_about.png)'
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
    div_about_overview.innerHTML = `O Plano Diretor é uma lei municipal que define as prioridades para o crescimento e desenvolvimento urbano de todo o município, considerando a melhor utilização das áreas urbanas e rurais para assegurar a justiça social, a melhoria da qualidade de vida para a população e a organização dos espaços, respeitando as questões sociais e ambientais. 
    Essa lei está prevista no Estatuto da Cidade (Lei Federal 10.257/01) e é obrigatória para toda cidade com mais de 20 mil habitantes; inserida em regiões metropolitanas ou áreas de interesse turístico; ou quem contém empreendimentos de impacto ambiental, devendo ser revisada a cada 10 anos.
    Buscando a construção coletiva de um pacto social para definição de instrumentos de planejamento urbano, o Plano Diretor é elaborado com a participação democrática de diversos setores da sociedade, como o poder público municipal (executivo e legislativo), ONGs, conselhos municipais, órgãos ambientais, empresas e sindicatos, universidades e instituições de pesquisa, líderes de associações comunitárias e a população, através de eventos, reuniões, audiências e consultas públicas.
    `
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

    //INÍCIO
    div_slider_inicio = document.createElement('div')
    div_slider_inicio.id = 'div_slider_inicio'
    div_slider_inicio.className = 'slide'
    div_slider_inicio.style.backgroundImage = 'url(images/slipe_inicio.png)'
    div_slider_inicio.setAttribute('data-state', 'active');
    slides.appendChild(div_slider_inicio)

    div_slider_inicio_content = document.createElement('div')
    div_slider_inicio_content.id = 'div_slider_inicio_content'
    div_slider_inicio_content.className = 'div_slider_inicio_content'
    div_slider_inicio.appendChild(div_slider_inicio_content)

    inicio_title = document.createElement('div')
    inicio_title.className = 'inicio_title'
    inicio_title.innerHTML = `
    Moldando Espaços
    Empoderando Comunidades`
    div_slider_inicio_content.appendChild(inicio_title)

    inicio_desc = document.createElement('div')
    inicio_desc.className = 'inicio_desc'
    inicio_desc.innerHTML = `
    Imagine um lugar onde cada esquina, cada parque e cada rua são projetados com propósito. 
    Isso é o que o Plano Diretor alcança. Ele otimiza o uso das áreas urbanas e rurais para
    garantir que nossa cidade não apenas cresça, mas floresça de maneira inclusiva. 
    Ao colocar a população em primeiro lugar, o Plano Diretor capacita comunidades, 
    tornando nossas vidas mais vibrantes e conectadas.
    `
    div_slider_inicio_content.appendChild(inicio_desc)

    /* inicio_button = document.createElement('div')
    inicio_button.id = 'inicio_button'
    inicio_button.className = 'inicio_button'
    inicio_button.innerHTML = 'SAIBA MAIS'
    div_slider_inicio_content.appendChild(inicio_button) */

    //O QUE É    
    div_slider_about = document.createElement('div')
    div_slider_about.id = 'div_slider_about'
    div_slider_about.className = 'slide'
    div_slider_about.style.backgroundImage = 'url(images/slipe_about.png)'
    div_slider_about.setAttribute('data-state', 'active');
    slides.appendChild(div_slider_about)

    div_slider_about_content = document.createElement('div')
    div_slider_about_content.id = 'div_slider_about_content'
    div_slider_about_content.className = 'div_slider_about_content'
    div_slider_about.appendChild(div_slider_about_content)

    about_title = document.createElement('div')
    about_title.className = 'about_title'
    about_title.innerHTML = `
    O que é o Plano Diretor?
    `
    div_slider_about_content.appendChild(about_title)

    about_desc = document.createElement('div')
    about_desc.className = 'about_desc'
    about_desc.innerHTML = `
    O Plano Diretor é uma lei municipal que define as prioridades para o crescimento e 
    desenvolvimento urbano de todo o município, considerando a melhor utilização das áreas 
    urbanas e rurais para assegurar a justiça social, a melhoria da qualidade de vida para a 
    população, respeitando as questões sociais e ambientais.
    `
    div_slider_about_content.appendChild(about_desc)

    about_button = document.createElement('div')
    about_button.id = 'about_button'
    about_button.className = 'about_button'
    about_button.innerHTML = 'SAIBA MAIS'
    div_slider_about_content.appendChild(about_button)

    about_button.onclick = function() {
        buildAbout()
    }

    //PARTICIPE    
    div_slider_participe = document.createElement('div')
    div_slider_participe.id = 'div_slider_participe'
    div_slider_participe.className = 'slide'
    div_slider_participe.style.backgroundImage = 'url(images/slipe_participe.png)'
    div_slider_participe.setAttribute('data-state', 'active');
    slides.appendChild(div_slider_participe)

    div_slider_participe_content = document.createElement('div')
    div_slider_participe_content.id = 'div_slider_participe_content'
    div_slider_participe_content.className = 'div_slider_participe_content'
    div_slider_participe.appendChild(div_slider_participe_content)

    participe_title = document.createElement('div')
    participe_title.className = 'participe_title'
    participe_title.innerHTML = `
    Faça Parte!
    `
    div_slider_participe_content.appendChild(participe_title)

    participe_desc = document.createElement('div')
    participe_desc.className = 'participe_desc'
    participe_desc.innerHTML = `
    O Plano Diretor não é apenas um documento - é a oportunidade de participar na criação do
    futuro que queremos. Para mergulhar mais fundo e descobrir como estamos moldando 
    nosso amanhã urbano, clique no botão abaixo e explore o nosso menu dedicado ao Plano Diretor.
    `
    div_slider_participe_content.appendChild(participe_desc)

    participe_button = document.createElement('div')
    participe_button.id = 'participe_button'
    participe_button.className = 'participe_button'
    participe_button.innerHTML = 'PARTICIPE'
    div_slider_participe_content.appendChild(participe_button)

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

    //FASES
    div_fases = document.createElement('div')
    div_fases.className = 'div_fases'
    div_content.appendChild(div_fases)

    div_fases_content = document.createElement('div')
    div_fases_content.className = 'div_fases_content'
    div_fases.appendChild(div_fases_content)

    div_fases_title = document.createElement('div')
    div_fases_title.className = 'div_fases_title'
    div_fases_title.innerHTML = 'CONHEÇA AS FASES DO PLANO DIRETOR'
    div_fases_content.appendChild(div_fases_title)

    div_fases_desc = document.createElement('div')
    div_fases_desc.className = 'div_fases_desc'
    div_fases_desc.innerHTML = `
    À medida que exploramos cada etapa, testemunharemos a transformação de ideias em 
    ações concretas, unindo nossa visão coletiva a um futuro urbano mais promissor e inclusivo.
    Venha conosco enquanto mergulhamos nas fases empolgantes que nos aguardam nesta 
    jornada de progresso e renovação.
    `
    div_fases_content.appendChild(div_fases_desc)

    div_fases_quadros = document.createElement('div')
    div_fases_quadros.className = 'div_fases_quadros'
    div_content.appendChild(div_fases_quadros)

    fases.forEach(fase => {
        fase_quadro = document.createElement('div')
        fase_quadro.className = 'fase_quadro'
        div_fases_quadros.appendChild(fase_quadro)

        fase_quadro_title = document.createElement('div')
        fase_quadro_title.className = 'fase_quadro_title'
        fase_quadro.appendChild(fase_quadro_title)

        fase_quadro_title_main = document.createElement('div')
        fase_quadro_title_main.className = 'fase_quadro_title_main'
        fase_quadro_title_main.innerHTML = fase.title
        fase_quadro_title.appendChild(fase_quadro_title_main)

        fase_quadro_title_desc = document.createElement('div')
        fase_quadro_title_desc.className = 'fase_quadro_title_desc'
        fase_quadro_title_desc.innerHTML = fase.desc_title
        fase_quadro_title.appendChild(fase_quadro_title_desc)

        fase_quadro_title_period = document.createElement('div')
        fase_quadro_title_period.className = 'fase_quadro_title_period'
        fase_quadro_title_period.innerHTML = fase.period
        fase_quadro_title.appendChild(fase_quadro_title_period)

        fase_quadro_content = document.createElement('div')
        fase_quadro_content.className = 'fase_quadro_content'
        fase_quadro.appendChild(fase_quadro_content)

        fase.itens.forEach(item => {
            fase_quadro_content_item = document.createElement('div')
            fase_quadro_content_item.className = 'fase_quadro_content_item'
            fase_quadro_content_item.innerHTML = item
            fase_quadro_content.appendChild(fase_quadro_content_item)
        })
    })


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
    div_overview_desc.innerHTML = `A Prefeitura de Guarabira abre mais um canal de comunicação com o objetivo de tornar Guarabira a cidade que queremos. 
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