'use client'

import SearchBar from "./componentes/SearchBar";
import ArticleList from "./componentes/ArticleCard";

export default function Home() {
  const handleSearch = (term: string) => {
    // Lógica de busca aqui
    console.log('Buscando por:', term)
  }

  return (
    <div>
      <SearchBar 
        onSearch={handleSearch}
        placeholder="Buscar itens..."
      />
      <ArticleList title="" description="" />
    </div>
  );
}