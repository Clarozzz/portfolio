
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import Image from "next/image";
import { LuMoon, LuSun } from "react-icons/lu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslations } from 'next-intl';

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
        <div className="fixed top-0 pr-60 w-full flex justify-end p-4 bg-inherit">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="default" aria-label="languages selector">
                        <Image className="mr-2" src={t('icon')} width={30} height={25} alt={t('name')} />
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
    )
}
