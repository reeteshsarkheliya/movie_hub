// Function to handle search button click and redirect to Google
function handleSearch() {
    // Get the search input value
    const searchInput = document.getElementById('movie').value;
    
    // If there's a search term, redirect to Google with the search query
    if (searchInput.trim() !== '') {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.open(googleSearchUrl, '_blank');
    } else {
        // If no search term, just redirect to Google homepage
        window.open('https://www.google.com', '_blank');
    }
}

// Add event listener when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the search button and add click event
    const searchButton = document.querySelector('.Search + button');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    // Also add enter key functionality to the search input
    const searchInput = document.getElementById('movie');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleIcon = item.querySelector('.toggle-icon');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+';
                }
            });
            
            // Toggle current item
            const isActive = item.classList.contains('active');
            
            if (isActive) {
                // Close the item
                item.classList.remove('active');
                answer.classList.remove('active');
                toggleIcon.textContent = '+';
            } else {
                // Open the item
                item.classList.add('active');
                answer.classList.add('active');
                toggleIcon.textContent = '−';
            }
        });
    });

    // i18n Translation
    const translations = {
        en: {
            'nav.login': 'Login',
            'nav.signup': 'Sign up',
            'home.headline': 'Unlimited movies, TV shows and more',
            'home.subtitle': 'Starts at $2.00. Cancel at any time.',
            'home.cta': 'Ready to watch? Enter your email to create or restart your membership.',
            'search.placeholder': 'Movie Search',
            'search.button': 'Search',
            'trending.title': 'Trending Now',
            'reasons.tv.title': 'Enjoy on your TV',
            'reasons.tv.desc': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'reasons.download.title': 'Download your shows to watch offline',
            'reasons.download.desc': 'Save your favourites easily and always have something to watch.',
            'reasons.everywhere.title': 'Watch everywhere',
            'reasons.everywhere.desc': 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
            'reasons.kids.title': 'Create profiles for children',
            'reasons.kids.desc': 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
            'faq.title': 'Frequently Asked Questions',
            'faq.q1': 'What is MOVIEhub?',
            'faq.a1': 'MOVIEhub is a streaming platform that offers unlimited movies, TV shows, and documentaries. You can watch on any device, anytime, anywhere.',
            'faq.q2': 'How much does MOVIEhub cost?',
            'faq.a2': 'MOVIEhub starts at just $2.00 per month. You can cancel anytime with no cancellation fees.',
            'faq.q3': 'Can I download shows to watch offline?',
            'faq.a3': 'Yes! You can download your favorite shows and movies to watch offline on your mobile device or tablet.',
            'faq.q4': 'What devices can I watch on?',
            'faq.a4': 'You can watch on smart TVs, gaming consoles, streaming devices, mobile phones, tablets, and computers.',
            'faq.q5': 'Is there a limit on how much I can watch?',
            'faq.a5': 'No limits! Watch as much as you want, whenever you want. Stream unlimited movies and TV shows.',
            'faq.q6': 'Can I create multiple profiles?',
            'faq.a6': 'Yes! You can create up to 5 profiles for different family members, each with their own personalized recommendations.',
            'faq.q7': 'How do I cancel my subscription?',
            'faq.a7': 'You can cancel anytime by going to your account settings. There are no cancellation fees or commitments.',
            'footer.faq': 'FAQ',
            'footer.help': 'Help Center',
            'footer.account': 'Account',
            'footer.media': 'Media Center',
            'footer.investors': 'Investor Relations',
            'footer.jobs': 'Jobs',
            'footer.watch': 'Ways to Watch',
            'footer.terms': 'Terms of Use',
            'footer.privacy': 'Privacy',
            'footer.cookies': 'Cookie Preferences',
            'footer.corporate': 'Corporate Information',
            'footer.contact': 'Contact Us',
            'footer.speed': 'Speed Test',
            'footer.legal': 'Legal Notices',
            'footer.only': 'Only on MOVIEhub',
            'footer.download': 'Download App',
            'footer.questions': 'Questions? Call 000-800-919-1694',
            // Auth pages
            'auth.loginTitle': 'Login',
            'auth.signupTitle': 'Create a new account',
            'auth.username': 'Username',
            'auth.password': 'Password',
            'auth.usernamePlaceholder': 'Username',
            'auth.passwordPlaceholder': 'Password',
            'auth.emailPlaceholder': 'Email or phone number',
            'auth.loginButton': 'Login',
            'auth.signupLink': 'Sign up',
            'auth.noAccount': "Don't have an account?",
            'auth.welcome': 'Welcome Back!',
            'auth.welcomeSub': "We're happy to see you again.",
            'auth.gotoLogin': 'Go to Login',
            'auth.haveAccount': 'Already have an account?',
            'auth.loginLink': 'Login'
        },
        hi: {
            'nav.login': 'लॉगिन',
            'nav.signup': 'साइन अप',
            'home.headline': 'अनलिमिटेड फ़िल्में, टीवी शो और भी बहुत कुछ',
            'home.subtitle': 'शुरू मात्र $2.00 से। कभी भी रद्द करें।',
            'home.cta': 'देखने के लिए तैयार हैं? सदस्यता बनाने या दोबारा शुरू करने के लिए अपना ईमेल दर्ज करें।',
            'search.placeholder': 'मूवी खोजें',
            'search.button': 'खोजें',
            'trending.title': 'ट्रेंडिंग अब',
            'reasons.tv.title': 'अपने टीवी पर आनंद लें',
            'reasons.tv.desc': 'स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और अधिक पर देखें।',
            'reasons.download.title': 'ऑफलाइन देखने के लिए अपने शो डाउनलोड करें',
            'reasons.download.desc': 'अपने पसंदीदा आसानी से सहेजें और हमेशा देखने के लिए कुछ न कुछ हो।',
            'reasons.everywhere.title': 'हर जगह देखें',
            'reasons.everywhere.desc': 'अपने फोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें।',
            'reasons.kids.title': 'बच्चों के लिए प्रोफ़ाइल बनाएं',
            'reasons.kids.desc': 'बच्चों को उनके पसंदीदा पात्रों के साथ रोमांच पर भेजें — आपके सदस्यता के साथ मुफ्त।',
            'faq.title': 'अक्सर पूछे जाने वाले सवाल',
            'faq.q1': 'MOVIEhub क्या है?',
            'faq.a1': 'MOVIEhub एक स्ट्रीमिंग प्लेटफॉर्म है जो अनलिमिटेड फ़िल्में, टीवी शो और डाक्यूमेंट्री प्रदान करता है। आप किसी भी डिवाइस पर कभी भी, कहीं भी देख सकते हैं।',
            'faq.q2': 'MOVIEhub की कीमत कितनी है?',
            'faq.a2': 'MOVIEhub केवल $2.00 प्रति माह से शुरू होता है। आप कभी भी रद्द कर सकते हैं।',
            'faq.q3': 'क्या मैं ऑफलाइन देखने के लिए शो डाउनलोड कर सकता हूँ?',
            'faq.a3': 'हाँ! आप अपने पसंदीदा शो और फ़िल्में ऑफलाइन देखने के लिए अपने मोबाइल डिवाइस या टैबलेट पर डाउनलोड कर सकते हैं।',
            'faq.q4': 'मैं किन डिवाइसों पर देख सकता हूँ?',
            'faq.a4': 'आप स्मार्ट टीवी, गेमिंग कंसोल, स्ट्रीमिंग डिवाइस, मोबाइल फोन, टैबलेट और कंप्यूटर पर देख सकते हैं।',
            'faq.q5': 'क्या देखने की कोई सीमा है?',
            'faq.a5': 'कोई सीमा नहीं! जितना चाहें, जब चाहें देखें।',
            'faq.q6': 'क्या मैं कई प्रोफ़ाइल बना सकता हूँ?',
            'faq.a6': 'हाँ! आप परिवार के अलग-अलग सदस्यों के लिए 5 तक प्रोफ़ाइल बना सकते हैं।',
            'faq.q7': 'मैं अपनी सदस्यता कैसे रद्द करूँ?',
            'faq.a7': 'आप कभी भी अपने खाते की सेटिंग्स में जाकर रद्द कर सकते हैं।',
            'footer.faq': 'FAQ',
            'footer.help': 'हेल्प सेंटर',
            'footer.account': 'अकाउंट',
            'footer.media': 'मीडिया सेंटर',
            'footer.investors': 'निवेशक संबंध',
            'footer.jobs': 'जॉब्स',
            'footer.watch': 'देखने के तरीके',
            'footer.terms': 'उपयोग की शर्तें',
            'footer.privacy': 'प्राइवेसी',
            'footer.cookies': 'कुकी प्राथमिकताएँ',
            'footer.corporate': 'कॉर्पोरेट जानकारी',
            'footer.contact': 'हमसे संपर्क करें',
            'footer.speed': 'स्पीड टेस्ट',
            'footer.legal': 'कानूनी सूचनाएँ',
            'footer.only': 'केवल MOVIEhub पर',
            'footer.download': 'ऐप डाउनलोड करें',
            'footer.questions': 'प्रश्न? कॉल करें 000-800-919-1694',
            // Auth pages
            'auth.loginTitle': 'लॉगिन',
            'auth.signupTitle': 'नया खाता बनाएँ',
            'auth.username': 'उपयोगकर्ता नाम',
            'auth.password': 'पासवर्ड',
            'auth.usernamePlaceholder': 'उपयोगकर्ता नाम',
            'auth.passwordPlaceholder': 'पासवर्ड',
            'auth.emailPlaceholder': 'ईमेल या फ़ोन नंबर',
            'auth.loginButton': 'लॉगिन',
            'auth.signupLink': 'साइन अप',
            'auth.noAccount': 'खाता नहीं है?',
            'auth.welcome': 'वापसी पर स्वागत है!',
            'auth.welcomeSub': 'आपको फिर से देखकर खुशी हुई।',
            'auth.gotoLogin': 'लॉगिन पर जाएँ',
            'auth.haveAccount': 'क्या आपका पहले से खाता है?',
            'auth.loginLink': 'लॉगिन'
        }
    };

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.en;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });
        // Set html lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // Sign-in enhancements
    (function enhanceLogin() {
        const form = document.getElementById('loginForm');
        if (!form) return;

        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const usernameBox = document.getElementById('usernameBox');
        const passwordBox = document.getElementById('passwordBox');
        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');
        const togglePassword = document.getElementById('togglePassword');
        const rememberMe = document.getElementById('rememberMe');

        // Restore remembered username
        const savedUser = localStorage.getItem('remembered_username');
        if (savedUser && username) {
            username.value = savedUser;
            rememberMe.checked = true;
        }

        function setError(elBox, elError, message) {
            elBox.classList.add('invalid');
            elError.textContent = message || '';
        }

        function clearError(elBox, elError) {
            elBox.classList.remove('invalid');
            elError.textContent = '';
        }

        function validate() {
            let ok = true;
            if (!username.value.trim()) {
                setError(usernameBox, usernameError, 'Required');
                ok = false;
            } else {
                clearError(usernameBox, usernameError);
            }
            if (!password.value.trim()) {
                setError(passwordBox, passwordError, 'Required');
                ok = false;
            } else if (password.value.length < 6) {
                setError(passwordBox, passwordError, 'Minimum 6 characters');
                ok = false;
            } else {
                clearError(passwordBox, passwordError);
            }
            return ok;
        }

        togglePassword?.addEventListener('click', function() {
            const isPassword = password.type === 'password';
            password.type = isPassword ? 'text' : 'password';
            togglePassword.textContent = isPassword ? 'Hide' : 'Show';
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!validate()) return;

            if (rememberMe.checked) {
                localStorage.setItem('remembered_username', username.value.trim());
            } else {
                localStorage.removeItem('remembered_username');
            }

            // Simulate successful login
            window.location.href = 'index.html';
        });
    })();

    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        // Initialize from localStorage
        const savedLang = localStorage.getItem('app_lang') || 'en';
        languageSelect.value = savedLang;
        applyTranslations(savedLang);

        languageSelect.addEventListener('change', () => {
            const lang = languageSelect.value;
            localStorage.setItem('app_lang', lang);
            applyTranslations(lang);
        });
    } else {
        // Fallback
        applyTranslations('en');
    }
}); 