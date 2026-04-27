'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
    children: React.ReactNode
    animation?: 'fade-up' | 'scale-in' | 'fade-in'
    delay?: number
    className?: string
}

export default function AnimatedSection({
    children,
    animation = 'fade-up',
    delay = 0,
    className = ''
}: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-up':
                return isVisible ? 'animate-fade-up-visible' : 'animate-fade-up-hidden'
            case 'scale-in':
                return isVisible ? 'animate-scale-in-visible' : 'animate-scale-in-hidden'
            case 'fade-in':
                return isVisible ? 'animate-fade-in-visible' : 'animate-fade-in-hidden'
            default:
                return isVisible ? 'animate-fade-up-visible' : 'animate-fade-up-hidden'
        }
    }

    return (
        <div ref={ref} className={`${getAnimationClass()} ${className}`}>
            {children}
        </div>
    )
}