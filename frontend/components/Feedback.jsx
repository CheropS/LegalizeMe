"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThumbsUp, ThumbsDown, MessageSquare, X } from 'lucide-react'

export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log({ feedback, comment })
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setFeedback(null)
      setComment('')
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Feedback</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-80 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 p-4"
        >
          {submitted ? (
            <div className="text-center text-green-400">
              Thank you for your feedback!
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">Was this helpful?</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setFeedback('positive')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    feedback === 'positive'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-black/20 text-gray-300 hover:bg-black/30'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>Yes</span>
                </button>
                <button
                  onClick={() => setFeedback('negative')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    feedback === 'negative'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-black/20 text-gray-300 hover:bg-black/30'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>No</span>
                </button>
              </div>

              {feedback && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us more about your experience..."
                    className="w-full px-4 py-2 text-sm text-gray-300 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Submit Feedback
                  </button>
                </form>
              )}
            </>
          )}
        </motion.div>
      )}
    </div>
  )
} 