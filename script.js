const agendarBtn = document.getElementById('agendarBtn');
        const overlay = document.getElementById('overlay');
        const closeBtn = document.getElementById('closeBtn');
        const form = document.getElementById('agendamentoForm');
        const therapyCards = document.querySelectorAll('.therapy-card');
        
        const overlayTerapia = document.getElementById('modalTerapiaContent');
        const closeTerapiaBtn = document.getElementById('closeTerapiaBtn');

        const terapiaIcon = document.getElementById('terapiaIcon');
        const terapiaTitulo = document.getElementById('terapiaTitulo');
        const terapiaDescricao = document.getElementById('terapiaDescricao');
        
        
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
        
        therapyCards.forEach(card => {
        card.addEventListener('click', function () {
            const icon = card.querySelector('svg').outerHTML;
            const titulo = card.querySelector('h3').textContent;
            const descricao = card.querySelector('p').textContent;

            terapiaIcon.innerHTML = icon;
            terapiaTitulo.textContent = titulo;
            terapiaDescricao.textContent = descricao;

            overlayTerapia.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
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
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const hero = document.querySelector('.hero');
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });