interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  className?: string;
}

export default function Loading({ 
  size = 'md',
  fullScreen = true,
  className = ""
}: LoadingProps) {
  // Size configurations
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-4', 
    lg: 'w-16 h-16 border-4'
  };

  const containerClasses = fullScreen 
    ? "min-h-screen bg-neutral-50 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={`${containerClasses} ${className}`}>
      {/* Circular Loader */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-neutral-200 rounded-full`}></div>
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-transparent border-t-stone-700 rounded-full animate-spin`}></div>
      </div>
    </div>
  );
}