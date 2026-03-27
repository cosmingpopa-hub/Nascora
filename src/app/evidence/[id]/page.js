'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleById } from '@/data/evidence-articles';
import { useState } from 'react';

export default function ArticlePage({ params }) {
    const [lang, setLang] = useState('ro'); // Temp: default to 'ro'
  const article = getArticleById(params.id);
    
  const toggleLang = () => setLang(lang === 'ro' ? 'en' : 'ro');

  if (!article) {
    notFound();
  }

  // Simple markdown to HTML converter
  const renderMarkdown = (text) => {
    if (!text) return '';
    
    return text
      .split('\n\n')
      .map((para, i) => {
        // Headers
        if (para.startsWith('### ')) {
          return `<h3 key="${i}" style="font-size: 20px; font-weight: 600; margin: 24px 0 12px; color: #1a1a1a;">${para.replace('### ', '')}</h3>`;
        }
        if (para.startsWith('## ')) {
          return `<h2 key="${i}" style="font-size: 24px; font-weight: 600; margin: 32px 0 16px; color: #1a1a1a;">${para.replace('## ', '')}</h2>`;
        }
        if (para.startsWith('# ')) {
          return `<h1 key="${i}" style="font-size: 28px; font-weight: 700; margin: 32px 0 20px; color: #1a1a1a;">${para.replace('# ', '')}</h1>`;
        }
        
        // Lists
        if (para.startsWith('- ')) {
          const items = para.split('\n').map(line => 
            line.startsWith('- ') ? `<li style="margin: 8px 0;">${line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>` : ''
          ).join('');
          return `<ul key="${i}" style="margin: 16px 0; padding-left: 24px; list-style: disc;">${items}</ul>`;
        }
        
        // Numbered lists
        if (/^\d+\./.test(para)) {
          const items = para.split('\n').map(line => 
            /^\d+\./.test(line) ? `<li style="margin: 8px 0;">${line.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>` : ''
          ).join('');
          return `<ol key="${i}" style="margin: 16px 0; padding-left: 24px;">${items}</ol>`;
        }
        
        // Bold text
        const formatted = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        return `<p key="${i}" style="margin: 12px 0; line-height: 1.7; color: #374151;">${formatted}</p>`;
      })
      .join('');
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {/* Back button + Lang toggle */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px' 
      }}>
        <Link 
          href="/evidence"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          ← {lang === 'ro' ? 'Înapoi' : 'Back'}
        </Link>
        
        <button
          onClick={toggleLang}
          style={{
            padding: '6px 12px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            background: 'white',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          {lang === 'ro' ? 'EN' : 'RO'}
        </button>
      </div>

      {/* Article header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          gap: '12px',
          alignItems: 'center',
          marginBottom: '16px',
          fontSize: '14px',
          color: '#6b7280'
        }}>
          <span style={{ fontSize: '24px' }}>{article.icon}</span>
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.readingTime} min</span>
        </div>
        
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: '12px',
          lineHeight: '1.2'
        }}>
          {article.title[lang]}
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#6b7280',
          marginBottom: '20px',
          lineHeight: '1.5'
        }}>
          {article.subtitle[lang]}
        </p>
        
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          padding: '16px',
          background: '#f9fafb',
          borderLeft: '4px solid #3b82f6',
          borderRadius: '4px',
          lineHeight: '1.6'
        }}>
          {article.summary[lang]}
        </p>
      </div>

      {/* Article content */}
      <div 
        style={{
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#374151'
        }}
        dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content[lang]) }}
      />

      {/* References */}
      {article.references && article.references.length > 0 && (
        <div style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '2px solid #e5e7eb'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            {lang === 'ro' ? 'Referințe' : 'References'}
          </h2>
          <ol style={{
            paddingLeft: '20px',
            margin: 0
          }}>
            {article.references.map((ref, idx) => (
              <li 
                key={idx}
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '8px',
                  lineHeight: '1.5'
                }}
              >
                {ref}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
