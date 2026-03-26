'use client';
import { useState } from 'react';
import Link from 'next/link';
import { evidenceArticles, getCategories } from '@/data/evidence-articles';
import { useLang } from '@/lib/lang';

export default function EvidenceLibraryPage() {
  const [lang, setLang] = useState('ro'); // Temp: default to 'ro'
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredArticles = selectedCategory === 'all'
    ? evidenceArticles
    : evidenceArticles.filter(a => a.category === selectedCategory);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
        {lang === 'ro' ? '📚 Biblioteca de Evidențe' : '📚 Evidence Library'}
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
        {lang === 'ro' 
          ? 'Articole medicale bazate pe dovezi despre teratologie și sănătatea femeii'
          : 'Evidence-based medical articles on teratology and women\'s health'}
      </p>

      {/* Category Filter */}
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '10px 20px',
            margin: '0 10px 10px 0',
            border: selectedCategory === 'all' ? '2px solid #0066cc' : '1px solid #ddd',
            borderRadius: '20px',
            background: selectedCategory === 'all' ? '#e6f2ff' : 'white',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          {lang === 'ro' ? 'Toate' : 'All'}
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              padding: '10px 20px',
              margin: '0 10px 10px 0',
              border: selectedCategory === cat.id ? '2px solid #0066cc' : '1px solid #ddd',
              borderRadius: '20px',
              background: selectedCategory === cat.id ? '#e6f2ff' : 'white',
              cursor: 'pointer',
              fontSize: '0.95rem'
            }}
          >
            {cat.emoji} {cat.label[lang]}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px'
      }}>
        {filteredArticles.map(article => (
          <Link
            key={article.id}
            href={`/evidence/${article.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              background: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '12px'
              }}>
                {article.emoji}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '12px',
                color: '#333',
                lineHeight: '1.4'
              }}>
                {article.title[lang]}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '16px',
                flex: 1
              }}>
                {article.summary[lang]}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.85rem',
                color: '#999',
                marginTop: 'auto'
              }}>
                <span>⏱️ {article.readTime} min</span>
                <span style={{
                  background: '#f0f0f0',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem'
                }}>
                  {categories.find(c => c.id === article.category)?.label[lang]}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '3rem' }}>
          {lang === 'ro' ? 'Nu am găsit articole în această categorie.' : 'No articles found in this category.'}
        </p>
      )}
    </div>
  );
}
