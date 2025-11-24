import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import Button from '../ui/Button';

const WaitlistModal = ({ isOpen, onClose, initialType = 'foreman' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: initialType === 'company' ? 'company' : 'foreman'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Reset state when modal opens/closes or type changes
    React.useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, role: initialType === 'company' ? 'company' : 'foreman' }));
            setIsSubmitted(false);
        }
    }, [isOpen, initialType]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-6 md:p-8">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-2">Teşekkürler!</h3>
                            <p className="text-slate-600 mb-6">
                                Bekleme listesine başarıyla eklendiniz. Erken erişim başladığında size haber vereceğiz.
                            </p>
                            <Button onClick={onClose} className="w-full">Tamam</Button>
                        </div>
                    ) : (
                        <>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-black mb-2">Erken Erişime Katılın</h3>
                                <p className="text-slate-600">
                                    JEFE henüz kapalı betada. Yerini ayırtmak için formu doldur.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Rolünüz</label>
                                    <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, role: 'foreman' })}
                                            className={`py-2 px-4 rounded-md text-sm font-bold transition-all ${formData.role === 'foreman'
                                                ? 'bg-white text-black shadow-sm'
                                                : 'text-slate-500 hover:text-slate-700'
                                                }`}
                                        >
                                            Ben Formenim
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, role: 'company' })}
                                            className={`py-2 px-4 rounded-md text-sm font-bold transition-all ${formData.role === 'company'
                                                ? 'bg-white text-black shadow-sm'
                                                : 'text-slate-500 hover:text-slate-700'
                                                }`}
                                        >
                                            Ben Şirketim
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Ad Soyad</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Adınız Soyadınız"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">E-posta Adresi</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="ornek@email.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Telefon Numarası</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="05XX XXX XX XX"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" className="w-full mt-2">
                                    Listeye Katıl
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
