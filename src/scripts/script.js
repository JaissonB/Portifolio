const initId = 'about-nav-link-';
const areaSection = $('.about-me__scroll');
const soundJumpMario = new Audio('./assets/sounds/soundJumpMario.mp3');
soundJumpMario.volume = 0.2;

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
    soundJumpMario.play();
    $('.about-nav__run-run').css('display', 'none');
    $('.about-nav__run-stay').css('display', 'none');
    $('.about-nav__run-jump').css('display', 'block');
    $('.about-nav__run-jump').addClass('anime-jump');
    setTimeout(function() {
        $('.about-nav__run-run').css('display', 'none');
        $('.about-nav__run-stay').css('display', 'block');
        $('.about-nav__run-jump').css('display', 'none');
        $('.about-nav__run-jump').removeClass('anime-jump');
    }, 1300);
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
        <h1 style="color:#FEDE00"><span style="color: #71BF45">M</span><span style="color: #00A1E5">a</span>r<span style="color: #ED145B">i</span><span style="color: #71BF45">o</span> ?</h1><br>
        <p>--- Easter egg 1 encontrado! ---</p><br>
        <p>"— Não sei bem como vim parar aqui...</p>
        <p>...acho melhor eu fugir e me esconder até saber onde estou."</p><br>
        <p>— Você me pegou! Não fui rápido o bastante dessa vez!</p>
        <p>— Pelo menos não preciso mais correr, já estava me cansando.</p>
        <p>— Você parece reparar em tudo, vou me esconder melhor da próxima vez!</p>
    </div>`,
]