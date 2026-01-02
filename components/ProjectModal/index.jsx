import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectModal = ({ project, isOpen, onClose, onNext, onPrevious, currentIndex, totalProjects }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'ArrowRight') {
                onNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrevious]);

    // Reset image loaded state when project changes
    useEffect(() => {
        setImageLoaded(false);
    }, [project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-dark-700 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border border-blue-500/20 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-dark-900/50 hover:bg-dark-900 transition-colors text-white hover:text-blue-400 z-10"
                                aria-label="Close modal"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Navigation Buttons - Bottom positioned */}
                            {totalProjects > 1 && (
                                <div className="absolute bottom-8 right-6 flex gap-3 z-10">
                                    <button
                                        onClick={onPrevious}
                                        className="p-2.5 rounded-lg bg-dark-900/80 backdrop-blur-md hover:bg-dark-900 transition-all text-white/70 hover:text-blue-400 border border-white/10 hover:border-blue-500/50 shadow-lg"
                                        aria-label="Previous project"
                                    >
                                        <FiChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={onNext}
                                        className="p-2.5 rounded-lg bg-dark-900/80 backdrop-blur-md hover:bg-dark-900 transition-all text-white/70 hover:text-blue-400 border border-white/10 hover:border-blue-500/50 shadow-lg"
                                        aria-label="Next project"
                                    >
                                        <FiChevronRight size={20} />
                                    </button>
                                </div>
                            )}

                            {/* Project Image with Loading State */}
                            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-lg bg-dark-900">
                                {!imageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={500}
                                    className={`object-cover w-full h-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoadingComplete={() => setImageLoaded(true)}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Title, Year, and Project Counter */}
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-grow">
                                        <h2 className="text-3xl font-bold main-text-color mb-1">{project.title}</h2>
                                    </div>
                                    <div className="text-xs text-white/60 font-mono ml-4 mt-2">
                                        {currentIndex + 1} / {totalProjects}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-base secondary-text-color-lighter mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-white/80 mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-3 py-1.5 rounded-full bg-dark-900/50 border border-blue-500/20 text-blue-400 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    {project.gitHubLink && (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={project.gitHubLink}
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-dark-900/50 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all text-white hover:text-blue-400 font-medium"
                                        >
                                            <FiGithub size={18} />
                                            View Code
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={project.liveLink}
                                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all text-white font-medium shadow-lg shadow-blue-500/20"
                                        >
                                            <FiExternalLink size={18} />
                                            View Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
