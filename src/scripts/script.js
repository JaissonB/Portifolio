const initId = 'about-nav-link-';
const areaSection = $('.about-me__scroll');

const fControlAboutNav = id => {
    const linkActive = $(`#${id} a`);
    let divWillAdd = $('.about-me__scroll>div');

    [0, 1, 2, 3].forEach(el => {
        $(`#${initId + el} a`).removeClass('link-active');
    });
    linkActive.addClass('link-active');
    
    divWillAdd.remove();
    areaSection.append(returnSection[Number(id.substr(-1))]);
    console.log(Number(id.substr(-1)))
    Number(id.substr(-1)) === 3 ? fAnimationMarioEasterEgg() : '';
}

const fAnimationMarioEasterEgg = () => {
    $('.about-nav__run-run').css('opacity', 0);
    $('.about-nav__run-stay').css('opacity', 0);
    $('.about-nav__run-jump').css('opacity', 1);
    $('.about-nav__run-jump').addClass('anime-jump');
    setInterval(function() {
        $('.about-nav__run-run').css('opacity', 0);
        $('.about-nav__run-stay').css('opacity', 1);
        $('.about-nav__run-jump').css('opacity', 0);
        $('.about-nav__run-jump').removeClass('anime-jump');
    }, 2000)
    console.log("MARIOOO!!")
}

const returnSection = [
    `<div>
        <h2>Olá!</h2>
        <p>Meu nome é Jaisson Bassanesi, sou desenvolvedor front-end.</p>
        <p>Moro em Getúlio Vargas, Rio Grande do Sul.</p>
        <p>Curso Ciência da Computação na Universidade Regional Integrada do Alto Uruguai e das Missões, Campus de Erechim.</p>
        <p>Resolvi criar esse "Portifólio" apenas para guardar coisas que gosto em um lugar que eu possa acessar de qualquer outro lugar e principalmente para praticar meus conhecimentos. Além de ser mais um motivo para continuar criando novos projetos para colocar aqui.</p>
        <p>Até por que no momento não busco alocação no mercado de trabalho.</p>
    </div>`,
    `<div>
        <h2>Desenvolvedor!</h2>
        <p>Já disse isso, mas reforçando, sou desenvolvedor <strong>front-end</strong>.</p>
        <p>Estou a pouco mais de um ano atuando como tal na empresa <a href="https://compass.uol/" target="_blank">Compass.uol</a>, nesta, entrei através de um programa de bolsas que tinha vínculo com minha universidade atual.</p>
        <p>Hoje em dia, atuo com <a href="https://www.oracle.com/br/cx/ecommerce/" target="_blank">OCC</a> (Oracle Commerce Cloud) e <a href="https://knockoutjs.com/" target="_blank">Knockout.js</a>, são ferramentas um pouco mais antigas mas ainda muito úteis no meu dia-a-dia de trabalho.</p>
        <p>Já para estudos, tento ficar sempre por dentro das novidades da área. Estou desenvolvendo projetos em <a href="https://pt-br.reactjs.org/" target="_blank">React.js</a> e <a href="https://reactnative.dev/" target="_blank">React Native</a> entre outras stacks que tenho de aprender para desenvolver trabalhos acadêmicos.</p>
    </div>`,
    `<div>
        <h2>Portifólio!?</h2>
        <p>Considero essa página, apenas como um lugar para guardar meus projetos e poder mostrar pra qualquer um e em qualquer lugar.</p>
        <p>Estilizar como eu quiser, adicionar Easter eggs e literalmente me divertir enquanto pratico.</p>
        <p>Criei uma aba de <a href="#projetos">projetos</a> para adicionar projetos que desenvolvi e/ou estou desenvolvendo, como projetos acadêmicos e pessoais, que ficam com código fonte no github.</p>
        <p>Em outra aba, "<a href="#descontracao">descontração</a>" pretendo adicionar coisas divertidas para se fazer, talvez algum jogo, passa tempo, algo do tipo.</p>
        <p>Aceito sugestões... ༼ つ ◕_◕ ༽つ <a href="#contato">Manda aqui!</a></p>
    </div>`,
    `<div>
        <h2>Mário?</h2>
        <p>Considero essa página, apenas como um lugar para guardar meus projetos e poder mostrar pra qualquer um e em qualquer lugar.</p>
        <p>Estilizar como eu quiser, adicionar Easter eggs e literalmente me divertir enquanto pratico.</p>
        <p>Criei uma aba de <a href="#projetos">projetos</a> para adicionar projetos que desenvolvi e/ou estou desenvolvendo, como projetos acadêmicos e pessoais, que ficam com código fonte no github.</p>
        <p>Em outra aba, "<a href="#descontracao">descontração</a>" pretendo adicionar coisas divertidas para se fazer, talvez algum jogo, passa tempo, algo do tipo.</p>
        <p>Aceito sugestões... ༼ つ ◕_◕ ༽つ <a href="#contato">Manda aqui!</a></p>
    </div>`,
]