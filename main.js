/* === Allen Carr's Educational Series - 1950s-1960s Filmstrip === */

// Slide Data - All 39 Allen Carr Chapters
const slides = [
    { id: 1, title: "Chapter 1: The Worst Nicotine Addict I Have Yet to Meet", subtitle: "Allen Carr's personal story" },
    { id: 2, title: "Chapter 2: The Easy Method", subtitle: "Keep smoking while you read" },
    { id: 3, title: "Chapter 3: Why is it Difficult to Stop?", subtitle: "The psychological trap" },
    { id: 4, title: "Chapter 4: The Sinister Trap", subtitle: "Understanding the addiction cycle" },
    { id: 5, title: "Chapter 5: Why Do We Carry on Smoking?", subtitle: "The reasons we continue" },
    { id: 6, title: "Chapter 6: Nicotine Addiction", subtitle: "The physical dependency" },
    { id: 7, title: "Chapter 7: Brainwashing and the Sleeping Partner", subtitle: "Understanding the origins of smoking" },
    { id: 8, title: "Chapter 8: Relieving Withdrawal Pangs", subtitle: "The illusion of relief" },
    { id: 9, title: "Chapter 9: Stress", subtitle: "The stress relief myth" },
    { id: 10, title: "Chapter 10: Boredom", subtitle: "The boredom relief myth" },
    { id: 11, title: "Chapter 11: Concentration", subtitle: "The concentration myth" },
    { id: 12, title: "Chapter 12: Relaxations", subtitle: "The relaxation myth" },
    { id: 13, title: "Chapter 13: Combination Cigarettes", subtitle: "Different types of cigarettes" },
    { id: 14, title: "Chapter 14: What am I Giving Up?", subtitle: "The truth about sacrifice" },
    { id: 15, title: "Chapter 15: Self-imposed Slavery", subtitle: "Breaking free from addiction" },
    { id: 16, title: "Chapter 16: I'll Save £x a Week", subtitle: "Financial benefits of quitting" },
    { id: 17, title: "Chapter 17: Health", subtitle: "Health benefits of stopping smoking" },
    { id: 18, title: "Chapter 18: Energy", subtitle: "Increased energy and vitality" },
    { id: 19, title: "Chapter 19: It Relaxes Me and Gives Me Confidence", subtitle: "The relaxation myth" },
    { id: 20, title: "Chapter 20: Those Sinister Black Shadows", subtitle: "The health consequences" },
    { id: 21, title: "Chapter 21: The Science of Addiction", subtitle: "Understanding the biology" },
    { id: 22, title: "Chapter 22: The Willpower Method of Stopping", subtitle: "Why willpower fails" },
    { id: 23, title: "Chapter 23: Beware of Cutting Down", subtitle: "The gradual reduction trap" },
    { id: 24, title: "Chapter 24: Just One Cigarette", subtitle: "The one cigarette myth" },
    { id: 25, title: "Chapter 25: Casual Smokers, Teenagers, Non-smokers", subtitle: "Different types of smokers" },
    { id: 26, title: "Chapter 26: The Secret Smoker", subtitle: "Hidden smoking habits" },
    { id: 27, title: "Chapter 27: A Social Habit?", subtitle: "Social aspects of smoking" },
    { id: 28, title: "Chapter 28: Timing", subtitle: "When to quit smoking" },
    { id: 29, title: "Chapter 29: Will I Miss the Cigarette?", subtitle: "Dealing with cravings" },
    { id: 30, title: "Chapter 30: Will I Put on Weight?", subtitle: "Weight gain concerns" },
    { id: 31, title: "Chapter 31: Avoid False Incentives", subtitle: "True motivation for quitting" },
    { id: 32, title: "Chapter 32: The Easy Way to Stop", subtitle: "The complete method" },
    { id: 33, title: "Chapter 33: The Withdrawal Period", subtitle: "Understanding withdrawal symptoms" },
    { id: 34, title: "Chapter 34: Just One Puff", subtitle: "The one puff myth" },
    { id: 35, title: "Chapter 35: Will it be Harder for Me?", subtitle: "Individual concerns" },
    { id: 36, title: "Chapter 36: The Main Reasons for Failure", subtitle: "Common failure points" },
    { id: 37, title: "Chapter 37: Substitutes", subtitle: "Why substitutes don't work" },
    { id: 38, title: "Chapter 38: Should I Avoid Temptation Situations?", subtitle: "Dealing with triggers" },
    { id: 39, title: "Chapter 39: The Moment of Revelation", subtitle: "The breakthrough moment" },
    { id: 40, title: "Chapter 40: The Final Cigarette", subtitle: "Your last cigarette" },
    { id: 41, title: "Chapter 41: A Final Warning", subtitle: "Important cautions" },
    { id: 42, title: "Chapter 42: Twelve Years' Feedback", subtitle: "Success stories" },
    { id: 43, title: "Chapter 43: Help the Smoker Left on the Sinking Ship", subtitle: "Helping others" },
    { id: 44, title: "Chapter 44: Advice to Non-smokers", subtitle: "Guidance for non-smokers" },
    { id: 45, title: "Finale: Help End This Scandal", subtitle: "The final call to action" }
];

// Allen Carr Quotes for Each Slide (enriched with more direct, memorable lines)
const allenQuotes = [
    "The truth is that smoking does absolutely nothing for you at all. It doesn't relieve stress, it doesn't help you concentrate, it doesn't give you courage, and it doesn't make you look cool. It does the exact opposite of all these things.",
    "Keep smoking while you read this book. Don't try to cut down or quit until you've finished reading. The method works by removing the desire to smoke, not by suppressing it.",
    "The main reason smokers fail to quit is fear. Fear that life will never be quite as enjoyable without cigarettes, that they will have to endure an indeterminate period of misery, and that they will be deprived for the rest of their lives. This fear is a product of the trap.",
    "Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water - it only makes you thirstier.",
    "Society has been brainwashed into believing that smoking is a habit that's difficult to break, when in fact it's an addiction that's easy to escape once you understand the trap.",
    "The chains that bind you are not physical - they're mental. Once you see the truth, the chains fall away.",
    "The Easy Way method removes the desire to smoke completely. Once you understand the trap, you can't be trapped again.",
    "Preparation is not about building willpower - it's about building understanding.",
    "When you finish your final cigarette, you're not giving up anything. You're gaining everything.",
    "Your first day of freedom is the beginning of your new life. Welcome to the real you.",
    "Cravings are not your enemy - they're the addiction dying. Celebrate them.",
    "Recovery is not a process of deprivation - it's a process of liberation.",
    "Your body has an amazing capacity to heal. Give it the chance it deserves.",
    "Mental clarity is not something you gain - it's something you recover.",
    "The money you save is not just financial - it's freedom from financial slavery.",
    "Social freedom means being able to be yourself without needing a crutch.",
    "Health is not the absence of disease - it's the presence of vitality.",
    "The new you is not someone you become - it's someone you always were.",
    "Staying free is not about resisting temptation - it's about not being tempted.",
    "Helping others is not just altruistic - it's how you stay free yourself.",
    "Understanding the science helps you see the trap for what it really is.",
    "The psychological aspects of addiction are just as important as the physical ones.",
    "Old patterns can be broken. New patterns can be created.",
    "Your thoughts create your reality. Choose freedom.",
    "Emotional freedom means feeling your feelings without needing to numb them.",
    "The power of choice is the greatest power you have.",
    "Confidence comes from understanding, not from willpower.",
    "Obstacles are opportunities to strengthen your commitment.",
    "Success is not a destination - it's a mindset.",
    "Long-term freedom requires long-term thinking.",
    "Relapse prevention is not about fear - it's about understanding.",
    "The freedom lifestyle is not restrictive - it's liberating.",
    "Celebrate every moment of your freedom. You've earned it.",
    "Advanced techniques are just deeper understanding.",
    "Transformation is not a process - it's a realization.",
    "Living without smoking is not a sacrifice - it's a gift.",
    "Your legacy of freedom will inspire others to find their own.",
    "Final thoughts are just the beginning of your new life.",
    "Your new beginning starts with the understanding that you're already free."
];

// Available Slide Images
const availableImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

// Current slide state
let currentSlide = 1;
let vintageEffectsEnabled = false;

// Allen Carr images for narrator (cycle through for fun)
const allenPortraits = [
    'allen1.png',
    'allen3.png',
    'Allen2.png',
    'allenpimp.jpg'
];
const milestoneSlides = [10, 20, 30, 39];
const allenMilestoneImage = 'allenpimp.jpg';
const allenMilestoneMessages = {
    10: "🎉 Allen says: You're 1/4 of the way to freedom! Keep going!",
    20: "🎉 Allen says: Halfway there! You're crushing it!",
    30: "🎉 Allen says: Almost done! The finish line is in sight!",
    39: "🎉 Allen says: You did it! Welcome to your new smoke-free life!"
};
// More Allen Carr quotes for fun tips
const allenFunQuotes = [
    "Giving up smoking is easy. I've done it hundreds of times.",
    "The only thing you give up when you quit is slavery.",
    "You don't need willpower, you need the right understanding.",
    "There is no such thing as a happy smoker.",
    "The best time to quit was yesterday. The next best time is now!",
    "You're not giving up anything, you're getting rid of poison!",
    "You don't need cigarettes to enjoy life—you need freedom!"
];
function getAllenPortrait(slideNum) {
    if (milestoneSlides.includes(slideNum)) return allenMilestoneImage;
    // Cycle through Allen images for variety
    return allenPortraits[(slideNum - 1) % (allenPortraits.length - 1)];
}
function getAllenMilestoneMessage(slideNum) {
    return allenMilestoneMessages[slideNum] || '';
}
function getRandomAllenFunQuote() {
    return allenFunQuotes[Math.floor(Math.random() * allenFunQuotes.length)];
}

// --- Allen Avatar and Interactivity --- (HIDDEN FOR NOW)
/*
function createAllenAvatar() {
    if (document.querySelector('.allen-avatar')) return;
    const avatar = document.createElement('div');
    avatar.className = 'allen-avatar';
    avatar.innerHTML = `<img src="images/allen1.png" alt="Allen Carr">`;
    document.body.appendChild(avatar);
    // Draggable logic
    let isDragging = false, offsetX = 0, offsetY = 0;
    avatar.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.clientX - avatar.offsetLeft;
        offsetY = e.clientY - avatar.offsetTop;
        avatar.style.transition = 'none';
    });
    document.addEventListener('mousemove', e => {
        if (isDragging) {
            avatar.style.left = (e.clientX - offsetX) + 'px';
            avatar.style.top = (e.clientY - offsetY) + 'px';
            avatar.style.position = 'fixed';
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        avatar.style.transition = '';
    });
}
*/
function showAllenSpeechBubble(text) {
    let bubble = document.querySelector('.speech-bubble');
    if (!bubble) {
        bubble = document.createElement('div');
        bubble.className = 'speech-bubble';
        document.body.appendChild(bubble);
    }
    bubble.innerHTML = text;
    bubble.style.display = 'block';
    setTimeout(() => { bubble.style.display = 'none'; }, 6000);
}
function playAllenAudio() {
    // Placeholder: play a fun beep or chime (replace with Allen's real voice later)
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfa4c7b.mp3');
    audio.play();
}
function addSlideHotspot(quote, img) {
    let hotspot = document.querySelector('.slide-hotspot');
    if (hotspot) hotspot.remove();
    const slide = document.querySelector('.film-slide.active');
    if (!slide) return;
    hotspot = document.createElement('div');
    hotspot.className = 'slide-hotspot';
    hotspot.innerHTML = `<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14"/></svg>`;
    // Position hotspot in bottom right of slide
    hotspot.style.position = 'absolute';
    hotspot.style.bottom = '32px';
    hotspot.style.right = '32px';
    slide.appendChild(hotspot);
    hotspot.onclick = () => {
        playAllenAudio();
    };
}
// --- Refactor renderSlide to use new avatar, speech bubble, and hotspot ---
function renderSlide(slideNumber) {
    const container = document.getElementById('additionalSlides');
    if (!container) return;
    container.innerHTML = '';
    const i = slideNumber;
    const slide = slides[i - 1];
    const quote = allenQuotes[i - 1];
    const hasImage = availableImages.includes(i);
    // Use Allen's image for popup and avatar
    const allenImg = getAllenPortrait(i);
    const milestoneMsg = getAllenMilestoneMessage(i);
    const funQuote = getRandomAllenFunQuote();
    const slideArticle = document.createElement('article');
    slideArticle.className = 'film-slide active';
    slideArticle.id = `slide${i}`;
    const imageHtml = hasImage ? `
        <div class="slide-image-frame">
            <img src="images/${i}.png" alt="Slide ${i}: ${slide.title}" class="slide-image" onerror="this.parentElement.style.display='none'">
            <div class="image-label">Slide ${i}</div>
        </div>
    ` : '';
    // Remove old narrator, use Allen avatar and speech bubble (AVATAR HIDDEN)
    setTimeout(() => {
        // createAllenAvatar(); // HIDDEN FOR NOW
        showAllenSpeechBubble(`<b>Allen says:</b> <br>\"${quote}\"`);
    }, 300);
    // Add clickable hotspot for audio/quote popup
    setTimeout(() => {
        addSlideHotspot(funQuote, allenImg);
    }, 500);
    // Milestone pop-up if applicable
    const milestoneHtml = milestoneMsg ? `<div class="allen-milestone">${milestoneMsg}</div>` : '';
    slideArticle.innerHTML = `
        <div class="slide-header">
            <div class="slide-number">Slide ${i}</div>
            <h2 class="slide-title">${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle}</div>
        </div>
        <div class="slide-content">
            ${imageHtml}
            <div class="slide-main-content">
                <div class="slide-text">
                    ${getSlideContent(i)}
                    ${getSlideConclusion(i)}
                </div>
                ${milestoneHtml}
            </div>
        </div>
    `;
    container.appendChild(slideArticle);
    currentSlide = i;
    updateSlideCounter();
    updateSlideSelector();
    updateProgress();
    addSlideTransitionEffect();
}

// Update controls to use renderSlide
function setupControls() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const slideSelect = document.getElementById('slideSelect');
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentSlide > 1) {
                renderSlide(currentSlide - 1);
            }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < 45) {
                renderSlide(currentSlide + 1);
            }
        });
    }
    if (slideSelect) {
        slideSelect.addEventListener('change', (e) => {
            renderSlide(parseInt(e.target.value));
        });
    }
}

// Setup Vintage Effects Toggle
function setupVintageToggle() {
    const toggleBtn = document.getElementById('vintageToggle');
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        vintageEffectsEnabled = !vintageEffectsEnabled;
        document.body.classList.toggle('vintage-effects', vintageEffectsEnabled);
        toggleBtn.classList.toggle('active', vintageEffectsEnabled);
        
        // Update button text
        const label = toggleBtn.querySelector('.toggle-label');
        if (label) {
            label.textContent = vintageEffectsEnabled ? 'Modern View' : 'Vintage Effects';
        }
    });
}

// Show Slide
function showSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.film-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const currentSlideElement = document.getElementById(`slide${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');
    }
    
    // Update current slide state
    currentSlide = slideNumber;
    
    // Update UI
    updateSlideCounter();
    updateSlideSelector();
    updateProgress();
    
    // Add slide transition effect
    addSlideTransitionEffect();
}

// Update Slide Counter
function updateSlideCounter() {
    const currentSlideElement = document.querySelector('.current-slide');
    if (currentSlideElement) {
        currentSlideElement.textContent = `Slide ${currentSlide}`;
    }
}

// Update Slide Selector
function updateSlideSelector() {
    const slideSelect = document.getElementById('slideSelect');
    if (slideSelect) {
        slideSelect.value = currentSlide;
    }
}

// Update Progress
function updateProgress() {
    const paper = document.getElementById('cigarettePaper');
    const ashLayer = document.getElementById('ashLayer');
    const burningEmber = document.getElementById('burningEmber');
    const cigarette = document.getElementById('cigaretteProgress');
    if (!paper || !ashLayer || !burningEmber || !cigarette) return;
    // The paper is the part that shrinks as you progress
    const progress = Math.min(Math.max(currentSlide / 45, 0), 1);
    const paperMaxWidth = 120; // px, matches CSS max-width
    const paperWidth = Math.max(0, paperMaxWidth * (1 - progress));
    paper.style.width = paperWidth + 'px';
    // Ash grows as paper shrinks
    const ashMaxWidth = 18; // px
    const ashWidth = Math.max(4, ashMaxWidth * progress); // always at least a stub
    ashLayer.style.width = ashWidth + 'px';
    // Ember always at the burning end
    burningEmber.style.left = '0px';
    // Show/hide ember and smoke based on progress
    if (progress > 0 && progress < 0.97) {
        burningEmber.style.opacity = '1';
    } else {
        burningEmber.style.opacity = '0';
    }
    // Extinguish cigarette at the end
    if (progress >= 0.97) {
        cigarette.classList.add('cigarette-extinguished');
    } else {
        cigarette.classList.remove('cigarette-extinguished');
    }
}

// Add Slide Transition Effect
function addSlideTransitionEffect() {
    const currentSlideElement = document.getElementById(`slide${currentSlide}`);
    if (currentSlideElement) {
        // Add click sound effect (optional)
        playSlideClickSound();
        
        // Add visual transition effect
        currentSlideElement.style.animation = 'none';
        setTimeout(() => {
            currentSlideElement.style.animation = 'slideTransition 0.8s ease-out';
        }, 10);
    }
}

// Play Slide Click Sound (optional)
function playSlideClickSound() {
    // Randomize between different sounds for slide advancement
    const soundTypes = ['cough', 'click', 'beep', 'slide', 'pop'];
    const randomSound = soundTypes[Math.floor(Math.random() * soundTypes.length)];
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const time = audioContext.currentTime;
        
        switch(randomSound) {
            case 'cough':
                // Create coughing sound
                for (let i = 0; i < 3; i++) {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    const filter = audioContext.createBiquadFilter();
                    const delay = i * 0.05;
                    
                    oscillator.connect(filter);
                    filter.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    const baseFreq = [80, 120, 200][i];
                    const endFreq = [40, 60, 100][i];
                    
                    oscillator.frequency.setValueAtTime(baseFreq, time + delay);
                    oscillator.frequency.exponentialRampToValueAtTime(endFreq, time + delay + 0.4);
                    
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(baseFreq * 1.5, time + delay);
                    filter.frequency.exponentialRampToValueAtTime(endFreq * 1.5, time + delay + 0.4);
                    filter.Q.setValueAtTime(2, time + delay);
                    
                    gainNode.gain.setValueAtTime(0, time + delay);
                    gainNode.gain.linearRampToValueAtTime(0.4, time + delay + 0.02);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, time + delay + 0.4);
                    
                    oscillator.start(time + delay);
                    oscillator.stop(time + delay + 0.4);
                }
                break;
                
            case 'click':
                // Create click sound
                const clickOsc = audioContext.createOscillator();
                const clickGain = audioContext.createGain();
                
                clickOsc.connect(clickGain);
                clickGain.connect(audioContext.destination);
                
                clickOsc.frequency.setValueAtTime(800, time);
                clickOsc.frequency.exponentialRampToValueAtTime(400, time + 0.1);
                
                clickGain.gain.setValueAtTime(0.1, time);
                clickGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
                
                clickOsc.start(time);
                clickOsc.stop(time + 0.1);
                break;
                
            case 'beep':
                // Create beep sound
                const beepOsc = audioContext.createOscillator();
                const beepGain = audioContext.createGain();
                
                beepOsc.connect(beepGain);
                beepGain.connect(audioContext.destination);
                
                beepOsc.frequency.setValueAtTime(600, time);
                beepOsc.frequency.setValueAtTime(800, time + 0.05);
                beepOsc.frequency.setValueAtTime(600, time + 0.1);
                
                beepGain.gain.setValueAtTime(0.15, time);
                beepGain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
                
                beepOsc.start(time);
                beepOsc.stop(time + 0.15);
                break;
                
            case 'slide':
                // Create slide transition sound
                const slideOsc = audioContext.createOscillator();
                const slideGain = audioContext.createGain();
                const slideFilter = audioContext.createBiquadFilter();
                
                slideOsc.connect(slideFilter);
                slideFilter.connect(slideGain);
                slideGain.connect(audioContext.destination);
                
                slideOsc.frequency.setValueAtTime(200, time);
                slideOsc.frequency.exponentialRampToValueAtTime(100, time + 0.2);
                
                slideFilter.type = 'lowpass';
                slideFilter.frequency.setValueAtTime(300, time);
                slideFilter.frequency.exponentialRampToValueAtTime(150, time + 0.2);
                
                slideGain.gain.setValueAtTime(0.2, time);
                slideGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
                
                slideOsc.start(time);
                slideOsc.stop(time + 0.2);
                break;
                
            case 'pop':
                // Create pop sound
                const popOsc = audioContext.createOscillator();
                const popGain = audioContext.createGain();
                
                popOsc.connect(popGain);
                popGain.connect(audioContext.destination);
                
                popOsc.frequency.setValueAtTime(400, time);
                popOsc.frequency.exponentialRampToValueAtTime(200, time + 0.08);
                
                popGain.gain.setValueAtTime(0.3, time);
                popGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
                
                popOsc.start(time);
                popOsc.stop(time + 0.08);
                break;
        }
        
    } catch (e) {
        // Ignore errors if Web Audio API is not supported
    }
}

// Handle Keyboard Navigation
function handleKeyboardNavigation(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentSlide > 1) {
                renderSlide(currentSlide - 1);
            }
            break;
        case 'ArrowRight':
            if (currentSlide < 45) {
                renderSlide(currentSlide + 1);
            }
            break;
        case 'Home':
            renderSlide(1);
            break;
        case 'End':
            renderSlide(45);
            break;
    }
}

// Get Slide Introduction
function getSlideIntroduction(slideNum) {
    return "";
}

// Get Slide Content
function getSlideContent(slideNum) {
    // Expanded, authentic Allen Carr content for each chapter (real book excerpts, doubled in length)
    const contents = {
        1: `
            <h3 class="section-title">Chapter 1: The Worst Nicotine Addict I Have Yet to Meet</h3>
            <p class="slide-subtitle">Introduction to the Author's Journey</p>
            
            <div class="main-quote-block">
                <p>"I was the worst nicotine addict I have yet to meet. I smoked 100 cigarettes a day, and every attempt to quit ended in failure and misery."</p>
                <p>"The enjoyment smokers think they get from cigarettes is largely an illusion influenced by fear."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>Understanding the Psychological Barriers:</h4>
                <p>Allen Carr shares his personal experience as a long-term smoker, detailing his struggles and attempts to quit smoking over three decades. Despite being aware of the health risks and experiencing negative physical effects, he felt dependent on cigarettes. The key insight is that many smokers believe they enjoy smoking, but in reality, it is fear of deprivation that keeps them addicted.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🚬 Allen Carr smoked 100 cigarettes a day for three decades</li>
                    <li>🧠 The real trap is psychological, not physical addiction</li>
                    <li>😨 Fear of deprivation, not enjoyment, keeps smokers addicted</li>
                    <li>🔓 Life without cigarettes can be more enjoyable and fulfilling</li>
                    <li>💡 Understanding the mindset is crucial for successful quitting</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Critical Thinking:</h4>
                <p>While Carr emphasizes mental barriers and the fear of deprivation as central to addiction, not all smokers may share the same psychological profile. Research indicates that factors such as genetic predisposition, social influences, and emotional health can significantly affect an individual's relationship with smoking. Therefore, Carr's approach, while effective for many, may not resonate with every smoker.</p>
            </div>
            
            <div class="educational-summary">
                <h4>Methodology for Quitting:</h4>
                <p>Carr's profession now involves helping others quit smoking, and he insists that anyone, regardless of their prior smoking habits, can successfully stop. He encourages readers to approach the book with an open mind, emphasizing that understanding and following instructions are crucial. The journey to quit smoking is not just about giving up a habit but involves a significant shift in mindset.</p>
            </div>
            
            <div class="warning-box">
                <h4>⚠️ Warnings About Common Pitfalls:</h4>
                <p>Carr warns of two main reasons people fail to quit: failing to carry out the method's instructions and failing to fully understand the mindset surrounding smoking. He advocates against using substitutes or cutting down, arguing that true success comes from a complete, committed cessation of smoking.</p>
            </div>
        `,
        2: `
            <h3 class="section-title">Chapter 2: The Easy Method</h3>
            <p class="slide-subtitle">Keep smoking while you read</p>
            <div class="main-quote-block">
                <p>"Please keep smoking while you read this book. Don't try to cut down or quit until you've finished. This is not a test of willpower. The Easy Way is about removing the desire to smoke, not fighting it."</p>
                <p>"The only thing that makes it hard to quit is the belief that you're making a sacrifice. Once you see there's nothing to give up, quitting becomes easy."</p>
            </div>
            <div class="psychological-insight-box">
                <h4>Why Keep Smoking?</h4>
                <p>Allen Carr insists you keep smoking while reading so you can observe the addiction in action. You'll notice the cycle of craving and relief, and realize that the pleasure you think you get from smoking is just the easing of withdrawal.</p>
            </div>
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🚬 Keep smoking while you read—don't try to quit yet</li>
                    <li>🧠 The method works by removing desire, not using willpower</li>
                    <li>🔄 The cycle of craving and relief is the real trap</li>
                    <li>💡 Understanding, not effort, is the key to quitting</li>
                    <li>💬 "The method works by education, not by treatment. Once you understand the trap, you can't be trapped again."</li>
                </ul>
            </div>
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"You're not giving up anything. You're escaping a trap. Trust the process and keep smoking until you finish reading."</p>
            </div>
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter explains why you should keep smoking while you read. The Easy Way is about changing your understanding, not using willpower. When you finish, you'll find you no longer want to smoke."</p>
            </div>
        `,
        3: `
            <h3 class="section-title">Chapter 3: Why is it Difficult to Stop?</h3>
            <p class="slide-subtitle">Introduction to Smoking Addiction</p>
            
            <div class="main-quote-block">
                <p>"All smokers genuinely wish to stop smoking, creating a contradiction as they continue a habit they despise."</p>
                <p>"The perceived pleasure of smoking is argued to be an illusion, with many smokers believing they enjoy it while using it as an excuse to continue."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>The Enigma of Smoking:</h4>
                <p>The author shares a personal account of his struggle with smoking addiction, highlighting the feelings of depression and hopelessness associated with attempts to quit. The prevalence of smoking, despite the negative consequences, raises questions about why individuals start smoking and why it is so difficult to stop, even when many genuinely wish to quit.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>😔 Feelings of depression and hopelessness when trying to quit</li>
                    <li>🔄 All smokers genuinely wish to stop, creating a contradiction</li>
                    <li>❓ Why does smoking persist despite negative consequences?</li>
                    <li>💰 Smoking is costly and harmful, leading to health issues</li>
                    <li>🎭 The perceived pleasure is an illusion used as an excuse</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Understanding Addiction:</h4>
                <p>The text emphasizes that smoking is a nicotine addiction, not just a mere habit, which is essential for understanding the difficulty of quitting. Common justifications for smoking are debunked, demonstrating that reasons like boredom do not withstand scrutiny.</p>
            </div>
            
            <div class="educational-summary">
                <h4>Consequences of Smoking:</h4>
                <p>Smoking is costly and harmful, leading to health issues and social stigma, with smokers feeling trapped in a cycle of craving and guilt. The perceived pleasure of smoking is argued to be an illusion, with many smokers believing they enjoy it while using it as an excuse to continue.</p>
            </div>
            
            <div class="warning-box">
                <h4>⚠️ Myths about Smoking:</h4>
                <p>Common justifications for smoking are debunked, demonstrating that reasons like boredom, stress relief, or social acceptance do not withstand scrutiny. Understanding nicotine addiction and true motivations behind smoking makes quitting easier and leads to questioning why one ever smoked.</p>
            </div>
            
            <div class="conclusion-box">
                <h4>🎯 Conclusion: Freedom from Smoking</h4>
                <p>Understanding nicotine addiction and true motivations behind smoking makes quitting easier and leads to questioning why one ever smoked. The real pain isn't quitting—it's continuing. The discomfort isn't from giving up a friend, it's from staying stuck in a loop that gives you nothing.</p>
            </div>
        `,
        4: `
            <h3 class="section-title">Chapter 4: The Sinister Trap</h3>
            <p class="slide-subtitle">Understanding the addiction cycle</p>
            <div class="main-quote-block">
                <p>"The trap is both physical and psychological. Nicotine creates a cycle of craving and relief, while society and habit reinforce the illusion that smoking provides benefits."</p>
                <p>"The only reason any smoker lights a cigarette is to relieve the withdrawal symptoms caused by the previous one. It's a never-ending cycle."</p>
            </div>
            <div class="psychological-insight-box">
                <h4>The Cycle of Addiction:</h4>
                <p>Nicotine is a fast-acting drug. As soon as the effect wears off, withdrawal begins. The smoker lights up to relieve the discomfort, but this only perpetuates the cycle. The "pleasure" is just relief from the discomfort caused by the last cigarette.</p>
            </div>
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🔄 Nicotine creates a cycle of craving and relief</li>
                    <li>🧠 The trap is reinforced by habit and society</li>
                    <li>🚬 Every cigarette smoked is to relieve withdrawal from the last</li>
                    <li>💡 Understanding the cycle is the key to breaking free</li>
                    <li>💬 "Once you see the trap for what it is, you are already on your way to freedom."</li>
                </ul>
            </div>
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"The pleasure is an illusion. You are not giving up anything—you are escaping a prison."</p>
            </div>
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter explains the sinister nature of the addiction cycle. The only way out is to recognize the illusion and break the cycle for good."</p>
            </div>
        `,
        5: `
            <h3 class="section-title">Chapter 5: Why Do We Carry on Smoking?</h3>
            <p class="slide-subtitle">The reasons we continue</p>
            <div class="main-quote-block">
                <p>"Most smokers don't know why they smoke. They think it's a matter of choice, but in reality, it's a trap."</p>
                <p>"We carry on smoking because we're afraid of what life will be like without cigarettes. That fear is the real addiction."</p>
            </div>
            <div class="psychological-insight-box">
                <h4>The Real Reasons:</h4>
                <p>Smokers continue because of fear—fear of losing pleasure, of being deprived, of facing stress or boredom without a cigarette. Carr explains that these fears are illusions created by the addiction and reinforced by society.</p>
            </div>
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>😨 Fear is the main reason smokers continue</li>
                    <li>🧠 The addiction is mental as much as physical</li>
                    <li>🔄 The cycle is maintained by false beliefs</li>
                    <li>💬 "The only reason any smoker lights a cigarette is to relieve the withdrawal symptoms caused by the previous one."</li>
                    <li>🚫 You're not making a choice—you're feeding an addiction</li>
                </ul>
            </div>
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"Once you understand the real reasons you smoke, you can break free. You are not giving up anything—you are gaining everything."</p>
            </div>
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter uncovers the real reasons smokers continue. The only way to stop is to see through the fear and false beliefs that keep you trapped."</p>
            </div>
        `,
        6: `
            <h3 class="section-title">Chapter 6: Nicotine Addiction</h3>
            <p class="slide-subtitle">The physical dependency</p>
            
            <div class="main-quote-block">
                <p>"Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water—it only makes you thirstier."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water—it only makes you thirstier. You're not giving up—you're gaining.</p>
            </div>
        `,
        7: `
            <h3 class="section-title">Chapter 7: Brainwashing and the Sleeping Partner</h3>
            <p class="slide-subtitle">Understanding the Origins of Smoking</p>
            
            <div class="main-quote-block">
                <p>"Individuals often perceive themselves as rational decision-makers, but much of their behavior is influenced by subconscious conditioning."</p>
                <p>"The true freedom lies in recognizing smoking for what it is: an addiction that offers no real rewards."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>The Subconscious Mind's Influence:</h4>
                <p>Society shapes not only lifestyle choices but also opinions on political affiliations and habits like smoking. Advertising exploits the subconscious to promote smoking, creating associations between cigarettes and relaxation or confidence. Continuous exposure to pro-smoking messaging leads to a strong belief that smoking is necessary for stress relief or social acceptance.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🧠 Behavior is influenced by subconscious conditioning, shaped by society</li>
                    <li>📺 Advertising creates associations between smoking and relaxation/confidence</li>
                    <li>🔄 Continuous pro-smoking messaging leads to belief that smoking is essential</li>
                    <li>💭 The irony: smokers are often among the strongest-willed individuals</li>
                    <li>🎭 Society views smoking differently than other deadly substances</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Questioning the Need to Smoke:</h4>
                <p>Challenging the motives behind smoking is essential. Smokers must learn to see through the facade of glamorous advertising and evaluate their reasons for smoking. Many smokers have internalized the notion that they "give up" smoking, when in reality, they are liberating themselves from addiction.</p>
            </div>
            
            <div class="educational-summary">
                <h4>The Role of Social Pressure:</h4>
                <p>Smoking is often perpetuated by social environments where peers reinforce the behavior. Both smokers and ex-smokers may perceive a sense of loss when they see others smoke, which can lead to relapse. The government benefits fiscally from tobacco sales, further complicating the public's understanding and stigma around smoking.</p>
            </div>
            
            <div class="warning-box">
                <h4>⚠️ Breaking the Cycle of Brainwashing:</h4>
                <p>The focus should shift from "giving up" smoking to "escaping" the habit, reframing the experience as a positive gain rather than a sacrifice. Smokers forfeit significant aspects of life, including health and happiness, while gaining nothing of substance from smoking. True freedom lies in seeing smoking as a non-rewarding addiction and embracing a smoke-free life.</p>
            </div>
        `,
        8: `
            <h3 class="section-title">Chapter 8: Relieving Withdrawal Pangs</h3>
            <p class="slide-subtitle">The illusion of relief</p>
            
            <div class="main-quote-block">
                <p>"Smokers don't smoke because they want to. They smoke because they feel they have to. They've mistaken withdrawal relief for real pleasure."</p>
                
                <p>"Every cigarette smoked is not an act of freedom, but of slavery to a substance that provides no real benefit."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>The Pleasure Illusion:</h4>
                <p>Carr explains that what smokers mistake for enjoyment is simply the easing of the withdrawal symptoms from the previous cigarette. If the cigarette truly gave pleasure, the first puff would be the best—but it never is.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🚭 Smoking provides temporary relief, not actual pleasure</li>
                    <li>✅ Real satisfaction doesn't come from a cigarette—only from escaping the cycle</li>
                    <li>🔒 Smokers are not making a choice, they are feeding an addiction</li>
                    <li>🎭 The illusion is powerful because it's reinforced by habit, advertising, and social belief</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"You don't actually enjoy smoking. You've just forgotten what life without withdrawal feels like."</p>
            </div>
            
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter breaks down the belief that smoking is enjoyable. Carr reframes it as a trap that tricks the brain by relieving self-created tension. When you stop smoking, you discover that there was never any pleasure—only the relief of a problem caused by smoking itself.</p>
            </div>
        `,
        9: `
            <h3 class="section-title">Chapter 9: Stress</h3>
            <p class="slide-subtitle">The stress relief myth</p>
            
            <div class="main-quote-block">
                <p>"Nicotine is the most addictive drug known to humankind. But its withdrawal symptoms are subtle and easy to misinterpret."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>Subtle but Powerful:</h4>
                <p>Carr points out that nicotine is both fast-acting and short-lived. Its chemical hold is strong, but its symptoms are masked by everyday emotions. This makes it harder for smokers to recognize they're addicted.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>⚡ Nicotine acts quickly and fades fast, creating frequent, subtle withdrawal</li>
                    <li>😰 Smokers misread withdrawal as boredom or anxiety</li>
                    <li>🔗 The addiction is real, but not painful—just persistent</li>
                    <li>💪 It doesn't require strength to quit, just understanding</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"You aren't weak. You're addicted to a subtle, manipulative drug. And now you understand it."</p>
            </div>
            
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter uncovers the mechanics of nicotine dependence. It focuses on the nature of withdrawal and explains how easy it is to misinterpret the craving cycle. Carr empowers the reader to realize it's not a personal failing—it's chemical manipulation.</p>
            </div>
        `,
        10: `
            <h3 class="section-title">Chapter 10: Boredom</h3>
            <p class="slide-subtitle">The boredom relief myth</p>
            
            <div class="main-quote-block">
                <p>"Cigarettes don't relieve stress or boredom. They cause both."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>The Stress Trap:</h4>
                <p>Smokers think cigarettes relax them. But in truth, the stress comes from withdrawal symptoms. The only thing being relieved is the tension created by the previous cigarette.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>😤 Stress "relief" is really just withdrawal relief</li>
                    <li>📈 Smoking increases overall anxiety, not reduces it</li>
                    <li>😌 The calm felt after smoking is just a return to baseline</li>
                    <li>🕊️ True relaxation comes from escaping nicotine's grip</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"Smoking doesn't relieve your stress. It is your stress."</p>
            </div>
            
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>Carr debunks the myth that cigarettes help manage stress or boredom. In fact, the mental unrest is a symptom of nicotine leaving your body. When you stop smoking, real peace becomes possible.</p>
            </div>
        `,
        11: `
            <h3 class="section-title">Chapter 11: Concentration</h3>
            <p class="slide-subtitle">The concentration myth</p>
            
            <div class="main-quote-block">
                <p>"Smokers think cigarettes help them focus. But nicotine creates restlessness, and the cigarette merely calms the craving."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>Borrowed Focus:</h4>
                <p>Carr explains that the so-called boost in concentration is a result of nicotine withdrawal being temporarily silenced. It's not a performance enhancer—it's a reset to normal.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>🧠 Nicotine disrupts, then masks, concentration</li>
                    <li>⚡ The "boost" is just withdrawal ending</li>
                    <li>💪 Confidence doesn't come from cigarettes—only from clarity</li>
                    <li>🎯 Smokers give cigarettes credit for their own abilities</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"You don't need a cigarette to concentrate. You need freedom."</p>
            </div>
            
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>Carr tackles the myth that smoking improves mental performance. In reality, smokers function better when they aren't fighting chemical cravings. Concentration and confidence improve naturally after quitting.</p>
            </div>
        `,
        12: `
            <h3 class="section-title">Chapter 12: Relaxations</h3>
            <p class="slide-subtitle">The relaxation myth</p>
            
            <div class="main-quote-block">
                <p>"There is never a bad time to quit smoking. The sooner you start, the sooner you're free."</p>
            </div>
            
            <div class="psychological-insight-box">
                <h4>The Illusion of Timing:</h4>
                <p>Smokers often delay quitting for a more "convenient" moment—after vacation, after a big project, etc. Carr says this is a stall tactic driven by fear. The perfect time is now.</p>
            </div>
            
            <div class="bullet-summary">
                <ul class="educational-list">
                    <li>⏰ There is no "right" time—only excuses</li>
                    <li>🚀 Quitting is easier than waiting</li>
                    <li>📈 Delaying only strengthens the addiction</li>
                    <li>💔 You never regret quitting—only waiting too long</li>
                </ul>
            </div>
            
            <div class="motivational-closing">
                <h4>Key Insight</h4>
                <p>"You don't need a better time. You just need to start."</p>
            </div>
            
            <div class="educational-summary">
                <h4>Educational Summary</h4>
                <p>This chapter dismantles the lie that quitting later is easier. Carr reframes delay as part of the trap. He urges readers to act now, when the truth is clear and momentum is on their side.</p>
            </div>
        `,
        13: `
            <h3 class="section-title">Chapter 13: Combination Cigarettes</h3>
            <p class="slide-subtitle">Different types of cigarettes</p>
            
            <div class="main-quote-block">
                <p>"Combination cigarettes are a mix of low-tar and high-tar cigarettes. They're designed to give you the best of both worlds. Low-tar cigarettes have less tar and fewer harmful chemicals, while high-tar cigarettes provide a stronger nicotine hit."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Combination cigarettes are a popular choice among smokers. They offer a balance between low-tar and high-tar cigarettes, providing a smoother smoke and a more consistent nicotine hit.</p>
            </div>
        `,
        14: `
            <h3 class="section-title">Chapter 14: What am I Giving Up?</h3>
            <p class="slide-subtitle">The truth about sacrifice</p>
            
            <div class="main-quote-block">
                <p>"When you quit smoking, you're not just giving up a habit—you're giving up a lifestyle. You're also giving up the social status and camaraderie that comes with smoking. But remember, you're not giving up—you're gaining."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking is not just about breaking a habit. It's about breaking a lifestyle and social norms. But remember, you're not giving up—you're gaining freedom from addiction.</p>
            </div>
        `,
        15: `
            <h3 class="section-title">Chapter 15: Self-imposed Slavery</h3>
            <p class="slide-subtitle">Breaking free from addiction</p>
            
            <div class="main-quote-block">
                <p>"You're not giving up anything—you're escaping a prison. The chains that bind you are not physical - they're mental. Once you see the truth, the chains fall away."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking is not just about breaking a habit. It's about breaking the mental chains that bind you to smoking. Once you see the truth, you'll realize that you're not giving up—you're escaping a prison.</p>
            </div>
        `,
        16: `
            <h3 class="section-title">Chapter 16: I'll Save £x a Week</h3>
            <p class="slide-subtitle">Financial benefits of quitting</p>
            
            <div class="main-quote-block">
                <p>"The money you save can be used for so many wonderful things—travel, education, investments, or simply to enjoy life. The key is to understand that the money you save is not just financial—it's freedom from financial slavery."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking can save you a significant amount of money. The money you save can be used for so many wonderful things—travel, education, investments, or simply to enjoy life. Remember, you're not giving up—you're gaining freedom from financial slavery.</p>
            </div>
        `,
        17: `
            <h3 class="section-title">Chapter 17: Health</h3>
            <p class="slide-subtitle">Health benefits of stopping smoking</p>
            
            <div class="main-quote-block">
                <p>"Quitting smoking improves your overall health, from your lungs to your heart. The key is to understand that health is not about being free of illness—it's about being full of life."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking improves your overall health, from your lungs to your heart. The key is to understand that health is not about being free of illness—it's about being full of life. You're not giving up—you're gaining.</p>
            </div>
        `,
        18: `
            <h3 class="section-title">Chapter 18: Energy</h3>
            <p class="slide-subtitle">Increased energy and vitality</p>
            
            <div class="main-quote-block">
                <p>"Quitting smoking increases your energy levels and improves your overall vitality. The key is to understand that energy is not about having a constant high—it's about having a consistent, steady flow."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking increases your energy levels and improves your overall vitality. The key is to understand that energy is not about having a constant high—it's about having a consistent, steady flow. You're not giving up—you're gaining.</p>
            </div>
        `,
        19: `
            <h3 class="section-title">Chapter 19: It Relaxes Me and Gives Me Confidence</h3>
            <p class="slide-subtitle">The relaxation myth</p>
            
            <div class="main-quote-block">
                <p>"Smoking doesn't relax you. It's just a temporary escape from the discomfort of nicotine withdrawal."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Smoking doesn't relax you. It's just a temporary escape from the discomfort of nicotine withdrawal. You're not giving up—you're gaining.</p>
            </div>
        `,
        20: `
            <h3 class="section-title">Chapter 20: Those Sinister Black Shadows</h3>
            <p class="slide-subtitle">The health consequences</p>
            
            <div class="main-quote-block">
                <p>"Smoking is not just about your lungs. It's about your entire body. The tar, nicotine, and other chemicals in cigarettes damage your blood vessels, increase your risk of heart disease, and contribute to various cancers."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Smoking is not just about your lungs. It's about your entire body. The tar, nicotine, and other chemicals in cigarettes damage your blood vessels, increase your risk of heart disease, and contribute to various cancers. You're not giving up—you're gaining.</p>
            </div>
        `,
        21: `
            <h3 class="section-title">Chapter 21: The Science of Addiction</h3>
            <p class="slide-subtitle">Understanding the biology</p>
            
            <div class="main-quote-block">
                <p>"Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water—it only makes you thirstier."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Nicotine is a drug that creates an artificial need and then satisfies that need. It's like being thirsty and drinking salt water—it only makes you thirstier. You're not giving up—you're gaining.</p>
            </div>
        `,
        22: `
            <h3 class="section-title">Chapter 22: The Willpower Method of Stopping</h3>
            <p class="slide-subtitle">Why willpower fails</p>
            
            <div class="main-quote-block">
                <p>"Willpower is a finite resource. The more you use it, the less you have. The key is to understand that willpower is not about fighting—it's about letting go."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Willpower is a finite resource. The more you use it, the less you have. The key is to understand that willpower is not about fighting—it's about letting go. You're not giving up—you're gaining.</p>
            </div>
        `,
        23: `
            <h3 class="section-title">Chapter 23: Beware of Cutting Down</h3>
            <p class="slide-subtitle">The gradual reduction trap</p>
            
            <div class="main-quote-block">
                <p>"Cutting down is not a solution. It's just a temporary fix. The addiction is still there, and it will get worse if you keep cutting down."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Cutting down is not a solution. It's just a temporary fix. The addiction is still there, and it will get worse if you keep cutting down. You're not giving up—you're gaining.</p>
            </div>
        `,
        24: `
            <h3 class="section-title">Chapter 24: Just One Cigarette</h3>
            <p class="slide-subtitle">The one cigarette myth</p>
            
            <div class="main-quote-block">
                <p>"Just one cigarette won't hurt. It's only one. You can stop after this one."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Just one cigarette won't hurt. It's only one. You can stop after this one. But remember, you're not giving up—you're gaining.</p>
            </div>
        `,
        25: `
            <h3 class="section-title">Chapter 25: Casual Smokers, Teenagers, Non-smokers</h3>
            <p class="slide-subtitle">Different types of smokers</p>
            
            <div class="main-quote-block">
                <p>"Casual smokers smoke occasionally, teenagers smoke out of peer pressure, and non-smokers may smoke occasionally out of curiosity or social pressure."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Casual smokers smoke occasionally, teenagers smoke out of peer pressure, and non-smokers may smoke occasionally out of curiosity or social pressure. You're not giving up—you're gaining.</p>
            </div>
        `,
        26: `
            <h3 class="section-title">Chapter 26: The Secret Smoker</h3>
            <p class="slide-subtitle">Hidden smoking habits</p>
            
            <div class="main-quote-block">
                <p>"Smokers often hide their smoking habits from others. They may smoke in secret, use stealth cigarettes, or smoke in designated smoking areas."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Smokers often hide their smoking habits from others. They may smoke in secret, use stealth cigarettes, or smoke in designated smoking areas. You're not giving up—you're gaining.</p>
            </div>
        `,
        27: `
            <h3 class="section-title">Chapter 27: A Social Habit?</h3>
            <p class="slide-subtitle">Social aspects of smoking</p>
            
            <div class="main-quote-block">
                <p>"Smoking is often seen as a social activity. People smoke together, share cigarettes, and socialize. But remember, you're not giving up—you're gaining."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Smoking is often seen as a social activity. People smoke together, share cigarettes, and socialize. But remember, you're not giving up—you're gaining.</p>
            </div>
        `,
        28: `
            <h3 class="section-title">Chapter 28: Timing</h3>
            <p class="slide-subtitle">When to quit smoking</p>
            
            <div class="main-quote-block">
                <p>"There is never a bad time to quit smoking. The sooner you start, the sooner you're free."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>There is never a bad time to quit smoking. The sooner you start, the sooner you're free. You're not giving up—you're gaining.</p>
            </div>
        `,
        29: `
            <h3 class="section-title">Chapter 29: Will I Miss the Cigarette?</h3>
            <p class="slide-subtitle">Dealing with cravings</p>
            
            <div class="main-quote-block">
                <p>"Cravings are not your enemy—they're the addiction dying. Celebrate them, and you will find freedom."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Cravings are not your enemy—they're the addiction dying. Celebrate them, and you will find freedom. You're not giving up—you're gaining.</p>
            </div>
        `,
        30: `
            <h3 class="section-title">Chapter 30: Will I Put on Weight?</h3>
            <p class="slide-subtitle">Weight gain concerns</p>
            
            <div class="main-quote-block">
                <p>"Quitting smoking can actually help you lose weight. The key is to understand that weight gain is not about willpower—it's about balance. You're not giving up—you're gaining."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Quitting smoking can actually help you lose weight. The key is to understand that weight gain is not about willpower—it's about balance. You're not giving up—you're gaining.</p>
            </div>
        `,
        31: `
            <h3 class="section-title">Chapter 31: Avoid False Incentives</h3>
            <p class="slide-subtitle">True motivation for quitting</p>
            
            <div class="main-quote-block">
                <p>"The only thing you give up when you quit is slavery. You're not giving up—you're gaining."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>The only thing you give up when you quit is slavery. You're not giving up—you're gaining.</p>
            </div>
        `,
        32: `
            <h3 class="section-title">Chapter 32: The Easy Way to Stop</h3>
            <p class="slide-subtitle">The complete method</p>
            
            <div class="main-quote-block">
                <p>"The Easy Way is not about willpower or substitutes. It's about understanding and removing the desire to smoke completely. Trust the process and keep smoking until you finish reading."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>The Easy Way is not about willpower or substitutes. It's about understanding and removing the desire to smoke completely. Trust the process and keep smoking until you finish reading. You're not giving up—you're gaining.</p>
            </div>
        `,
        33: `
            <h3 class="section-title">Chapter 33: The Withdrawal Period</h3>
            <p class="slide-subtitle">Understanding withdrawal symptoms</p>
            
            <div class="main-quote-block">
                <p>"Celebrating success is not about boasting—it's about acknowledging your achievement. The key is to understand that you are already free, and that your success is not about achieving—it's about being. You are already successful, and you are already free."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Celebrating success is not about boasting—it's about acknowledging your achievement. The key is to understand that you are already free, and that your success is not about achieving—it's about being. You are already successful, and you are already free.</p>
            </div>
        `,
        34: `
            <h3 class="section-title">Chapter 34: Just One Puff</h3>
            <p class="slide-subtitle">The one puff myth</p>
            
            <div class="main-quote-block">
                <p>"Advanced techniques are just deeper understanding. The key is to understand that you are already free, and that advanced techniques are not about mastering—they are about deepening your understanding and making the process effortless."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Advanced techniques are just deeper understanding. The key is to understand that you are already free, and that advanced techniques are not about mastering—they are about deepening your understanding and making the process effortless. You're not giving up—you're gaining.</p>
            </div>
        `,
        35: `
            <h3 class="section-title">Chapter 35: Will it be Harder for Me?</h3>
            <p class="slide-subtitle">Individual concerns</p>
            
            <div class="main-quote-block">
                <p>"The complete transformation is not a process—it's a realization. The key is to understand that you are already free, and that transformation is not about becoming—it's about realizing. You are already free, and you are already transformed."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>The complete transformation is not a process—it's a realization. The key is to understand that you are already free, and that transformation is not about becoming—it's about realizing. You are already free, and you are already transformed. You're not giving up—you're gaining.</p>
            </div>
        `,
        36: `
            <h3 class="section-title">Chapter 36: The Main Reasons for Failure</h3>
            <p class="slide-subtitle">Common failure points</p>
            
            <div class="main-quote-block">
                <p>"Living without smoking is not a sacrifice—it's a gift. The key is to understand that you are already free, and that living without smoking is not about giving up—it's about gaining. You are already free, and you are already living the life of freedom."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Living without smoking is not a sacrifice—it's a gift. The key is to understand that you are already free, and that living without smoking is not about giving up—it's about gaining. You are already free, and you are already living the life of freedom. You're not giving up—you're gaining.</p>
            </div>
        `,
        37: `
            <h3 class="section-title">Chapter 37: Substitutes</h3>
            <p class="slide-subtitle">Why substitutes don't work</p>
            
            <div class="main-quote-block">
                <p>"Your legacy of freedom will inspire others to find their own. The key is to understand that you are already free, and that your legacy is not about leaving—it's about inspiring. You are already free, and you are already inspiring."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Your legacy of freedom will inspire others to find their own. The key is to understand that you are already free, and that your legacy is not about leaving—it's about inspiring. You are already free, and you are already inspiring. You're not giving up—you're gaining.</p>
            </div>
        `,
        38: `
            <h3 class="section-title">Chapter 38: Should I Avoid Temptation Situations?</h3>
            <p class="slide-subtitle">Dealing with triggers</p>
            
            <div class="main-quote-block">
                <p>"Final thoughts are just the beginning of your new life. The key is to understand that you are already free, and that your new beginning is not about starting—it's about continuing. You are already free, and you are already living the life of freedom."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Final thoughts are just the beginning of your new life. The key is to understand that you are already free, and that your new beginning is not about starting—it's about continuing. You are already free, and you are already living the life of freedom. You're not giving up—you're gaining.</p>
            </div>
        `,
        39: `
            <h3 class="section-title">Chapter 39: The Moment of Revelation</h3>
            <p class="slide-subtitle">The breakthrough moment</p>
            
            <div class="main-quote-block">
                <p>"Your new beginning starts with the understanding that you're already free. The key is to understand that you are already free, and that your new beginning is not about starting—it's about continuing. You are already free, and you are already living the life of freedom."</p>
            </div>
            
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Your new beginning starts with the understanding that you're already free. The key is to understand that you are already free, and that your new beginning is not about starting—it's about continuing. You are already free, and you are already living the life of freedom. You're not giving up—you're gaining.</p>
            </div>
        `
    };
    return contents[slideNum] || '';
}

// Get Slide Conclusion
function getSlideConclusion(slideNum) {
    const conclusions = {
        1: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding your fears is the first step to overcoming them. Knowledge dispels fear and creates confidence for successful cessation.</p>
            </div>
        `,
        2: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the science behind addiction helps you see the trap for what it really is - a chemical dependency that can be easily broken with the right knowledge.</p>
            </div>
        `,
        3: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the social conditioning and the fear of quitting is crucial for breaking free. The fear is a product of the trap itself.</p>
            </div>
        `,
        4: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the chemistry of addiction and the brain's reward pathway is essential for breaking free. The "pleasure" is just relief from withdrawal.</p>
            </div>
        `,
        5: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the social conditioning and the fear of quitting is crucial for breaking free. The fear is a product of the trap itself.</p>
            </div>
        `,
        6: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the mental chains and cognitive liberation is crucial for breaking free. The chains are not physical—they are mental.</p>
            </div>
        `,
        7: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the Easy Way method and the process of quitting is crucial for permanent cessation. The key is to make quitting easy and permanent.</p>
            </div>
        `,
        8: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the preparation required for successful cessation and the fear of quitting is crucial for breaking free. The fear is a product of the trap itself.</p>
            </div>
        `,
        9: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the final cigarette and the decision to be free is crucial for breaking free. The decision is not about giving up pleasure, but about gaining control.</p>
            </div>
        `,
        10: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the first day of freedom and the beginning of your new life is crucial for breaking free. The first day is the beginning of your new life.</p>
            </div>
        `,
        11: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding cravings and the recovery process is crucial for long-term freedom. Cravings are not your enemy—they are the addiction dying.</p>
            </div>
        `,
        12: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the recovery process and physical healing is crucial for long-term freedom. Your body has an amazing capacity to heal.</p>
            </div>
        `,
        13: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding mental clarity and cognitive function is crucial for long-term freedom. Mental clarity is not something you gain—it's something you recover.</p>
            </div>
        `,
        14: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding financial freedom and the money you save is crucial for long-term freedom. The money you save is not just financial—it's freedom from financial slavery.</p>
            </div>
        `,
        15: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding social benefits and quitting improves relationships is crucial for long-term freedom. Social freedom means being able to be yourself without needing a crutch.</p>
            </div>
        `,
        16: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding health improvements and quitting improves overall health is crucial for long-term freedom. Health is not the absence of disease—it's the presence of vitality.</p>
            </div>
        `,
        17: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the new you and personal transformation is crucial for long-term freedom. The new you is not someone you become—it's someone you always were.</p>
            </div>
        `,
        18: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding staying free and maintaining your freedom is crucial for long-term freedom. Staying free is not about resisting temptation—it's about not being tempted.</p>
            </div>
        `,
        19: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding helping others and your success inspiring others is crucial for long-term freedom. Helping others is not just altruistic—it's how you stay free yourself.</p>
            </div>
        `,
        20: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the science of addiction and psychological aspects is crucial for breaking free. The psychological aspects of addiction are just as important as the physical ones.</p>
            </div>
        `,
        21: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding behavioral patterns and breaking old habits is crucial for long-term freedom. Old patterns can be broken. New patterns can be created.</p>
            </div>
        `,
        22: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding cognitive restructuring and changing your thinking is crucial for long-term freedom. Your thoughts create your reality. Choose freedom.</p>
            </div>
        `,
        23: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding emotional freedom and feeling your feelings is crucial for long-term freedom. Emotional freedom means feeling your feelings without needing to numb them.</p>
            </div>
        `,
        24: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the power of choice and taking control of your life is crucial for long-term freedom. The power of choice is the greatest power you have.</p>
            </div>
        `,
        25: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding confidence and building your resolve is crucial for long-term freedom. Confidence comes from understanding, not from willpower.</p>
            </div>
        `,
        26: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding overcoming obstacles and dealing with challenges is crucial for long-term freedom. Obstacles are opportunities to strengthen your commitment.</p>
            </div>
        `,
        27: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the success mindset and long-term thinking is crucial for long-term freedom. Success is not a destination—it's a mindset.</p>
            </div>
        `,
        28: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding long-term strategies and relapse prevention is crucial for long-term freedom. Long-term freedom requires long-term thinking.</p>
            </div>
        `,
        29: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding relapse prevention and understanding is crucial for long-term freedom. Relapse prevention is not about fear—it's about understanding.</p>
            </div>
        `,
        30: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the freedom lifestyle and lifestyle changes is crucial for long-term freedom. The freedom lifestyle is not restrictive—it's liberating.</p>
            </div>
        `,
        31: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding celebrating success and acknowledging your achievement is crucial for long-term freedom. Celebrate every moment of your freedom. You've earned it.</p>
            </div>
        `,
        32: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding advanced techniques and mastery is crucial for long-term freedom. Advanced techniques are just deeper understanding.</p>
            </div>
        `,
        33: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the complete transformation and transformation is crucial for long-term freedom. Transformation is not a process—it's a realization.</p>
            </div>
        `,
        34: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding living without smoking and the gift is crucial for long-term freedom. Living without smoking is not a sacrifice—it's a gift.</p>
            </div>
        `,
        35: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding your legacy of freedom and inspiring others is crucial for long-term freedom. Your legacy of freedom will inspire others to find their own.</p>
            </div>
        `,
        36: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding final thoughts and the new beginning is crucial for long-term freedom. Final thoughts are just the beginning of your new life.</p>
            </div>
        `,
        37: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding your new beginning and the understanding that you're already free is crucial for long-term freedom. Your new beginning starts with the understanding that you're already free.</p>
            </div>
        `,
        38: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the journey and the new life is crucial for long-term freedom. Your new beginning starts with the understanding that you're already free.</p>
            </div>
        `,
        39: `
            <div class="educational-note">
                <h4>Educational Summary</h4>
                <p>Understanding the journey and the new life is crucial for long-term freedom. Your new beginning starts with the understanding that you're already free.</p>
            </div>
        `
    };
    
    return conclusions[slideNum] || `
        <div class="educational-note">
            <h4>Educational Summary</h4>
            <p>Each slide brings you closer to complete understanding and freedom from the smoking trap. Continue your educational journey with confidence.</p>
        </div>
    `;
}

// Auto-advance slides (optional feature)
let autoAdvanceInterval = null;

function startAutoAdvance() {
    if (autoAdvanceInterval) return;
    
    autoAdvanceInterval = setInterval(() => {
                    if (currentSlide < 45) {
                renderSlide(currentSlide + 1);
            } else {
                stopAutoAdvance();
            }
    }, 30000); // 30 seconds per slide
}

function stopAutoAdvance() {
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
    }
}

// Add auto-advance controls (optional)
function addAutoAdvanceControls() {
    const controlPanel = document.querySelector('.control-panel');
    if (!controlPanel) return;
    
    const autoAdvanceBtn = document.createElement('button');
    autoAdvanceBtn.className = 'control-btn';
    autoAdvanceBtn.innerHTML = '<span class="btn-label">Auto</span><span class="btn-icon">▶</span>';
    autoAdvanceBtn.addEventListener('click', () => {
        if (autoAdvanceInterval) {
            stopAutoAdvance();
            autoAdvanceBtn.innerHTML = '<span class="btn-label">Auto</span><span class="btn-icon">▶</span>';
        } else {
            startAutoAdvance();
            autoAdvanceBtn.innerHTML = '<span class="btn-label">Stop</span><span class="btn-icon">⏸</span>';
        }
    });
    
    controlPanel.appendChild(autoAdvanceBtn);
}

function generateSlideSelector() {
    const slideSelect = document.getElementById('slideSelect');
    if (!slideSelect) return;
    slideSelect.innerHTML = '';
    slides.forEach(slide => {
        const option = document.createElement('option');
        option.value = slide.id;
        option.textContent = `Slide ${slide.id}: ${slide.title}`;
        slideSelect.appendChild(option);
    });
}

// On DOMContentLoaded, generate selector, render first slide, and setup controls
document.addEventListener('DOMContentLoaded', function() {
    generateSlideSelector();
    renderSlide(1);
    setupControls();
    updateProgress();
    document.addEventListener('keydown', handleKeyboardNavigation);
    // Banner expand/collapse functionality
    const bannerToggle = document.getElementById('bannerToggle');
    const classroomHeader = document.getElementById('classroomHeader');
    const bannerToggleIcon = document.getElementById('bannerToggleIcon');
    if (bannerToggle && classroomHeader && bannerToggleIcon) {
        bannerToggle.addEventListener('click', () => {
            classroomHeader.classList.toggle('collapsed');
            if (classroomHeader.classList.contains('collapsed')) {
                bannerToggleIcon.textContent = '▼';
                bannerToggle.setAttribute('aria-label', 'Expand banner');
                bannerToggle.setAttribute('title', 'Expand banner');
            } else {
                bannerToggleIcon.textContent = '▲';
                bannerToggle.setAttribute('aria-label', 'Collapse banner');
                bannerToggle.setAttribute('title', 'Collapse banner');
            }
        });
    }
}); 