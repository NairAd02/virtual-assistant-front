"use client"

import React from 'react'
import { motion } from "framer-motion"

export default function LoadingChat() {
  return (
    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
      <span className="text-sm font-medium">El Asistente está respondiendo</span>
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}