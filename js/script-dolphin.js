document.addEventListener('DOMContentLoaded', () => {
  // 1. Ensure the background particle container exists
  let bg = document.getElementById('underwater-bg');
  
  if (!bg) {
    bg = document.createElement('div');
    bg.id = 'underwater-bg';
    document.body.prepend(bg);
  }

  // 2. Generate Floating Bubbles
  const bubbleCount = 35;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random bubble sizes (4px to 16px)
    const size = Math.random() * 12 + 4; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random positions & float speeds
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 8 + 6}s`; 
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    
    bg.appendChild(bubble);
  }

  // 3. Generate Schools of Fish Silhouettes
  const schoolCount = 6; // Total number of schools
  for (let s = 0; s < schoolCount; s++) {
    const school = document.createElement('div');
    const direction = Math.random() > 0.5 ? 'swim-right' : 'swim-left';
    school.className = `fish-school ${direction}`;
    
    // Random vertical depth & swim duration
    school.style.top = `${Math.random() * 80 + 10}vh`; 
    school.style.animationDuration = `${Math.random() * 12 + 18}s`; 
    school.style.animationDelay = `${Math.random() * 10}s`;

    // Create 7 to 12 fish per school cluster
    const fishInSchool = Math.floor(Math.random() * 6) + 7;
    for (let f = 0; f < fishInSchool; f++) {
      const fish = document.createElement('div');
      fish.className = 'school-fish';
      
      // Offset positions inside the school boundary
      fish.style.left = `${Math.random() * 90}px`;
      fish.style.top = `${Math.random() * 45}px`;
      
      // Random scaling for depth perspective
      const scale = Math.random() * 0.5 + 0.6;
      fish.style.transform = `scale(${scale})`;
      
      school.appendChild(fish);
    }

    bg.appendChild(school);
  }

  // 4. Generate Glowing Sparkles / Light Particles
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

  console.log('Dolphin page & underwater animations loaded.');
});