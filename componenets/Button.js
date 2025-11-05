const Button = ({ children, onClick, variant = 'primary', className = '', href, target, ...props }) => {
    const baseClasses = 'inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed';

    const styles = {
        primary: 'bg-teal text-navy hover:bg-orange hover:text-white focus:ring-orange',
        secondary: 'bg-gray-light text-navy hover:bg-navy-light hover:text-white focus:ring-teal',
        outline: 'bg-transparent border-2 border-teal text-teal hover:bg-teal hover:text-navy focus:ring-teal'
    };

    if (href) {
        return (
            <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={`${baseClasses} ${styles[variant]} ${className}`} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};
