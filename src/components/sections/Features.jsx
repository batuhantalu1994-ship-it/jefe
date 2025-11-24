import React, { useState } from 'react';
import Button from '../ui/Button';
import { Shield, Search, Star, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </div>
);

const Features = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        if (!searchQuery) return;
        setIsSearching(true);
        // Mock search delay
        setTimeout(() => {
            setIsSearching(false);
            alert(`${searchQuery} bölgesindeki ekipler listeleniyor... (Demo)`);
        }, 1500);
    };

    const handlePinClick = (city) => {
        setSearchQuery(city);
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                            Tüm Türkiye'de Hizmet.
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            İstanbul'dan Kars'a, inşaat ihtiyaçlarınız için doğru ekibi bulun.
                            Harita tabanlı aramamız ile bu çok kolay.
                        </p>

                        {/* Abstract Map Pins */}
                        <div className="mb-8 relative h-48 w-full bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden group">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200 z-10">
                                İnteraktif Harita: Şehir Seçin
                            </div>

                            {/* Floating Pins */}
                            <button
                                onClick={() => handlePinClick('İstanbul')}
                                className="absolute top-1/4 left-1/4 animate-bounce duration-[2000ms] hover:scale-110 transition-transform cursor-pointer group/pin"
                            >
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg text-xs font-bold border-2 border-white relative z-10">34</div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">İstanbul</div>
                            </button>

                            <button
                                onClick={() => handlePinClick('Ankara')}
                                className="absolute bottom-1/3 right-1/3 animate-bounce duration-[2500ms] hover:scale-110 transition-transform cursor-pointer group/pin"
                            >
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg text-xs font-bold border-2 border-white relative z-10">06</div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">Ankara</div>
                            </button>

                            <button
                                onClick={() => handlePinClick('İzmir')}
                                className="absolute top-1/3 right-1/4 animate-bounce duration-[3000ms] hover:scale-110 transition-transform cursor-pointer group/pin"
                            >
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg text-xs font-bold border-2 border-white relative z-10">35</div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">İzmir</div>
                            </button>

                            <button
                                onClick={() => handlePinClick('Antalya')}
                                className="absolute bottom-1/4 left-1/3 animate-bounce duration-[2200ms] hover:scale-110 transition-transform cursor-pointer group/pin"
                            >
                                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg text-xs font-bold border-2 border-white relative z-10">07</div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">Antalya</div>
                            </button>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl shadow-2xl text-white max-w-md">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Yakınınızdaki ekipleri bulun</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Posta Kodu veya Şehir Girin"
                                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <Button onClick={handleSearch} disabled={isSearching}>
                                    {isSearching ? 'Aranıyor...' : 'Ara'}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Map Visualization */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-slate-50 rounded-3xl border-2 border-slate-100 relative overflow-hidden flex items-center justify-center">
                            <img
                                src="/turkey_map.png"
                                alt="Turkey Map"
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Shield}
                        title="Güvenli Ödeme"
                        description="Ödemeleriniz iş tamamlanana kadar güvenli hesapta tutulur. İki taraf için de risk yok."
                    />
                    <FeatureCard
                        icon={Search}
                        title="Akıllı Eşleşme"
                        description="Algoritmamız sizi tam olarak ihtiyacınız olan beceri ve sertifikalara sahip formenlerle eşleştirir."
                    />
                    <FeatureCard
                        icon={Star}
                        title="Onaylı Profiller"
                        description="Her formen incelenir. Geçmiş projeleri, puanları ve sertifikaları önceden görüntüleyin."
                    />
                </div>

            </div>
        </section>
    );
};

export default Features;
