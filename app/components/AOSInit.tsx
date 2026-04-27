'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AOSInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Clear any existing observers
    const cleanup = () => {
      // Remove animate classes from all elements
      const animatedElements = document.querySelectorAll('.animate, .fade-in-up, .scale-in')
      animatedElements.forEach(el => {
        el.classList.remove('animate')
      })
    }

    // Initialize animations after a short delay to ensure DOM is ready
    const initializeAnimations = () => {
      // Intersection Observer options
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      // Create new intersection observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Observe all elements with animation classes
      const elementsToAnimate = document.querySelectorAll('.fade-in-up, .scale-in')
      elementsToAnimate.forEach((el) => {
        // Reset the element state
        el.classList.remove('animate')
        observer.observe(el)
      })

      // Handle CSS keyframe animations
      const keyframeElements = document.querySelectorAll('.animate-fade-up, .animate-scale-up, .animate-bounce-in')
      keyframeElements.forEach((el, index) => {
        // Reset animation
        const element = el as HTMLElement
        element.style.animation = 'none'
        element.style.opacity = '0'
        
        // Trigger animation with staggered delay
        setTimeout(() => {
          element.style.animation = ''
          element.style.animationPlayState = 'running'
        }, index * 100 + 200)
      })

      return () => {
        observer.disconnect()
      }
    }

    // Clean up previous animations
    cleanup()

    // Initialize animations after DOM is ready
    const timeoutId = setTimeout(() => {
      initializeAnimations()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      cleanup()
    }
  }, [pathname]) // Re-run when pathname changes

  return null
}