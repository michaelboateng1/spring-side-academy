<script>
    import { onMount } from 'svelte';
    import { cubicOut } from 'svelte/easing';
    
    let testimonials = [
        {
            id: 1,
            name: 'Alex Quantum',
            role: 'Neural Interface Student',
            quote: 'This institution doesn\'t just teach - it rewires your consciousness for multidimensional thinking.',
            avatar: '👁️',
            color: '#FF00FF',
            energy: 92,
            tags: ['Mind-Expanding', 'Reality-Shifting', 'Quantum']
        },
        {
            id: 2,
            name: 'Dr. Luna Stardust',
            role: 'Temporal Physics Graduate',
            quote: 'I learned to perceive time as a fluid dimension, not a linear constraint.',
            avatar: '✨',
            color: '#00FFFF',
            energy: 88,
            tags: ['Temporal', 'Cosmic', 'Fluid']
        },
        {
            id: 3,
            name: 'Morph Echo',
            role: 'Bio-Digital Fusion Major',
            quote: 'My consciousness now interfaces with seven parallel learning dimensions simultaneously.',
            avatar: '🌀',
            color: '#FFFF00',
            energy: 95,
            tags: ['Multi-D', 'Fusion', 'Consciousness']
        },
        {
            id: 4,
            name: 'Nova Spectra',
            role: 'Quantum Art Pioneer',
            quote: 'They taught me to paint with emotions and sculpt with thoughts.',
            avatar: '🎨',
            color: '#00FF00',
            energy: 85,
            tags: ['Creative', 'Emotional', 'Thought-Forms']
        },
        {
            id: 5,
            name: 'Zeno Void',
            role: 'Anti-Matter Studies',
            quote: 'Learning here feels like diving into the spaces between reality.',
            avatar: '🌌',
            color: '#FF4500',
            energy: 90,
            tags: ['Void', 'Anti-Matter', 'Between']
        }
    ];

    let activeIndex = 0;
    let mousePos = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let isAutoRotating = true;
    let glitchActive = false;
    let audioContext = null;
    let audioNodes = [];

    onMount(() => {
        // Mouse tracking for 3D effect
        window.addEventListener('mousemove', handleMouseMove);
        
        // Auto-rotation interval
        const rotateInterval = setInterval(() => {
            if (isAutoRotating) {
                activeIndex = (activeIndex + 1) % testimonials.length;
            }
        }, 5000);

        // Audio context for sound effects
        if (typeof AudioContext !== 'undefined') {
            audioContext = new AudioContext();
        }

        return () => {
            clearInterval(rotateInterval);
            window.removeEventListener('mousemove', handleMouseMove);
            audioNodes.forEach(node => node.stop());
        };
    });

    function handleMouseMove(event) {
        mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
        mousePos.y = (event.clientY / window.innerHeight) * 2 - 1;
        
        rotation.y = mousePos.x * 15;
        rotation.x = -mousePos.y * 10;
    }

    function nextTestimonial() {
        activeIndex = (activeIndex + 1) % testimonials.length;
        playSoundEffect('transition');
        triggerGlitch();
    }

    function prevTestimonial() {
        activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
        playSoundEffect('transition');
        triggerGlitch();
    }

    function playSoundEffect(type) {
        if (!audioContext) return;

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'transition') {
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.3);
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
            }
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
            
            audioNodes.push(oscillator);
        } catch (e) {
            console.log('Audio error:', e);
        }
    }

    function triggerGlitch() {
        glitchActive = true;
        setTimeout(() => glitchActive = false, 300);
    }

    function toggleAutoRotate() {
        isAutoRotating = !isAutoRotating;
        playSoundEffect('transition');
    }

    function selectTestimonial(index) {
        activeIndex = index;
        playSoundEffect('transition');
        triggerGlitch();
    }
</script>

<div class="psychedelic-testimonials" 
     style={`--rotation-x: ${rotation.x}deg; --rotation-y: ${rotation.y}deg;`}>
    
    <!-- Cosmic Background -->
    <div class="cosmic-bg">
        {#each Array(50) as _, i}
            <div class="star" style={`--star-index: ${i}; --delay: ${Math.random() * 2}s`}></div>
        {/each}
        <div class="nebula"></div>
        <div class="energy-rings"></div>
    </div>

    <!-- Main 3D Container -->
    <div class="testimonial-container">
        <div class="dimensional-plane">
            {#each testimonials as testimonial, i}
                <div class="testimonial-orb" 
                     class:active={i === activeIndex}
                     class:left={i < activeIndex}
                     class:right={i > activeIndex}
                     style="--index: {i}; --z-index: {2 - Math.abs(i - 2)}"
                     on:click={() => selectTestimonial(i)}>
                    
                    <div class="orb-glow"></div>
                    <div class="orb-core">
                        <div class="avatar">{testimonial.avatar}</div>
                    </div>
                    
                    <div class="orb-ring ring-1"></div>
                    <div class="orb-ring ring-2"></div>
                    <div class="orb-ring ring-3"></div>
                    
                    <!-- Energy particles -->
                    {#each Array(8) as _, j}
                        <div class="energy-particle" style={`--particle-index: ${j}`}></div>
                    {/each}
                </div>
            {/each}
        </div>
        
        <!-- Active Testimonial Display -->
        <div class="testimonial-display" class:glitch={glitchActive}>
            {#each testimonials as testimonial, i}
                {#if i === activeIndex}
                    <div class="testimonial-card" style={`--accent-color: ${testimonial.color}`}>
                        <div class="card-header">
                            <div class="user-info">
                                <div class="avatar-large">{testimonial.avatar}</div>
                                <div class="user-details">
                                    <h3 class="user-name">{testimonial.name}</h3>
                                    <p class="user-role">{testimonial.role}</p>
                                </div>
                            </div>
                            
                            <div class="energy-meter">
                                <div class="energy-label">CONSCIOUSNESS LEVEL</div>
                                <div class="energy-bar">
                                    <div class="energy-fill" style={`width: ${testimonial.energy}%`}></div>
                                    <div class="energy-value">{testimonial.energy}%</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="quote-container">
                            <div class="quote-icon">❝</div>
                            <p class="testimonial-quote">{testimonial.quote}</p>
                            <div class="quote-icon">❞</div>
                        </div>
                        
                        <div class="tags-container">
                            {#each testimonial.tags as tag}
                                <span class="tag" style={`border-color: ${testimonial.color}`}>{tag}</span>
                            {/each}
                        </div>
                        
                        <!-- Reality Distortion Effect -->
                        <div class="distortion-effect"></div>
                    </div>
                {/if}
            {/each}
        </div>
        
        <!-- Navigation Controls -->
        <div class="navigation-controls">
            <button class="nav-btn prev" on:click={prevTestimonial}>
                <div class="nav-icon">◀</div>
                <div class="nav-glow"></div>
            </button>
            
            <button class="auto-rotate-btn {isAutoRotating ? 'active' : ''}" on:click={toggleAutoRotate}>
                <div class="rotate-icon">⏵</div>
                <div class="rotate-label">{isAutoRotating ? 'AUTO ROTATE ON' : 'AUTO ROTATE OFF'}</div>
                <div class="rotate-pulse"></div>
            </button>
            
            <button class="nav-btn next" on:click={nextTestimonial}>
                <div class="nav-icon">▶</div>
                <div class="nav-glow"></div>
            </button>
        </div>
        
        <!-- Dimension Indicators -->
        <div class="dimension-indicators">
            {#each testimonials as testimonial, i}
                <button class="dimension-dot {i === activeIndex ? 'active' : ''}" 
                        style={`background: ${testimonial.color}`}
                        on:click={() => selectTestimonial(i)}>
                    <div class="dot-pulse"></div>
                </button>
            {/each}
        </div>
    </div>
    
    <!-- Trippy Overlay Effects -->
    <div class="overlay-effects">
        <div class="chromatic-aberration"></div>
        <div class="scanlines"></div>
        <div class="vhs-flicker"></div>
        <div class="radial-blur"></div>
    </div>
    
    <!-- Sound Wave Visualization -->
    <div class="sound-waves">
        {#each Array(64) as _, i}
            <div class="sound-bar" style={`--bar-index: ${i}`}></div>
        {/each}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700;900&family=Orbitron:wght@400;700;900&display=swap');

    :global(.psychedelic-testimonials) {
        position: relative;
        min-height: 100vh;
        background: #000;
        overflow: hidden;
        font-family: 'Space Grotesk', sans-serif;
        perspective: 1000px;
        transform-style: preserve-3d;
        cursor: grab;
    }

    /* ================================
        COSMIC BACKGROUND
    ================================ */
    .cosmic-bg {
        position: absolute;
        inset: 0;
        background: 
            radial-gradient(ellipse at 20% 20%, #1a0033 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, #003366 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, #000 0%, #000 100%);
    }

    .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 50%;
        animation: starTwinkle 2s infinite;
        animation-delay: var(--delay);
    }

    .star:nth-child(3n) {
        width: 3px;
        height: 3px;
        background: #00ffff;
        box-shadow: 0 0 10px #00ffff;
    }

    .star:nth-child(3n + 1) {
        background: #ff00ff;
        box-shadow: 0 0 10px #ff00ff;
    }

    .star:nth-child(3n + 2) {
        background: #ffff00;
        box-shadow: 0 0 10px #ffff00;
    }

    @keyframes starTwinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }

    .nebula {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 800px;
        height: 800px;
        background: 
            radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 0, 0.2) 0%, transparent 50%);
        filter: blur(60px);
        animation: nebulaFloat 20s infinite alternate ease-in-out;
    }

    .energy-rings {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1000px;
        height: 1000px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: ringsSpin 30s linear infinite;
    }

    .energy-rings::before,
    .energy-rings::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        animation: ringsSpin 25s linear infinite reverse;
    }

    .energy-rings::before {
        width: 800px;
        height: 800px;
    }

    .energy-rings::after {
        width: 600px;
        height: 600px;
        animation-duration: 20s;
    }

    @keyframes nebulaFloat {
        0% { transform: translate(-50%, -50%) scale(1); }
        100% { transform: translate(-50%, -50%) scale(1.1); }
    }

    @keyframes ringsSpin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    /* ================================
        3D TESTIMONIAL CONTAINER
    ================================ */
    .testimonial-container {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: 
            rotateX(var(--rotation-x, 0deg)) 
            rotateY(var(--rotation-y, 0deg));
        transition: transform 0.1s linear;
        transform-style: preserve-3d;
    }

    .dimensional-plane {
        position: relative;
        width: 600px;
        height: 300px;
        margin-bottom: 100px;
        transform-style: preserve-3d;
    }

    /* ================================
        3D ORB SYSTEM
    ================================ */
    .testimonial-orb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: 
        translate(-50%, -50%)
        translateX(calc((var(--index) - 2) * 120px))
        translateZ(calc(var(--z-depth) * 30px));
    /* ... rest of styles ... */
}

.testimonial-orb.active {
    transform: 
        translate(-50%, -50%)
        translateX(calc((var(--index) - 2) * 120px))
        translateZ(100px)
        scale(1.5);
}

.testimonial-orb.left {
    transform: 
        translate(-50%, -50%)
        translateX(calc((var(--index) - 2) * 120px - 60px))
        translateZ(calc(var(--z-depth) * 30px))
        scale(0.8);
}

.testimonial-orb.right {
    transform: 
        translate(-50%, -50%)
        translateX(calc((var(--index) - 2) * 120px + 60px))
        translateZ(calc(var(--z-depth) * 30px))
        scale(0.8);
}

    .orb-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--orb-color);
        border-radius: 50%;
        filter: blur(20px);
        opacity: 0.5;
        animation: orbPulse 3s infinite;
    }

    .orb-core {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 2px solid var(--orb-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .avatar {
        font-size: 24px;
        animation: avatarFloat 3s infinite ease-in-out;
    }

    @keyframes orbPulse {
        0%, 100% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.2); opacity: 0.6; }
    }

    @keyframes avatarFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .orb-ring {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid var(--orb-color);
        border-radius: 50%;
        animation: ringOrbit 6s linear infinite;
    }

    .ring-1 {
        width: 100px;
        height: 100px;
        animation-delay: 0s;
    }

    .ring-2 {
        width: 120px;
        height: 120px;
        animation-delay: 2s;
        animation-duration: 8s;
    }

    .ring-3 {
        width: 140px;
        height: 140px;
        animation-delay: 4s;
        animation-duration: 10s;
    }

    @keyframes ringOrbit {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    .energy-particle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: var(--orb-color);
        border-radius: 50%;
        animation: particleOrbit 3s linear infinite;
        animation-delay: calc(var(--particle-index) * 0.375s);
    }

    @keyframes particleOrbit {
        0% {
            transform: translate(-50%, -50%) rotate(calc(var(--particle-index) * 45deg)) translateX(60px) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(calc(var(--particle-index) * 45deg + 360deg)) translateX(60px) scale(0);
            opacity: 0;
        }
    }

    /* ================================
        TESTIMONIAL DISPLAY
    ================================ */
    .testimonial-display {
        width: 800px;
        margin-top: 50px;
        position: relative;
        transition: filter 0.3s ease;
    }

    .testimonial-display.glitch {
        animation: glitchEffect 0.3s linear;
    }

    @keyframes glitchEffect {
        0% {
            transform: translate(0);
            filter: hue-rotate(0deg);
        }
        20% {
            transform: translate(-2px, 2px);
            filter: hue-rotate(90deg);
        }
        40% {
            transform: translate(-2px, -2px);
            filter: hue-rotate(180deg);
        }
        60% {
            transform: translate(2px, 2px);
            filter: hue-rotate(270deg);
        }
        80% {
            transform: translate(2px, -2px);
            filter: hue-rotate(360deg);
        }
        100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
        }
    }

    .testimonial-card {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        border: 2px solid var(--accent-color);
        border-radius: 30px;
        padding: 40px;
        position: relative;
        overflow: hidden;
        box-shadow: 
            0 0 50px rgba(0, 0, 0, 0.5),
            0 0 100px var(--accent-color) inset;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .avatar-large {
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        border: 3px solid var(--accent-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        animation: avatarGlow 2s infinite alternate;
    }

    @keyframes avatarGlow {
        0% { box-shadow: 0 0 20px var(--accent-color); }
        100% { box-shadow: 0 0 40px var(--accent-color); }
    }

    .user-name {
        font-family: 'Orbitron', sans-serif;
        font-size: 28px;
        font-weight: 900;
        margin: 0 0 5px 0;
        background: linear-gradient(135deg, var(--accent-color), #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .user-role {
        color: #aaa;
        font-size: 16px;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .energy-meter {
        width: 300px;
    }

    .energy-label {
        font-size: 12px;
        color: var(--accent-color);
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-bottom: 10px;
        text-align: right;
    }

    .energy-bar {
        height: 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }

    .energy-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--accent-color), #fff);
        border-radius: 10px;
        position: relative;
        animation: energyPulse 2s infinite alternate;
    }

    .energy-value {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-family: 'Orbitron', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #000;
        text-shadow: 0 0 2px #fff;
    }

    @keyframes energyPulse {
        0% { opacity: 0.8; }
        100% { opacity: 1; }
    }

    .quote-container {
        position: relative;
        margin: 40px 0;
        text-align: center;
    }

    .quote-icon {
        font-size: 60px;
        color: var(--accent-color);
        position: absolute;
        opacity: 0.3;
    }

    .quote-icon:first-child {
        top: -40px;
        left: 0;
    }

    .quote-icon:last-child {
        bottom: -40px;
        right: 0;
    }

    .testimonial-quote {
        font-size: 24px;
        line-height: 1.6;
        color: #fff;
        margin: 0;
        padding: 0 40px;
        font-weight: 300;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }

    .tags-container {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 30px;
    }

    .tag {
        padding: 8px 20px;
        border: 2px solid;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    .tag:hover {
        background: var(--accent-color);
        color: #000;
        transform: translateY(-2px);
    }

    .distortion-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, var(--accent-color) 0%, transparent 70%);
        opacity: 0.1;
        filter: blur(40px);
        animation: distortionWave 4s infinite linear;
        pointer-events: none;
    }

    @keyframes distortionWave {
        0% { transform: scale(1); opacity: 0.1; }
        50% { transform: scale(1.2); opacity: 0.2; }
        100% { transform: scale(1); opacity: 0.1; }
    }

    /* ================================
        NAVIGATION CONTROLS
    ================================ */
    .navigation-controls {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 50px;
        z-index: 10;
    }

    .nav-btn {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .nav-btn:hover {
        border-color: #fff;
        transform: scale(1.1);
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
    }

    .nav-icon {
        font-size: 24px;
        font-weight: 900;
        position: relative;
        z-index: 2;
    }

    .nav-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .nav-btn:hover .nav-glow {
        opacity: 1;
    }

    .auto-rotate-btn {
        padding: 15px 30px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 15px;
        position: relative;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .auto-rotate-btn.active {
        border-color: #00ffff;
        background: rgba(0, 255, 255, 0.1);
    }

    .rotate-icon {
        font-size: 18px;
        animation: rotateIcon 2s linear infinite;
    }

    .auto-rotate-btn.active .rotate-icon {
        animation-play-state: running;
    }

    .auto-rotate-btn:not(.active) .rotate-icon {
        animation-play-state: paused;
    }

    @keyframes rotateIcon {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .rotate-label {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .rotate-pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
        opacity: 0;
        animation: rotatePulse 2s infinite;
    }

    .auto-rotate-btn.active .rotate-pulse {
        opacity: 1;
    }

    @keyframes rotatePulse {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }

    .dimension-indicators {
        display: flex;
        gap: 15px;
        margin-top: 40px;
    }

    .dimension-dot {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        background: #333 !important;
    }

    .dimension-dot.active {
        transform: scale(1.5);
        box-shadow: 0 0 20px currentColor;
    }

    .dot-pulse {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border: 2px solid currentColor;
        border-radius: 50%;
        animation: dotPulse 2s infinite;
        opacity: 0;
    }

    .dimension-dot.active .dot-pulse {
        animation: dotPulse 2s infinite;
    }

    @keyframes dotPulse {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
    }

    /* ================================
        TRIPPY OVERLAY EFFECTS
    ================================ */
    .overlay-effects {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    }

    .chromatic-aberration {
        position: absolute;
        inset: 0;
        background: 
            linear-gradient(to right, rgba(255, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to right, rgba(0, 255, 0, 0.05) 2px, transparent 2px),
            linear-gradient(to right, rgba(0, 0, 255, 0.05) 3px, transparent 3px);
        mix-blend-mode: overlay;
        animation: chromaticShift 10s infinite linear;
    }

    @keyframes chromaticShift {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
    }

    .scanlines {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.05) 2px,
            rgba(0, 255, 255, 0.05) 4px
        );
        animation: scanlinesMove 20s linear infinite;
    }

    @keyframes scanlinesMove {
        from { background-position: 0 0; }
        to { background-position: 0 100px; }
    }

    .vhs-flicker {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.1);
        animation: vhsFlicker 0.1s infinite;
    }

    @keyframes vhsFlicker {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }

    .radial-blur {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 70%);
        filter: blur(10px);
        opacity: 0.5;
    }

    /* ================================
        SOUND WAVE VISUALIZATION
    ================================ */
    .sound-waves {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 2px;
        padding: 20px;
        z-index: 100;
    }

    .sound-bar {
        width: 8px;
        height: 20px;
        background: linear-gradient(to top, #00ffff, #ff00ff);
        border-radius: 4px 4px 0 0;
        animation: soundWave 2s infinite ease-in-out;
        animation-delay: calc(var(--bar-index) * 0.03s);
        filter: drop-shadow(0 0 5px currentColor);
    }

    @keyframes soundWave {
        0%, 100% { height: 20px; }
        50% { height: 80px; }
    }

    /* ================================
        RESPONSIVE DESIGN
    ================================ */
    @media (max-width: 900px) {
        .testimonial-display {
            width: 90%;
        }
        
        .card-header {
            flex-direction: column;
            gap: 20px;
        }
        
        .energy-meter {
            width: 100%;
        }
        
        .dimensional-plane {
            width: 90%;
            height: 200px;
        }
        
        .testimonial-orb {
            transform: 
                translate(-50%, -50%)
                translateX(calc((var(--index) - 2) * 120px))
                translateZ(calc((var(--z-index) * 30px)));
        }
    }

    @media (max-width: 600px) {
        .testimonial-quote {
            font-size: 18px;
            padding: 0 20px;
        }
        
        .navigation-controls {
            flex-direction: column;
            gap: 20px;
        }
        
        .nav-btn {
            width: 60px;
            height: 60px;
        }
    }
</style>