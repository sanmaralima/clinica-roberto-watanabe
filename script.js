const agendarBtn = document.getElementById('agendarBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('agendamentoForm');

const overlayTerapia = document.getElementById('modalTerapiaContent');
const closeTerapiaBtn = document.getElementById('closeTerapiaBtn');

const terapiaImagemModal = document.getElementById('terapiaImagemModal');
const terapiaTitulo = document.getElementById('terapiaTitulo');
const terapiaDescricao = document.getElementById('terapiaDescricao');

const terapias = [
  {
    id: 'do-in',
    titulo: 'Do-In',
    subtitulo: 'Pressão, equilíbrio, energia',
    descricao: 'O Do-in é uma técnica de automassagem baseada na acupressão. Consiste na aplicação de pressão com os dedos em pontos estratégicos do corpo, estimulando o fluxo de energia vital (Qi) e promovendo equilíbrio físico e emocional. Seus benefícios incluem alívio de dores musculares, melhora da circulação sanguínea, redução do estresse e fortalecimento do sistema imunológico. A prática pode ser realizada diariamente e é indicada para pessoas que buscam bem-estar e prevenção de doenças.',
    imagem: './images/img_terapia1.jpg'
  },
  {
    id: 'acupuntura',
    titulo: 'Acupuntura',
    subtitulo: 'Estimulação, equilíbrio, analgesia',
    descricao: 'A acupuntura é uma prática milenar que consiste na inserção de agulhas finas em pontos específicos do corpo para equilibrar o fluxo de energia (Qi) nos meridianos. Seus efeitos incluem analgesia, relaxamento muscular, melhora da circulação e regulação de funções orgânicas. É indicada para o tratamento de dores crônicas, distúrbios emocionais, problemas digestivos e doenças neurológicas. Estudos científicos comprovam sua eficácia na liberação de neurotransmissores como endorfinas e serotonina, promovendo bem-estar e alívio da dor.',
    imagem: './images/img_terapia2.webp'
  },
  {
    id: 'moxaterapia',
    titulo: 'Moxaterapia',
    subtitulo: 'Relaxamento, circulação, revitalização',
    descricao: 'A Moxaterapia é um método terapêutico da medicina alternativa que utiliza o calor gerado pela queima de ervas medicinais presentes em um bastão, posto próximo a pontos de acupuntura, para estimular pontos de acupuntura. O calor profundo melhora a circulação sanguínea, relaxa músculos e articulações e fortalece o sistema imunológico. É especialmente eficaz no tratamento de dores crônicas, problemas digestivos e distúrbios respiratórios. A técnica pode ser aplicada diretamente sobre a pele ou indiretamente, utilizando suportes para evitar contato direto com a pele.',
    imagem: './images/img_terapia3.webp'
  },
  {
    id: 'estetica-facial',
    titulo: 'Estética Facial',
    subtitulo: 'Rejuvenescimento, hidratação, revitalização',
    descricao: 'A acupuntura é amplamente utilizada no tratamento da paralisia facial periférica, em que essa condição é caracterizada pela fraqueza ou perda total dos movimentos em um lado do rosto. A acupuntura atua na regeneração das fibras nervosas, melhora a circulação sanguínea e estimula a contração muscular, acelerando a recuperação. Além das agulhas, podem ser utilizados pontos de auriculoterapia e técnicas complementares como moxaterapia.',
    imagem: './images/img_terapia4.jpg'
  },
  {
    id: 'drenagem-linfatica',
    titulo: 'Drenagem Linfática',
    subtitulo: 'Desintoxicação, circulação, relaxamento',
    descricao: 'A drenagem linfática é uma técnica de massagem terapêutica que estimula o sistema linfático, promovendo a eliminação de toxinas e reduzindo edemas. Utiliza movimentos suaves e rítmicos para direcionar o líquido linfático aos gânglios linfáticos, melhorando a circulação e fortalecendo o sistema imunológico. É amplamente utilizada na recuperação pós-operatória, no tratamento de retenção de líquidos e na redução da celulite. Além dos benefícios estéticos, contribui para o relaxamento e bem-estar geral.',
    imagem: './images/img_terapia1.jpg' 
  },
  {
    id: 'auriculoterapia',
    titulo: 'Auriculoterapia',
    subtitulo: 'Equilíbrio, bem-estar, alívio de sintomas',
    descricao: 'A auriculoterapia é uma técnica da medicina alternativa que utiliza estímulos em pontos específicos da orelha para tratar diversas condições físicas e emocionais. A orelha é considerada um microssistema do corpo, onde cada ponto corresponde a um órgão ou função corporal. A estimulação pode ser feita com agulhas, sementes de mostarda, promovendo equilíbrio energético e alívio de sintomas como dores crônicas, ansiedade, insônia e problemas digestivos. Estudos indicam que a auriculoterapia pode estimular a liberação de neurotransmissores como serotonina e endorfinas, contribuindo para o bem-estar geral.',
    imagem: './images/img_terapia2.webp'
  },
  {
    id: 'shiatsu',
    titulo: 'Shiatsu',
    subtitulo: 'Alívio, equilíbrio, energia',
    descricao: 'O Shiatsu é uma técnica de massagem terapêutica japonesa baseada na pressão dos dedos sobre pontos específicos do corpo, seguindo os princípios da acupressão e da medicina tradicional chinesa. Seu objetivo é equilibrar o fluxo de Qi (energia vital) nos meridianos, promovendo relaxamento, alívio de dores musculares e melhora da circulação sanguínea. O Shiatsu pode ser aplicado com as mãos, cotovelos e até joelhos, utilizando movimentos rítmicos e profundos. É indicado para tratar tensões musculares, estresse, problemas posturais e distúrbios emocionais, proporcionando sensação de bem-estar e revitalização.',
    imagem: './images/img_terapia3.webp' 
  },
  {
    id: 'massoterapia',
    titulo: 'Massoterapia',
    subtitulo: 'Terapia, relaxamento, recuperação',
    descricao: 'A massoterapia engloba diversas técnicas de massagem com objetivos terapêuticos, estéticos e relaxantes. Pode incluir um conjunto de massagens, cada uma com benefícios específicos. A massoterapia atua na melhora da circulação sanguínea, redução do estresse, alívio de dores musculares e fortalecimento do sistema imunológico. Além disso, pode ser utilizada como complemento em tratamentos fisioterapêuticos e reabilitação muscular. Profissionais especializados utilizam diferentes técnicas e pressões para atender às necessidades individuais de cada paciente.',
    imagem: './images/img_terapia4.jpg' 
  }
];

function gerarCards() {
    const container = document.getElementById('terapias-container');
    terapias.forEach(terapia => {
    const card = document.createElement('div');
    card.className = 'therapy-card hover:cursor-pointer w-[250px] py-16 px-10 rounded-lg text-center transition-transform duration-300 hover:-translate-y-3 text-white';
    card.style.backgroundImage = `url('${terapia.imagem}')`;
    card.setAttribute('data-terapia', terapia.id);
    card.setAttribute('data-titulo', terapia.titulo);
    card.setAttribute('data-descricao', terapia.descricao);
    card.setAttribute('data-imagem', terapia.imagem);
    
    card.innerHTML = `
        <h3 class="text-2xl mb-3 font-semibold">${terapia.titulo}</h3>
        <p class="text-sm text-white">${terapia.subtitulo}</p>
    `;
    
    container.appendChild(card);
    });
}

function gerarOpcoesSelect() {
    const select = document.getElementById('terapia');
    
    terapias.forEach(terapia => {
    const option = document.createElement('option');
    option.value = terapia.id;
    option.textContent = terapia.titulo;
    select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    gerarCards();
    gerarOpcoesSelect();
});

agendarBtn.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

closeTerapiaBtn.addEventListener('click', function () {
    overlayTerapia.style.display = 'none';
    document.body.style.overflow = 'auto';
});

overlayTerapia.addEventListener('click', function (e) {
    if (e.target === overlayTerapia) {
        overlayTerapia.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(function() {
        alert('Agendamento enviado com sucesso! Entraremos em contato em breve.');
        form.reset();
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        submitBtn.textContent = 'Enviar';
        submitBtn.disabled = false;
    }, 1500);
});

document.addEventListener('click', function(e) {
    if (e.target.closest('.therapy-card')) {
        const card = e.target.closest('.therapy-card');
        
        // Buscar informações pelos data-attributes
        const titulo = card.getAttribute('data-titulo');
        const descricao = card.getAttribute('data-descricao');
        const imagem = card.getAttribute('data-imagem');

        // Atualizar o modal com as informações
        terapiaImagemModal.src = imagem;
        terapiaImagemModal.alt = titulo;
        terapiaTitulo.textContent = titulo;
        terapiaDescricao.textContent = descricao;

        overlayTerapia.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

document.getElementById('agendarNavBtn').addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

document.getElementById('agendarMobileBtn').addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    mobileMenu.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
        overlay.style.display = 'none';
        overlayTerapia.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

function updateThemeIcons(theme) {
  const sunIcons = document.querySelectorAll('.sun-icon');
  const moonIcons = document.querySelectorAll('.moon-icon');

  if (theme === 'dark') {
    sunIcons.forEach(icon => icon.style.opacity = '0.3');
    moonIcons.forEach(icon => icon.style.opacity = '1');
  } else {
    sunIcons.forEach(icon => icon.style.opacity = '1');
    moonIcons.forEach(icon => icon.style.opacity = '0.3');
  }
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcons(newTheme);

  const contactTitle = document.getElementById("contact-title");
  if (newTheme === 'dark') {
    contactTitle.classList.add('text-tema2');
  } else {
    contactTitle.classList.remove('text-tema2');
    contactTitle.classList.add('text-white');

  }
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);
updateThemeIcons(savedTheme);

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('mobileThemeToggle').addEventListener('click', toggleTheme);