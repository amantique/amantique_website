export type ContactData = {
    title: string;
    description: string;
    email: { href: string; label: string };
    phone: { href: string; label: string };
    socials: { href: string; src: string; alt: string }[];
};