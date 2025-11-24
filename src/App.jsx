import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import WaitlistModal from './components/ui/WaitlistModal';

function App() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const [waitlistType, setWaitlistType] = useState('foreman'); // 'foreman' or 'company'

    const handleOpenWaitlist = (type = 'foreman') => {
        setWaitlistType(type);
        setIsWaitlistOpen(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onOpenWaitlist={handleOpenWaitlist} />
            <main>
                <Hero onOpenWaitlist={handleOpenWaitlist} />
                <HowItWorks />
                <Features />
            </main>
            <Footer />

            <WaitlistModal
                isOpen={isWaitlistOpen}
                onClose={() => setIsWaitlistOpen(false)}
                initialType={waitlistType}
            />
        </div>
    );
}

export default App;
