// Dom

const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

// Eventos

bt1.addEventListener('click', ghosthunters )
bt2.addEventListener('click', vingadores)
bt3.addEventListener('click', matrix)
bt4.addEventListener('click', themonkey)

//Ação

function ghosthunters (){
    capa.src ='images/ghosthunters.jpg'
    sinopse.textContent = `Ghost Hunters é uma série de televisão americana de investigação paranormal e realidade . A série original foi ao ar de 6 de outubro de 2004 a 26 de outubro de 2016 no canal Syfy . O programa original teve onze temporadas com 230 episódios, sem incluir 10 especiais. A série foi revivida no início de 2019 e exibiu suas décima segunda e décima terceira temporadas de 21 de agosto de 2019 a 27 de maio de 2020 no canal A&E , após o que foi cancelada e revivida para sua décima quarta temporada apenas alguns meses depois no Discovery+ , que começou a ser exibida em 31 de outubro de 2021. A décima quinta temporada começou em 1º de outubro de 2022 no Travel Channel . A décima sexta temporada de Ghost Hunters começou a ser exibida no Travel Channel em 6 de abril de 2023. [ 1 ] Nenhum plano para novas temporadas foi anunciado pela Warner Bros. Discovery até setembro de 2025.`
}

function vingadores (){
    capa.src = `images/vingadores.jpg`
    sinopse.textContent = `The Avengers[b] (bra: Os Vingadores: The Avengers;[8][c] prt: Os Vingadores)[11] é um filme de super-herói estadunidense de 2012, baseado na equipe Vingadores da Marvel Comics. Produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures,[a] é o sexto filme do Universo Cinematográfico Marvel (UCM). Dirigido e escrito por Joss Whedon, o filme apresenta um ensemble cast, composto por Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson e Jeremy Renner como os Vingadores, juntamente com Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgård e Samuel L. Jackson. No filme, Nick Fury e a agência de espionagem S.H.I.E.L.D. recrutam Tony Stark, Steve Rogers, Bruce Banner e Thor para formar uma equipe capaz de impedir o irmão de Thor, Loki, de subjugar a Terra.`
}

function matrix (){
    capa.src = `images/matrix.webp`
    sinopse.textContent = `The Matrix (bra/prt: Matrix)[4][5] é um filme australo-estadunidense de 1999, dos gêneros ação e ficção científica, dirigido e escrito por Lilly e Lana Wachowski. Estrelado por Keanu Reeves, Laurence Fishburne e Carrie-Anne Moss, o filme retrata um futuro ciberpunk distópico no qual a realidade, como percebida pela maioria dos humanos, é, na verdade, uma realidade simulada por computador chamada "Matrix", criada por máquinas sencientes (evolução da inteligência artifical) para subjugar a população humana na forma de hibernação, enquanto o calor e a atividade elétrica de seus corpos são usados ​​como fonte de energia;[7] na história, o cibercriminoso e programador de computador Neo descobre este fato e é atraído para uma rebelião contra as máquinas, que envolve outras pessoas que foram libertadas do "mundo dos sonhos".`
}

function themonkey (){
    capa.src = `images/plOMacaco.png`
    sinopse.textContent = `A inspiradora história real de como o sonho de um menino se tornou a glória de uma nação. 'GOL: A JORNADA DE UM SONHO' narra a trajetória de superação, trabalho duro e paixão do craque número 26 da Seleção. Descubra como ele não apenas joga, mas inspira o mundo. Uma produção Sonhe Filmes. Em breve nos cinemas. 🇧🇷⚽️✨ #GOL #OMeninoQueSonhou`
}