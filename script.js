// Store user's quiz answers
let quizAnswers = {
    style: '',
    bedrooms: '',
    priority: '',
    colours: ''
};

let currentQuestion = 1;

// ===== SMART AI SIMULATION ENGINE =====
// This simulates AI responses without API costs

// Design knowledge base
const designKnowledge = {
    styles: {
        modern: {
            description: "clean lines, minimalist aesthetics, and contemporary elements",
            materials: ["glass", "steel", "polished concrete", "smooth wood"],
            colors: ["monochrome palettes", "bold accent colors", "neutral tones with pops of color"],
            furniture: ["sleek low-profile pieces", "geometric shapes", "multi-functional furniture"],
            atmosphere: "sophisticated and uncluttered"
        },
        traditional: {
            description: "timeless elegance, classic details, and warm comfort",
            materials: ["rich hardwoods", "natural stone", "ornate moldings", "plush fabrics"],
            colors: ["warm earth tones", "deep jewel tones", "cream and gold accents"],
            furniture: ["carved wood pieces", "upholstered chairs", "antique-inspired items"],
            atmosphere: "cozy and inviting"
        },
        industrial: {
            description: "raw urban aesthetics, exposed elements, and warehouse-inspired design",
            materials: ["exposed brick", "metal piping", "reclaimed wood", "concrete"],
            colors: ["neutral grays", "rust orange", "deep blacks", "raw metal tones"],
            furniture: ["metal frame pieces", "weathered wood tables", "vintage factory items"],
            atmosphere: "edgy and authentic"
        },
        rustic: {
            description: "natural beauty, organic textures, and countryside charm",
            materials: ["reclaimed barn wood", "natural stone", "wrought iron", "distressed finishes"],
            colors: ["warm browns", "forest greens", "cream and beige", "sunset oranges"],
            furniture: ["handcrafted wood pieces", "cozy textiles", "nature-inspired decor"],
            atmosphere: "warm and grounding"
        }
    },
    
    priorities: {
        space: {
            tips: ["open floor plans", "built-in storage solutions", "multifunctional furniture", "vertical storage"],
            benefits: "maximizes every square foot"
        },
        light: {
            tips: ["large windows", "skylights", "light color palettes", "strategic mirror placement"],
            benefits: "creates an airy, energizing environment"
        },
        outdoor: {
            tips: ["sliding glass doors", "indoor-outdoor flow", "covered patios", "garden views"],
            benefits: "connects you with nature"
        },
        tech: {
            tips: ["smart lighting systems", "automated climate control", "integrated sound", "hidden charging stations"],
            benefits: "enhances convenience and efficiency"
        }
    },
    
    roomSpecifics: {
        living: {
            modern: "Consider a modular sectional sofa in neutral tones, paired with a glass coffee table and statement lighting. Add floating shelves for a clean, organized look.",
            traditional: "A plush tufted sofa anchors the space, complemented by matching armchairs and a classic wood coffee table. Layer with oriental rugs and table lamps.",
            industrial: "Opt for a leather sofa with metal legs, paired with reclaimed wood side tables and Edison bulb lighting. Exposed ductwork adds character.",
            rustic: "Feature a deep, comfortable sofa in natural fabrics, wooden beam accents, and a stone fireplace. Add woven baskets and plants for warmth."
        },
        bedroom: {
            modern: "Choose a platform bed with built-in storage, minimalist nightstands, and recessed lighting. Keep surfaces clear for a serene atmosphere.",
            traditional: "A four-poster bed with quality linens creates a luxurious retreat. Add bedside tables with elegant lamps and a cozy reading chair.",
            industrial: "An iron bed frame pairs perfectly with metal nightstands and exposed brick walls. Add vintage trunks for storage and character.",
            rustic: "A solid wood bed frame with natural linens creates a peaceful sanctuary. Include handmade quilts and nature-inspired artwork."
        },
        kitchen: {
            modern: "Sleek flat-panel cabinets in matte finish, quartz countertops, and stainless appliances create a chef's dream. Include a waterfall island.",
            traditional: "Shaker-style cabinets with classic hardware, granite counters, and a farmhouse sink blend timeless appeal with functionality.",
            industrial: "Open shelving with metal brackets, butcher block counters, and commercial-grade appliances give a professional feel.",
            rustic: "Natural wood cabinets, soapstone counters, and a vintage-style range create a warm, inviting cooking space."
        },
        bathroom: {
            modern: "A floating vanity with vessel sinks, frameless glass shower, and large-format tiles create a spa-like retreat.",
            traditional: "Classic white subway tiles, a pedestal sink, and polished fixtures offer timeless elegance. Add a clawfoot tub if space allows.",
            industrial: "Concrete countertops, exposed plumbing fixtures, and metal-framed mirrors create an urban sanctuary.",
            rustic: "Stone tiles, wooden vanity, and natural elements bring the outdoors in for a peaceful escape."
        }
    },
    
    colorAdvice: {
        neutral: "creates a calming, versatile backdrop that allows furniture and art to shine",
        bold: "energizes the space and showcases your personality through vibrant accent walls",
        dark: "adds drama and sophistication, perfect for creating intimate, cozy atmospheres",
        pastel: "brings soft, gentle energy that feels fresh and optimistic"
    }
};

// Random helpful phrases for variety
const openingPhrases = [
    "Based on your preferences, here's what we envision:",
    "Your dream home is taking shape! Here's our suggestion:",
    "We've analyzed your style - here's the perfect design:",
    "Exciting news! Your personalized design includes:",
    "Let's bring your vision to life with this approach:"
];

const closingPhrases = [
    "This creates a space that truly reflects your lifestyle!",
    "The result? A home you'll love coming back to every day.",
    "Together, these elements create your perfect sanctuary.",
    "This combination will make your house feel like home.",
    "Your space will be both beautiful and functional!"
];

// Main function: Generate personalized design suggestion
async function generateSmartDesign(preferences) {
    // Simulate API delay (teaches async/await concepts)
    const thinkingTime = 500 + Math.random() * 1500;
    await new Promise(resolve => setTimeout(resolve, thinkingTime));
    
    const style = preferences.style || 'modern';
    const priority = preferences.priority || 'space';
    const colors = preferences.colors || 'neutral';
    const bedrooms = preferences.bedrooms || '3-4';
    
    // Get design knowledge
    const styleInfo = designKnowledge.styles[style];
    const priorityInfo = designKnowledge.priorities[priority];
    const colorInfo = designKnowledge.colorAdvice[colors];
    
    // Pick random phrases for variety
    const opening = openingPhrases[Math.floor(Math.random() * openingPhrases.length)];
    const closing = closingPhrases[Math.floor(Math.random() * closingPhrases.length)];
    
    // Pick random elements from arrays
    const material = styleInfo.materials[Math.floor(Math.random() * styleInfo.materials.length)];
    const colorPalette = styleInfo.colors[Math.floor(Math.random() * styleInfo.colors.length)];
    const furniture = styleInfo.furniture[Math.floor(Math.random() * styleInfo.furniture.length)];
    const tip = priorityInfo.tips[Math.floor(Math.random() * priorityInfo.tips.length)];
    
    // Build the suggestion
    const suggestion = `${opening}

A ${bedrooms} bedroom home featuring ${styleInfo.description}. We'll incorporate ${material} with ${colorPalette}, creating a ${styleInfo.atmosphere} environment.

Key features include ${furniture} and ${tip}, which ${priorityInfo.benefits}. Your ${colors} color palette ${colorInfo}.

${closing}`;

    // ADD THIS CONDITIONAL LOGIC HERE (before return)
    let finalSuggestion = suggestion;
    
    if (preferences.bedrooms === '5+') {
        finalSuggestion += "\n\nWith this many bedrooms, consider adding a home office or gym!";
    }
    
    if (preferences.priority === 'tech') {
        finalSuggestion += "\n\nDon't forget to plan for plenty of power outlets and network ports!";
    }
    
    return finalSuggestion;  // CHANGE: return finalSuggestion instead of suggestion
}

// Function: Generate room-specific suggestions
async function generateRoomSuggestion(roomType, preferences) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const style = preferences.style || 'modern';
    
    // Get room-specific advice
    const roomAdvice = designKnowledge.roomSpecifics[roomType];
    const suggestion = roomAdvice[style];
    
    // Add some variety with random tips
    const styleInfo = designKnowledge.styles[style];
    const extraTip = styleInfo.furniture[Math.floor(Math.random() * styleInfo.furniture.length)];
    
    return `${suggestion} Don't forget to incorporate ${extraTip} for added style!`;
}

// Function: Generate color combination advice
async function generateColorAdvice(preferences) {
    // Simulate API delay with random thinking time
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const style = preferences.style || 'modern';
    const colors = preferences.colors || 'neutral';
    
    const styleInfo = designKnowledge.styles[style];
    const colorPalette = styleInfo.colors[Math.floor(Math.random() * styleInfo.colors.length)];
    
    return `For your ${style} style, we recommend ${colorPalette}. This palette complements your design beautifully and creates the perfect atmosphere.`;
}

console.log('✨ Smart AI Engine loaded and ready!');

// Load saved quiz data when page loads
function loadSavedQuizData() {
    const savedData = localStorage.getItem('dreamHomeQuiz');
    if (savedData) {
        quizAnswers = JSON.parse(savedData);
        console.log('Loaded previous quiz answers:', quizAnswers);
        return true;
    }
    return false;
}

// Check if user has taken quiz before
const hasCompletedQuiz = loadSavedQuizData();

// Get all the elements we need
const quizSection = document.getElementById('quizSection');
const takeQuizBtn = document.querySelectorAll('.button-card button')[1]; // Second button
const closeQuizBtn = document.getElementById('closeQuiz');
const optionButtons = document.querySelectorAll('.option-btn');
const restartQuizBtn = document.getElementById('restartQuiz');
const startDesigningBtn = document.getElementById('startDesigning');

// Show quiz when "Take Quiz" button is clicked
takeQuizBtn.addEventListener('click', function() {
    quizSection.style.display = 'flex';
    resetQuiz();
});

// Close quiz when X button is clicked
closeQuizBtn.addEventListener('click', function() {
    quizSection.style.display = 'none';
});

// Handle option button clicks
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.getAttribute('data-answer');
        
        // Store the answer
        if (currentQuestion === 1) {
            quizAnswers.style = answer;
        } else if (currentQuestion === 2) {
            quizAnswers.bedrooms = answer;
        } else if (currentQuestion === 3) {
            quizAnswers.priority = answer;
        } else if (currentQuestion === 4) {
            quizAnswers.colors = answer;  // ADD THIS
        }
        
        console.log('Current quiz answers;', quizAnswers);
        console.log('Just answerd question', currentQuestion, 'with:', answer);
        
        // Move to next question or show results
        if (currentQuestion < 4) {  // CHANGE 3 TO 4
            goToNextQuestion();
        } else {
            showResults();
        }
    });
});

// Go to next question
function goToNextQuestion() {
    // Hide current question
    document.getElementById('question' + currentQuestion).classList.remove('active');
    
    // Show next question
    currentQuestion++;
    document.getElementById('question' + currentQuestion).classList.add('active');
}

// Show quiz results with Smart AI
async function showResults() {
    // Hide all questions
    document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Save quiz answers to localStorage
    localStorage.setItem('dreamHomeQuiz', JSON.stringify(quizAnswers));
    console.log('Quiz answers saved!', quizAnswers);
    
    // Show result section with loading message
    const resultSection = document.getElementById('quizResult');
    const resultTextElement = document.getElementById('resultText');
    
    resultTextElement.textContent = '✨ Our design AI is analyzing your preferences... Please wait!';
    resultSection.classList.add('active');
    
    // Generate smart personalized suggestion
    const smartSuggestion = await generateSmartDesign(quizAnswers);
    
    // Display the suggestion with animation
    resultTextElement.style.whiteSpace = 'pre-line'; // Preserve line breaks
    resultTextElement.textContent = smartSuggestion;
    
    console.log('Smart AI generated:', smartSuggestion);
}

// Generate personalized message based on answers
function generateResultMessage() {
    const styleDescriptions = {
        modern: "sleek, minimalist design with clean lines and contemporary finishes",
        traditional: "warm, classic design with timeless appeal and cozy interiors",
        industrial: "urban loft-style with exposed brick, metal accents, and open spaces",
        rustic: "natural, cozy design with wood elements and organic materials"
    };
    
    const bedroomText = {
        '1-2': "a compact 1-2 bedroom layout perfect for individuals or couples",
        '3-4': "a spacious 3-4 bedroom design ideal for growing families",
        '5+': "a luxurious 5+ bedroom estate with room for everyone"
    };
    
    const priorityText = {
        space: "maximizing every square foot with smart storage and open floor plans",
        light: "flooding your home with natural sunlight through large windows and skylights",
        outdoor: "seamlessly connecting indoor and outdoor living spaces",
        tech: "integrating cutting-edge smart home technology throughout"
    };
    
    // ADD THIS NEW SECTION
    const colorText = {
        neutral: "featuring a calming neutral and earthy color palette",
        bold: "accented with bold and vibrant colors that energize the space",
        dark: "styled with sophisticated dark and moody tones",
        pastel: "decorated with soft pastel hues for a gentle atmosphere"
    };
    
    const style = styleDescriptions[quizAnswers.style] || "beautiful";
    const bedrooms = bedroomText[quizAnswers.bedrooms] || "multiple bedrooms";
    const priority = priorityText[quizAnswers.priority] || "your priorities";
    const colors = colorText[quizAnswers.colors] || "your chosen colors";  // ADD THIS
    
    // UPDATE THE RETURN STATEMENT
    return `✨ Perfect Match Found! ✨\n\nWe recommend a ${style} home with ${bedrooms}, while ${priority}, all ${colors}. This personalized design will transform your vision into reality and create the dream home you've always wanted!`;
}

// Restart quiz
restartQuizBtn.addEventListener('click', function() {
    resetQuiz();
});

// Reset quiz to beginning
function resetQuiz() {
    currentQuestion = 1;
    quizAnswers = { style: '', bedrooms: '', priority: '', colors: '' };  // ADD colors
    
    // Hide result
    document.getElementById('quizResult').classList.remove('active');
    
    // Hide all questions
    document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('active');
    });
    
    // Show first question
    document.getElementById('question1').classList.add('active');
}

// Start designing button (placeholder for now)
startDesigningBtn.addEventListener('click', function() {
    alert('Design interface coming in Week 4! 🎨');
    quizSection.style.display = 'none';
});

// Log to console when page loads
console.log('Dream Home Designer App Loaded! 🏠');
console.log('Click "Take Quiz" to test the interactive quiz system');

// Show welcome back message if user has completed quiz
if (hasCompletedQuiz) {
    const returningUserSection = document.getElementById('returningUser');
    const summaryDiv = document.getElementById('savedProfileSummary');
    
    // Generate summary
    const summary = `
        <strong>Your Design Style:</strong> ${quizAnswers.style || 'Not set'}<br>
        <strong>Bedrooms:</strong> ${quizAnswers.bedrooms || 'Not set'}<br>
        <strong>Priority:</strong> ${quizAnswers.priority || 'Not set'}<br>
        <strong>Color Palette:</strong> ${quizAnswers.colors || 'Not set'}
    `;
    
    summaryDiv.innerHTML = summary;
    returningUserSection.style.display = 'block';
}

// Retake quiz button
const retakeQuizBtn = document.getElementById('retakeQuiz');
if (retakeQuizBtn) {
    retakeQuizBtn.addEventListener('click', function() {
        // Clear saved data
        localStorage.removeItem('dreamHomeQuiz');
        quizAnswers = { style: '', bedrooms: '', priority: '', colors: '' };
        
        // Hide returning user section
        document.getElementById('returningUser').style.display = 'none';
        
        // Show quiz
        quizSection.style.display = 'flex';
        resetQuiz();
    });
}

// Continue designing button
const continueDesigningBtn = document.getElementById('continueDesigning');
if (continueDesigningBtn) {
    continueDesigningBtn.addEventListener('click', function() {
        // Scroll to design section (we'll build this next!)
        document.getElementById('designCanvas').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== DESIGN CANVAS FUNCTIONALITY =====

// Get design elements
const roomTypeSelect = document.getElementById('roomType');
const wallColorInput = document.getElementById('wallColor');
const floorTypeSelect = document.getElementById('floorType');
const backWall = document.getElementById('backWall');
const floor = document.getElementById('floor');
const saveDesignBtn = document.getElementById('saveDesign');
const resetDesignBtn = document.getElementById('resetDesign');

// Current design state
let currentDesign = {
    roomType: 'living',
    wallColor: '#f5f5f5',
    floorType: 'wood',
    roomSize: 500  // ADD THIS
};

// Load saved design if exists
function loadSavedDesign() {
    const saved = localStorage.getItem('dreamHomeDesign');
    if (saved) {
        currentDesign = JSON.parse(saved);
        applyDesign();
        console.log('Loaded saved design:', currentDesign);
    }
}

// Apply design to canvas
function applyDesign() {
    // Update controls to match
    roomTypeSelect.value = currentDesign.roomType;
    wallColorInput.value = currentDesign.wallColor;
    floorTypeSelect.value = currentDesign.floorType;

    if (currentDesign.roomSize) {
        roomSizeSlider.value = currentDesign.roomSize;
        roomCanvas.style.height = currentDesign.roomSize + 'px';
        
        // Update label
        if (currentDesign.roomSize <= 400) {
            roomSizeLabel.textContent = 'Small';
        } else if (currentDesign.roomSize <= 550) {
            roomSizeLabel.textContent = 'Medium';
        } else {
            roomSizeLabel.textContent = 'Large';
        }
    }
    
    // Apply wall color
    backWall.style.background = currentDesign.wallColor;
    
    // Apply floor type
    const floorStyles = {
        wood: {
            background: '#d4a574',
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(0,0,0,0.1) 100px, rgba(0,0,0,0.1) 102px)'
        },
        tile: {
            background: '#e8e8e8',
            backgroundImage: 'repeating-linear-gradient(0deg, #ddd, #ddd 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #ddd, #ddd 1px, transparent 1px, transparent 50px)'
        },
        carpet: {
            background: '#c9a88a',
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)'
        },
        concrete: {
            background: '#95a5a6',
            backgroundImage: 'none'
        }
    };
    
    const floorStyle = floorStyles[currentDesign.floorType];
    floor.style.background = floorStyle.background;
    floor.style.backgroundImage = floorStyle.backgroundImage;

    // Show correct furniture set for room type
    document.querySelectorAll('.furniture-set').forEach(set => {
        set.classList.remove('active');
    });
    
    const selectedSet = document.querySelector(`.furniture-set.${currentDesign.roomType}-room`);
    if (selectedSet) {
        selectedSet.classList.add('active');
    }
    
    // Enable dragging and load positions
    enableFurnitureDragging();
    loadFurniturePositions();
}

// Event listeners for design changes
// Room type change - switch furniture
roomTypeSelect.addEventListener('change', function() {
    currentDesign.roomType = this.value;
    
    // Hide all furniture sets
    document.querySelectorAll('.furniture-set').forEach(set => {
        set.classList.remove('active');
    });
    
    // Show furniture for selected room type
    const selectedSet = document.querySelector(`.furniture-set.${this.value}-room`);
    if (selectedSet) {
        selectedSet.classList.add('active');
    }
    
    // Re-enable dragging for new furniture items
    enableFurnitureDragging();
    
    // UPDATE 3D VIEW IF IT'S OPEN
    if (isViewer3DActive) {
        create3DRoom();
        console.log('🔄 3D room updated to:', this.value);
    }
    
    console.log('Room type changed to:', this.value);
});

wallColorInput.addEventListener('input', function() {
    currentDesign.wallColor = this.value;
    backWall.style.background = this.value;

    if (isViewer3DActive) {
        create3DRoom();
        console.log('🎨 3D walls updated to:', this.value);
    }
});

floorTypeSelect.addEventListener('change', function() {
    currentDesign.floorType = this.value;
    applyDesign();

    if (isViewer3DActive) {
        create3DRoom();
        console.log('🏠 3D floor updated to:', this.value);
    }
});

// Room size control
const roomSizeSlider = document.getElementById('roomSize');
const roomSizeLabel = document.getElementById('roomSizeValue');
const roomCanvas = document.getElementById('roomCanvas');

roomSizeSlider.addEventListener('input', function() {
    const size = parseInt(this.value);
    currentDesign.roomSize = size;
    
    // Update canvas height
    roomCanvas.style.height = size + 'px';
    
    // Update label
    if (size <= 400) {
        roomSizeLabel.textContent = 'Small';
    } else if (size <= 550) {
        roomSizeLabel.textContent = 'Medium';
    } else {
        roomSizeLabel.textContent = 'Large';
    }
    
    console.log('Room size changed to:', size);
});

// Color Palette functionality
const paletteButtons = document.querySelectorAll('.palette-btn');

paletteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get wall and floor values from button
        const wallColor = this.getAttribute('data-wall');
        const floorType = this.getAttribute('data-floor');
        
        // Update current design
        currentDesign.wallColor = wallColor;
        currentDesign.floorType = floorType;
        
        // Apply the design
        wallColorInput.value = wallColor;
        floorTypeSelect.value = floorType;
        applyDesign();
        
        // UPDATE 3D VIEW IF IT'S OPEN
        if (isViewer3DActive) {
            create3DRoom();
            console.log('🎨 3D view updated with palette');
        }
        
        // Visual feedback - highlight selected palette
        paletteButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        console.log('Applied palette:', wallColor, floorType);
    });
});

// Save design
saveDesignBtn.addEventListener('click', function() {
    localStorage.setItem('dreamHomeDesign', JSON.stringify(currentDesign));
    alert('✅ Your design has been saved! It will be here when you return.');
    console.log('Design saved:', currentDesign);
});

// Reset design
resetDesignBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to reset your design?')) {
        currentDesign = {
            roomType: 'living',
            wallColor: '#f5f5f5',
            floorType: 'wood',
            roomSize: 500  // ADD THIS
        };
        applyDesign();
        localStorage.removeItem('dreamHomeDesign');
        alert('🔄 Design reset to default!');
    }
});

// Download design as image
const downloadDesignBtn = document.getElementById('downloadDesign');

downloadDesignBtn.addEventListener('click', function() {
    const canvas = document.getElementById('roomCanvas');
    
    // Show loading message
    downloadDesignBtn.textContent = '⏳ Generating...';
    downloadDesignBtn.disabled = true;
    
    // Use html2canvas to capture the room
    html2canvas(canvas, {
        backgroundColor: '#e0e0e0',
        scale: 2, // Higher quality
        logging: false
    }).then(function(canvas) {
        // Convert to image and download
        const link = document.createElement('a');
        link.download = 'my-dream-home-design.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Reset button
        downloadDesignBtn.textContent = '📸 Download as Image';
        downloadDesignBtn.disabled = false;
        
        console.log('✅ Design downloaded as image!');
    }).catch(function(error) {
        console.error('Download failed:', error);
        alert('Failed to download. Please try again.');
        downloadDesignBtn.textContent = '📸 Download as Image';
        downloadDesignBtn.disabled = false;
    });
});

// ===== FURNITURE DRAGGING FUNCTIONALITY (IMPROVED WITH TOUCH) =====

let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

// Function to enable dragging on furniture items
function enableFurnitureDragging() {
    const furnitureItems = document.querySelectorAll('.furniture-item');
    
    furnitureItems.forEach(item => {
        // Remove old listeners to avoid duplicates
        item.replaceWith(item.cloneNode(true));
    });
    
    // Re-query after cloning
    const newFurnitureItems = document.querySelectorAll('.furniture-item');
    
    newFurnitureItems.forEach(item => {
        // MOUSE EVENTS (Desktop)
        item.addEventListener('mousedown', handleDragStart);
        
        // TOUCH EVENTS (Mobile)
        item.addEventListener('touchstart', handleDragStart, { passive: false });
    });
}

// Handle drag start (works for both mouse and touch)
function handleDragStart(e) {
    e.preventDefault(); // Prevent scrolling on touch
    
    draggedElement = this;
    
    const rect = this.getBoundingClientRect();
    const canvasRect = roomCanvas.getBoundingClientRect();
    
    // Get position from mouse or touch
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    
    // Visual feedback
    this.style.cursor = 'grabbing';
    this.style.opacity = '0.7';
    this.style.zIndex = '1000';
    
    console.log('Started dragging:', this.textContent.trim());
}

// Mouse move - drag the element (Desktop)
document.addEventListener('mousemove', handleDragMove);

// Touch move - drag the element (Mobile)
document.addEventListener('touchmove', handleDragMove, { passive: false });

function handleDragMove(e) {
    if (!draggedElement) return;
    
    e.preventDefault(); // Prevent scrolling while dragging
    
    const canvasRect = roomCanvas.getBoundingClientRect();
    
    // Get position from mouse or touch
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    
    let newX = clientX - canvasRect.left - offsetX;
    let newY = clientY - canvasRect.top - offsetY;
    
    const itemWidth = draggedElement.offsetWidth;
    const itemHeight = draggedElement.offsetHeight;
    
    // Keep furniture inside canvas bounds
    newX = Math.max(0, Math.min(newX, canvasRect.width - itemWidth));
    newY = Math.max(0, Math.min(newY, canvasRect.height - itemHeight));
    
    // Convert to percentage for responsive design
    const percentX = (newX / canvasRect.width) * 100;
    const percentY = (newY / canvasRect.height) * 100;
    
    draggedElement.style.left = percentX + '%';
    draggedElement.style.top = percentY + '%';
}

// Mouse up - stop dragging (Desktop)
document.addEventListener('mouseup', handleDragEnd);

// Touch end - stop dragging (Mobile)
document.addEventListener('touchend', handleDragEnd);

function handleDragEnd() {
    if (draggedElement) {
        // Reset visual feedback
        draggedElement.style.cursor = 'move';
        draggedElement.style.opacity = '1';
        draggedElement.style.zIndex = 'auto';
        
        console.log('Stopped dragging at:', draggedElement.style.left, draggedElement.style.top);
        
        // Save furniture positions
        saveFurniturePositions();
        
        draggedElement = null;
    }
}

// Save furniture positions per room type
function saveFurniturePositions() {
    const roomType = currentDesign.roomType;
    const activeSet = document.querySelector('.furniture-set.active');
    
    if (!activeSet) return;
    
    const positions = {};
    const items = activeSet.querySelectorAll('.furniture-item');
    
    items.forEach((item, index) => {
        positions[`item_${index}`] = {
            left: item.style.left,
            top: item.style.top
        };
    });
    
    // Save per room type
    const allPositions = JSON.parse(localStorage.getItem('furniturePositions') || '{}');
    allPositions[roomType] = positions;
    localStorage.setItem('furniturePositions', JSON.stringify(allPositions));
    
    console.log(`Furniture positions saved for ${roomType}!`);
}

// Load furniture positions per room type
function loadFurniturePositions() {
    const roomType = currentDesign.roomType;
    const saved = localStorage.getItem('furniturePositions');
    
    if (!saved) return;
    
    const allPositions = JSON.parse(saved);
    const roomPositions = allPositions[roomType];
    
    if (!roomPositions) return;
    
    const activeSet = document.querySelector('.furniture-set.active');
    if (!activeSet) return;
    
    const items = activeSet.querySelectorAll('.furniture-item');
    
    items.forEach((item, index) => {
        const pos = roomPositions[`item_${index}`];
        if (pos) {
            item.style.left = pos.left;
            item.style.top = pos.top;
        }
    });
    
    console.log(`Furniture positions loaded for ${roomType}!`);
}

// Initialize dragging on page load
enableFurnitureDragging();
loadFurniturePositions();

// ===== SMART AI DESIGN SUGGESTIONS =====

const getAISuggestionBtn = document.getElementById('getAISuggestion');
const aiSuggestionsBox = document.getElementById('aiSuggestionsBox');
const aiSuggestionText = document.getElementById('aiSuggestionText');

if (getAISuggestionBtn) {
    getAISuggestionBtn.addEventListener('click', async function() {
        // Check if user has completed quiz
        if (!quizAnswers.style || !quizAnswers.bedrooms) {
            alert('Please complete the quiz first to get personalized suggestions!');
            quizSection.style.display = 'flex';
            resetQuiz();
            return;
        }
        
        // Show loading state
        getAISuggestionBtn.textContent = '🤖 AI is thinking...';
        getAISuggestionBtn.disabled = true;
        aiSuggestionsBox.style.display = 'block';
        aiSuggestionText.textContent = 'Analyzing your preferences and generating suggestions...';
        
        try {
            // Generate smart suggestion for current room type
            const suggestion = await generateRoomSuggestion(currentDesign.roomType, quizAnswers);
            
            // Display with typing effect (optional - makes it feel more AI-like)
            aiSuggestionText.textContent = '';
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < suggestion.length) {
                    aiSuggestionText.textContent += suggestion.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 20); // 20ms per character = smooth typing effect
            
            console.log('Smart AI room suggestion:', suggestion);
            
        } catch (error) {
            aiSuggestionText.textContent = 'Oops! Something went wrong. Please try again!';
            console.error('Error:', error);
        } finally {
            // Reset button after a delay
            setTimeout(() => {
                getAISuggestionBtn.textContent = '🤖 Get AI Design Suggestions';
                getAISuggestionBtn.disabled = false;
            }, 1500);
        }
    });
}

// ===== THREE.JS 3D VISUALIZATION =====

let scene, camera, renderer, controls;
let room3D = null;
let isViewer3DActive = false;

// Initialize Three.js scene
function init3DScene() {
    const container = document.getElementById('threejs-container');

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    // Create camera
    camera = new THREE.PerspectiveCamera( 
        75,                                             // Field of view
        800 / 600, // Aspect ratio
        0.1,                                            // Near clipping
        1000                                            // Far clipping
    );
    camera.position.set(0, 8, 15);  // Further back and higher
    camera.lookAt(0, 2, 0);         // Look at room center

    // Creat renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    const width = 800;
    const height = 600;
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add lights (Initialize with Day mode)
    setLightingMode('day');

    // Add basic mouse controls (orbit)
    addOrbitControls();
    console.log('✨ 3D Scene initialized!');
}

// Store light references
let ambientLight, directionalLight, sunsetLight;

// Function to set lighting mode
function setLightingMode(mode) {
    if (!scene) return;
    
    // Remove old lights
    if (ambientLight) scene.remove(ambientLight);
    if (directionalLight) scene.remove(directionalLight);
    if (sunsetLight) scene.remove(sunsetLight);
    
    if (mode === 'day') {
        // Bright daylight
        scene.background = new THREE.Color(0x87ceeb); // Sky blue
        
        ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        
        directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(10, 20, 10);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        console.log('☀️ Day mode activated');
        
    } else if (mode === 'night') {
        // Dark night with moon
        scene.background = new THREE.Color(0x1a1a2e); // Dark blue/black
        
        ambientLight = new THREE.AmbientLight(0x4a5a8a, 0.3);
        scene.add(ambientLight);
        
        // Moonlight (blueish)
        directionalLight = new THREE.DirectionalLight(0x9db4ff, 0.5);
        directionalLight.position.set(-10, 15, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        console.log('🌙 Night mode activated');
        
    } else if (mode === 'sunset') {
        // Warm sunset/golden hour
        scene.background = new THREE.Color(0xff7e5f); // Orange/pink sky
        
        ambientLight = new THREE.AmbientLight(0xffa366, 0.5);
        scene.add(ambientLight);
        
        // Warm sunset light
        directionalLight = new THREE.DirectionalLight(0xffaa66, 0.8);
        directionalLight.position.set(-15, 10, -5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        // Add a secondary warm glow
        sunsetLight = new THREE.DirectionalLight(0xff6b4a, 0.4);
        sunsetLight.position.set(15, 5, 10);
        scene.add(sunsetLight);
        
        console.log('🌅 Sunset mode activated');
    }
}

// Function to set camera position with smooth animation
function setCameraView(viewType) {
    if (!camera) return;
    
    let targetPosition;
    let targetLookAt = { x: 0, y: 2, z: 0 }; // Look at center of room
    
    if (viewType === 'front') {
        // Front view - standing in front of room
        targetPosition = { x: 0, y: 8, z: 15 };
        targetLookAt = { x: 0, y: 2, z: 0 };
        
    } else if (viewType === 'top') {
        // Top-down view (bird's eye)
        targetPosition = { x: 0, y: 20, z: 0 };
        targetLookAt = { x: 0, y: 0, z: 0 };
        
    } else if (viewType === 'corner') {
        // Corner view (isometric style)
        targetPosition = { x: 12, y: 10, z: 12 };
        
    } else if (viewType === 'walk') {
        // Walk-through view (eye level)
        targetPosition = { x: 0, y: 5, z: 8 };
        targetLookAt = { x: 0, y: 3, z: -5 }; // Look toward back wall
    }
    
    // Smooth camera transition
    const duration = 1000; // 1 second
    const startPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
    const startTime = Date.now();
    
    function animateCamera() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease in-out
        const easeProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        camera.position.x = startPosition.x + (targetPosition.x - startPosition.x) * easeProgress;
        camera.position.y = startPosition.y + (targetPosition.y - startPosition.y) * easeProgress;
        camera.position.z = startPosition.z + (targetPosition.z - startPosition.z) * easeProgress;
        
        camera.lookAt(targetLookAt.x, targetLookAt.y, targetLookAt.z);
        
        if (progress < 1) {
            requestAnimationFrame(animateCamera);
        }
    }
    
    animateCamera();
    console.log('📷 Camera moved to:', viewType);
}

// Simple orbit controls (drag to rotate) - MOBILE & DESKTOP
function addOrbitControls() {
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    
    const canvas = renderer.domElement;
    
    // ===== MOUSE EVENTS (Desktop) =====
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousPosition = { x: e.clientX, y: e.clientY };
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - previousPosition.x;
        const deltaY = e.clientY - previousPosition.y;
        
        rotateCamera(deltaX, deltaY);
        
        previousPosition = { x: e.clientX, y: e.clientY };
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    canvas.addEventListener('mouseleave', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    // ===== TOUCH EVENTS (Mobile) =====
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            // Single touch - rotate
            isDragging = true;
            previousPosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
            e.preventDefault();
        } else if (e.touches.length === 2) {
            // Two finger pinch - zoom (store initial distance)
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            previousPosition.pinchDistance = Math.sqrt(dx * dx + dy * dy);
            e.preventDefault();
        }
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent page scrolling
        
        if (e.touches.length === 1 && isDragging) {
            // Single touch - rotate
            const deltaX = e.touches[0].clientX - previousPosition.x;
            const deltaY = e.touches[0].clientY - previousPosition.y;
            
            rotateCamera(deltaX, deltaY);
            
            previousPosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        } else if (e.touches.length === 2) {
            // Two finger pinch - zoom (IMPROVED)
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (previousPosition.pinchDistance) {
                const delta = distance - previousPosition.pinchDistance;
                
                // Only zoom if pinch movement is significant (reduces jitter)
                if (Math.abs(delta) > 2) {
                    // Reduced sensitivity: 0.01 → 0.003
                    zoomCamera(-delta * 0.003);
                }
            }
            
            previousPosition.pinchDistance = distance;
        }
    }, { passive: false });
    
    canvas.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            isDragging = false;
        }
        if (e.touches.length < 2) {
            previousPosition.pinchDistance = null;
        }
    });
    
    // ===== MOUSE WHEEL (Desktop zoom) =====
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        zoomCamera(delta * 0.001);
    }, { passive: false });
    
    // Set initial cursor
    canvas.style.cursor = 'grab';
}

// Helper function to rotate camera (IMPROVED FOR MOBILE)
function rotateCamera(deltaX, deltaY) {
    const rotationSpeed = 0.003; // Reduced sensitivity
    
    // Get current position relative to center
    const centerX = 0;
    const centerZ = 0;
    
    // Calculate current angle and radius
    const angleY = Math.atan2(camera.position.x - centerX, camera.position.z - centerZ);
    const radiusXZ = Math.sqrt(
        Math.pow(camera.position.x - centerX, 2) + 
        Math.pow(camera.position.z - centerZ, 2)
    );
    
    // Rotate horizontally around Y axis
    const newAngleY = angleY - deltaX * rotationSpeed;
    
    // Update X and Z position (orbit around center)
    camera.position.x = centerX + radiusXZ * Math.sin(newAngleY);
    camera.position.z = centerZ + radiusXZ * Math.cos(newAngleY);
    
    // Vertical movement (up/down)
    camera.position.y -= deltaY * rotationSpeed * 10;
    
    // Limit vertical position
    camera.position.y = Math.max(3, Math.min(camera.position.y, 15));
    
    // Always look at center of room
    camera.lookAt(0, 2, 0);
}

// Zoom levels for better control
let currentZoomLevel = 2; // Start at medium zoom (index 2)
let targetZoomLevel = 2;
let isZooming = false;

const zoomLevels = [
    8,   // Level 0: Very close
    11,  // Level 1: Close  
    15,  // Level 2: Medium (default)
    19,  // Level 3: Far
    23   // Level 4: Very far
];

// Zoom cooldown to prevent accidental multi-level zooms
let lastZoomTime = 0;
const ZOOM_COOLDOWN = 300;

// Helper function to zoom camera (WITH COOLDOWN)
function zoomCamera(delta) {
    const now = Date.now();
    
    // Check if enough time has passed since last zoom
    if (now - lastZoomTime < ZOOM_COOLDOWN) {
        return; // Ignore this zoom request
    }
    
    lastZoomTime = now;
    
    const direction = delta > 0 ? 1 : -1;
    
    // Change target zoom level
    targetZoomLevel += direction;
    
    // Clamp to valid levels
    targetZoomLevel = Math.max(0, Math.min(targetZoomLevel, zoomLevels.length - 1));
    
    // Start animation if not already zooming
    if (!isZooming && targetZoomLevel !== currentZoomLevel) {
        animateZoom();
    }
}

// Animate zoom transition
function animateZoom() {
    isZooming = true;
    
    const targetDistance = zoomLevels[targetZoomLevel];
    const currentDistance = Math.sqrt(
        camera.position.x ** 2 + 
        camera.position.y ** 2 + 
        camera.position.z ** 2
    );
    
    // Calculate difference
    const diff = targetDistance - currentDistance;
    
    // If close enough, snap to target
    if (Math.abs(diff) < 0.1) {
        const ratio = targetDistance / currentDistance;
        camera.position.x *= ratio;
        camera.position.y *= ratio;
        camera.position.z *= ratio;
        camera.lookAt(0, 2, 0);
        
        currentZoomLevel = targetZoomLevel;
        isZooming = false;
        
        console.log('📷 Zoom level:', currentZoomLevel);
        return;
    }
    
    // Smooth movement toward target
    const step = diff * 0.1; // 10% per frame
    const newDistance = currentDistance + step;
    const ratio = newDistance / currentDistance;
    
    camera.position.x *= ratio;
    camera.position.y *= ratio;
    camera.position.z *= ratio;
    camera.lookAt(0, 2, 0);
    
    // Continue animation
    requestAnimationFrame(animateZoom);
}

// Create 3D room based on current design
function create3DRoom() {
    // Clear previous room if exists
    if (room3D) {
        while(room3D.children.length > 0) {
        const object = room3D.children[0];
        room3D.remove(object);
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
        }

        scene.remove(room3D);
    }
    
    room3D = new THREE.Group();
    
    // Get wall color from current design
    const wallColor = new THREE.Color(currentDesign.wallColor || '#f5f5f5');
    
    // Floor colors based on type
    const floorColors = {
        wood: 0xd4a574,
        tile: 0xe8e8e8,
        carpet: 0xc9a88a,
        concrete: 0x95a5a6
    };
    const floorColor = floorColors[currentDesign.floorType] || 0xd4a574;
    
    // Create floor
    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
        color: floorColor,
        roughness: 0.8
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    floor.receiveShadow = true;
    room3D.add(floor);
    
    // Create walls
    const wallMaterial = new THREE.MeshStandardMaterial({ 
        color: wallColor,
        side: THREE.DoubleSide
    });
    
    // Back wall
    const backWallGeometry = new THREE.PlaneGeometry(10, 5);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, 2.5, -5);
    room3D.add(backWall);
    
    // Left wall
    const leftWallGeometry = new THREE.PlaneGeometry(10, 5);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-5, 2.5, 0);
    leftWall.rotation.y = Math.PI / 2;
    room3D.add(leftWall);
    
    // Right wall
    const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    rightWall.position.set(5, 2.5, 0);
    rightWall.rotation.y = -Math.PI / 2;
    room3D.add(rightWall);
    
    // Add window on back wall
    const windowGeometry = new THREE.PlaneGeometry(2, 2.5);
    const windowMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x87ceeb,
        transparent: true,
        opacity: 0.5,
        emissive: 0x87ceeb,
        emissiveIntensity: 0.2
    });
    const window3D = new THREE.Mesh(windowGeometry, windowMaterial);
    window3D.position.set(0, 2.5, -4.9);
    room3D.add(window3D);
    
    // Add simple furniture based on room type
    add3DFurniture(room3D, currentDesign.roomType);
    
    // RESET CAMERA TO FRONT VIEW (especially for mobile)
    camera.position.set(0, 8, 15);  // Centered front view
    camera.lookAt(0, 2, 0);         // Look at center of room

    scene.add(room3D);
    console.log('🏠 3D Room created!');
}

// Add furniture to 3D room
function add3DFurniture(roomGroup, roomType) {
    const furnitureColor = 0x8B4513; // Brown
    const sofaMaterial = new THREE.MeshStandardMaterial({ color: furnitureColor});
    const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const counterMaterial = new THREE.MeshStandardMaterial({ color: 0x696969 });

    if (roomType === 'living') {
        // Sofa
        const sofaGeometry = new THREE.BoxGeometry(3, 0.8, 1);
        const sofaMaterial = new THREE.MeshStandardMaterial({ color: furnitureColor });
        const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial);
        sofa.position.set(0, 0.4, 2);
        sofa.castShadow = true;
        roomGroup.add(sofa);
        
        // Coffee table
        const tableGeometry = new THREE.BoxGeometry(1.5, 0.3, 1);
        const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
        const table = new THREE.Mesh(tableGeometry, tableMaterial);
        table.position.set(0, 0.15, 0);
        table.castShadow = true;
        roomGroup.add(table);
        
    } else if (roomType === 'bedroom') {
        // Bed
        const bedGeometry = new THREE.BoxGeometry(2, 0.5, 3);
        const bedMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const bed = new THREE.Mesh(bedGeometry, bedMaterial);
        bed.position.set(0, 0.25, -2);
        bed.castShadow = true;
        roomGroup.add(bed);
        
        // Nightstand
        const nightstandGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
        const nightstand = new THREE.Mesh(nightstandGeometry, sofaMaterial);
        nightstand.position.set(2, 0.3, -2);
        nightstand.castShadow = true;
        roomGroup.add(nightstand);
        
    } else if (roomType === 'kitchen') {
        // Counter
        const counterGeometry = new THREE.BoxGeometry(4, 0.9, 0.8);
        const counterMaterial = new THREE.MeshStandardMaterial({ color: 0x696969 });
        const counter = new THREE.Mesh(counterGeometry, counterMaterial);
        counter.position.set(-2, 0.45, -4);
        counter.castShadow = true;
        roomGroup.add(counter);
        
        // Island
        const islandGeometry = new THREE.BoxGeometry(2, 0.9, 1.5);
        const island = new THREE.Mesh(islandGeometry, counterMaterial);
        island.position.set(1, 0.45, 0);
        island.castShadow = true;
        roomGroup.add(island);
        
    } else if (roomType === 'bathroom') {
        // Sink vanity
        const vanityGeometry = new THREE.BoxGeometry(1.5, 0.8, 0.6);
        const vanity = new THREE.Mesh(vanityGeometry, sofaMaterial);
        vanity.position.set(-3, 0.4, -3);
        vanity.castShadow = true;
        roomGroup.add(vanity);
        
        // Toilet (simple box)
        const toiletGeometry = new THREE.BoxGeometry(0.6, 0.5, 0.8);
        const toiletMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const toilet = new THREE.Mesh(toiletGeometry, toiletMaterial);
        toilet.position.set(3, 0.25, -3);
        toilet.castShadow = true;
        roomGroup.add(toilet);
    }
}

// Animation loop
function animate3D() {
    if (!isViewer3DActive) return;
    
    requestAnimationFrame(animate3D);
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    if (!isViewer3DActive) return;
    
    const container = document.getElementById('threejs-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);

// Button controls
const view3DBtn = document.getElementById('view3DBtn');
const close3DBtn = document.getElementById('close3DBtn');
const threejsContainer = document.getElementById('threejs-container');

view3DBtn.addEventListener('click', function() {
    // Initialize scene if first time
    if (!renderer) {
        init3DScene();
    }
    
    // Create room with current design
    create3DRoom();

    // RESET CAMERA POSITION (ensures proper view on mobile)
    camera.position.set(0, 8, 15);
    camera.lookAt(0, 2, 0);
    
    // Show 3D viewer
    threejsContainer.style.display = 'block';
    view3DBtn.style.display = 'none';
    close3DBtn.style.display = 'inline-block';
    lightingControl.style.display = 'flex';
    cameraControl.style.display = 'flex';
    
    isViewer3DActive = true;
    animate3D();
    
    // Scroll to viewer
    threejsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    console.log('🎮 3D Viewer opened!');
});

close3DBtn.addEventListener('click', function() {
    threejsContainer.style.display = 'none';
    view3DBtn.style.display = 'inline-block';
    close3DBtn.style.display = 'none';
    lightingControl.style.display = 'none';
    cameraControl.style.display = 'none';
    
    isViewer3DActive = false;
    
    console.log('👋 3D Viewer closed!');
});

// Lighting control buttons
const lightingControl = document.getElementById('lightingControl');
const dayLightBtn = document.getElementById('dayLightBtn');
const nightLightBtn = document.getElementById('nightLightBtn');
const sunsetLightBtn = document.getElementById('sunsetLightBtn');

if (dayLightBtn && nightLightBtn && sunsetLightBtn) {
    dayLightBtn.addEventListener('click', function() {
        setLightingMode('day');
        dayLightBtn.classList.add('active');
        nightLightBtn.classList.remove('active');
        sunsetLightBtn.classList.remove('active');
    });
    
    nightLightBtn.addEventListener('click', function() {
        setLightingMode('night');
        dayLightBtn.classList.remove('active');
        nightLightBtn.classList.add('active');
        sunsetLightBtn.classList.remove('active');
    });
    
    sunsetLightBtn.addEventListener('click', function() {
        setLightingMode('sunset');
        dayLightBtn.classList.remove('active');
        nightLightBtn.classList.remove('active');
        sunsetLightBtn.classList.add('active');
    });
}

// Camera control buttons
const cameraControl = document.getElementById('cameraControl');
const frontViewBtn = document.getElementById('frontViewBtn');
const topViewBtn = document.getElementById('topViewBtn');
const cornerViewBtn = document.getElementById('cornerViewBtn');
const walkViewBtn = document.getElementById('walkViewBtn');

if (frontViewBtn && topViewBtn && cornerViewBtn && walkViewBtn) {
    frontViewBtn.addEventListener('click', function() {
        setCameraView('front');
        frontViewBtn.classList.add('active');
        topViewBtn.classList.remove('active');
        cornerViewBtn.classList.remove('active');
        walkViewBtn.classList.remove('active');
    });
    
    topViewBtn.addEventListener('click', function() {
        setCameraView('top');
        frontViewBtn.classList.remove('active');
        topViewBtn.classList.add('active');
        cornerViewBtn.classList.remove('active');
        walkViewBtn.classList.remove('active');
    });
    
    cornerViewBtn.addEventListener('click', function() {
        setCameraView('corner');
        frontViewBtn.classList.remove('active');
        topViewBtn.classList.remove('active');
        cornerViewBtn.classList.add('active');
        walkViewBtn.classList.remove('active');
    });
    
    walkViewBtn.addEventListener('click', function() {
        setCameraView('walk');
        frontViewBtn.classList.remove('active');
        topViewBtn.classList.remove('active');
        cornerViewBtn.classList.remove('active');
        walkViewBtn.classList.add('active');
    });
}

console.log('✨ 3D Visualization module loaded!');

// ===== PWA SERVICE WORKER REGISTRATION =====

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/dream-home-designer/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully!');
                console.log('Scope:', registration.scope);
                
                // CHECK FOR UPDATES every 60 seconds
                setInterval(() => {
                    registration.update();
                    console.log('🔍 Checking for updates...');
                }, 60000); // 60 seconds
                
                // LISTEN FOR NEW SERVICE WORKER
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('🆕 New service worker found!');
                    
                    newWorker.addEventListener('statechange', () => {
                        // When new worker is installed and ready
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('✨ New version available!');
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

// Listen for app install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('💡 App can be installed!');
    
    // Prevent the default install prompt
    e.preventDefault();
    
    // Store the event for later use
    deferredPrompt = e;
    
    // Show custom install button (we'll add this next)
    showInstallButton();
});

// Function to show install button
function showInstallButton() {
    const installBtn = document.getElementById('installAppBtn');
    if (installBtn) {
        installBtn.style.display = 'inline-block';
    }
}

// Function to trigger install
function installApp() {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for user's response
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('🎉 User accepted the install prompt');
            } else {
                console.log('😢 User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Function to dismiss install prompt
function dismissInstall() {
    const installPrompt = document.getElementById('installPrompt');
    if (installPrompt) {
        installPrompt.style.display = 'none';
    }
    
    // Remember user dismissed (save to localStorage)
    localStorage.setItem('installPromptDismissed', 'true');
}

// Function to show update notification
function showUpdateNotification() {
    const notification = document.getElementById('updateNotification');
    if (notification) {
        notification.style.display = 'flex';
    }
}

// Function to update the app
function updateApp() {
    console.log('🔄 Updating app...');
    
    // Clear all caches
    if ('caches' in window) {
        caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
                caches.delete(cacheName);
            });
        });
    }
    
    // Unregister old service worker and reload
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
            registration.unregister();
        });
        
        // Reload the page to get new version
        window.location.reload(true);
    });
}

// Function to dismiss update notification
function dismissUpdate() {
    const notification = document.getElementById('updateNotification');
    if (notification) {
        notification.style.display = 'none';
    }
    
    console.log('⏭️ Update dismissed - will remind later');
}

// ===== CHECK FOR UPDATES WHEN APP BECOMES VISIBLE (ADD THIS) =====

// Also check for updates when page becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.update();
        });
    }
});

console.log('📱 PWA features initialized with update detection!');

// Update showInstallButton to check if user dismissed
function showInstallButton() {
    const dismissed = localStorage.getItem('installPromptDismissed');
    
    if (!dismissed) {
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt) {
            installPrompt.style.display = 'block';
        }
    }
}

// ===== LOADING SCREEN =====

// Hide loading screen when everything is ready
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Wait a moment for everything to settle, then fade out
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            console.log('✨ App fully loaded!');
        }
    }, 500); // 500ms delay for smooth experience
});

// Also hide if taking too long (fallback)
setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');
        console.log('⏰ Loading screen timeout - forcing hide');
    }
}, 5000); // 5 seconds maximum