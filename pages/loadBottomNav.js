// loadBottomNav.js -  
(function() {
    'use strict';
    
    // تحميل الشريط السفلي عند جاهزية DOM
    document.addEventListener('DOMContentLoaded', loadBottomNav);
    
    async function loadBottomNav() {
        try {
            // حذف الشريط السفلي الحالي إذا كان موجوداً
            removeExistingBottomNav();
            
            // إنشاء الشريط السفلي جديد
            createBottomNavStructure();
            
            // إضافة الأنماط CSS
            addBottomNavStyles();
            
            // إضافة padding للمحتوى الرئيسي
            addContentPadding();
            
            // تحديد العنصر النشط
            setActiveNavItem();
            
            console.log('✅ Bottom navigation loaded successfully');
        } catch (error) {
            console.error('❌ Error loading bottom navigation:', error);
            // خطة بديلة إذا فشل التحميل
            createFallbackBottomNav();
        }
    }
    
    function removeExistingBottomNav() {
        const existingNav = document.querySelector('.bottom-nav');
        if (existingNav) {
            existingNav.remove();
        }
        
        // حذف الأنماط السابقة إذا كانت موجودة
        const existingStyles = document.querySelector('#bottom-nav-styles');
        if (existingStyles) {
            existingStyles.remove();
        }
    }
    
    function createBottomNavStructure() {
        const bottomNav = document.createElement('nav');
        bottomNav.className = 'bottom-nav';
        bottomNav.id = 'bottomNav';
        
        bottomNav.innerHTML = `
            <div class="bottom-nav-inner">
                <a href="dashboard.html" class="nav-item" data-page="dashboard">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    <span class="nav-label">الرئيسية</span>
                </a>

                <a href="leaves_management.html" class="nav-item" data-page="leaves">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span class="nav-label">الإجازات</span>
                </a>

                <a href="rewards_management.html" class="nav-item" data-page="rewards">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" d="M13 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                    <span class="nav-label">المكافآت</span>
                </a>

                <a href="violations_management.html" class="nav-item" data-page="violations">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" d="M12 9v2m0 4h.01M3.34 16l6.928-12c.77-1.333 2.694-1.333 3.464 0l6.928 12c.77 1.333-.192 3-1.732 3H5.072c-1.54 0-2.502-1.667-1.732-3z"/>
                    </svg>
                    <span class="nav-label">المخالفات</span>
                </a>

                <a href="statistics_overview.html" class="nav-item" data-page="statistics">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" d="M5 3v18m7-14v14m7-10v10"/>
                    </svg>
                    <span class="nav-label">الإحصائيات</span>
                </a>

                <a href="break_time_management.html" class="nav-item" data-page="breaktime">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">الزمنيات</span>
                </a>

                <a href="settings.html" class="nav-item" data-page="settings">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0"/>
                    </svg>
                    <span class="nav-label">الإعدادات</span>
                </a>
            </div>
        `;
        
        document.body.appendChild(bottomNav);
    }
    
    function addBottomNavStyles() {
        const style = document.createElement('style');
        style.id = 'bottom-nav-styles';
        
        style.textContent = `
            /* Bottom Navigation Styles */
            .bottom-nav {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: white;
                border-top: 1px solid #E5E7EB;
                box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
                z-index: 1000;
                height: 65px;
                display: flex;
                align-items: center;
            }

            .bottom-nav-inner {
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                padding: 0 5px;
            }
            
            .nav-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 3px;
                padding: 1px;
                font-size: 11px;
                color: #6B7280;
                text-decoration: none;
                transition: all 0.2s ease;
                height: 100%;
                border-radius: 10px;
                margin: 0 2px;
            }
            
            .nav-item:hover {
                background-color: #F3F4F6;
                transform: translateY(-2px);
            }
            
            .nav-item.active {
                color: #047857;
                background: rgba(4, 120, 87, 0.12);
                font-weight: 600;
            }
            
            .nav-item.active .nav-icon {
                color: #047857;
                stroke-width: 2.5px;
            }
            
            .nav-item .nav-icon {
                width: 20px;
                height: 20px;
                transition: all 0.2s ease;
            }
            
            .nav-label {
                font-size: 10px;
                font-weight: 500;
                line-height: 1;
                text-align: center;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            /* Fix for body padding */
            body {
                padding-bottom: 65px !important;
            }
            
            /* Main content padding fix */
            .main-content {
                padding-bottom: 70px !important;
            }
            
            /* Responsive adjustments */
            @media (max-width: 360px) {
                .nav-label {
                    font-size: 9px;
                }
                .nav-icon {
                    width: 18px;
                    height: 18px;
                }
                .bottom-nav {
                    height: 60px;
                }
            }
            
            @media (min-width: 768px) {
                .bottom-nav {
                    height: 70px;
                }
                .nav-label {
                    font-size: 12px;
                }
                .nav-icon {
                    width: 22px;
                    height: 22px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    function addContentPadding() {
        // إضافة padding للمحتوى الرئيسي
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.paddingBottom = '75px';
        }
        
        // إضافة padding للـ body أيضاً
        document.body.style.paddingBottom = '65px';
    }
    
    function setActiveNavItem() {
        // الانتظار قليلاً ثم تحديد العنصر النشط
        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop();
            const pageMap = {
                'dashboard.html': 'dashboard',
                'leaves_management.html': 'leaves',
                'rewards_management.html': 'rewards',
                'violations_management.html': 'violations',
                'statistics_overview.html': 'statistics',
                'break_time_management.html': 'breaktime',
                'settings.html': 'settings'
            };
            
            const currentPageKey = pageMap[currentPage] || 'dashboard';
            const navItems = document.querySelectorAll('.nav-item');
            
            if (navItems.length > 0) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                const activeItem = document.querySelector(`.nav-item[data-page="${currentPageKey}"]`);
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }
        }, 100);
    }
    
    function createFallbackBottomNav() {
        console.log('Creating fallback bottom navigation');
        
        // إنشاء شريط سفلي بسيط كبديل
        const fallbackNav = document.createElement('div');
        fallbackNav.className = 'bottom-nav';
        fallbackNav.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid #E5E7EB;
            padding: 10px;
            z-index: 1000;
            text-align: center;
        `;
        
        fallbackNav.innerHTML = `
            <div style="display: flex; justify-content: space-around;">
                <a href="dashboard.html" style="padding: 8px; text-decoration: none; color: #666;">الرئيسية</a>
                <a href="leaves_management.html" style="padding: 8px; text-decoration: none; color: #666;">الإجازات</a>
                <a href="statistics_overview.html" style="padding: 8px; text-decoration: none; color: #666;">الإحصائيات</a>
                <a href="settings.html" style="padding: 8px; text-decoration: none; color: #666;">الإعدادات</a>
            </div>
        `;
        
        document.body.appendChild(fallbackNav);
        addContentPadding();
    }
})();