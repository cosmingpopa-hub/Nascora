'use client';
import { useState } from 'react';
import Link from 'next/link';
import { evidenceArticles, getCategories } from '@/data/evidence-articles';
import { useLang } from '@/lib/lang';

export default function EvidenceLibraryPage() {
  const { lang } = useLang();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = getCategories();
  const filteredArticles = selectedCategory === 'all' 
    ? evidenceArticles 
    : evidenceArticles.filter(a => a.category === selectedCategory);

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '600', 
          marginBottom: '12px',
          color: '#1a1a1a'
        }}>
          {lang === 'ro' ? '📚 Biblioteca de Evidență' : '📚 Evidence Library'}
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {lang === 'ro' 
            ? 'Articole științifice bazate pe studii peer-reviewed despre siguranța în sarcină'
            : 'Scientific articles based on peer-reviewed studies about pregnancy safety'}
        </p>
      </div>

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '40px' 
      }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            background: selectedCategory === 'all' ? '#2563eb' : '#f1f5f9',
            color: selectedCategory === 'all' ? 'white' : '#475569',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {lang === 'ro' ? 'Toate' : 'All'}
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              background: selectedCategory === cat ? '#2563eb' : '#f1f5f9',
              color: selectedCategory === cat ? 'white' : '#475569',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {filteredArticles.map(article => (
          <Link 
            key={article.id} 
            href={`/evidence/${article.id}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              {/* Icon */}
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                {article.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '8px',
                lineHeight: '1.3'
              }}>
                {article.title[lang]}
              </h3>
              
              {/* Subtitle */}
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                marginBottom: '12px',
                lineHeight: '1.5'
              }}>
                {article.subtitle[lang]}
              </p>
              
              {/* Summary */}
              <p style={{
                fontSize: '14px',
                color: '#475569',
                marginBottom: '16px',
                lineHeight: '1.6',
                flex: 1
              }}>
                {article.summary[lang]}
              </p>
              
              {/* Meta */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid #f1f5f9',
                fontSize: '12px',
                color: '#94a3b8'
              }}>
                <span>{article.readingTime} min</span>
                <span style={{
                  background: '#f8fafc',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '500'
                }}>
                  {article.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No results */}
      {filteredArticles.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          color: '#94a3b8' 
        }}>
          {lang === 'ro' ? 'Niciun articol găsit' : 'No articles found'}
        </div>
      )}
    </div>
  );
}
