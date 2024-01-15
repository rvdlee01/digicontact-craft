import Cookies from "js-cookie";

export default function (Alpine) {
    Alpine.data('cookiebar', () => ({
        // Data
        cookiesSet: Cookies.get('cookiesSet') === 'true',
        showOptions: false,
        showCookieBar: false,
        statistics: Cookies.get('statistics') === 'true',
        marketing: Cookies.get('marketing') === 'true',

        setCookies() {
            if (!this.showOptions) {
                Cookies.set('statistics', true, {expires: 365});
                Cookies.set('marketing', true, {expires: 365});
            } else {
                Cookies.set('statistics', this.statistics, {expires: 365});
                Cookies.set('marketing', this.marketing, {expires: 365});
            }

            this.addCookies();

            this.cookiesSet = true;
            Cookies.set('cookiesSet', true, {expires: 365});
            this.showCookieBar = false;
            location.reload();
        },

        addCookies() {
            if (process.env.NODE_ENV === 'production') {
                dataLayer.push({'event': 'cookie_essential'});

                if (this.statistics) {
                    dataLayer.push({'event': 'cookie_statistics'});
                }

                if (this.marketing) {
                    dataLayer.push({'event': 'cookie_marketing'});
                }
            }
        },

        toggleOptions() {
            this.showOptions = !this.showOptions;
        },

        toggleCookieBar() {
            this.showCookieBar = true;
        }
    }))
}
