/* ============================================================
   Reusable Navigation Menu — HayMarMaw Portfolio
   Single source of truth for header nav + footer menu.
   Active page is detected automatically from window.location.
   ============================================================ */
(function () {
    'use strict';

    /* ---- Menu configuration (edit here to update ALL pages) ---- */
    var MENU_ITEMS = [
        { label: 'Home',                file: 'index.html' },
        { label: 'About me',           file: 'about.html' },
        { label: 'Resume',             file: 'resume.html' },
        { label: 'Projects',          file: 'projects.html' },
    ]

    var SOCIAL_LINKS = [
        { icon: 'icons-social-linkedin',    url: 'https://www.linkedin.com/in/haymarmaw/', title: 'Linkedin' },
        { icon: 'icons-social-facebook',    url: 'http://www.facebook.com/',                title: 'Facebook' },
        { icon: 'icons-social-google-plus', url: 'https://plus.google.com/',                title: 'Google Plus' }
    ];

    var FOOTER_COPYRIGHT = '&copy; copyright ' + new Date().getFullYear() + '. All Rights Reserved. Powered by ';
    var COMPANY_NAME     = 'HayMarMaw';
    var COMPANY_TITLE    = 'HayMarMaw Web Design, Development, Software and Hosting Solutions';

    /* ---- Helpers ---- */
    function currentPage() {
        var path = window.location.pathname;
        var file = path.substring(path.lastIndexOf('/') + 1);
        return file || 'index.html';
    }

    function isActive(page) {
        return currentPage() === page;
    }

    function liClass(page) {
        return isActive(page) ? ' class="current"' : '';
    }

    /* ---- Build header HTML ---- */
    function buildHeader() {
        var navItems = '';
        for (var i = 0; i < MENU_ITEMS.length; i++) {
            var item = MENU_ITEMS[i];
            navItems += '<li' + liClass(item.file) + '><a href="' + item.file + '">' + item.label + '</a></li>\n';
        }

        var socialItems = '';
        for (var j = 0; j < SOCIAL_LINKS.length; j++) {
            var s = SOCIAL_LINKS[j];
            socialItems += '<a href="' + s.url + '" class="toptip animated" data-gen="expandOpen" title="' + s.title + '"><i class="' + s.icon + '"></i></a>\n';
        }

        return '' +
        '<header id="header">\n' +
        '    <div class="head">\n' +
        '        <div class="row clearfix">\n' +
        '            <div class="logo">\n' +
        '                <a href="index.html" title="' + COMPANY_TITLE + '"><img src="images/hm.png" alt="HayMarMaw"></a>\n' +
        '            </div><!-- end logo -->\n' +
        '            <div class="site_description">\n' +
        '                <p style="margin-bottom: 0px;">For any inquiries, please call me today.</p>\n' +
        '                <h2 class="inquiry"><img class="fll" src="images/home/ph_icon.png" />+959 979614170</h2>\n' +
        '            </div>\n' +
        '        </div><!-- row -->\n' +
        '    </div><!-- head -->\n' +
        '    <div class="headdown">\n' +
        '        <div class="row clearfix">\n' +
        '            <nav>\n' +
        '                <ul class="sf-menu">\n' +
        navItems +
        '                </ul><!-- end menu -->\n' +
        '            </nav><!-- end nav -->\n' +
        '            <div class="social social-head">\n' +
        socialItems +
        '            </div><!-- end social -->\n' +
        '        </div><!-- row -->\n' +
        '    </div><!-- headdown -->\n' +
        '</header><!-- end header -->\n';
    }

    /* ---- Build footer HTML ---- */
    function buildFooter() {
        var footerLinks = '';
        for (var i = 0; i < MENU_ITEMS.length; i++) {
            var item = MENU_ITEMS[i];
            footerLinks += '<li><a href="' + item.file + '">' + item.label + '</a></li>\n';
        }

        return '' +
        '<footer id="footer">\n' +
        '    <div class="footer-last">\n' +
        '        <div class="row clearfix">\n' +
        '            <span class="copyright">' + FOOTER_COPYRIGHT + '<a href="index.html" class="toptip" title="' + COMPANY_TITLE + '">' + COMPANY_NAME + '</a>.</span>\n' +
        '            <div id="toTop" class="toptip" title="Back to Top"><i class="fa-angle-up"></i></div><!-- Back to top -->\n' +
        '            <div class="foot-menu">\n' +
        '                <ul>\n' +
        footerLinks +
        '                </ul><!-- end links -->\n' +
        '            </div><!-- end foot menu -->\n' +
        '        </div><!-- end row -->\n' +
        '    </div><!-- end last footer -->\n' +
        '</footer><!-- end footer -->\n';
    }

    /* ---- Inject into page ---- */
    function init() {
        // Replace header
        var headerEl = document.getElementById('site-header');
        if (headerEl) {
            headerEl.outerHTML = buildHeader();
        }

        // Replace footer
        var footerEl = document.getElementById('site-footer');
        if (footerEl) {
            footerEl.outerHTML = buildFooter();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
