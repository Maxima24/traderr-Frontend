import { Button } from '@/shared/ui/Button'
import { Search } from 'lucide-react'
import React from 'react'
import TraderCard from "@/shared/TraderCard"
import Container from '@/shared/Container'


export const sortData = ["Performance", "Risk Level", "Experience", "Profit Share Rate"]

const Trader = () => {
      return (
            <Container>
                  <div className='space-y-5 bg-[#1A1D29] sticky top-0 p-4'>
                        <div className='border p-2 bg-[#D9D9D91A]/40 border-[#FFFFFF80]/20 px-3 gap-3 flex rounded-2xl'>
                              <Search className='p-0.5' />
                              <input type="text" className='flex-1 focus:outline-none placeholder:text-sm' placeholder='Search Trader' />
                        </div>
                        <div className='md:flex items-end justify-between'>
                              <div className='space-x-4 flex'>
                                    {sortData.map((_, indx) => (
                                          <Button className='bg-[#D9D9D91A]/80 px-5 rounded-lg cursor-pointer' key={indx}>{_}</Button>
                                    ))
                                    }
                              </div>
                              <button className='text-sm max-md:hidden tracking-wide cursor-pointer'>Sort by</button>
                        </div>
                  </div>
                  <div className='px-4 pt-6 space-y-5'>
                        {
                              new Array(10).fill(null).map((_, indx) => (
                                    <TraderCard key={indx} />
                              ))
                        }
                  </div>
            </Container>
      )
}

export default Trader