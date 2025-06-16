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
        descricao: 'Técnica de automassagem e pressão que promove o equilíbrio energético do corpo através de movimentos específicos e pressão nos pontos de acupuntura.',
        imagem: './images/img_terapia1.jpg'
    },
    {
        id: 'acupuntura',
        titulo: 'Acupuntura',
        subtitulo: 'Estimulação, equilíbrio, analgesia',
        descricao: 'Milenar técnica chinesa que utiliza agulhas finas em pontos específicos do corpo para estimular o equilíbrio energético e promover analgesia natural.',
        imagem: './images/img_terapia2.webp'
    },
    {
        id: 'mochaterapia',
        titulo: 'Mochaterapia',
        subtitulo: 'Relaxamento, circulação, revitalização',
        descricao: 'Terapia que utiliza calor controlado através de moxa (artemísia) para estimular pontos específicos, promovendo relaxamento, melhora da circulação e revitalização.',
        imagem: './images/img_terapia3.webp'
    },
    {
        id: 'estetica-facial',
        titulo: 'Estética Facial',
        subtitulo: 'Rejuvenescimento, hidratação, revitalização',
        descricao: 'Tratamentos faciais holísticos que combinam técnicas orientais e naturais para rejuvenescimento, hidratação profunda e revitalização da pele.',
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


// window.addEventListener('scroll', function() {
//     const scrollPosition = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
// });

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

// Dark mode simples
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const contactTitle = document.getElementById("contact-title")

   if (newTheme === 'dark') {
    contactTitle.classList.add('text-tema2');
  } else {
    contactTitle.classList.remove('text-tema2');
  }
});
