import React, { useState } from 'react';
import Button from '../ui/Button';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ onOpenWaitlist }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const slides = [
        {
            src: '/hero_image.jpg',
            name: 'Bekir H.',
            role: 'Usta Kalıpçı • İstanbul'
        },
        {
            src: '/hero_slide_2.jpg',
            name: 'Mustafa K.',
            role: 'Usta Demirci • Kırşehir'
        },
        {
            src: '/hero_slide_3.jpg',
            name: 'Seyfi F.',
            role: 'Usta Kaynakçı • Adana'
        }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % slides.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + slides.length) % slides.length);
    };
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black font-medium text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                            </span>
                            Tüm Türkiye'de
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-black">
                            Şantiyenin <span className="bg-black text-primary px-4 rounded-xl inline-block transform -rotate-2">JEFESİ</span> Sizsiniz.
                        </h1>

                        <p className="text-xl text-black/80 max-w-lg font-medium">
                            En iyi formenlerle bağlantı kurun veya bir sonraki endüstriyel projenizi bulun.
                            Basit, güvenli ve profesyoneller için tasarlandı.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-black text-white hover:bg-black/80 shadow-xl shadow-black/20"
                                onClick={() => onOpenWaitlist('foreman')}
                            >
                                Ben Formenim
                                <ArrowRight size={20} />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-black text-black hover:bg-black/10"
                                onClick={() => onOpenWaitlist('company')}
                            >
                                Ben Şirketim
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-6 text-sm text-black/70 font-bold">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-black" />
                                Onaylı Profesyoneller
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-black" />
                                Güvenli Ödeme
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-black" />
                                Anında Eşleşme
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-black/20 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-black/10 aspect-[4/5]">
                            <img
                                src={slides[currentImage].src}
                                alt="Construction Foreman"
                                className="w-full h-full object-cover transition-all duration-500"
                            />

                            {/* Carousel Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={prevImage}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white overflow-hidden z-30">
                                            <div className="w-full h-full bg-slate-300"></div>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-slate-300 border-2 border-white overflow-hidden z-20">
                                            <div className="w-full h-full bg-slate-400"></div>
                                        </div>
                                        <div className="h-12 w-12 rounded-full bg-slate-400 border-2 border-white overflow-hidden z-10">
                                            <div className="w-full h-full bg-slate-500"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{slides[currentImage].name}</p>
                                        <p className="text-sm text-slate-500">{slides[currentImage].role}</p>
                                    </div>
                                    <div className="ml-auto text-primary font-bold">
                                        4.9 ★
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
