"use client";

export default function Footer() {
    return (
        <footer className="text-white py-4 bg-gray-950">
            <div className="container mx-auto text-center">
                <div className="mt-2 flex justify-center items-center mb-2">
                    <div className="text-gray-400 mx-2 flex items-center">
                        <p>PHOTO</p>
                        <a 
                            href="https://www.instagram.com/ana_themart/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#F20D01] hover:text-white mx-2"
                        >
                            @ana_themart
                        </a>
                    </div>
                    <div className="text-gray-400 mx-2 flex items-center">
                        <p>VIDÉO</p>
                        <a 
                            href="https://www.instagram.com/fluuuute/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#F20D01] hover:text-white mx-2"
                        >
                            @fluuuute
                        </a>
                    </div>
                    <div className="text-gray-400 mx-2 flex items-center">
                        <p>WEBSITE</p>
                        <a 
                            href="https://pelle-servan.fr/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#F20D01] hover:text-white mx-2"
                        >
                            Pellé Servan
                        </a>
                    </div>
                </div>
                <p>&copy; 2025 AMANTIQUE. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
