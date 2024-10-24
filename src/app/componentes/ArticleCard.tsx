import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  page: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, page }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <div className="text-blue-500 text-2xl mb-4">+</div> {/* Placeholder para o ícone */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={page} className="text-blue-500 hover:underline">Read more →</Link>
    </div>
  );
};

interface ArticleListProps {
  title: string;
  description: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ title, description }) => {
  const articles = [
    {
      title: 'Radar Ambiental',
      description: 'Informações e atualizações sobre o radar ambiental.',
      page: '/radar-ambiental',
    },
    {
      title: 'Peticionamento Eletrônico',
      description: 'Guia completo sobre o processo de peticionamento eletrônico.',
      page: '/peticionamento',
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="flex space-x-4">
          {articles.map((article, index) => (
            <ArticleCard key={index} title={article.title} description={article.description} page={article.page} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;