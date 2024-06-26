
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import { LuMoon, LuSun } from "react-icons/lu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslations } from 'next-intl';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme()
    const [isPending, startTransition] = useTransition();
    const router = useRouter()

    const t = useTranslations('language');

    const changeLanguage = (lang: string) => {
        startTransition(() => {
            router.replace(`${lang}`)
        })
    }

    const changeTheme = () => {
        if (resolvedTheme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className="fixed top-0 w-full flex justify-around lg:justify-end lg:pr-24 2xl:pr-60 py-4 bg-inherit z-50">
            <div className="lg:hidden flex align-middle">
                <Sheet>
                    <SheetTrigger aria-label="menu"><IoMenu size={30} /></SheetTrigger>
                    <SheetContent side={"left"}>
                        <div className="flex flex-col gap-4 ml-8 mt-14">
                            <Link
                                href="#about"
                                className='text-2xl text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all'
                            >
                                {t('about')}
                            </Link>

                            <Link
                                href="#skills"
                                className='text-2xl text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all'
                            >
                                {t('skills')}
                            </Link>

                            <Link
                                href="#projects"
                                className='text-2xl text-slate-600 dark:text-slate-400 hover:text-black hover:border-l-black dark:hover:text-white dark:hover:border-l-white hover:pl-6 hover:border-l-2 transition-all'
                            >
                                {t('projects')}
                            </Link>

                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="default" aria-label="languages selector">
                            <Image className="mr-2" src={t('icon')} width={30} height={25} alt={t('alt')} />
                            {t('name')}
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => changeLanguage('es')}>
                            <Image className="mr-2" src="https://flagcdn.com/es.svg" width={30} height={25} alt="Español" />
                            <span>Español</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => changeLanguage('en')}>
                            <Image className="mr-2" src="https://flagcdn.com/gb.svg" width={30} height={25} alt="English" />
                            <span>English</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant='ghost' size='icon' onClick={changeTheme} aria-label="theme selector">
                    <LuSun size={22} className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"></LuSun>
                    <LuMoon size={22} className="absolute rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100"></LuMoon>
                </Button>
            </div>
        </div>
    )
}
