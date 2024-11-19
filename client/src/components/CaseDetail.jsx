import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CaseDetail = () => {
    const { id } = useParams();
    const [caseDetail, setCaseDetail] = useState(null);
    const [summary, setSummary] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [summaryError, setSummaryError] = useState(null);

    useEffect(() => {
        fetch(`https://backend-1-ygzf.onrender.com/api/cases/${id}`)
            .then(response => response.json())
            .then(data => {
                setCaseDetail(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching case details:", error);
                setError("Failed to load case details. Please try again later.");
                setLoading(false);
            });
    }, [id]);

    const fetchSummary = () => {
        if (!caseDetail) return;

        const encodedCaseNumber = encodeURIComponent(caseDetail.case_number);
        setSummaryLoading(true);
        setSummaryError(null);

        fetch(`https://backend-1-ygzf.onrender.com/api/summarize/${encodedCaseNumber}`)
            .then(response => response.json())
            .then(data => {
                setSummary(data);
                setSummaryLoading(false);
            })
            .catch(error => {
                console.error("Error fetching summary:", error);
                setSummaryError("Failed to load summary. Please try again later.");
                setSummaryLoading(false);
            });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loader"></div>
                <p className="ml-4 text-lg text-gray-700">Loading case details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white max-w-4xl mx-auto rounded-lg animate-fadeIn font-roboto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{caseDetail.case_number}</h2>
                <button
                    onClick={fetchSummary}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Summarized
                </button>
            </div>
            {summaryLoading && (
                <p className="text-blue-500 text-center">Fetching summary...</p>
            )}
            {summaryError && (
                <p className="text-red-500 text-center">{summaryError}</p>
            )}
            {summary && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Summary</h3>
                    <p className="mt-2 text-gray-700">{summary.summary}</p>
                </div>
            )}
            <div className="mt-6 text-gray-700">
                <h3 className="text-2xl font-semibold">Detailed Information</h3>
                <p className="mt-4 leading-relaxed">{caseDetail.full_text}</p>
            </div>
        </div>
    );
};

export default CaseDetail;
