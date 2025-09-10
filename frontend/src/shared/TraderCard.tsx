import React from 'react'
import { Button } from './ui/Button'
// import { Button } from './ui/Button'
// import { Button } from './ui/Button'

const TraderCard = () => {
      return (
            <div className='bg-[#2A2D44] space-y-1 p-6 rounded-xl'>
                  <div className='flex items-end  justify-between'>
                        <div className='flex gap-2'>
                              <div className='size-[5rem] rounded-xl bg-white'></div>
                              <div className='flex p-2 flex-col justify-between'>
                                    <h1>Lords Daniel</h1>
                                    <div className='flex *:font-medium gap-10 p-0 text-sm'>
                                          <span className='text-green-600'>+2.34</span>
                                          <span className='text-green-600'>+32.7%</span>
                                          <span className='text-neutral-400/90'>ROI: 8.6%</span>
                                    </div>
                              </div>
                        </div>
                        <div className='py-2'>
                              <Button className='cursor-pointer bg-[#D9D9D91A] px-6'>Low 0%</Button>
                        </div>
                  </div>
                  <div className='flex font-medium gap-16 *:text-sm items-center pt-6 justify-between'>
                        <div className='justify-between flex-1 flex items-end'>
                              <p>4.9/5.0</p>
                              <p>220 contracts</p>
                              <p>216 reviews</p>
                              <p>5 years</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide cursor-pointer lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                              <Button className='p-1 !h-auto px-6 py-2 text-xs rounded-lg bg-[#D9D9D91A] cursor-pointer'>Swing</Button>
                        </div>
                        <Button className='bg-[#D9D9D91A] cursor-pointer'>Smart Contract</Button>
                  </div>
            </div>
      )
}

export default TraderCard