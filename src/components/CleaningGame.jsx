import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './CleaningGame.css';

// Using a high-quality image from the assets
import cleanImg from '../assets/work-1.png';

const CleaningGame = () => {
    const { t } = useTranslation();
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isCleaning, setIsCleaning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isComplete, setIsComplete] = useState(false);
    const [isCanvasInitialized, setIsCanvasInitialized] = useState(false);

    // Brush settings
    const brushSize = 50;

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const container = containerRef.current;

        // Set canvas size to match container
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Draw dirt overlay
        // 1. Base dirt color
        ctx.fillStyle = '#4a3728'; // Dark brownish
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 2. Add some texture/grime
        for (let i = 0; i < 2000; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 3 + 1;
            ctx.fillStyle = Math.random() > 0.5 ? '#3a2b1f' : '#5a4636';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }

        // 3. Add some semi-transparent "dust" layer
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set globalCompositeOperation for cleaning effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = brushSize;

        setIsCanvasInitialized(true);
        setProgress(0);
        setIsComplete(false);
    }, []);

    useEffect(() => {
        initCanvas();
        window.addEventListener('resize', initCanvas);
        return () => window.removeEventListener('resize', initCanvas);
    }, [initCanvas]);

    const calculateProgress = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Sample points to check for transparency
        // We'll check a grid of 20x20 points
        const cols = 20;
        const rows = 20;
        let transparentPoints = 0;
        const totalPoints = cols * rows;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = Math.floor((width / cols) * i + (width / cols / 2));
                const y = Math.floor((height / rows) * j + (height / rows / 2));
                const pixel = ctx.getImageData(x, y, 1, 1).data;

                // If alpha is 0 (or close to it), it's cleaned
                if (pixel[3] < 128) {
                    transparentPoints++;
                }
            }
        }

        const newProgress = Math.round((transparentPoints / totalPoints) * 100);
        setProgress(newProgress);

        if (newProgress >= 95) {
            setIsComplete(true);
            setProgress(100);
        }
    };

    const handleInteractionStart = (e) => {
        setIsCleaning(true);
        handleInteractionMove(e);
    };

    const handleInteractionEnd = () => {
        setIsCleaning(false);
        calculateProgress();
    };

    const handleInteractionMove = (e) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        let clientX, clientY;

        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        setMousePos({ x, y });

        if (isCleaning && isCanvasInitialized) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            // Store previous position to draw lines (for smoother cleaning)
            if (canvas._prevX !== undefined) {
                ctx.moveTo(canvas._prevX, canvas._prevY);
                ctx.lineTo(x, y);
                ctx.stroke();
            } else {
                ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            canvas._prevX = x;
            canvas._prevY = y;
        }
    };

    // Reset previous position when cleaning stops
    useEffect(() => {
        if (!isCleaning && canvasRef.current) {
            canvasRef.current._prevX = undefined;
            canvasRef.current._prevY = undefined;
        }
    }, [isCleaning]);

    return (
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto py-10">
            <div
                ref={containerRef}
                className="cleaning-game-container"
                onMouseDown={handleInteractionStart}
                onMouseMove={handleInteractionMove}
                onMouseUp={handleInteractionEnd}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchMove={handleInteractionMove}
                onTouchEnd={handleInteractionEnd}
            >
                {/* Background Image (Clean) */}
                <div
                    className="cleaning-game-background"
                    style={{ backgroundImage: `url(${cleanImg})` }}
                />

                {/* Dirt Overlay (Canvas) */}
                <canvas
                    ref={canvasRef}
                    className="cleaning-game-canvas"
                />

                {/* Custom Cursor */}
                <div
                    className={`cleaning-brush-cursor ${isCleaning ? 'active' : ''}`}
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                        display: (mousePos.x < 0 || isComplete) ? 'none' : 'flex'
                    }}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4" /><path d="m4.93 4.93 2.83 2.83" /><path d="M2 12h4" /><path d="m4.93 19.07 2.83-2.83" /><path d="M12 22v-4" /><path d="m19.07 19.07-2.83-2.83" /><path d="M22 12h-4" /><path d="m19.07 4.93-2.83 2.83" />
                    </svg>
                </div>

                {/* Progress Overlay */}
                <div className="cleaning-progress-overlay">
                    <span className="progress-label">{t('home.game.status')}</span>
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="progress-percentage">{t('home.game.progress')}: {progress}%</span>
                </div>

                {/* Success Message */}
                {isComplete && (
                    <div className="success-message">
                        <div className="success-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="success-title">{t('home.game.successTitle')}</h3>
                        <p className="success-text font-bold text-center">
                            “{t('home.game.successText')}”
                        </p>
                        <button
                            onClick={initCanvas}
                            className="mt-8 bg-white text-[#a3d937] hover:bg-gray-100 font-extrabold px-10 py-4 rounded-full transition-all shadow-2xl uppercase tracking-widest text-sm"
                        >
                            {t('home.game.reset')}
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-8 flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-200 text-[10px] font-bold">{t('home.game.instruction')}</kbd>
                    <span>{t('home.game.instructionSuffix')}</span>
                </div>
            </div>
        </div>
    );
};

export default CleaningGame;
