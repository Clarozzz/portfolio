
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import ProjectsGrid from './projects-grid';

export default function Info({ onStateChange }: { onStateChange: (id: string) => void }) {
    const t = useTranslations('language');

    const [aboutRef, aboutInView] = useInView({ threshold: 1 });
    const [skillsRef, skillsInView] = useInView({ threshold: 1 });
    const [projectsRef, projectsInView] = useInView({ threshold: 1 });

    const size = 90;

    useEffect(() => {
        if (aboutInView) {
            onStateChange('a-about')
        }
        if (skillsInView) {
            onStateChange('a-skills')
        }
        if (projectsInView) {
            onStateChange('a-projects')
        }
    }, [aboutInView, skillsInView, projectsInView, onStateChange]);

    return (
        <div className="py-24 lg:w-2/3 lg:text-center">
            <div ref={aboutRef} id="about" className="mb-36 scroll-mt-24">
                <h1 className="text-transparent animated-gradient bg-clip-text text-5xl font-bold">
                    {t('about')}
                </h1>

                <p className='mt-10 text-left'>
                    {t('about-text-1')}
                </p>

                <p className='mt-6 text-left'>
                    {t('about-text-2')}
                </p>

                <p className='mt-6 text-left'>
                    {t('about-text-3')}
                </p>
            </div>

            <div ref={skillsRef} id="skills" className="mb-36 scroll-mt-24">
                <h1 className="text-transparent animated-gradient bg-clip-text text-5xl font-bold">
                    {t('skills')}
                </h1>

                <div className='grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center mt-10 text-gray-800 dark:text-gray-300'>
                    <div>
                        <FaHtml5 size={size} />
                        <div className='mt-2'>HTML</div>
                    </div>
                    <div>
                        <FaCss3Alt size={size} />
                        <div className='mt-2'>CSS</div>
                    </div>
                    <div>
                        <RiTailwindCssFill size={size} />
                        <div className='mt-2'>Tailwind</div>
                    </div>
                    <div>
                        <SiJavascript size={size} />
                        <div className='mt-2'>Javascript</div>
                    </div>
                    <div>
                        <SiTypescript size={size} />
                        <div className='mt-2'>Typescript</div>
                    </div>
                    <div>
                        <FaReact size={size} />
                        <div className='mt-2'>React</div>
                    </div>
                    <div>
                        <RiNextjsFill size={size} />
                        <div className='mt-2'>Next.js</div>
                    </div>
                    <div>
                        <FaGitAlt size={size} />
                        <div className='mt-2'>Git</div>
                    </div>
                    <div>
                        <FaGithub size={size} />
                        <div className='mt-2'>GitHub</div>
                    </div>
                    <div>
                        <RiSupabaseFill size={size} />
                        <div className='mt-2'>Supabase</div>
                    </div>
                </div>
            </div>

            <div ref={projectsRef} id="projects" className="lg:mb-24 mb-10 scroll-mt-24">
                <h1 className="text-transparent animated-gradient bg-clip-text h-14 text-5xl font-bold">
                    {t('projects')}
                </h1>
                <div className='mt-10'>
                    <ProjectsGrid />
                </div>
            </div>

        </div>
    )
}
