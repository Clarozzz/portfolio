
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import { IoMdMail } from "react-icons/io";

export default function Links({ sharedState }: {sharedState: string}) {
    const [activeLink, setActiveLink] = useState('a-about');

    const handleClick = useCallback((id: string) => {
        if (activeLink) {
            const prevActiveLink = document.getElementById(activeLink);
            if (prevActiveLink) {
                prevActiveLink.classList.remove('active');
            }
        }
        const currentLink = document.getElementById(id);
        if (currentLink) {
            currentLink.classList.add('active');
        }
        setActiveLink(id);
    }, [activeLink]);

    const t = useTranslations('language');

    useEffect(() => {
        handleClick(sharedState)
    }, [sharedState, handleClick]);

    return (
        <div className="sticky top-0 max-h-screen w-1/2 py-24 flex flex-col justify-between" >

            <div>
                <h1 className='text-transparent animated-gradient bg-clip-text text-6xl font-bold'>
                    Clarozzz
                </h1>
            </div>

            <div className="flex flex-col text-xl font-medium gap-2">
                <div>
                    <Link
                        id="a-about"
                        href="#about"
                        className={`text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all ${activeLink === 'a-about' ? 'active' : ''} ${activeLink === 'a-about' ? 'dark:active' : ''}`}
                        onClick={() => handleClick('a-about')}
                    >
                        {t('about')}
                    </Link>

                </div>

                <div>
                    <Link
                        id="a-skills"
                        href="#skills"
                        className={`text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all ${activeLink === 'a-skills' ? 'active' : ''} ${activeLink === 'a-skills' ? 'dark:active' : ''}`}
                        onClick={() => handleClick('a-skills')}
                    >
                        {t('skills')}
                    </Link>
                </div>

                <div>
                    <Link
                        id="a-projects"
                        href="#projects"
                        className={`text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all ${activeLink === 'a-projects' ? 'active' : ''} ${activeLink === 'a-projects' ? 'dark:active' : ''}`}
                        onClick={() => handleClick('a-projects')}
                    >
                        {t('projects')}
                    </Link>
                </div>
            </div>

            <div className="flex gap-3">
                <Link className="flex items-center gap-2 border-gradient px-3" href="mailto:jcsdlg49@gmail.com" target="_blank">
                    <IoMdMail className="text-slate-600 dark:text-slate-400 transition-colors" size={30} />
                    jcsdlg49@gmail.com
                </Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-c2 dark:hover:text-c2 transition-colors" href='https://github.com/Clarozzz' target="_blank" aria-label="github"><FaGithub size={30} /></Link>
                <Link className="text-slate-600 dark:text-slate-400 hover:text-c2 dark:hover:text-c2 transition-colors" href='https://linkedin.com/in/cesar-claros-622236312' target="_blank" aria-label="linkedin"><FaLinkedin size={30} /></Link>
            </div>

        </div>
    )
}
