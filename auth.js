// User management and authentication
class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('harborVpnUsers')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('harborVpnCurrentUser')) || null;
        this.init();
    }

    init() {
        this.updateUI();
    }

    // Register new user
    register(userData) {
        // Check if user already exists
        if (this.users.find(user => user.email === userData.email)) {
            return { success: false, message: 'User already exists' };
        }

        // Add new user
        const newUser = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        localStorage.setItem('harborVpnUsers', JSON.stringify(this.users));
        
        return { success: true, message: 'Registration successful' };
    }

    // Login user
    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('harborVpnCurrentUser', JSON.stringify(user));
            return { success: true, message: 'Login successful', user };
        } else {
            return { success: false, message: 'Invalid email or password' };
        }
    }

    // Logout user
    logout() {
        this.currentUser = null;
        localStorage.removeItem('harborVpnCurrentUser');
        this.updateUI();
        window.location.href = 'main.html';
    }

    // Update UI based on auth state
    updateUI() {
        const loginBtn = document.querySelector('.btn-secondary[data-translate="login"]');
        const registerBtn = document.querySelector('.btn-primary[data-translate="register"]');
        const userMenu = document.getElementById('userMenu');
        const userName = document.getElementById('userName');

        if (this.currentUser) {
            // User is logged in
            if (loginBtn) loginBtn.style.display = 'none';
            if (registerBtn) registerBtn.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'flex';
                if (userName) userName.textContent = this.currentUser.name;
            }
        } else {
            // User is not logged in
            if (loginBtn) loginBtn.style.display = 'block';
            if (registerBtn) registerBtn.style.display = 'block';
            if (userMenu) userMenu.style.display = 'none';
        }
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize auth system
const auth = new Auth();

// Form handlers
document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const result = auth.login(email, password);
            
            if (result.success) {
                alert('Login successful!');
                window.location.href = 'main.html';
            } else {
                alert(result.message);
            }
        });
    }

    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Basic validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
            
            const result = auth.register({ name, email, password });
            
            if (result.success) {
                alert('Registration successful! Please login.');
                window.location.href = 'login.html';
            } else {
                alert(result.message);
            }
        });
    }
});

// Logout function
function logout() {
    auth.logout();
}