"use client";

import { useState, useRef } from "react";

interface HtmlEditorProps {
  value: string;
  onChange: (val: string) => void;
  id?: string;
}

export default function HtmlEditor({ value, onChange, id }: HtmlEditorProps) {
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertTag = (tagOpen: string, tagClose: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    // If no text is selected, just insert empty tags or placeholder
    const innerText = selectedText || "Text";
    const newText = value.substring(0, start) + tagOpen + innerText + tagClose + value.substring(end);
    
    onChange(newText);
    
    // Focus and restore cursor
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tagOpen.length, start + tagOpen.length + innerText.length);
    }, 0);
  };

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-ssg-cyber/20 focus-within:border-ssg-cyber transition-all bg-white">
      <div className="bg-slate-50 border-b border-slate-300 px-3 py-2 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          <button type="button" onClick={() => insertTag("<h2>", "</h2>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Heading 2">H2</button>
          <button type="button" onClick={() => insertTag("<h3>", "</h3>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Heading 3">H3</button>
          <div className="w-px h-5 bg-slate-300 mx-1 my-auto"></div>
          <button type="button" onClick={() => insertTag("<strong>", "</strong>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Bold"><i className="ph ph-text-b"></i></button>
          <button type="button" onClick={() => insertTag("<em>", "</em>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Italic"><i className="ph ph-text-italic"></i></button>
          <div className="w-px h-5 bg-slate-300 mx-1 my-auto"></div>
          <button type="button" onClick={() => insertTag("<p>", "</p>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Paragraph">¶</button>
          <button type="button" onClick={() => insertTag("<ul>\n  <li>", "</li>\n</ul>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Bulleted List"><i className="ph ph-list-bullets"></i></button>
          <button type="button" onClick={() => insertTag("<blockquote>", "</blockquote>")} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Quote"><i className="ph ph-quotes"></i></button>
          <button type="button" onClick={() => insertTag('<a href="https://example.com" target="_blank" rel="noopener noreferrer">', '</a>')} className="px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded transition-colors" title="Link"><i className="ph ph-link"></i></button>
        </div>
        <button 
          type="button" 
          onClick={() => setIsPreview(!isPreview)}
          className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${isPreview ? 'bg-ssg-cyber text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
        >
          {isPreview ? <><i className="ph ph-code"></i> Edit</> : <><i className="ph ph-eye"></i> Preview</>}
        </button>
      </div>
      
      <div className="relative">
        {isPreview ? (
          <div className="p-4 min-h-[300px] max-h-[500px] overflow-y-auto bg-white">
            <div 
              className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:text-ssg-red prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2 prose-h2:mt-10 prose-h3:text-xl prose-a:text-ssg-cyber hover:prose-a:text-ssg-red prose-blockquote:border-l-4 prose-blockquote:border-ssg-cyber prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-slate-700"
              dangerouslySetInnerHTML={{ __html: value || "<p className='text-slate-400 italic'>Nothing to preview...</p>" }}
            />
          </div>
        ) : (
          <textarea
            id={id}
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={12}
            className="w-full p-4 text-sm focus:outline-none text-slate-700 resize-y font-mono leading-relaxed"
            placeholder="<p>Start writing your post content here...</p>"
            required
          />
        )}
      </div>
    </div>
  );
}
