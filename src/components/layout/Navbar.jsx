import React, { useState } from 'react';
import Button from '../ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavItem = ({ title, items, onOpenWaitlist, type }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                onClick={() => onOpenWaitlist(type)}
                className="flex items-center gap-1 text-black hover:text-white font-bold transition-colors py-2"
            >
                {title}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} `} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => onOpenWaitlist(type)}
                            className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary font-bold transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = ({ onOpenWaitlist }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navMenus = {
        howItWorks: [
            { label: 'Süreç Nasıl İşler?', href: '#' },
            { label: 'Güvenlik ve Emanet', href: '#' },
            { label: 'Sıkça Sorulan Sorular', href: '#' }
        ],
        forCompanies: [
            { label: 'Hemen İlan Ver', href: '#' },
            { label: 'Yetenek Havuzu', href: '#' },
            { label: 'Kurumsal Çözümler', href: '#' }
        ],
        forForemen: [
            { label: 'Profil Oluştur', href: '#' },
            { label: 'Açık İş Fırsatları', href: '#' },
            { label: 'Başarı Hikayeleri', href: '#' }
        ]
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-black/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img src="/logo.png" alt="JEFE Logo" className="h-10 w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavItem title="Nasıl Çalışır" items={navMenus.howItWorks} onOpenWaitlist={onOpenWaitlist} type="foreman" />
                        <NavItem title="Şirketler İçin" items={navMenus.forCompanies} onOpenWaitlist={onOpenWaitlist} type="company" />
                        <NavItem title="Formenler İçin" items={navMenus.forForemen} onOpenWaitlist={onOpenWaitlist} type="foreman" />

                        <div className="flex items-center space-x-4 ml-4 border-l border-black/20 pl-4">
                            <Button variant="ghost" size="sm" className="text-black hover:bg-black/10" onClick={() => onOpenWaitlist('foreman')}>Giriş Yap</Button>
                            <Button variant="secondary" size="sm" onClick={() => onOpenWaitlist('foreman')}>Kayıt Ol</Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-b border-black/10 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <div className="py-2 border-b border-black/10">
                            <p className="text-black/50 text-xs font-bold uppercase tracking-wider mb-2">Nasıl Çalışır</p>
                            {navMenus.howItWorks.map((item, i) => (
                                <button key={i} onClick={() => onOpenWaitlist('foreman')} className="block w-full text-left py-2 text-black font-bold pl-2">{item.label}</button>
                            ))}
                        </div>
                        <div className="py-2 border-b border-black/10">
                            <p className="text-black/50 text-xs font-bold uppercase tracking-wider mb-2">Şirketler İçin</p>
                            {navMenus.forCompanies.map((item, i) => (
                                <button key={i} onClick={() => onOpenWaitlist('company')} className="block w-full text-left py-2 text-black font-bold pl-2">{item.label}</button>
                            ))}
                        </div>
                        <div className="py-2 border-b border-black/10">
                            <p className="text-black/50 text-xs font-bold uppercase tracking-wider mb-2">Formenler İçin</p>
                            {navMenus.forForemen.map((item, i) => (
                                <button key={i} onClick={() => onOpenWaitlist('foreman')} className="block w-full text-left py-2 text-black font-bold pl-2">{item.label}</button>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col gap-2">
                            <Button variant="ghost" className="w-full justify-start text-black hover:bg-black/10" onClick={() => onOpenWaitlist('foreman')}>Giriş Yap</Button>
                            <Button variant="secondary" className="w-full" onClick={() => onOpenWaitlist('foreman')}>Kayıt Ol</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
