import { Copyright } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className="bottom-0 bg-gray-900 flex justify-center items-center h-20 border-t border-gray-700 text-center gap-2 text-[12px] md:text-[14px]">
      <Copyright size={15} /> 2025 Thusitha Sampath. All rights reserved.
    </div>
  )
}

export default Footer
