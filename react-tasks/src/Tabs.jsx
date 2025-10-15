import faqData from "./Data/Faq"
import { useState } from "react"
import "./Tabs.css"

export function Tabs() {
  let [activeTabs, setActiveTabs] = useState(0)
  let [activeContent, setActiveContent] = useState(faqData[0])

  function changedata(index) {
    setActiveTabs(index)
    setActiveContent(faqData[index])
  }

  return (
    <div className="tabs-container">
      <ul className="tabs-list">
        {faqData.map((value, i) => (
          <li key={i}>
            <button
              onClick={() => changedata(i)}
              className={activeTabs === i ? "active" : ""}>
              {value.question}
            </button>
          </li>
        ))}
      </ul>

      {activeContent && (
        <div className="tab-content">{activeContent.answer}</div>
      )}
    </div>
  )
}
