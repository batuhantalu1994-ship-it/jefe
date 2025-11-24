import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-black py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/logo.png" alt="JEFE Logo" className="h-12 w-auto mb-4" />
                        <p className="mt-4 text-black/80 max-w-xs font-medium">
                            En iyi formenleri önde gelen sanayi şirketleriyle buluşturuyoruz. Hızlı, güvenli ve güvenilir.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-black text-lg mb-4 uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-2 text-black/80 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Nasıl Çalışır</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Güvenlik</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-black text-lg mb-4 uppercase tracking-wider">Şirket</h3>
                        <ul className="space-y-2 text-black/80 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/10 text-center text-black/60 text-sm font-medium">
                    &copy; {new Date().getFullYear()} JEFE Inc. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
