<script>
    import { onMount } from 'svelte';
    import { fade, slide, scale, fly } from 'svelte/transition';
    
    let activeStep = 0;
    let parallaxOffset = 0;
    
    const admissionSteps = [
        {
            step: '01',
            title: 'Exploration',
            color: '#FF6B6B',
            icon: '🌌',
            description: 'Discover our universe of opportunities',
            details: 'Dive into our interactive program catalog. Experience virtual campus tours. Chat with AI admissions assistants 24/7.',
            features: ['VR Campus Tours', 'AI Chat Assistants', 'Interactive Program Maps']
        },
        {
            step: '02',
            title: 'Application',
            color: '#4ECDC4',
            icon: '🚀',
            description: 'Launch your application journey',
            details: 'Submit through our dynamic portal with real-time feedback. Upload materials with drag-and-drop interface. Track progress with live analytics.',
            features: ['Real-time Validation', 'Drag & Drop Upload', 'Live Progress Tracker']
        },
        {
            step: '03',
            title: 'Review',
            color: '#FFD166',
            icon: '🔍',
            description: 'Holographic evaluation process',
            details: 'Experience transparent AI-powered review. Receive instant constructive feedback. Watch your application move through our evaluation pipeline.',
            features: ['AI Evaluation', 'Transparent Process', 'Instant Feedback']
        },
        {
            step: '04',
            title: 'Decision',
            color: '#06D6A0',
            icon: '✨',
            description: 'Immersive decision experience',
            details: 'Receive decisions through personalized video messages. Explore interactive acceptance packages. Join virtual celebration events.',
            features: ['Video Decisions', 'Interactive Packages', 'Virtual Celebrations']
        }
    ];

    

    const programs = [
        { name: 'Quantum Computing', color: '#9D4EDD', duration: '4 Years', seats: '15' },
        { name: 'Neural Interface Design', color: '#00BBF9', duration: '3 Years', seats: '20' },
        { name: 'Space Architecture', color: '#F15BB5', duration: '5 Years', seats: '12' },
        { name: 'Bio-Digital Fusion', color: '#00F5D4', duration: '4 Years', seats: '18' }
    ];

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        // Start auto-rotation for steps
        const interval = setInterval(() => {
            activeStep = (activeStep + 1) % admissionSteps.length;
        }, 4000);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function handleScroll() {
        parallaxOffset = window.scrollY * 0.5;
    }

    function setStep(index) {
        activeStep = index;
    }
</script>

<div class="overflow-x-hidden">
    <!-- Hero Section with Parallax -->
    <!-- .stats-section {
        padding: 6rem 2rem;
        background: rgba(255, 255, 255, 0.02);
    } -->

    <!-- .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    } -->

    <!-- .stat-item {
        position: relative;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        text-align: center;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    } -->

    <!-- .stat-item:hover {
        transform: translateY(-10px);
        border-color: var(--stat-color);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    } -->

    <!-- .stat-number {
        font-size: 4rem;
        font-weight: 900;
        margin-bottom: 1rem;
        color: var(--stat-color);
        text-shadow: 0 0 20px var(--stat-color);
    } -->

    <!-- .stat-label {
        font-size: 1.1rem;
        color: #a0a0c0;
        font-weight: 600;
    } -->

    <!-- Stats Section -->
    
    <!-- .timeline-section {
        padding: 8rem 2rem;
        position: relative;
    } -->

    <!-- .section-title {
        font-family: 'Orbitron', sans-serif;
        font-size: clamp(2.5rem, 5vw, 4rem);
        text-align: center;
        margin-bottom: 4rem;
        text-transform: uppercase;
        letter-spacing: -0.02em;
    } -->

    <!-- .title-accent {
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    } -->

    <!-- .timeline-container {
        max-width: 1200px;
        margin: 0 auto;
    } -->

    <!-- .timeline-track {
        position: relative;
        height: 2px;
        background: rgba(255, 255, 255, 0.1);
        margin: 4rem 0;
    } -->

    <!-- .timeline-progress {
        position: absolute;
        height: 100%;
        background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
        transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    } -->

    <!-- Interactive Timeline -->
    <section class="py-[6rem] px-[2rem] relative">
        <h2 class="font-[Orbitron] text-[clamp(2.5rem,5vw,4rem)] text-center mb-[4rem] uppercase letter-spacing-[0.02em]">THE <span class="bg-gradient-to-r from-[#0f2a92] to-[#04095d] bg-clip-text text-transparent">ADMISSIONS</span> ODYSSEY</h2>
        
        <div class="max-w-[1200px] mx-auto">
            <div class="relative h-[2px] bg-[rgba(255,255,255,0.1)] my-[4rem]">
                <div class="absolute h-full bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" style={`width: ${(activeStep / (admissionSteps.length - 1)) * 100}%`}></div>
                
                {#each admissionSteps as step, i}
                    <div class="timeline-node" 
                         class:active={i === activeStep}
                         style={`--step-color: ${step.color}`}
                         on:click={() => setStep(i)}>
                        <div class="node-orb">
                            <div class="node-icon">{step.icon}</div>
                            <div class="node-pulse"></div>
                        </div>
                        <div class="node-step">{step.step}</div>
                        <div class="node-title">{step.title}</div>
                    </div>
                {/each}
            </div>
            
            <!-- Active Step Content -->
            <div class="step-content" transition:fade>
                {#if admissionSteps[activeStep]}
                    {#each admissionSteps as step, i}
    {#if i === activeStep}
        <div class="step-card" style={`border-color: ${step.color}`}>
            <div class="step-header">
                <div class="step-icon-large">{step.icon}</div>
                <div class="step-title-group">
                    <h3 class="step-title">{step.title}</h3>
                    <p class="step-description">{step.description}</p>
                </div>
            </div>
            
            <div class="step-details">
                <p>{step.details}</p>
            </div>
            
            <div class="step-features">
                {#each step.features as feature}
                    <div class="feature-badge" style={`background: ${step.color}20; color: ${step.color}`}>
                        {feature}
                    </div>
                {/each}
            </div>
        </div>
    {/if}
{/each}
                {/if}
            </div>
        </div>
        
        <!-- Navigation Controls -->
        <div class="timeline-controls">
            <button class="nav-btn prev" on:click={() => setStep(activeStep > 0 ? activeStep - 1 : admissionSteps.length - 1)}>
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <div class="step-indicators">
                {#each admissionSteps as step, i}
                    <button class="step-indicator {i === activeStep ? 'active' : ''}" 
                            on:click={() => setStep(i)}
                            style={`background: ${i === activeStep ? step.color : '#333'}`}></button>
                {/each}
            </div>
            
            <button class="nav-btn next" on:click={() => setStep((activeStep + 1) % admissionSteps.length)}>
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </section>

</div>

<style>



    /* ================================
        HERO SECTION
    ================================ */
    


    /* ================================
        STATS SECTION
    ================================ */
    
    

    /* ================================
        TIMELINE SECTION
    ================================ */
    

    

    

    

    

    

    .timeline-node {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    .timeline-node:nth-child(1) { left: 0%; }
    .timeline-node:nth-child(2) { left: 33.33%; }
    .timeline-node:nth-child(3) { left: 66.66%; }
    .timeline-node:nth-child(4) { left: 100%; }

    .node-orb {
        position: relative;
        width: 80px;
        height: 80px;
        margin: 0 auto 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid var(--step-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
    }

    .timeline-node:hover .node-orb,
    .timeline-node.active .node-orb {
        transform: scale(1.2);
        box-shadow: 0 0 40px var(--step-color);
        background: rgba(255, 255, 255, 0.1);
    }

    .node-icon {
        font-size: 2rem;
    }

    .node-pulse {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid var(--step-color);
        border-radius: 50%;
        animation: nodePulse 2s infinite;
        opacity: 0;
    }

    .timeline-node.active .node-pulse {
        animation: nodePulse 2s infinite;
    }

    @keyframes nodePulse {
        0% { transform: scale(1); opacity: 0.5; }
        100% { transform: scale(1.5); opacity: 0; }
    }

    .node-step {
        font-family: 'Orbitron', sans-serif;
        font-size: 0.9rem;
        color: var(--step-color);
        margin-bottom: 0.5rem;
        font-weight: 700;
    }

    .node-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
    }

    .step-content {
        max-width: 800px;
        margin: 4rem auto;
    }

    .step-card {
        background: rgba(255, 255, 255, 0.03);
        border: 2px solid;
        border-radius: 30px;
        padding: 3rem;
        backdrop-filter: blur(10px);
    }

    .step-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .step-icon-large {
        font-size: 4rem;
    }

    .step-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .step-description {
        font-size: 1.2rem;
        color: #a0a0c0;
    }

    .step-features {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .feature-badge {
        padding: 0.8rem 1.5rem;
        border-radius: 50px;
        font-weight: 600;
        font-size: 0.9rem;
        backdrop-filter: blur(10px);
    }

    .timeline-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;
    }

    .nav-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .nav-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
        border-color: #4ecdc4;
    }

    .nav-btn svg {
        width: 24px;
        height: 24px;
    }

    .step-indicators {
        display: flex;
        gap: 1rem;
    }

    .step-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #333;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .step-indicator.active {
        transform: scale(1.3);
        box-shadow: 0 0 20px currentColor;
    }
</style>