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

    // 2. Multi-Color Technical Code Stream
    const snippets = [
        "import hashlib", "aws.deploy(devops_stack)", "auth.verify(biometric)", 
        "git commit -m 'secure'", "npm run build", "python facial_auth.py",
        "const db = firebase.init()", "SELECT * FROM users WHERE active=1",
        "docker build -t srk-dev .", "sudo apt-get update", "pip install react",
        "terraform apply --auto-approve", "kubectl get pods", "openssl genrsa -out"
    ];

    const colors = ["#3b82f6", "#10b981", "#a855f7", "#f43f5e", "#fbbf24"];

    for (let i = 0; i < 35; i++) {
        const line = document.createElement('div');
        line.className = 'falling-code';
        
        // Randomly pick a snippet and a color
        line.innerText = snippets[Math.floor(Math.random() * snippets.length)];
        line.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize position and speed
        line.style.left = Math.random() * 100 + 'vw';
        line.style.setProperty('--d', (Math.random() * 12 + 6) + 's'); 
        line.style.animationDelay = (Math.random() * 8) + 's';
        line.style.fontSize = (Math.random() * 4 + 10) + 'px'; // Random sizes
        
        stream.appendChild(line);
    }
};
