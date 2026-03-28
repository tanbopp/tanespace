import { useState } from 'react'

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={`ts-accordion ${className}`}>
      {items.map((item, i) => (
        <div key={i} className={`ts-accordion__item${openIndex === i ? ' open' : ''}`}>
          <button className="ts-accordion__header" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
            {item.title}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6l4 4 4-4"/></svg>
          </button>
          <div className="ts-accordion__body">
            <div className="ts-accordion__content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
