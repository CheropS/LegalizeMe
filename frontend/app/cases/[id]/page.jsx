"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const CaseDetail = () => {
    const params = useParams();
    const id = params.id;
    const [caseDetail, setCaseDetail] = useState(null);
    const [summary, setSummary] = useState(null);
    const [showSummary, setShowSummary] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [summaryLoading, setSummaryLoading] = useState(false);
    const [summaryError, setSummaryError] = useState(null);

    useEffect(() => {
        fetch(`https://legalizeme.azurewebsites.net/api/cases/${id}`)
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

        if (showSummary) {
            // If summary is already shown, hide it
            setShowSummary(false);
            return;
        }

        const encodedCaseNumber = encodeURIComponent(caseDetail.case_number);
        setSummaryLoading(true);
        setSummaryError(null);

        fetch(`https://legalizeme.azurewebsites.net/api/summarize/${encodedCaseNumber}`)
            .then(response => response.json())
            .then(data => {
                setSummary(data);
                setShowSummary(true); // Show summary once fetched
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
            <div className="min-h-screen bg-white">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex flex-col items-center">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                        <p className="mt-4 text-lg text-gray-700">Loading case details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white">
                <div className="flex items-center justify-center min-h-screen">
                    <p className="text-red-500 text-lg">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="p-6 max-w-4xl mx-auto rounded-lg animate-fadeIn font-montserrat pt-20">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">{caseDetail.case_number}</h2>
                    <button
                        onClick={fetchSummary}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        {showSummary ? "Hide Summary" : "Summarize"}
                    </button>
                </div>
                {summaryLoading && (
                    <div className="flex items-center justify-center py-4">
                        <Loader2 className="w-6 h-6 animate-spin text-blue-500 mr-2" />
                        <p className="text-blue-500">Fetching summary...</p>
                    </div>
                )}
                {summaryError && (
                    <p className="text-red-500 text-center py-4">{summaryError}</p>
                )}
                {showSummary && summary && (
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
        </div>
    );
};

export default CaseDetail; 