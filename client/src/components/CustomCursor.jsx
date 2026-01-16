import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        // Only run on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            // Move the dot (immediate)
            if (cursorRef.current) {
                // User requested "high and left".
                // Applying -5px offset to both X and Y.
                cursorRef.current.style.transform = `translate3d(${clientX - 5}px, ${clientY - 5}px, 0)`;
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        let animationFrameId;
        let targetX = 0;
        let targetY = 0;
        let followerX = 0;
        let followerY = 0;

        const handleMouseMove = (e) => {
            // Follower target must match the dot's offset
            targetX = e.clientX - 5;
            targetY = e.clientY - 5;
        };

        const animateFollower = () => {
            followerX += (targetX - followerX) * 0.1;
            followerY += (targetY - followerY) * 0.1;

            if (followerRef.current) {
                // Dot size w-1.5 (6px) -> Center is at +3.
                // Follower size w-8 (32px) -> Radius is 16.
                // Follower Top-Left = (DotX + 3) - 16 = DotX - 13.
                followerRef.current.style.transform = `translate3d(${followerX - 13}px, ${followerY - 13}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animateFollower);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(animateFollower);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ff4500] rounded-full pointer-events-none z-[10000] shadow-sm"
                style={{
                    willChange: 'transform',
                    margin: 0,
                    padding: 0
                }}
            />

            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border-[0.5px] border-[#ff4500] rounded-full pointer-events-none z-[9999] opacity-80"
                style={{
                    willChange: 'transform',
                    margin: 0,
                    padding: 0
                }}
            />
        </>
    );
};

export default CustomCursor;
