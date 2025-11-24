import React from 'react';
import { MapPin, Users, Briefcase } from 'lucide-react';

const Step = ({ icon: Icon, title, description, number }) => (
    <div className="flex flex-col items-center text-center p-6 relative group">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 border border-slate-100">
            <Icon size={32} />
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-black font-bold rounded-full flex items-center justify-center shadow-md">
            {number}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
);

const HowItWorks = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                        Günler Değil, Dakikalar İçinde Kiralayın.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Projeniz için doğru ekibi anında bulmanızı sağlayacak süreci basitleştirdik.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

                    <Step
                        number="1"
                        icon={MapPin}
                        title="Konum Girin"
                        description="Bölgenizdeki uygun ekipleri görmek için proje posta kodunu veya şehri yazın."
                    />
                    <Step
                        number="2"
                        icon={Users}
                        title="Profesyonellerle Eşleşin"
                        description="Onaylı formen profillerine göz atın, uzmanlıklarını inceleyin ve puanlarını görün."
                    />
                    <Step
                        number="3"
                        icon={Briefcase}
                        title="İşe Başlayın"
                        description="Ekibi güvenli ödeme sistemimiz üzerinden rezerve edin ve işe başlayın."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
