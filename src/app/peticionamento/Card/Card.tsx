'use client'
import { useState } from 'react';
import Image from 'next/image';

interface Section {
    id: string;
    title: string;
    content: React.ReactNode;
}

export default function Card() {

    const initialOpenSections = {
        "acessar-site-peticionamento": true,
        "acessar-minhas-empresas": true,
        "acessar-representantes": true,
        "adicionar-novo-representante": true,
        "criar-nova-peticao": true,
        "consultar-processos": true
    };    


    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(initialOpenSections);



    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const sections: Section[] = [
        {
            id: "acessar-site-peticionamento",
            title: "✔️ Como acessar o Site de Peticionamento Eletrônico",
            content: (
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                        1. Entrar no site de Peticionamento Eletrônico
                    </h3>
                    <p className="text-left">
                        <a href="https://peticionamento.mpap.mp.br/site/"
                           target="_blank"
                           rel="noopener noreferrer nofollow"
                           className="text-blue-600 hover:underline text-base md:text-lg">
                            https://peticionamento.mpap.mp.br/site/
                        </a>
                    </p>
                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/a7482bc5-65e0-431b-b619-072f46e8d73c/e9c9484d-5d41-45ac-99a3-7e0b6e1e74d9.png"
                            alt="Entrar no site de Peticionamento Eletrônico"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            )
        },
        {
            id: "acessar-minhas-empresas",
            title: "✔️ Acessando Minhas Empresas",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700" id="acessar-ministerio-publico1">
                            1. Ir em Minhas Empresas
                        </h3>
                        <p className="text-gray-600">
                            Entrar com a sua conta gov, e clicar em Minhas Empresas
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/dba74685-566d-4d48-a376-d7576cbba526/steps/d426fd29-96ef-407f-b08e-27166d741be6/559afe95-7285-4991-96da-ef82360f8174.png"
                                alt="Entrar no site de Peticionamento Eletrônico"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700" id="acessar-ministerio-publico2">
                            2. Clicar em Minha Empresa
                        </h3>
                        <p className="text-gray-600">
                            Você selecionará a empresa para gerenciar.
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/9ab307a9-54e2-4052-a974-4d7603ab4a1c/steps/c0f28cd5-47e0-4612-9ff4-3e453d37df28/68aed830-d351-4e79-b9ff-8571bb80073b.png"
                                alt="Entrar no site de Peticionamento Eletrônico"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "acessar-representantes",
            title: "✔️ Como acessar os Representantes",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            1. Gerenciar Representantes
                        </h3>
                        <p className="text-gray-600">
                            Para conseguir acessar os representantes, você irá clicar em representantes.
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/a8ece1d7-5c43-403b-8193-652a71a57baf/ece0ed65-1d94-4c4e-97d8-3ba7eac090e1.png"
                                alt="Gerenciar Representantes"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            2. Menu de representantes
                        </h3>
                        <p className="text-gray-600">
                            Irá mostrar seus representantes
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/3ddd43f6-d4a1-43a3-a937-b06151452b9c/fcb6e35b-582d-48fd-a641-cb16fe15b5f8.png"
                                alt="Menu de representantes"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "adicionar-novo-representante",
            title: "✔️ Adicionando um novo Representante",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            1. Como adicionar um representante
                        </h3>
                        <p className="text-gray-600">
                            Você irá clicar em Adicionar Representante
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/85d85524-ed25-4610-85c8-75c26802dcda/0da567a5-89f2-4518-9729-82636a520de6.png"
                                alt="Como adicionar um representante"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            2. Preencher Formulario de Adicionar Representante
                        </h3>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/79ab9bcd-c380-4012-b811-c9be25b14a0d/7a0dcfe1-fcae-4026-aa2e-7cca9ee99128.png"
                                alt="Preencher Formulario de Adicionar Representante"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            3. Clicar em Enviar para Adicionar esse Representante
                        </h3>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/ff271675-dab0-426c-bf29-832d8e60e5c3/bad45e0d-c41f-4227-9939-4c31970da97b.png"
                                alt="Clicar em Enviar para Adicionar esse Representante"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "criar-nova-peticao",
            title: "✔️ Como criar uma NOVA PETIÇÃO",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            1. Irá clicar em Petições
                        </h3>
                        <p className="text-gray-600">
                            Para criar uma nova petição, você irá na barra de navegação e clicar em petições
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/c9f99aff-7ac7-4c2d-9e49-056ef8bc55d5/c46f595d-d2f1-49b6-b622-4cfac03c6329.png"
                                alt="Irá clicar em Petições"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            2. Clicar na opção NOVA PETIÇÃO
                        </h3>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/277aca66-8ea7-498f-b7e9-a8fc1a4ec196/e823741d-9e7d-459f-8e34-a37bbbd43788.png"
                                alt="Clicar na opção NOVA PETIÇÃO"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            3. Preencher o formulario de nova petição
                        </h3>
                        <p className="text-gray-600">
                            Aqui você irá preencher o formulário da petição, colocando as informações necessárias
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/e1c8df5d-23de-48c7-b022-1bb5115ddede/830884b0-0762-4dc8-8ac2-a3948a188736.png"
                                alt="Preencher o formulario de nova petição"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "consultar-processos",
            title: "✔️ Como consultar seus Processos",
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            1. Consultar Processos
                        </h3>
                        <p className="text-gray-600">
                            Para consultar processos, você terá que apertar na opção Inicio, que irá redirecionar, para a pagina inicial
                        </p>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/0e62b7ed-e08a-4afb-86eb-a82ca8ea44b8/a80e838b-f1a4-4510-8322-97b75141f4ff.png"
                                alt="Consultar Processos"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                            2. Menu Inicial
                        </h3>
                        <p className="text-gray-600">
                            Ao voltar para o menu Inicial, você terá acesso a todas as abas de informações de suas petições
                        </p>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li>Meus Processos Administrativos</li>
                            <li>Minhas Petições</li>
                            <li>Minhas Incidentais</li>
                            <li>Assinaturas Pendentes</li>
                        </ul>
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src="https://images.tango.us/workflows/0057d688-bfd9-4bcd-b498-e9927b8ae1e3/steps/eba05961-25e0-45b9-8240-4ce4662d3e8b/87b7a378-1478-4b48-9453-b86921476592.png"
                                alt="Menu Inicial"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-3xl mx-auto px-2 sm:px-4 py-8">
            {sections.map((section) => (
                <div key={section.id} className="mt-6 md:mt-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <button
                            type="button"
                            className="w-full text-left p-4 md:p-6 focus:outline-none"
                            onClick={() => toggleSection(section.id)}
                        >
                            <h2 className="text-xl md:text-3xl font-bold text-gray-800 flex items-center">
                                <svg
                                    className={`w-5 h-5 md:w-6 md:h-6 mr-2 transition-transform duration-200 ${
                                        openSections[section.id] ? 'rotate-90' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                                {section.title}
                            </h2>
                        </button>
                        {openSections[section.id] && (
                            <div className="p-4 md:p-6 border-t border-gray-200">
                                {section.content}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}