// This script runs the background animations for SRK.DEV
window.onload = function() {
    const bg = document.getElementById('bg-container');
    const stream = document.getElementById('code-stream');

    // 1. Generate Sparkling Glitters
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        bg.appendChild(star);
    }

    // 2. Generate Technical Code Stream
    const snippets = [
        "import hashlib", 
        "aws.deploy(devops_stack)", 
        "auth.verify(biometric_data)", 
        "git push origin main", 
        "npm run build", 
        "python facial_auth.py",
        "const db = firebase.init()"
    ];

    for (let i = 0; i < 25; i++) {
        const line = document.createElement('div');
        line.className = 'falling-code';
        line.innerText = snippets[Math.floor(Math.random() * snippets.length)];
        line.style.left = Math.random() * 100 + 'vw';
        line.style.setProperty('--d', (Math.random() * 10 + 7) + 's'); // Speed
        line.style.animationDelay = (Math.random() * 5) + 's';
        stream.appendChild(line);
    }
};
