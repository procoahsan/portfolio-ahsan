import { ChevronDown, ArrowDown, MoveDown } from "lucide-react"

const AnimatedArrows = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
      {/* Animated arrows */}
      <div className="flex flex-col items-center space-y-1 animate-bounce">
        <ChevronDown 
          className="h-6 w-6 text-primary opacity-80 animate-pulse" 
          style={{ animationDelay: '0s' }}
        />
        <ChevronDown 
          className="h-6 w-6 text-primary opacity-60 animate-pulse" 
          style={{ animationDelay: '0.2s' }}
        />
        <ChevronDown 
          className="h-6 w-6 text-primary opacity-40 animate-pulse" 
          style={{ animationDelay: '0.4s' }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute animate-float" style={{ left: '10%', animationDelay: '0s' }}>
          <div className="w-1 h-1 bg-primary rounded-full opacity-60"></div>
        </div>
        <div className="absolute animate-float" style={{ left: '20%', animationDelay: '1s' }}>
          <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-40"></div>
        </div>
        <div className="absolute animate-float" style={{ left: '80%', animationDelay: '2s' }}>
          <div className="w-1 h-1 bg-primary rounded-full opacity-50"></div>
        </div>
        <div className="absolute animate-float" style={{ left: '90%', animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-accent rounded-full opacity-30"></div>
        </div>
      </div>
      
      {/* Scroll indicator text */}
      <div className="text-xs text-muted-foreground opacity-70 animate-pulse">
        Scroll to explore
      </div>
    </div>
  )
}

export default AnimatedArrows