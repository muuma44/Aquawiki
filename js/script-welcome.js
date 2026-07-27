document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. SETUP FULLSCREEN UNDERWATER CONTAINER
  // ============================================================
  let bg = document.getElementById('underwater-bg');
  
  if (!bg) {
    bg = document.createElement('div');
    bg.id = 'underwater-bg';
    document.body.prepend(bg);
  }

  // ============================================================
  // 2. GENERATE FULLSCREEN BACKGROUND PARTICLES
  // ============================================================

  // A. Generate Floating Bubbles
  const bubbleCount = 35;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 12 + 4; // 4px to 16px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 8 + 6}s`; 
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    
    bg.appendChild(bubble);
  }

  // B. Generate Schools of Fish Silhouettes
  const schoolCount = 6;
  for (let s = 0; s < schoolCount; s++) {
    const school = document.createElement('div');
    const direction = Math.random() > 0.5 ? 'swim-right' : 'swim-left';
    school.className = `fish-school ${direction}`;
    
    school.style.top = `${Math.random() * 80 + 10}vh`; 
    school.style.animationDuration = `${Math.random() * 12 + 18}s`; 
    school.style.animationDelay = `${Math.random() * 10}s`;

    // 7 to 12 fish per school cluster
    const fishInSchool = Math.floor(Math.random() * 6) + 7;
    for (let f = 0; f < fishInSchool; f++) {
      const fish = document.createElement('div');
      fish.className = 'school-fish';
      
      fish.style.left = `${Math.random() * 90}px`;
      fish.style.top = `${Math.random() * 45}px`;
      
      const scale = Math.random() * 0.5 + 0.6;
      fish.style.transform = `scale(${scale})`;
      
      school.appendChild(fish);
    }

    bg.appendChild(school);
  }

  // C. Generate Glowing Sparkles
  const sparkleCount = 25;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`; 
    sparkle.style.animationDelay = `${Math.random() * 5}s`;

    bg.appendChild(sparkle);
  }

  // ============================================================
  // 3. PAGE SLIDE-UP TRANSITION & RANDOM ANIMAL REDIRECT
  // ============================================================

  const pages = [
    'animals/dolphin.html',
    'animals/jellyfish.html',
    'animals/lanternfish.html',
    'animals/bony-eared-assfish.html',
    'animals/anglerfish.html',
    'animals/basketstars.html',
    'animals/snailfish.html',
    'animals/grimpoteuthis.html'
  ];

  const startBtn = document.getElementById('startBtn');
  const wrapper = document.querySelector('.page-slide-wrap');

  if (startBtn && wrapper) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent immediate browser navigation

      // Pick a random animal page
      const randomIndex = Math.floor(Math.random() * pages.length);
      const targetPage = pages[randomIndex];

      // Trigger the upward slide animation
      wrapper.classList.add('slide-up-exit');

      // Navigate after the slide transition finishes (550ms)
      setTimeout(() => {
        window.location.href = targetPage;
      }, 550);
    });
  }
});