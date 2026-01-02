import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
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
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
                    />

                    {/* Modal Wrapper */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-0 md:p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-dark-700/95 backdrop-blur-xl w-full h-full md:h-auto md:max-w-3xl md:rounded-2xl shadow-2xl overflow-y-auto pointer-events-auto border-t md:border border-white/10 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button - Sticky on mobile */}
                            <div className="sticky top-0 w-full flex justify-end p-4 z-20 pointer-events-none">
                                <button
                                    onClick={onClose}
                                    className="p-2.5 rounded-full bg-dark-900 shadow-xl text-white hover:text-blue-400 border border-white/10 pointer-events-auto transition-all active:scale-95"
                                    aria-label="Close modal"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            <div className="-mt-16">
                                {/* Project Image */}
                                <div className="relative w-full h-[40vh] md:h-80 overflow-hidden bg-dark-900 border-b border-white/5">
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={90}
                                        className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        onLoadingComplete={() => setImageLoaded(true)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent"></div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 pb-32 md:p-10">
                                    {/* Header Section */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
                                            <span>Project Showcase</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold main-text-color tracking-tight">{project.title}</h2>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg secondary-text-color-lighter mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-10">
                                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Core Technologies</h3>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-[11px] px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 font-semibold"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mb-2">
                                        {project.liveLink && (
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={project.liveLink}
                                                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all text-white font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                                            >
                                                <FiExternalLink size={18} />
                                                Live Experience
                                            </a>
                                        )}
                                        {project.gitHubLink && (
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                href={project.gitHubLink}
                                                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-dark-900 border border-white/10 hover:border-blue-500/50 transition-all text-white/90 hover:text-blue-400 font-bold active:scale-[0.98]"
                                            >
                                                <FiGithub size={18} />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
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
