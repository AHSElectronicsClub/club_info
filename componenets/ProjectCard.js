const ProjectCard = ({ project, onClick }) => (
    <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
        onClick={onClick}
    >
        <div className="relative">
            <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/072A40/F6F7F9?text=Image+Not+Found'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
                {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="inline-block bg-teal text-navy text-xs font-bold px-2 py-1 rounded-full mr-2">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold font-display text-navy mb-2 group-hover:text-teal transition-colors">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.shortDescription}</p>
            <div className="flex justify-between items-center mt-6">
                <span className="text-sm font-semibold text-orange group-hover:underline">View Details</span>
                <GithubIcon
                    className="w-6 h-6 text-gray-400 group-hover:text-navy transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.repoLink, '_blank');
                    }}
                />
            </div>
        </div>
    </div>
);
