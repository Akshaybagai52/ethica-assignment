// src/components/SentimentAnalysisResult/SentimentAnalysisResult.tsx
import React from 'react';

interface SentimentAnalysisResultProps {
  sentiment: string | null;
}

export const SentimentAnalysisResult: React.FC<SentimentAnalysisResultProps> = ({ sentiment }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Sentiment Analysis Result</h2>
      {sentiment ? (
        <p className="text-lg">{`Sentiment: ${sentiment}`}</p>
      ) : (
        <p className="text-gray-500">No analysis result available</p>
      )}
    </div>
  );
};

 
