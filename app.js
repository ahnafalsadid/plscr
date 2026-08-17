// --- Vanilla JavaScript for Notice Board Filtering ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noticeCards = document.querySelectorAll('.notice-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Handle Active Button Styles
            filterBtns.forEach(f => {
                f.classList.remove('bg-white', 'text-brand-600', 'shadow-sm');
                f.classList.add('bg-transparent', 'text-slate-600');
            });
            btn.classList.remove('bg-transparent', 'text-slate-600');
            btn.classList.add('bg-white', 'text-brand-600', 'shadow-sm');

            // Filter Notice Cards
            const filterValue = btn.getAttribute('data-filter');

            noticeCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        void card.offsetWidth; // Trigger layout reflow for animation
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 200);
            });
        });
    });
});


// --- Unchanged Vue 3 Application Setup ---
const { createApp, ref, onMounted } = Vue;

const app = createApp({
    setup() {
        // --- Data ---
        const stats = ref([
            { label: 'Teachers', value: '188' },
            { label: 'Students', value: '8000+' },
            { label: 'Buildings/Areas', value: '4' },
            { label: 'Passing Rate', value: '99%' }
        ]);

        // --- Mobile Menu State ---
        const isMobileMenuOpen = ref(false);
        const openDropdown = ref('');       
        const openSubDropdown = ref('');    

        // --- Methods ---
        const toggleDropdown = (menuName) => {
            if (openDropdown.value === menuName) {
                openDropdown.value = '';
                openSubDropdown.value = ''; 
            } else {
                openDropdown.value = menuName;
                openSubDropdown.value = ''; 
            }
        };

        const toggleSubDropdown = (menuName) => {
            openSubDropdown.value = openSubDropdown.value === menuName ? '' : menuName;
        };

        // --- Lifecycle Hooks ---
        onMounted(() => {
            // Initialize Lucide Icons safely
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Initialize Animate On Scroll (AOS)
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 50,
                    easing: 'ease-out-cubic'
                });
            }

            // Initialize Lenis (Smooth Momentum Scrolling)
            if (typeof Lenis !== 'undefined') {
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
                    smooth: true,
                    smoothTouch: false,
                });

                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);
            }
        });

        return {
            stats,
            isMobileMenuOpen,
            openDropdown,
            openSubDropdown,
            toggleDropdown,
            toggleSubDropdown
        };
    }
});

// Mount the Vue App
app.mount('#app');
