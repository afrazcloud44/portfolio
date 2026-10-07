# Mohammed Afras M — Futuristic DevOps Portfolio

A polished animated DevOps portfolio based on the supplied CV and the requested black + neon-yellow visual direction.

## Included

- Black / charcoal futuristic background
- Neon yellow-green accent color
- Animated contour/orbital background
- Mouse-following yellow spotlight and pointer ring
- Click ripple animation
- Scroll progress indicator
- Smooth navigation and active-section highlighting
- Hero design inspired by the supplied reference
- Professional profile photo
- Animated engineering metrics
- Individual realistic technology cards using the supplied technology artwork
- AWS, Kubernetes, Docker, Jenkins, Terraform, ArgoCD, Prometheus and Grafana
- Experience timeline
- Projects
- Skills
- CI/CD delivery flow
- Contact section
- Downloadable CV
- Responsive mobile layout
- Reduced-motion accessibility support

## Local hosting — Linux / Ubuntu

### 1. Extract

```bash
cd ~/Downloads
unzip afraz-devops-portfolio-final.zip
cd afraz-devops-portfolio-final
```

### 2. Install Node.js if needed

```bash
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

### 5. Access from your phone on the same Wi-Fi

```bash
npm run dev -- --host 0.0.0.0
hostname -I
```

Then open:

```text
http://YOUR_LAPTOP_IP:5173
```

### 6. Production build

```bash
npm run build
```

The production files are generated in `dist/`.

Preview the production build:

```bash
npm run preview
```

## Nginx hosting

After `npm run build`:

```bash
sudo mkdir -p /var/www/afraz-portfolio
sudo cp -r dist/* /var/www/afraz-portfolio/
```

Create the site:

```bash
sudo nano /etc/nginx/sites-available/afraz-portfolio
```

Use:

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_SERVER_IP;

    root /var/www/afraz-portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/afraz-portfolio /etc/nginx/sites-enabled/afraz-portfolio
sudo nginx -t
sudo systemctl reload nginx
```

## Main files

- `src/main.jsx` — portfolio content and interactions
- `src/style.css` — visual design, animations and responsive layout
- `public/profile.png` — profile photo
- `public/afraz-cv.pdf` — CV
- `public/tools/` — technology artwork

## Important

The mouse-follow animation is disabled automatically on small screens and for users who enable reduced motion.
