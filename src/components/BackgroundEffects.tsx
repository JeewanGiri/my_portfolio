import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GalaxyBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Create stars
        const stars: Array<{
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            opacity: number;
        }> = [];

        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                vx: Math.random() * 0.5 - 0.25,
                vy: Math.random() * 0.5 - 0.25,
                opacity: Math.random(),
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move stars
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                // Twinkle effect
                star.opacity += (Math.random() - 0.5) * 0.02;
                star.opacity = Math.max(0.1, Math.min(1, star.opacity));
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className="galaxy-bg">
            <canvas ref={canvasRef} className="stars" />

            {/* Nebula Effects */}
            <motion.div
                className="nebula"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                    top: '10%',
                    left: '10%',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="nebula"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                    bottom: '10%',
                    right: '10%',
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <motion.div
                className="nebula"
                style={{
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    top: '50%',
                    left: '50%',
                }}
                animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -40, 40, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Shooting Stars */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="shooting-star"
                    style={{
                        width: '100px',
                        top: `${Math.random() * 50}%`,
                        right: 0,
                    }}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{
                        x: -1000,
                        y: 500,
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 5,
                        repeat: Infinity,
                        repeatDelay: 20,
                    }}
                />
            ))}
        </div>
    );
};

export default GalaxyBackground;
