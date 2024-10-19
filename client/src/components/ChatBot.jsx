import { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Library to parse CSV files

const ChatBotWithCSV = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    Papa.parse("/path-to-your-faq.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setFaqData(result.data);
      },
    });
  }, []);

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatBotWithCSV;
